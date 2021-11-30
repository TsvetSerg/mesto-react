import React from "react";
import PopupWithForm from './PopupWithForm'


function AddPlacePopup(props) {

  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateCard({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }


  return (
    <PopupWithForm
    isOpen = {props.isOpen}
    onClose = {props.onClose}
    onSubmit = {handleSubmit}
    title = {'Новое место'}
    buttonText = {'Создать'}
    children = {(
      <>
        <input ref={nameRef} id="input-title" className="popup__input popup__input_image_name" type="text" name="inputTitle" placeholder="Название" minLength="2" maxLength="30" required />
        <span id="input-title-error"></span>
        <input ref={linkRef} id="input-link" className="popup__input popup__input_link" type="url" name="inputImg" required placeholder="Ссылка на картинку" />
        <span id="input-link-error"></span>
      </>
    )}
  />
  )
}


export default AddPlacePopup;
