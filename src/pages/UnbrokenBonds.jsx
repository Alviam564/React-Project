import Navbar from "../components/Navbar"
import BackGround from "../components/BackGround"
import Footer from "../components/Footer"
import {C, R, UBL, CR, TUL, CRWC } from "../utils/images"
import Display from "../components/Display"
import SearchbarAll from "../components/SearchbarAll"
import SearchbarSolo from "../components/SearchbarSolo"
import Filters from "../components/Filters"
import React, { useEffect, useState, useCallback } from "react"
import Loader from "../components/Loader"

const subtypes = ['Basic', 'Stage 1', 'Stage 2', 'TAG TEAM', 'GX', 'Ultra Beast','Supporter', 'Item', 'Pokémon Tool', 'Stadium', 'Special'];
const rarities = ['Common', 'Uncommon', 'Rare', 'Rare Holo', 'Rare Holo GX', 'Rare Ultra', 'Rare Rainbow', 'Rare Secret', 'Promo'];
const energyTypes = ['Grass', 'Fire', 'Water', 'Lightning', 'Psychic', 'Fighting', 'Darkness', 'Metal', 'Fairy', 'Colorless'];
const priceTypes = ['normal', 'reverseHolofoil', 'holofoil'];
const priceRanges = ['low to high', 'high to low'];

const UnbrokenBonds = () => {
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
            favicon.href = "/UB symbol.png";
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
        <div id='UB'>
            {isLoading && (
                <Loader
                    loaderimg='loader-img2'
                    loadersides="center-right"
                    loadercontainer={"loader-containerW"}
                    img1={R}
                    img2={C}
                    img1Start="top-right"
                    img2Start="bottom-right"
                />
            )}
            <main>
                <section className="Whiteb">
                    <Navbar 
                        srcframe = {CR}
                        team={"Charizard & Reshiram"}
                        Other={"/teamup"}
                        oppframe = {TUL}
                        opplogo = {"TeamUp Logo"}
                    />
                </section>
                <div>
                    <BackGround 
                        setid="sm10"
                        onLoaded={onLoaded}
                    />
                </div>
                <section>
                    <div className="top-e">
                        <img className="title-logo-e" src={ UBL } alt="Unbrokenbonds logo" />
                    </div>
                    <Filters
                        wrapperClass="OW"
                        filterClass="selectUB"
                        containerClass="filters-containerUB"
                        onFilterChange={handleFilterChange}
                        currentFilters={filters}
                        subtypes={subtypes}
                        rarities={rarities}
                        energyTypes={energyTypes}
                        priceTypes={priceTypes}
                        priceRanges={priceRanges}
                    />
                    <Display 
                        cardClassName={"card-UB"}
                        setName="UnbrokenBonds"
                        setQueries={["set.id:sm10"]}
                        filters={filters}
                        searchTerm={searchTerm}
                        onSearchChange={handleSearchChange}  
                        SearchbarAll={SearchbarAll}
                        SearchbarSolo={SearchbarSolo}
                    />
                </section>
            </main>
            {!isLoading && (
                <Footer
                    footercN1={"overlay-img main-page-logo main-page-logo-mini-2"}
                    footercN2={"bg-imageO"}
                    srcframel={CRWC}
                    srcframelteam={"Charizard & Reshiram"}
                />
            )}
        </div>
    )
}

export default UnbrokenBonds
