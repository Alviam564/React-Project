import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import { PZ, CR, TUL, UBL, PZWC, CRWC, P, Z, R, C } from "../utils/images";
import { API_HEADER, BASE_URL } from "../utils/fetchfromApi";


const CardFinder = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [navProps, setNavProps] = useState({});
  const [footProps, setFootProps] = useState({});
  
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch(`${BASE_URL}/cards/${id}`, { headers: API_HEADER });
        const data = await res.json();
        const cardData = data.data;
      setCard(cardData);

      const setName = cardData.set?.name || "";
      if (setName.includes("Team Up")) {
        setNavProps({
          srcframe: PZ,
          team: "Pikachu & Zekrom",
          Other: "/unbrokenbonds",
          oppframe: UBL,
          opplogo: "Unbroken Bonds",
        });
        setFootProps({
          footercN1: "overlay-img main-page-logo-d main-page-logo-mini",
          footercN2: "bg-imageY bg-image-fixb",
          srcframel: PZWC,
          srcframelteam: "Pikachu & Zekrom",
        });
      } else {
        setNavProps({
          srcframe: CR,
          team: "Charizard & Reshiram",
          Other: "/teamup",
          oppframe: TUL,
          opplogo: "Team Up",
        });
        setFootProps({
          footercN1: "overlay-img main-page-logo main-page-logo-mini-2",
          footercN2: "bg-imageO",
          srcframel: CRWC,
          srcframelteam: "Charizard & Reshiram",
        });
      }
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };

    fetchCard();
  }, [id]);

  return card ? (
    <CardDetail card={card} navProps={navProps} footProps={footProps} />
  ) : (
    (
       <div className="loader-containerG">
          <img src={ Z } alt="Zekrom" className='loader-img3 fly-top-left' />
          <img src={ R } alt="Reshiram" className='loader-img4 fly-top-right'/>
          <img src={ C } alt="Charizard" className='loader-img4 fly-bottom-right'/>
          <img src={ P } alt="Pikachu" className='loader-img3 fly-bottom-left' />
          <h1>BATTLE !!!</h1>
        </div>
    )
  );
};

export default CardFinder;
