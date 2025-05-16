
import React from 'react';
import { Link } from 'react-router-dom';
import { PTCGL } from '../utils/images'

const Navbar = ({ srcframe, team, Other, oppframe, opplogo }) => {
  return (
    <>
      <div className="right">
        <Link to="/">
          <img className="page-logo" src={PTCGL} alt="Pokémon TCG Logo" />
        </Link>
      </div>
      <div className="hfix">
        <img src = {srcframe} alt={team} />
      </div>
      <div className="left">
        <Link to={Other} >
          <img className="page-opp-logo" src={oppframe} alt={opplogo} />
        </Link>
      </div>
      </>
  );
};

export default Navbar;