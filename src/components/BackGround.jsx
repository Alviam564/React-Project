import React, {useEffect, useState} from "react";
import { PTCGL } from "../utils/images";
import TUCards from "../utils/team-up.json"
import UBCards from "../utils/unbroken-bonds.json"

const cardSets = {
  sm9: TUCards,
  sm10: UBCards
}

const BackGround = ({ setid, onLoaded}) => {
  const [cardImages, setCardImages] = useState([])
  const [cardsData, setCardsData] = useState([]);

  
  const getRandomCardImage = (data) => {
    if (!data.length) return PTCGL
    const index = Math.floor(Math.random() * data.length)
    return data[index]?.images?.large || PTCGL
  }
  
  useEffect(() => {
    if (!setid) return
    const cards = cardSets[setid] || []
    

    const initialImages = Array.from({ length: 7 }, () => getRandomCardImage(cards));
    setCardImages(initialImages);

    setCardsData(cards);
  }, [setid])

  useEffect(() => {
    if (cardImages.length === 0) return;

    let loadedCount = 0;
    const tempImgs = cardImages.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === cardImages.length) {
          onLoaded?.();
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === cardImages.length) {
          onLoaded?.();
        }
      };
      return img;
    });

    return () => {
      tempImgs.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [cardImages, onLoaded]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(!Array.isArray(cardsData) || cardsData.length === 0) return
      
      setCardImages((prev) =>
        prev.map(() => getRandomCardImage(cardsData))  
    )
  }, 9000)

  return () => clearInterval(interval)
  },[cardsData])

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