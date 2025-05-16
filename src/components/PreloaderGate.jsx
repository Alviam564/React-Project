import React, { useEffect, useState } from "react";
import { P, Z, R, C } from "../utils/images";

const PreloaderGate = ({ children, setid }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const onLoaded = () => {
      setIsReady(true)
    }

    const timeout = setTimeout(onLoaded, 2000);

    return () => clearTimeout(timeout);
  }, [setid])

  if (!isReady) {
    return (
   <div className="loader-containerG">
      <img src={ Z } alt="Zekrom" className='loader-img3 fly-top-left' />
      <img src={ R } alt="Reshiram" className='loader-img4 fly-top-right'/>
      <img src={ C } alt="Charizard" className='loader-img4 fly-bottom-right'/>
      <img src={ P } alt="Pikachu" className='loader-img3 fly-bottom-left' />
      <h1>BATTLE !!!</h1>
    </div>
    )
  }
  return children ;
};

export default PreloaderGate