import React from "react";

const Footer = () => {
  return (
    <>
      <footer id='contact' className='text-white flex h-80'>
        <div className='w-1/4 bg-folly dark:bg-green-dark max-md:w-1/2'></div>
        <div className='w-3/4 bg-black max-md:w-1/2'>
          <p>© 2023 Thomas Bruand.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
