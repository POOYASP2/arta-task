import { UsersList } from '../../components'

import './styles.css'
export const HomePage = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }

  return (
    <main>
      <UsersList />
      <button onClick={handleLogout} className='exit-button'>
        خروج از حساب کاربری
      </button>
    </main>
  )
}
