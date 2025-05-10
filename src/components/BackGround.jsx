import React, {useEffect, useState} from "react";
import { PTCGL } from "../utils/images";

const BackGround = ({ cardsData }) => {
  const [cardImages, setCardImages] = useState([])

  useEffect(() => {
    if(!Array.isArray(cardsData) || cardsData.length === 0) {
      setCardImages(Array(7).fill( PTCGL ))
    } else {
      setCardImages(
        Array.from({ length: 7 },  () =>
          getRandomCardImage(cardsData)
        )
      );
    }
  }, [cardsData])

  useEffect(() => {
    const interval = setInterval(() => {
      if(!Array.isArray(cardsData) || cardsData.length === 0) return

      setCardImages((prev) =>
        prev.map(() => getRandomCardImage(cardsData))
      
      )
    }, 10000)

    return () => clearInterval(interval)
  },[cardsData])

  const getRandomCardImage = (data) => {
    const index = Math.floor(Math.random() * data.length)
    return data[index].images?.large || PTCGL
  }

  return (
    <div className="background-cards">
      {cardImages.map((src, index) => ( 
      <div className="card" key={index}>
        <img src={src} alt={`Random Card ${index}`} />
      </div>
      ))}
    </div>
  )
}
export default BackGround