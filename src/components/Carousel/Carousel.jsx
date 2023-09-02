import React from "react";

const Carousel = ({ images}) => {
  const imageArray = Array.isArray(images) ? images : [];
  const duplicatedImages = [...imageArray, ...imageArray];
  const url = "https://portfolio-bt-41d83edce5b3.herokuapp.com";

  return (
    <div className='logos-slide'>
      {duplicatedImages.map((image, index) => (
        <img
          key={index}
          className={`w-40 h-20 mx-8 object-contain ${
            index === duplicatedImages.length - imageArray.length
          }`}
          src={`${url}${image.imageUrl}`}
          alt={`Logo ${image.title}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
