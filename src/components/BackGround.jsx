import React, {useEffect, useState} from "react";
import { PTCGL } from "../utils/images";
import { API_HEADER, BASE_URL } from "../utils/fetchfromApi";

const BackGround = ({ setid, onLoaded}) => {
    const [cardImages, setCardImages] = useState([])
    const [cardsData, setCardsData] = useState([]);
  
  
  const getRandomCardImage = (data) => {
    const index = Math.floor(Math.random() * data.length)
    return data[index]?.images?.large || PTCGL
  }

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const res = await fetch(`${BASE_URL}/cards?q=set.id:${setid}`, { headers: API_HEADER });
        const json = await res.json();
        const data = json.data;
        setCardsData(data);


        const initialImages = Array.from({ length: 7 }, () => getRandomCardImage(data));
        setCardImages(initialImages);
      } catch (error) {
        console.error("Failed to fetch card data:", error);
        setCardImages(Array(7).fill(PTCGL));
        }
      }
    fetchCards();
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