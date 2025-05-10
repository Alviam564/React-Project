import { PTCGL, PZWC } from "../utils/images"
import React from "react"


const FooterT = () => {
    return (
    <footer id="contact">
        <div className="footer">
            <div className="background-wrapperO">
                <div className="row footer__row">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img className="overlay-img main-page-logo-d main-page-logo-mini" src={ PTCGL } alt="pokemon TCG Logo"/>
                    </button>
                    <img className="bg-imageY bg-image-fixb" src={ PZWC } alt="Pikachu & Zekrom" />
                </div>
            </div>
        </div>
    </footer>
    )
}
export default FooterT