import NavbarU from "../components/NavbarU"
import BackGround from "../components/BackGround"
import FooterU from "../components/FooterU"
import { UBL } from "../utils/images"
import SearchbarUS from "../components/SearchbarUS"
import SearchbarUA from "../components/SearchbarUA"
import Search from "./Search"


const UnbrokenBonds = () => {
    return (
        <div id='UB'>
            <section>
                <NavbarU />
            </section>
            <main>
                <BackGround />
                <section>
                    <div className="top-e">
                        <img className="title-logo-e" src={ UBL } alt="Unbrokenbonds logo" />
                    </div>
                    <div className="dfix space colu pad">
                        <div className="input-solo input-m-r pad">
                        <SearchbarUA />
                        </div>
                        <div className="input-all input-m-r">
                        <SearchbarUS>
                            <Search />
                        </SearchbarUS>
                        </div>
                    </div>
                    <div className="down up">
                        <div className="content-wrapper OW">
                            <h1>
                                <span class="F1">Filters:</span>
                            </h1>
                            <div class="content-wrapperll">
                                <h1>
                                    <span class="F1">:Sort</span>
                                </h1>
                                <button class="btn__menu menu--open OW" onClick="openMenu()">
                                    <div class="filters-containerUB">
                                        <div class="filter-section">
                                            <select class="selectUB">
                                                <option class="pfix" disabled selected>Sort</option>
                                            </select>
                                        </div>
                                    </div>
                                </button>
                                <div class="menu__backdrop WO">
                                    <div class="filters-containerUB">
                                        <button class="btn__menu btn__menu--close dfix OW" onClick="closeMenu()">
                                            <i class="fa fa-times"></i>
                                            <p class="pfix rowf">Choose a Type & Range</p>
                                        </button>
                                        <div class="filter-section">
                                            <select id="priceType" class="selectUB" onchange="filterPriceType(event)">
                                                <option value=""selected> Card Price Types</option>
                                                <option value="normal">Normal</option>
                                                <option value="reverseHolofoil">ReverseHolofoil</option>
                                                <option value="holofoil">Holofoil</option>
                                            </select>
                                        </div>
                                        <div class="filter-section">
                                            <select id="priceRange" class="selectUB" onchange="filterPriceRange(event)">
                                                <option value=""selected>Price Ranges</option>
                                                <option value="LowToHigh">Low to High</option>
                                                <option value="HighToLow">High to Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button class="btn__menu menu--open OW openhi" onClick="openMenu()">
                                <div class="filters-containerUB">
                                    <div class="filter-section">
                                        <select class="selectUB">
                                            <option class="pfix" disabled selected>Filter</option>
                                        </select>
                                    </div>
                                </div>
                            </button>
                            <div class="menu__backdrop WO">
                                <div class="filters-containerUB">
                                    <button class="btn__menu btn__menu--close dfix OW" onClick="closeMenu()">
                                        <i class="fa fa-times"></i>
                                    </button>
                                    <div class="filter-section">
                                        <select id="cardtype" class="selectUB" onchange="filterSuperType(event)">
                                            <option value=""selected>Card Type</option>
                                            <option value="Pokémon">Pokémon</option>
                                            <option value="Trainer">Trainer</option>
                                        </select>                
                                    </div>
                                    <div class="filter-section">
                                        <select id="subtypes" class="selectUB" onchange="filterSubTypes(event)">
                                            <option value=""selected>Subtypes</option>
                                            <option value="Basic">Basic</option>
                                            <option value="Stage 1">Stage 1</option>
                                            <option value="Stage 2">Stage 2</option>
                                            <option value="TAG TEAM">TAG TEAM</option>
                                            <option value="GX">GX</option>
                                            <option value="Ultra Beast">Ultra Beast</option>
                                            <option value="Supporter">Supporter</option>
                                            <option value="Item">Item</option>
                                            <option value="Pokémon Tool">Pokémon Tool</option>
                                            <option value="Stadium">Stadium</option>
                                            <option value="Special">Special</option>
                                        </select>                    
                                    </div>
                                    <div class="filter-section">
                                        <select id="energytypes" class="selectUB" onchange="filterEnergyTypes(event)">
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
                                            <option value="Colorless">Colorless</option>
                                        </select>        
                                    </div>
                                    <div class="filter-section">
                                        <select id="rarity" class="selectUB" onchange="filterRarity(event)">
                                            <option value=""selected>Rarity</option>
                                            <option value="Common">Common</option>
                                            <option value="Uncommon">Uncommon</option>
                                            <option value="Rare">Rare</option>
                                            <option value="Rare Holo">Rare Holo</option>
                                            <option value="Rare Holo GX">Rare Holo GX</option>
                                            <option value="Rare Ultra">Rare Ultra</option>
                                            <option value="Rare Rainbow">Rare Rainbow</option>
                                            <option value="Rare Secret">Rare Secret</option>
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
            <FooterU />
        </div>
    )
}

export default UnbrokenBonds