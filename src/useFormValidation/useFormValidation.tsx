import React, { useState, useEffect, FormEvent } from 'react'

interface iInitState {
  email: string,
  password: string,
}

interface iReturn {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleChange: (event: FormEvent<HTMLInputElement>) => void
  handleBlur: (event: FormEvent<HTMLInputElement>) => void
  values: { email: string, password: string }
  errors: { email?: string, password?: string }
  isSubmitting: boolean
}

type iValidateAuth = (values: { email?: string, password?: string }) => { email?: string, password?: string }

function useFormValidation(initState: iInitState, validateAuth: iValidateAuth): iReturn {
  const [ values, setValues ] = useState(initState)
  const [ errors, setErrors ] = useState({})
  const [ isSubmitting, setSubmitting ] = useState(false)

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log(`submit! email: '${ values.email }' password: '${ values.password }'`)
        setSubmitting(false)
      } else {
        setSubmitting(false)
      }
    }
  }, [ errors ])

  function handleChange(event: FormEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }

  function handleBlur() {
    const validateErrors = validateAuth(values)
    setErrors(validateErrors)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validateAuthErrors = validateAuth(values)
    setErrors(validateAuthErrors)
    setSubmitting(true)

  }

  return { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting }
}

export default useFormValidation
