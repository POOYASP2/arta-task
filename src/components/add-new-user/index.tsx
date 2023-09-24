import { useState, useEffect } from 'react'
import { Modal } from '../index'
import './styles.css'
interface AddNewUserProps {
  updateLocal(): void
}
export const AddNewUser = ({ updateLocal }: AddNewUserProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [values, setValues] = useState({
    name: '',
    lastName: '',
    nationalNumber: '',
    email: '',
    phoneNumber: '',
    address: '',
  })
  useEffect(() => {
    setValues({
      name: '',
      lastName: '',
      nationalNumber: '',
      email: '',
      phoneNumber: '',
      address: '',
    })
  }, [isOpen])
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    users.push({
      ...values,
      id: crypto.randomUUID(),
      picture: '/images/profile.jpg',
    })
    localStorage.setItem('users', JSON.stringify(users))
    setIsOpen(false)
    updateLocal()
  }
  return (
    <>
      <button onClick={() => setIsOpen(true)} className='button-add-new-user'>
        افزودن کاربر جدید
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
          <button type='submit'>افزودن کاربر</button>
        </form>
        <button className='close-Modal-button' onClick={() => setIsOpen(false)}>
          انصراف
        </button>
      </Modal>
    </>
  )
}
