import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import { HomePage, LoginPage } from '../pages'
import { ReactNode } from 'react'
const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem('token') !== null
  if (isAuthenticated) {
    return children
  }
  return <Navigate to='/login' />
}
const PublicRoute = ({ children }: { children: ReactNode }) => {
  const isAuthenticated = localStorage.getItem('token') === null
  if (isAuthenticated) {
    return children
  }
  return <Navigate to='/' />
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route></Route>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
