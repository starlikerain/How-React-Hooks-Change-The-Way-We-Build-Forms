import react from 'react'

interface iValues {
  email?: string
  password?: string
}

export default function validateAuth(values: iValues): iValues {
  let errors: { email?: string, password?: string } = {}

  if (!values.email) {
    errors.email = 'email is required'
  } else if (
    !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(values.email)
  ) {
    errors.email = 'invalid email'
  }

  if (!values.password) {
    errors.password = 'password is required'
  } else if (values.password.length < 6) {
    errors.password = 'password as least 6 character'
  }

  return errors
}
