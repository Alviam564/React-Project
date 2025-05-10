
import React from 'react';
import { Link } from 'react-router-dom';
import { PTCGL, CR, TUL } from '../utils/images'

const NavbarU = () => {
  return (
    <nav className="Whiteb">
      <div className="right">
        <Link to="/">
          <img className="page-logo" src={PTCGL} alt="Pokémon TCG Logo" />
        </Link>
      </div>
      <div className="hfix">
        <img src={CR} alt="Charizard & Reshiram" />
      </div>
      <div className="left">
        <Link to="/teamup">
          <img className="page-opp-logo" src={TUL} alt="TeamUp Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarU;