import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'
export default function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
  )
}
