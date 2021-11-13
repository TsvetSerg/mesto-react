import editBtn from '../images/edit-btn.svg'
import addBtn from '../images/add-btn.svg'

function Main() {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__wrapper">
          <button className="profile__button" type="button"></button>
          <img className="profile__avatar" src="#" alt="Аватар" />
        </div>
        <div className="profile__profile-info">
          <div>
            <h1 className="profile__name">Сергей Цветков</h1>
            <p className="profile__job">Создатель данного сайта</p>
          </div>
          <button type="button" className="profile__edit-button">
            <img src={editBtn} alt="Кнопка редоктирования" />
          </button>
        </div>

        <button className="profile__add-button" type="button">
          <img className="profile__add-plus" src={addBtn} alt="Кнопка Добавления" />
        </button>
      </section>

      <section className="elements">
      </section>

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

    </main>
  )
}


export default Main;
