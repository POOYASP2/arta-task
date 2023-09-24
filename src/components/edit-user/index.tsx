import { useState } from 'react'
import { Modal } from '../index'
import type { user } from '../../types'
import './styles.css'
interface editUserProps {
  updateLocal(): void
  id: string
}
export const EditUser = ({ updateLocal, id }: editUserProps) => {
  const [user, _] = useState(
    JSON.parse(localStorage.getItem('users') || '[]').filter(
      (user: user) => user.id === id
    )[0]
  )

  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState(user)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    users[users.findIndex((user: user) => user.id === id)] = {
      ...values,
      id: crypto.randomUUID(),
      picture: '/images/profile.jpg',
    }
    localStorage.setItem('users', JSON.stringify(users))
    setIsOpen(false)
    updateLocal()
  }
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className='user-table__actions--edit'
      >
        اصلاح
      </button>
      <Modal isOpen={isOpen}>
        <form className='form-add-new-user' onSubmit={handleSubmit}>
          <label>نام:</label>
          <input
            name='name'
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <label>نام خانوادگی:</label>
          <input
            name='lastName'
            value={values.lastName}
            onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          />
          <label>کد ملی</label>
          <input
            name='nationalNumber'
            value={values.nationalNumber}
            onChange={(e) =>
              setValues({ ...values, nationalNumber: e.target.value })
            }
          />
          <label>ایمیل</label>
          <input
            name='email'
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <label>شماره همراه</label>
          <input
            name='phoneNumber'
            value={values.phoneNumber}
            onChange={(e) =>
              setValues({ ...values, phoneNumber: e.target.value })
            }
          />
          <label>آدرس</label>
          <input
            name='address'
            value={values.address}
            onChange={(e) => setValues({ ...values, address: e.target.value })}
          />
          <button type='submit'>اصلاح کاربر</button>
        </form>
        <button className='close-Modal-button' onClick={() => setIsOpen(false)}>
          انصراف
        </button>
      </Modal>
    </>
  )
}
