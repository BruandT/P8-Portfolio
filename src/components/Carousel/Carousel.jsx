import React from "react";

const Carousel = ({ images}) => {
  const imageArray = Array.isArray(images) ? images : [];
  const duplicatedImages = [...imageArray, ...imageArray];

  return (
    <div className='logos-slide'>
      {duplicatedImages.map((image, index) => (
        <img
          key={index}
          className={`w-40 h-20 mx-8 object-contain ${
            index === duplicatedImages.length - imageArray.length
          }`}
          src={`http://localhost:1337${image.imageUrl}`}
          alt={`Logo ${image.title}`}
        />
      ))}
    </div>
  );
};

export default Carousel;
