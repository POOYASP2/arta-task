import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'
export default function AppRoutes() {
  const isAuthenticated = localStorage.getItem('items') !== undefined

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}
