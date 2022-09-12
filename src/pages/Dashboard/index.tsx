import Cookies from 'js-cookie'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import { api } from '../../services/apiClient'

export function Dashboard() {
  const { authState, signOut } = useAuth()
  const [response, setResponse] = useState<any>()
  const cookies = Cookies.get()

  async function handleMe() {
    try {
      const { data } = await api.get('/me', {
        headers: {
          Authorization: `Bearer ${cookies['@coffee-delivery-v1.0.0:token']}`
        }
      })
      setResponse(data)
    } catch (error) {
      setResponse('')
    }
  }

  if (!authState.isAuthenticated) {
    return null
  }

  return (
    <div>
      <span>{JSON.stringify(authState, null, 2)}</span>
      <span>{response && JSON.stringify(response)}</span>
      <button onClick={handleMe}>me</button>
      <button onClick={signOut}>Sair</button>
    </div>
  )
}
