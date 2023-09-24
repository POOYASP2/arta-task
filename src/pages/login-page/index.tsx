import './styles.css'
export const LoginPage = () => (
  <main className='login-page'>
    <section>
      <form className='login-form'>
        <h1>ورود</h1>

        <div className='form-group'>
          <label htmlFor='email'>ایمیل:</label>
          <input type='email' id='email' />
        </div>

        <div className='form-group'>
          <label htmlFor='password'>رمزعبور:</label>
          <input type='password' id='password' />
        </div>

        <button type='submit'>ورود</button>
      </form>
    </section>
  </main>
)
