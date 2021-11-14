// import logo from '../logo.svg';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import React from "react";

function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();


  function openAddPopup() {
    setIsAddPlacePopupOpen(true)
  }
  function openProfilePopup() {
    setIsEditProfilePopupOpen(true)
  }
  function openAvatarPopup() {
    setIsEditAvatarPopupOpen(true)
  }
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false)
    setIsEditProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }


  return (
<div className="page">

<Header />
<Main
  onAddPlace  = {openAddPopup}
  onEditProfile = {openProfilePopup}
  onEditAvatar = {openAvatarPopup}
/>
<Footer />

<PopupWithForm
  isOpen = {isAddPlacePopupOpen}
  onClose = {closeAllPopups}
  title = {'Новое место'}
  buttonText = {'Создать'}
  children = {(
    <>
      <input id="input-title" className="popup__input popup__input_image_name" type="text" name="inputTitle" placeholder="Название" minLength="2" maxLength="30" required />
      <span id="input-title-error"></span>
      <input id="input-link" className="popup__input popup__input_link" type="url" name="inputImg" required placeholder="Ссылка на картинку" />
      <span id="input-link-error"></span>
    </>
  )}
/>
<PopupWithForm
  isOpen = {isEditProfilePopupOpen}
  onClose = {closeAllPopups}
  title = {'Редактировать профиль'}
  buttonText = {'Сохранить'}
  children = {(
    <>
      <input id="input-name" className="popup__input popup__input_type_name" type="text" name="inputName" required placeholder="Имя" minLength="2" maxLength="40" />
      <span id="input-name-error"></span>
      <input id="input-job" className="popup__input popup__input_type_job" type="text" name="inputJob" required placeholder="Работа" minLength="2" maxLength="200" />
      <span id="input-job-error"></span>
    </>
  )}
/>
<PopupWithForm
  isOpen = {isEditAvatarPopupOpen}
  onClose = {closeAllPopups}
  title = {'Обновить аватар'}
  buttonText = {'Сохранить'}
  children = {(
    <>
      <input id="input-avatar" className="popup__input popup__input_link" type="url" name="avatarInpur" required placeholder="Ссылка на аватар" />
      <span id="input-avatar-error"></span>
    </>
  )}
/>

{/* <div className="popup popup-edit">
  <div className="popup__container">
    <h2 className="popup__title">Редактировать профиль</h2>
    <form className="popup__form" name="popup-edit" >
      <input id="input-name" className="popup__input popup__input_type_name" type="text" name="inputName" required placeholder="Имя" minlength="2" maxlength="40" />
      <span id="input-name-error"></span>
      <input id="input-job" className="popup__input popup__input_type_job" type="text" name="inputJob" required placeholder="Работа" minlength="2" maxlength="200" />
      <span id="input-job-error"></span>
      <button className="popup__button" type="submit">Сохранить</button>
    </form>
    <button type="button" className="popup__close-button">
      <img className="popup__image" src="<%=require('./images/close-btn.svg')%>" alt="Закрыть" />
    </button>
  </div>
</div>

<div className="popup popup-add">
  <div className="popup__container">
    <h2 className="popup__title">Новое место</h2>
    <form className="popup__form" name="popup-add">
      <input id="input-title" className="popup__input popup__input_image_name" type="text" name="inputTitle" placeholder="Название" minlength="2" maxlength="30" required />
      <span id="input-title-error"></span>
      <input id="input-link" className="popup__input popup__input_link" type="url" name="inputImg" required placeholder="Ссылка на картинку" />
      <span id="input-link-error"></span>
      <button className="popup__button" type="submit">Создать</button>
    </form>
    <button type="button" className="popup__close-button">
      <img className="popup__image" src="<%=require('./images/close-btn.svg')%>" alt="Закрыть" />
    </button>
  </div>
</div>

<div className="popup popup-delet">
  <div className="popup__container">
    <h2 className="popup__title">Вы уверены?</h2>
      <button className="popup__button" type="button">Да</button>
    <button type="button" className="popup__close-button">
      <img className="popup__image" src="<%=require('./images/close-btn.svg')%>" alt="Закрыть" />
    </button>
  </div>
</div>

<div className="popup popup-avatar">
  <div className="popup__container">
    <h2 className="popup__title">Обновить аватар</h2>
    <form className="popup__form" name="popup-avatar">
      <input id="input-avatar" className="popup__input popup__input_link" type="url" name="avatarInpur" required placeholder="Ссылка на аватар" />
      <span id="input-avatar-error"></span>
      <button className="popup__button" type="submit">Сохранить</button>
    </form>
    <button type="button" className="popup__close-button">
      <img className="popup__image" src="<%=require('./images/close-btn.svg')%>" alt="Закрыть" />
    </button>
  </div>
</div>




<template className="template-data">
  <article className="element">

      <div className="element__delete"></div>
      <img className="element__image" src="#" alt="" />
      <div className="element__rectangle">
        <h2 className="element__title"></h2>
        <div className="element__wrapper">
          <div className="element__like"></div>
          <p className="element__liked_num">0</p>
        </div>
      </div>
  </article>
</template>

<div className="popup popup-card">
  <div className="popup__wrapper">
    <button type="button" className="popup__close-card popup__close-button">
      <img className="popup__image" src="<%=require('./images/close-btn.svg')%>" alt="Закрыть" />
    </button>

    <div className="popup__form-card">
      <img className="popup__modal-image" src="#" alt="" />
      <h2 className="popup__modal-title"></h2>
    </div>
  </div>
</div> */}

</div>
  );
}

export default App;
