import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CardDetail = ({ card, navProps, footProps }) => {
  const formatPrices = (prices) => {
    if (!prices) return <p>No price data</p>;
    return Object.entries(prices).map(([type, value]) => (
      <p key={type}>
        <strong>{type}:</strong> ${value.low ?? "?"} - ${value.high ?? "?"}
      </p>
    ));
  };

  if (!card) return <h1>Card not found</h1>;

  const idName = card.set?.name.includes("Team Up") ? "TU" : "UB";
  const divClass = card.set?.name.includes("Team Up") ? "White" : "Blue";
  const sectionClass = card.set?.name.includes("Team Up") ? "Blackb" : "Whiteb";


  return (
    <div id={idName} className={divClass}>
      <div className="card-details">
        <section className={sectionClass}>
          <Navbar {...navProps} />
        </section>
        <div id="card-containerS">
          <div>
            <img src={card.images.large} alt={card.name} />
          </div>
          <div className="sfix">
            <h1>{card.name}</h1>
            <h1><strong>Supertype:</strong> {card.supertype}</h1>
            <h1><strong>Subtypes:</strong> {card.subtypes?.join(", ")}</h1>
            <h1><strong>Rarity:</strong> {card.rarity}</h1>
            <h1><strong>Set:</strong> {card.set?.name}</h1>
            <h1><strong>HP:</strong> {card.hp}</h1>
            <h1><strong>Types:</strong> {card.types?.join(", ")}</h1>
            <h1><strong>Artist:</strong> {card.artist}</h1>
            <h1><strong>National Pokedex Numbers:</strong> {card.nationalPokedexNumbers?.join(", ")}</h1>
            <div>
              <h1>
                <strong>Prices:</strong>
                {formatPrices(card.tcgplayer?.prices)}
              </h1>
            </div>
            <div>
              <h1>
                <strong>Legalities:</strong>
                {Object.entries(card.legalities || {}).map(([format, legality]) => (
                  <p key={format}>{format}: {legality}</p>
                ))}
              </h1>
            </div>
          </div>
        </div>
        <Footer {...footProps} />
      </div>
    </div>
  );
};

export default CardDetail;