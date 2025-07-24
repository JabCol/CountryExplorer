import '../css/modal.css'
import { CloseIcon } from './Icons'

export function Modal({ isOpen, status, children }) {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => status((prev) => !prev)}>
              <CloseIcon />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
