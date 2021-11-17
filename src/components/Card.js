function Card(props) {

  function handleCardClick() {
    props.onCardClick(props.card)
  }

  return (
      <article className="element">
        <div className="element__delete"></div>
        <img className="element__image" src={props.link} alt={props.name} onClick={handleCardClick}/>
        <div className="element__rectangle">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__wrapper">
            <div className="element__like"></div>
            <p className="element__liked_num">0</p>
          </div>
        </div>
      </article>
  )
}

export default Card;
