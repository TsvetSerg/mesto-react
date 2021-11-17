// import logo from '../logo.svg';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import React from "react";
import ImagePopup from './ImagePopup'

function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});


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
    setSelectedCard({name: '', link: ''})
  }

  function handleCardClick(item) {
    setSelectedCard(item)
  }


  return (
<div className="page">

<Header />
<Main
  onAddPlace  = {openAddPopup}
  onEditProfile = {openProfilePopup}
  onEditAvatar = {openAvatarPopup}
  onCardClick = {handleCardClick}
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

<ImagePopup
  card = {selectedCard}
  onClose = {closeAllPopups}
/>
</div>
  );
}

export default App;
