import ReactDOM from 'react-dom'
import './styles.css'

interface ModalProps {
  isOpen: boolean
  children: React.ReactNode
}

export const Modal = ({ isOpen, children }: ModalProps) => {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className='modal-overlay'>
      <div className='modal'>{children}</div>
    </div>,
    document.body
  )
}
