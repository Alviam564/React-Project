import React from 'react';

const Loader = ({ loadercontainer, loadersides, loaderimg, img1, img2, img1Start, img2Start, alt1 = "Character 1", alt2 = "Character 2" }) => {
  return (
    <div className={loadercontainer}>
      <img src={img1} alt={alt1} className={`${loaderimg} fly-${img1Start}`} />
      <img src={img2} alt={alt2} className={`${loaderimg} fly-${img2Start}`} />
      <h1 className={`loader-text fly-${loadersides}`}>Now Loading...</h1>
    </div>
  );
};

export default Loader;