import "./style.scss"

interface ModalProps {
  children: React.ReactNode
  close: () => void
}

const Modal = ({ children, close }: ModalProps) => {
  return (
    <div className="modal">
      <div className="modal__backdrop" onClick={close}></div>
      <div className="modal__paper">
        <div className="modal__container">{children}</div>
        <img
          className="modal__close"
          src="/static/images/close.svg"
          alt="close-icon"
          onClick={close}
        />
      </div>
    </div>
  )
}

export default Modal
