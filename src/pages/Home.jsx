import React from "react";
import { Link } from "react-router-dom";
import { TUL, UBL, UBTU, UBTUR, PTCGL } from "../utils/images.js"

const Home = () => {
  return (
    <div className="background-wrapper">
      <div>
        <Link to="/teamup">
          <img className="overlay-img TU main-page-logo" src={ TUL } alt="Pikachu & Zekrom" />
        </Link>
        <img className="overlay-img PTCG main-page-logo" src={ PTCGL } alt="pokemon TCG Logo" />
        <Link to="/unbrokenbonds">
          <img className="overlay-img UB main-page-logo" src={ UBL } alt="Charizard & Reshiram" />
        </Link>
      </div>
      <img className="bg-image hidUD"src={ UBTU } alt="Pikachu & Zekrom VS Charizard & Reshiram" />
      <img className="bg-image" src={ UBTUR } alt="Pikachu & Zekrom VS Charizard & Reshiram" />
    </div>
  );
};

export default Home;