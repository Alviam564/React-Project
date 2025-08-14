import  Navbar  from "../components/Navbar"
import BackGround from "../components/BackGround"
import Footer from "../components/Footer"
import {P, Z, TUL, PZ, UBL, PZWC } from "../utils/images"
import Display from "../components/Display"
import SearchbarAll from "../components/SearchbarAll"
import SearchbarSolo from "../components/SearchbarSolo"
import Filters from "../components/Filters"
import React, { useState, useEffect, useCallback } from 'react';
import Loader from "../components/Loader"

const subtypes = ['Basic', 'Stage 1', 'Stage 2', 'TAG TEAM', 'GX', 'Supporter', 'Item', 'Pokémon Tool', 'Stadium', 'Prism Star'];
const rarities = ['Common', 'Uncommon', 'Rare', 'Rare Holo', 'Rare Holo GX', 'Rare Ultra', 'Rare Rainbow', 'Rare Secret', 'Rare Prism Star', 'Promo'];
const energyTypes = ['Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Fairy', 'Dragon', 'Colorless'];
const priceTypes = ['normal', 'reverseHolofoil', 'holofoil'];
const priceRanges = ['low to high', 'high to low'];

const TeamUp = () => {
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [minDelayPassed, setMinDelayPassed] = useState(false);
  const isLoading = !(isBackgroundLoaded && minDelayPassed);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (newTerm) => {setSearchTerm(newTerm);};
  const onLoaded = useCallback(() => {
    setIsBackgroundLoaded(true);
  }, []);

  
  const defaultFilters = {
  cardtype: '',
  subtypes: [],
  energytypes: [],
  rarity: [],
  priceType: '',
  priceRange: '',
};

const [filters, setFilters] = useState(defaultFilters);

const handleFilterChange = (newFilter) => {
  if (Object.entries(newFilter).some(([key, val]) => {
    if (["cardtype", "priceType", "priceRange"].includes(key)) {
      return val === "";
    }
    return false;
  })) {
    setFilters(defaultFilters);
  } else {
    const normalized = { ...newFilter };
    ["subtypes", "energytypes", "rarity"].forEach(key => {
      if (Array.isArray(normalized[key])) {
        normalized[key] = normalized[key].filter(v => v !== "");
      } else if (normalized[key] === "") {
        normalized[key] = [];
      }
    });

    setFilters(prev => ({
      ...prev,
      ...normalized,
    }));
  }
};
  

  useEffect(() =>  {
    const favicon = document.querySelector("link[rel='icon']");
    if (favicon) {
      favicon.href = "/TU symbol.png";
    }
  }, []);

   useEffect(() => {
    const timer = setTimeout(() => setMinDelayPassed(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
  document.body.style.overflow = isLoading ? "hidden" : "auto";
  return () => {
    document.body.style.overflow = "auto";
  };
  }, [isLoading]);


  return (
    <div id='TU' className="White">
      {isLoading && (
        <Loader
          loaderimg='loader-img'
          loadersides="center-left"
          loadercontainer={"loader-containerB"}
          img1={Z}
          img2={P}
          img1Start="top-left"
          img2Start="bottom-left"
        />
      )}
      <main>
        <section className="Blackb">
          <Navbar 
            srcframe = {PZ}
            team={"Pikachu & Zekrom"}
            Other={"/unbrokenbonds"}
            oppframe = {UBL}
            opplogo = {"UnbrokenBonds Logo"}
          />
        </section>
        <div>
          <BackGround 
            setid="sm9"
            onLoaded={onLoaded}
          />
        </div>
        <section>
          <div className="top">
            <img className="title-logo" src={ TUL } alt="TeamUp logo" />
          </div>
          <Filters
            wrapperClass="YB"
            filterClass="selectTU"
            containerClass="filters-containerTU"
            backdropClass="BY"
            onFilterChange={handleFilterChange}
            currentFilters={filters}
            subtypes={subtypes}
            rarities={rarities}
            energyTypes={energyTypes}
            priceTypes={priceTypes}
            priceRanges={priceRanges}
            />
          <Display 
            cardClassName={"card-TU"}
            setName="TeamUp"
            filters={filters}
            searchTerm={searchTerm}
            onSearchChange={handleSearchChange}              
            setQueries={["set.id:sm9", "id:sm09"]}
            SearchbarAll={SearchbarAll}
            SearchbarSolo={SearchbarSolo}
          />
        </section>
      </main>
      {!isLoading && (
        <Footer
          footercN1={"overlay-img main-page-logo-d main-page-logo-mini"} 
          footercN2={"bg-imageY bg-image-fixb"}
          srcframel={PZWC}
          srcframelteam={"Pikachu & Zekrom"}
        />
      )}
    </div>
  )
}
  
export default TeamUp