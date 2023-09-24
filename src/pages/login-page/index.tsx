import './styles.css'
import { useState } from 'react'
import { loginUser } from '../../api'
export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = {
      email,
      password,
    }
    loginUser(user)
      .then((res) => {
        console.log(res)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className='login-page'>
      <section>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>ورود</h1>

          <div className='form-group'>
            <label htmlFor='email'>ایمیل:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='password'>رمزعبور:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='password'
            />
          </div>

          <button type='submit'>ورود</button>
        </form>
      </section>
    </main>
  )
}
