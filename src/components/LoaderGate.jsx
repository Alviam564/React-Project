import React, { useEffect, useState } from "react";

const LoaderGate = ({ loadercontainer, loadersides, card, setid, children, bb}) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
    const onLoaded = () => {setIsReady(true)}

    const timeout = setTimeout(onLoaded, 4500);

    return () => clearTimeout(timeout);
  }, [setid])
  
    if (!isReady) {
        return (
            <div id="card-container" className={bb}>
                <div className={loadercontainer}
                 style={{ overflow: "visible"}}>
                    <img src={card.images?.large} alt={card.name} />
                    <h1 className={`loader-text fly-${loadersides}`}>Now Loading...</h1>
                </div>
            </div>
        )
    }

    return children
}

export default LoaderGate