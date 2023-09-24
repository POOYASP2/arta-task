import { useState } from 'react'
import { Modal } from '../index'
import type { user } from '../../types'
import './styles.css'
interface AddNewUserProps {
  updateLocal(): void
  id: string
}
export const RemoveUser = ({ updateLocal, id }: AddNewUserProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const removeUserHandler = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    localStorage.setItem(
      'users',
      JSON.stringify(users.filter((user: user) => user.id !== id))
    )
    setIsOpen(false)
    updateLocal()
  }
  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
        }}
        className='user-table__actions--remove'
      >
        حذف
      </button>
      <Modal isOpen={isOpen}>
        <h4>یوزر مورد نظر را حذف میکنید؟</h4>
        <div className='button-wrapper'>
          <button onClick={removeUserHandler} className='confrim-modal-button'>
            تایید
          </button>
          <button
            className='close-Modal-button'
            onClick={() => setIsOpen(false)}
          >
            انصراف
          </button>
        </div>
      </Modal>
    </>
  )
}
