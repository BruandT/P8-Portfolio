import React from 'react';
import Typewriter from "typewriter-effect";

const Banner = () => {
    return (
        <>
        <div className='bg-skin-bg-color/70 flex items-center justify-center w-2/3 h-96 max-md:w-full rounded'>
            <div className='flex flex-col items-center'>
              <h1 className='text-6xl max-md:text-5xl font-bold text-center'>
                {/* Machine a ecrire */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("THOMAS BRUAND").start();
                  }}
                />
              </h1>
              <h2 className='text-4xl uppercase max-md:text-3xl'>
                web developer
              </h2>
            </div>
          </div>
        </>
    );
};

export default Banner;