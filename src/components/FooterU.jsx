import { PTCGL, CRWC } from "../utils/images"
import React from "react"


const FooterU = () => {
    return (
    <footer id="contact">
        <div className="footer">
            <div className="background-wrapperO">
                <div className="row footer__row">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img className="overlay-img main-page-logo main-page-logo-mini-2" src={ PTCGL } alt="pokemon TCG Logo"/>
                    </button>
                    <img className="bg-imageO" src={ CRWC } alt="Charizard & Reshiram" />
                </div>
            </div>
        </div>
    </footer>
    )
}
export default FooterU