import closeBtn from '../images/close-btn.svg'

function PopupWithForm(props) {
  return (
    <div className={`popup popup-${props.name}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form className="popup__form" name={`popup-${props.name}`} >
          {props.children}

          {/* <input id="input-name" className="popup__input popup__input_type_name" type="text" name="inputName" required placeholder="Имя" minlength="2" maxlength="40" />
          <span id="input-name-error"></span>
          <input id="input-job" className="popup__input popup__input_type_job" type="text" name="inputJob" required placeholder="Работа" minlength="2" maxlength="200" />
          <span id="input-job-error"></span>
          <button className="popup__button" type="submit">Сохранить</button> */}
        </form>
        <button type="button" className="popup__close-button">
          <img className="popup__image" src={closeBtn} alt="Закрыть" />
        </button>
      </div>
    </div>
  )

}


export default PopupWithForm;
