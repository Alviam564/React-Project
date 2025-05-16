import  Navbar  from "../components/Navbar"
import BackGround from "../components/BackGround"
import Footer from "../components/Footer"
import {P, Z, TUL, PZ, UBL, PZWC } from "../utils/images"
import Display from "../components/Display"
import SearchbarSolo from "../components/SearchbarSolo"
import SearchbarAll from "../components/SearchbarAll"
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
  const onLoaded = useCallback(() => {
    setIsBackgroundLoaded(true);
  }, []);
  
  const [filters, setFilters] = useState({
    cardtype: '',
    subtypes: '',
    energytypes: '',
    rarity: '',
    priceType: '',
    priceRange: '',
    
  });
  
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilters(prev => ({ ...prev, [id]: value }));
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
            subtypes={subtypes}
            rarities={rarities}
            energyTypes={energyTypes}
            priceTypes={priceTypes}
            priceRanges={priceRanges}
            />
          <Display 
            cardClassName={"card-TU"}
            filters={filters}                
            setQueries={["set.id:sm9", "id:sm09"]}
            SearchbarAll={(props) => <SearchbarAll {...props} className="selectTUs"/>}
            SearchbarSolo={() => <SearchbarSolo className="selectTUs" setId={["sm9", "sm09"]}/>}
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