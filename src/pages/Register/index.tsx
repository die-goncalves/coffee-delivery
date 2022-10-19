import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { Eye, EyeSlash } from 'phosphor-react'
import {
  InputStyle,
  InputAndErrors,
  RegisterCard,
  RegisterContainer,
  RegisterForm,
  ErrorStyle,
  SessionContainer,
  SessionLink,
  EyeContainer
} from './styles'
import { AxiosError } from 'axios'

type FormInputs = {
  email: string
  password: string
}

const schema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Campo obrigatório' })
    .email('Deve ser um e-mail válido.'),
  password: zod.string().min(1, { message: 'Campo obrigatório' })
})

export function Register() {
  const navigate = useNavigate()
  const [eyeStatus, setEyeStatus] = useState<boolean>()
  const { signUp } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields }
  } = useForm<FormInputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const revealEye = dirtyFields.password
  function handleEyeStatus() {
    setEyeStatus(prevState => !prevState)
  }

  const onSubmit = async (data: FormInputs) => {
    try {
      await signUp(data)
      toast.success('Conta criada! Agora só falta pedir um cafezinho 😋')
      reset()
      navigate('/account/dashboard')
    } catch (error) {
      if (error instanceof AxiosError) {
        const typedError = error as AxiosError<{
          error: {
            name: string
            message: string
          }
        }>
        toast.error(typedError.response?.data.error.message)
      } else {
        console.log({ error })
      }
    }
  }

  return (
    <RegisterContainer>
      <RegisterCard>
        <h1>Criar conta</h1>
        <RegisterForm onSubmit={handleSubmit(onSubmit)}>
          <InputAndErrors>
            <InputStyle
              type="text"
              placeholder="E-mail"
              hasError={!!errors.email}
              {...register('email')}
            />
            {errors.email && (
              <ErrorStyle role="alert">{errors.email?.message}</ErrorStyle>
            )}
          </InputAndErrors>

          <InputAndErrors>
            <InputStyle
              type={eyeStatus ? 'text' : 'password'}
              placeholder="Senha"
              hasError={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <ErrorStyle role="alert">{errors.password?.message}</ErrorStyle>
            )}
            {revealEye && (
              <EyeContainer type="button" onClick={handleEyeStatus}>
                {!eyeStatus ? (
                  <Eye id="pass-eye" weight="fill" />
                ) : (
                  <EyeSlash id="pass-eye-slash" weight="fill" />
                )}
              </EyeContainer>
            )}
          </InputAndErrors>

          <input type="submit" value="Criar conta" />
        </RegisterForm>

        <SessionContainer>
          <p>ou</p>
          <SessionLink to="/account/session">Iniciar sessão</SessionLink>
        </SessionContainer>
      </RegisterCard>
    </RegisterContainer>
  )
}
