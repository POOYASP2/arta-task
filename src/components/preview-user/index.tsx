import { useState } from 'react'
import { Modal } from '../index'
import type { user } from '../../types'
import './styles.css'

export const PreviewUser = ({ id }: { id: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [user, _] = useState(
    JSON.parse(localStorage.getItem('users') || '[]').filter(
      (user: user) => user.id === id
    )[0]
  )

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
        className='user-table__actions--show'
      >
        نمایش اطلاعات
      </button>
      <Modal isOpen={isOpen}>
        <h4>اطلاعات</h4>

        <div>
          <p>
            نام: <span>{user.name}</span>
          </p>
          <p>
            نام خانوادگی: <span>{user.lastName}</span>
          </p>
        </div>
        <button className='close-Modal-button' onClick={() => setIsOpen(false)}>
          بستن
        </button>
      </Modal>
    </>
  )
}
