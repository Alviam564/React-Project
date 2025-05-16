import { PTCGL } from "../utils/images"
import React from "react"


const Footer = ({ footercN1,footercN2, srcframel, srcframelteam, }) => {
    return (
    <footer id="contact">
        <div className="footer">
            <div className="background-wrapperO">
                <div className="row footer__row">
                    <span className="point" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <img className={ footercN1 }  src={ PTCGL } alt="pokemon TCG Logo"/>
                    </span>
                    <img className={ footercN2 } src={ srcframel } alt={ srcframelteam } />
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer