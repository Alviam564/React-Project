import React, { useState } from 'react';

const Filters = ({
  wrapperClass = '',
  filterClass = '',
  containerClass = '',
  backdropClass = '',
  onFilterChange = () => {},
  subtypes = [],
  rarities = [],
  energyTypes = [],
  priceTypes = [],
  priceRanges = [],
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="down up">
      <div className="content-wrapper">
        <h1><span className="F1"></span></h1>
        <div className="content-wrapperll">
          <button className={`btn__menu ${isSortOpen ? 'menu--open' : ''}`} onClick={() => setIsSortOpen(true)}>
            <div className={containerClass}>
              <span className={`pfix ${wrapperClass}`}>
                <h1><span className="F1">:Sort</span></h1>
              </span>
            </div>
          </button>
          {isSortOpen && (
            <div className={`menu__backdrop sort ${backdropClass} ${isSortOpen ? 'menu--active' : ''}`}>
              <div className={containerClass}>
                <button className={`btn__menu btn__menu--close dfix ${wrapperClass}`} onClick={() => setIsSortOpen(false)}>
                  <i className="fa fa-times"></i>
                  <p className="pfix rowf">Choose a Type & Range</p>
                </button>
                <div className="filter-section">
                  <select id="priceType" className={filterClass} onChange={onFilterChange}>
                    <option value="">Card Price Types</option>
                    {priceTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="filter-section">
                  <select id="priceRange" className={filterClass} onChange={onFilterChange}>
                    <option value="">Price Ranges</option>
                    {priceRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className={`btn__menu ${isFilterOpen ? 'menu--open' : ''} openhi`} onClick={() => setIsFilterOpen(true)}>
          <div className={containerClass}>
            <span className={`pfix ${wrapperClass}`}>
              <h1><span className="F1">Filters:</span></h1>
            </span>
          </div>
        </button>
        {isFilterOpen && (
          <div className={`menu__backdrop filter ${backdropClass} ${isFilterOpen ? 'menu--active' : ''}`}>
            <div className={containerClass}>
              <button className={`btn__menu btn__menu--close dfix ${wrapperClass}`} onClick={() => setIsFilterOpen(false)}>
                <i className="fa fa-times"></i>
              </button>
              <div className="filter-section">
                <select id="cardtype" className={filterClass} onChange={onFilterChange}>
                  <option value="">Card Type</option>
                  <option value="Pokémon">Pokémon</option>
                  <option value="Trainer">Trainer</option>
                </select>
              </div>
              <div className="filter-section">
                <select id="subtypes" className={filterClass} onChange={onFilterChange}>
                  <option value="">Subtypes</option>
                  {subtypes.map((subtype) => (
                    <option key={subtype} value={subtype}>{subtype}</option>
                  ))}
                </select>
              </div>
              <div className="filter-section">
                <select id="energytypes" className={filterClass} onChange={onFilterChange}>
                  <option value="">Energy types</option>
                  {energyTypes.map((energy) => (
                    <option key={energy} value={energy}>{energy}</option>
                  ))}
                </select>
              </div>
              <div className="filter-section">
                <select id="rarity" className={filterClass} onChange={onFilterChange}>
                  <option value="">Rarity</option>
                  {rarities.map((rarity) => (
                    <option key={rarity} value={rarity}>{rarity}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
