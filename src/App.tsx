import React from 'react'
import './App.css'
import useFormValidation from './useFormValidation/useFormValidation'
import validateAuth from './validateAuth/validateAuth'


const INIT_STATE = {
  email: '',
  password: '',
}

const App: React.FC = () => {

  let { handleSubmit, handleChange, handleBlur, values, errors, isSubmitting } = useFormValidation(INIT_STATE, validateAuth)

  return (
    <div className="App">
      <h1>Registry here</h1>
      <form onSubmit={ handleSubmit }>
        <input
          onChange={ handleChange }
          value={ values.email }
          onBlur={ handleBlur }
          className={ errors.email && 'input-error' }
          name='email'
          autoComplete='off'
          placeholder='your email address'
        />
        { errors.email && <p>{ errors.email }</p> }

        <input
          onChange={ handleChange }
          value={ values.password }
          onBlur={ handleBlur }
          className={ errors.password && 'input-error' }
          name='password'
          type="password"
          placeholder='choose a safe password'
        />
        { errors.password && <p>{ errors.password }</p> }

        <button disabled={ isSubmitting }
        >
          submit
        </button>
      </form>
    </div>
  )
}

export default App
