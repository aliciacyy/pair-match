import "./Card.css";
import React, { useEffect, useState } from 'react';

const Card = (props) => {
  const defaultImg = "./images/default.jpg";
  const [imgToShow, setImg] = useState(defaultImg);

  const img = props.img;
  let found = props.found;

  const handleCardClick = () => {
    if (found === false && !props.disableClick) {
        setImg(img);
        props.clickEvent(props.cardId);
    }
  }

  const changeBack = () => {
    setImg(defaultImg)
  }

  useEffect(() => {
    if (props.trigger) {
      changeBack();
    }
  }, [props.trigger])

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={imgToShow}/>
    </div>
  );
}

export default Card;
