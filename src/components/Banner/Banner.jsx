import React from 'react';
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <>
        <div className='bg-skin-bg-color/70 flex items-center justify-center w-2/3 h-80 mb-20 max-md:w-full '>
            <div className='flex flex-col items-center'>
              <h1 className='text-6xl max-md:text-4xl text-center'>
                {/* Machine a ecrire */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("THOMAS BRUAND").start();
                  }}
                />
              </h1>
              <h2 className='text-4xl uppercase max-md:text-2xl'>
                web developer
              </h2>
            </div>
          </div>
        </>
    );
};

export default Banner;