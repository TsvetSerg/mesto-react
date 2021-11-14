import editBtn from '../images/edit-btn.svg'
import addBtn from '../images/add-btn.svg'
import '../index.css';

function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__button" type="button" onClick={props.onEditAvatar} ></button>
          <img className="profile__avatar" src="#" alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div>
            <h1 className="profile__name">Сергей Цветков</h1>
            <p className="profile__job">Создатель данного сайта</p>
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
      </section>
    </main>
  )
}




export default Main;
