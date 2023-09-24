import './styles.css'
import { useState } from 'react'
import { loginUser } from '../../api'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = {
      email,
      password,
    }
    loginUser(user)
      .then((res) => {
        localStorage.setItem('token', JSON.stringify(res.token))
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <main className='login-page'>
      <section>
        <div>
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
          <div className='hint-wrapper'>
            <small className='hint'>
              برای ورود از ایمیل: eve.holt@reqres.in استفاده بکنید.
            </small>
            <small>برای رمز عبور از : cityslicka استفاده بکنید.</small>
          </div>
        </div>
        <LoadingAnimation />
      </section>
    </main>
  )
}
