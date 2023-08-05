import React from "react";

const Footer = () => {
  return (
    <>
      <footer id='contact' className='flex h-auto max-md:flex-col'>
        <div className='w-1/4 h-auto bg-skin-bg-color max-md:w-full'></div>
        <div className='w-3/4 flex flex-col items-center bg-skin-bg-base max-md:w-full'>
          <p className="text-skin-base">© 2023 Thomas Bruand.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
