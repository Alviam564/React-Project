
import React from 'react';
import { Link } from 'react-router-dom';
import { PTCGL, PZ, UBL } from '../utils/images'

const NavbarT = () => {
  return (
    <nav className="Blackb">
      <div className="right">
        <Link to="/">
          <img className="page-logo" src={PTCGL} alt="Pokémon TCG Logo" />
        </Link>
      </div>
      <div className="hfix">
        <img src={PZ} alt="Pikachu & Zekrom" />
      </div>
      <div className="left">
        <Link to="/unbrokenbonds">
          <img className="page-opp-logo" src={UBL} alt="Unbrokenbonds Logo" />
        </Link>
      </div>
    </nav>
  );
};

export default NavbarT;