import { useEffect, useState, React } from "react";
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
      <header className='absolute w-full bg-skin-bg-base menu-mobile'>
        <div
          className={`w-full h-20 px-10 items-center bg-skin-bg-base/95 shadow-header grid grid-cols-3 max-md:grid-cols-2 text-skin-base ${
            isSticky ? "sticky" : ""
          }`}
        >
          <a href='#home'>
            <p className='h-full'>
              <span className='text-skin-color font-semibold text-4xl max-md:text-2xl'>
                &gt;_
              </span>
              <span className='text-skin-base text-5xl font-semibold max-md:text-4xl'>
                TB
              </span>
            </p>
          </a>
          <Navigation />
        </div>
      </header>
    </>
  );
}

export default Header;
