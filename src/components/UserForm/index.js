import React, { Fragment } from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton'
import PropTypes from 'prop-types'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit({ email: email.value, password: password.value })
  }

  return (
    <Fragment>
      <Form onSubmit={handleSubmit} disabled={disabled}>
        <Title>{title}</Title>
        <Input
          placeholder='Email' {...email} disabled={disabled} />

        <Input
          placeholder='Password' type='password' {...password} disabled={disabled} />

        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  )
}

UserForm.propTypes = {
  onSubmit: PropTypes.func,
  title: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}
