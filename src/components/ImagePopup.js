import closeBtn from '../images/close-btn.svg'

function ImagePopup() {
  return (
    <div className="popup popup-card">
      <div className="popup__wrapper">
        <button type="button" className="popup__close-card popup__close-button">
          <img className="popup__image" src={closeBtn} alt="Закрыть" />
        </button>

        <div className="popup__form-card">
          <img className="popup__modal-image" src="#" alt="" />
          <h2 className="popup__modal-title"></h2>
        </div>
      </div>
    </div>
  )
}


export default ImagePopup;
