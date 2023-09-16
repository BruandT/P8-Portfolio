import React from "react";

const Social = ({ link, image, title }) => {
  return (
    <>
      <div className='flex justify-center'>
        <a
          className='w-40 flex flex-row-reverse justify-end items-center p-3 gap-3 max-lg:p-2 max-lg:gap-0 max-lg:flex-col-reverse max-sm:flex-row-reverse max-sm:gap-3'
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className='text-xl text-skin-light max-lg:text-base'>{title}</h3>
          <img className='w-8 h-8' src={image} alt={`Logo ${title}`} />
        </a>
      </div>
    </>
  );
};

export default Social;
