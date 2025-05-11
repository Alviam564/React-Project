import NavbarT from "../components/NavbarT"
import BackGround from "../components/BackGround"
import FooterT from "../components/FooterT"
import SearchbarTA from "../components/SearchbarTA"
import SearchbarTS from "../components/SearchbarTS"
import { TUL } from "../utils/images"
import Search from "./Search"


const TeamUp = () => {
    return (
        <div id="TU">
            <section>
                <NavbarT />
            </section>
            <main>
                <div>
                    <BackGround cardsData={process.env.POKEMON_TCG_API_KEY}/>
                </div>
                <section>
                    <div className="top">
                        <img className="title-logo" src={ TUL } alt="TeamUp logo" />
                    </div>
                    <div className="dfix space colu pad">
                        <div className="input-solo input-m-r pad">
                        <SearchbarTA />
                        </div>
                        <div className="input-all input-m-r">
                        <SearchbarTS>
                            <Search />
                        </SearchbarTS>
                        </div>
                    </div>
                    <div class="down up">
                        <div class="content-wrapper YB">
                            <h1>
                                <span class="F1">Filters:</span>
                            </h1>
                            <div class="content-wrapperll">
                                <h1>
                                    <span class="F1">:Sort</span>
                                </h1>
                                <button class="btn__menu menu--open YB" onClick="openMenu()">
                                    <div class="filters-containerTU">
                                        <div class="filter-section">
                                            <select class="selectTU">
                                                <option class="pfix" disabled selected>Sort</option>
                                            </select>
                                        </div>
                                    </div>
                                </button>
                                <div class="menu__backdrop BY">
                                    <div class="filters-containerTU">
                                        <button class="btn__menu btn__menu--close dfix YB" onClick="closeMenu()">
                                            <i class="fa fa-times"></i>
                                            <p class="pfix rowf">Choose a Type & Range</p>
                                        </button>
                                        <div class="filter-section">
                                            <select id="priceType" class="selectTU" onchange="filterPriceType(event)">
                                                <option value=""selected> Card Price Types</option>
                                                <option value="normal">Normal</option>
                                                <option value="reverseHolofoil">ReverseHolofoil</option>
                                                <option value="holofoil">Holofoil</option>
                                            </select>
                                        </div>
                                        <div class="filter-section">
                                            <select id="priceRange" class="selectTU" onchange="filterPriceRange(event)">
                                                <option value=""selected>Price Ranges</option>
                                                <option value="LowToHigh">Low to High</option>
                                                <option value="HighToLow">High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn__menu menu--open YB openhi" onClick="openMenu()">
                                <div class="filters-containerTU">
                                    <div class="filter-section">
                                        <select class="selectTU">
                                            <option class="pfix" disabled selected>Filter</option>
                                        </select>
                                    </div>
                                </div>
                            </button>
                            <div class="menu__backdrop BY">
                                <div class="filters-containerTU">
                                    <button class="btn__menu btn__menu--close dfix YB" onClick="closeMenu()">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    <div class="filter-section">
                                        <select id="cardtype" class="selectTU" onchange="filterSuperType(event)">
                                            <option value=""selected>Card Type</option>
                                            <option value="Pokémon">Pokémon</option>
                                            <option value="Trainer">Trainer</option>
                                        </select>                
                                    </div>
                                    <div class="filter-section">
                                        <select id="subtypes" class="selectTU" onchange="filterSubTypes(event)">
                                            <option value=""selected>Subtypes</option>
                                            <option value="Basic">Basic</option>
                                            <option value="Stage 1">Stage 1</option>
                                            <option value="Stage 2">Stage 2</option>
                                            <option value="TAG TEAM">TAG TEAM</option>
                                            <option value="GX">GX</option>
                                            <option value="Supporter">Supporter</option>
                                            <option value="Item">Item</option>
                                            <option value="Pokémon Tool">Pokémon Tool</option>
                                            <option value="Stadium">Stadium</option>
                                            <option value="Prism Star">Prism Star</option>
                                        </select>                    
                                    </div>
                                    <div class="filter-section">
                                        <select id="energytypes"class="selectTU" onchange="filterEnergyTypes(event)">
                                            <option value=""selected>Energy types</option>
                                            <option value="Grass">Grass</option>
                                            <option value="Fire">Fire</option>
                                            <option value="Water">Water</option>
                                            <option value="Lightning">Lightning</option>
                                            <option value="Psychic">Psychic</option>
                                            <option value="Fighting">Fighting</option>
                                            <option value="Darkness">Darkness</option>
                                            <option value="Metal">Metal</option>
                                            <option value="Fairy">Fairy</option>
                                            <option value="Dragon">Dragon</option>
                                            <option value="Colorless">Colorless</option>
                                        </select>        
                                    </div>
                                    <div class="filter-section">
                                        <select id="rarity" class="selectTU" onchange="filterRarity(event)">
                                            <option value=""selected>Rarity</option>
                                            <option value="Common">Common</option>
                                            <option value="Uncommon">Uncommon</option>
                                            <option value="Rare">Rare</option>
                                            <option value="Rare Holo">Rare Holo</option>
                                            <option value="Rare Holo GX">Rare Holo GX</option>
                                            <option value="Rare Ultra">Rare Ultra</option>
                                            <option value="Rare Rainbow">Rare Rainbow</option>
                                            <option value="Rare Secret">Rare Secret</option>
                                            <option value="Rare Prism Star">Rare Prism Star</option>
                                            <option value="Promo">Promo</option>
                                        </select>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="card-container"></div>
                </section>
            </main>
            <FooterT />
        </div>
    )
}

export default TeamUp