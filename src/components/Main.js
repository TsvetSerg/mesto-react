import editBtn from '../images/edit-btn.svg'
import addBtn from '../images/add-btn.svg'
import '../index.css';
import React from "react";
import ApiClass from './utils/Api'
import Card from '../components/Card'


function Main(props) {

  const [userData, setUserData] = React.useState({});
  const [cardsData, setCardsData] = React.useState([])

  React.useEffect(() => {
    Promise.all([ApiClass.getInfoUser(), ApiClass.getInitialCards()])
      .then(([info, cards]) => {
        setUserData(info)
        setCardsData(cards)
        // userInfo.setUserInfo({inputName: items[0].name, inputJob: items[0].about, avatarInpur: items[0].avatar})
        // userId = items[0]._id
        // items[1].reverse();
        // stockCard.renderItems(items[1])
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])



  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__button" type="button" onClick={props.onEditAvatar} ></button>
          <img className="profile__avatar" src={userData.avatar} alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div>
            <h1 className="profile__name">{userData.name}</h1>
            <p className="profile__job">{userData.about}</p>
          </div>
          <button type="button" className="profile__edit-button" onClick={props.onEditProfile} >
            <img src={editBtn} alt="Кнопка редоктирования" />
          </button>
        </div>

        <button className="profile__add-button" type="button" onClick={props.onAddPlace} >
          <img className="profile__add-plus" src={addBtn} alt="Кнопка Добавления" />
        </button>
      </section>

      <section className="elements">
      {cardsData.map((cards) => (
        <Card
        key = {cards._id}
        name = {cards.name}
        link = {cards.link}
        onCardClick = {props.onCardClick}
        card = {cards}
        />
      ))}
      </section>
    </main>
  )
}




export default Main;
