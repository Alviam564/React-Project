import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardDetail from "../pages/CardDetail";
import LoaderGate from "../components/LoaderGate";
import TUCards from "../utils/team-up.json";
import UBCards from "../utils/unbroken-bonds.json";
import { PZ, CR, TUL, UBL, PZWC, CRWC} from "../utils/images";
import PreloaderGate from "./PreloaderGate";



const CardFinder = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [navProps, setNavProps] = useState({});
  const [footProps, setFootProps] = useState({});
  
  useEffect(() => {
    if (!id) return
    
    const card = [ ...TUCards, ...UBCards]
    const foundcard = card.find (c => c.id === id)
    setCard(foundcard);

    if (!foundcard) return
    const setName = foundcard.set?.name || "";
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
  }, [id]);

  let loadercontainer, loadersides, bb;

if (card) {
  const setName = card.set?.name || "";
  if (setName.includes("Team Up")) {
    bb = "bb"
    loadercontainer = "loader-containerB just-right White";
    loadersides = "center-left";
  } else {
    loadercontainer = "loader-containerW just-left";
    loadersides = "center-right";
  }
}

  return card ? (
    <LoaderGate card={card} loadercontainer={loadercontainer} loadersides={loadersides} bb={bb}>
      <CardDetail card={card} navProps={navProps} footProps={footProps}/>
    </LoaderGate>
  ) : (
    <PreloaderGate />
  );
};

export default CardFinder;
