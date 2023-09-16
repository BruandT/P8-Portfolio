import React from "react";
import { NavLink } from "react-router-dom";

function Error404() {
  return (
    <>
      <main className='w-full h-screen flex justify-center items-center'>
        <div className='h-1/2 w-1/2 flex flex-col justify-center items-center'>
          <img
            className='w-1/2'
            src='https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg'
            alt='404'
          />
          <h2 className='text-5xl text-skin-base font-semibold mb-5'>
            404 PAGE
          </h2>
          <NavLink to='/'>
            <button className='text-2xl text-skin-color underline'>
              Retourner à l'accueil !
            </button>
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default Error404;
