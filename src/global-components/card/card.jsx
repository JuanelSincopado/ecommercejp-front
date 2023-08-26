'use client'
import Image from "next/image";
import star from "../../../public/star.svg"
import heartSolid from "../../../public/heart-solid.svg"
import heartOutline from "../../../public/heart-outline.svg"
import { useState } from "react";

const Card = () => {

  const [fav, setFav] = useState(false)

  const toggle = () => {
    setFav(!fav)
  }

  return (
    <div className="card">
      <Image className="card__image" src='https://m.media-amazon.com/images/I/41cN-CAGz3L._SR290,290_.jpg' alt="product" width={180} height={180} />

      <div className="card__text">
        <p className="card__text_title">Lorem ipsum dolor</p>

        <div className="card__star">
          <Image className="svg-size-sm" src={star} alt="star" />
          <p>4.9</p>
        </div>

        <p className="card__price">$25.000.000</p>
      </div>

      <button onClick={toggle} className="fav__button">
        <Image src={fav ? heartSolid : heartOutline} alt="fav" className="svg-size-sm fav__image" />
      </button>
    </div>
  );
}

export default Card;