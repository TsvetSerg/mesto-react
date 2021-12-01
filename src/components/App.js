// import logo from '../logo.svg';
import '../index.css';
import Header from './Header'
import Main from './Main'
import Footer from './Footer';
import React from "react";
import ImagePopup from './ImagePopup'
import ApiClass from './utils/Api'
import CurrentUserContext from '../contexts/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

function App() {


  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [currentUser, setCurrentUser] = React.useState({});
  const [currentCard, setCurrentCard] = React.useState([]);
  // const [cardsData, setCardsData] = React.useState([])

  React.useEffect(() => {
    Promise.all([ApiClass.getInfoUser(), ApiClass.getInitialCards()])
      .then(([info, cards]) => {
        setCurrentUser(info)
        setCurrentCard(cards)
      })
      .catch((err) => {
        console.log(err);
      })
    }, [])



  function handleCardLike(card) {                 // Функуция поосстановки лайков
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    if (!isLiked) {
    ApiClass.putLikeCard(card._id).then((newCard) => {
      setCurrentCard((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    } else {
      ApiClass.deleteLikeCard(card._id).then((newCard) => {
        setCurrentCard((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
    }
  }

  function handleCardDelete(card) {             // Функция удаления карточки
    ApiClass.deleteCard(card._id).then((del) => {
      setCurrentCard((state) => state.filter((c) => c._id !== card._id ))
    })
  }

  function handleUpdateUser(data) {
    Promise.resolve(ApiClass.patchInfoUser(data))
    .then((info) => {
      setCurrentUser(info)
      closeAllPopups()
    })
  }


  function handleUpdateAvatar(data) {
    Promise.resolve(ApiClass.patchNewAvatar(data))
    .then((info) => {
      setCurrentUser(info)
      closeAllPopups()
    })
  }

  function handleAddPlaceSubmit(data) {
    ApiClass.postNewCard(data)
    .then((card) => {
      setCurrentCard([card, ...currentCard])
      closeAllPopups()
    })
  }

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

<CurrentUserContext.Provider value={currentUser}>
  <div className="page">

  <Header />
  <Main
    onAddPlace  = {openAddPopup}
    onEditProfile = {openProfilePopup}
    onEditAvatar = {openAvatarPopup}
    onCardClick = {handleCardClick}
    card = {currentCard}
    onCardLike = {handleCardLike}
    onCardDelete = {handleCardDelete}
  />
  <Footer />

  <EditProfilePopup
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    onUpdateUser = {handleUpdateUser}
  />

  <EditAvatarPopup
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    onUpdateAvatar = {handleUpdateAvatar}
    />

  <AddPlacePopup
    isOpen = {isAddPlacePopupOpen}
    onClose = {closeAllPopups}
    onUpdateCard = {handleAddPlaceSubmit}
  />

  <ImagePopup
    card = {selectedCard}
    onClose = {closeAllPopups}
  />
  </div>
</CurrentUserContext.Provider>
  );
}

export default App;
