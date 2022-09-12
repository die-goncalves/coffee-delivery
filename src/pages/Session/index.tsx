import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAuth } from '../../hooks/useAuth'
import { toast } from 'react-toastify'
import { Eye, EyeSlash } from 'phosphor-react'
import {
  InputStyle,
  InputAndErrors,
  SessionCard,
  SessionContainer,
  SessionForm,
  ErrorStyle,
  RegisterContainer,
  RegisterLink,
  EyeContainer
} from './styles'

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

export function Session() {
  const navigate = useNavigate()
  const location = useLocation()
  const [eyeStatus, setEyeStatus] = useState<boolean>()
  const { signIn } = useAuth()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, dirtyFields }
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
      await signIn(data)
      toast.success('Sessão iniciada!', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      reset()
      if (location.state) navigate(-1)
      navigate('/')
    } catch (error) {
      const typedError = error as Error
      toast.error(typedError.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    }
  }

  return (
    <SessionContainer>
      <SessionCard>
        <h1>Iniciar sessão</h1>
        <SessionForm onSubmit={handleSubmit(onSubmit)}>
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

          <input
            disabled={isSubmitting}
            type="submit"
            value={isSubmitting ? 'Entrando' : 'Entrar'}
          />
        </SessionForm>

        <RegisterContainer>
          <p>ou</p>
          <RegisterLink to="/account/register">Criar conta</RegisterLink>
        </RegisterContainer>
      </SessionCard>
    </SessionContainer>
  )
}
