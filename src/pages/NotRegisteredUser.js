import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../containers/RegisterMutation'
import { LoginMutation } from '../containers/LoginMutation'

export default () => {
  const { activateAuth } = useContext(Context)
  return (
    <Layout title='Welcome human' subtitle='Por favor registrate o inicia sesión para ver las maravillosas fotos de los animales no humanos'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data
                  activateAuth(signup)
                })
            }

            const errorMsg = error && 'El usuario ya existe, verifica...'

            return (
              <UserForm
                onSubmit={onSubmit}
                title='Registrarse'
                error={errorMsg}
                disabled={loading} />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables })
                .then(({ data }) => {
                  const { login } = data
                  activateAuth(login)
                })
            }

            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe'

            return (
              <UserForm
                onSubmit={onSubmit}
                title='Iniciar sesión'
                error={errorMsg}
                disabled={loading} />
            )
          }
        }
      </LoginMutation>

    </Layout>

  )
}
