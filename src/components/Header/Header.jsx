import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 840;

      setIsSticky(scrollPosition > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className='w-full h-20 bg-white dark:bg-dark px-10 menuMobile'>
        <div
          id='menuNavBlur'
          className={`w-full h-20 items-center backdrop-blur-lg dark:backdrop-blur-sm dark:bg-dark/90 grid grid-cols-3 max-md:grid-cols-2 text-dark dark:text-white ${
            isSticky ? "sticky" : ""
          }`}
        >
          <a href='#home'>
            <p className='h-full'>
              <span className='text-folly dark:text-green-dark text-4xl max-md:text-2xl'>
                &gt;_
              </span>
              <span className='text-5xl max-md:text-4xl'>TB</span>
            </p>
          </a>
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
