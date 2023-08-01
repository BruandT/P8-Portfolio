import { useState, useEffect, React } from "react";

const Navigation = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Fonction pour détecter le changement de thème
    const handleThemeChange = (e) => {
      setIsDarkMode(e.matches);
    };

    // Écouter les changements de thème
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", handleThemeChange);

    // Déterminer le thème initial
    setIsDarkMode(darkModeMediaQuery.matches);

    // Nettoyer l'écouteur lors du démontage du composant
    return () =>
      darkModeMediaQuery.removeEventListener("change", handleThemeChange);
  }, []);

  useEffect(() => {
    // Mettre à jour l'overflow du body lorsque l'état de isNavOpen change
    document.body.style.overflow = isNavOpen ? "hidden" : "initial";
    document.getElementById("menuNavBlur").classList.remove("backdrop-blur-sm");

    // Nettoyer l'effet lorsque le composant est démonté
    return () => {
      document.body.style.overflow = "initial";
    };
  }, [isNavOpen]);

  const handleButtonClick = (test) => {
    // Trouver l'élément cible par son identifiant (ID) ou en utilisant une référence React (ref)
    const targetElement = document.getElementById(test); // Remplacez 'elementId' par l'ID de l'élément cible

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Fait le défilement en douceur
        block: "start", // Défilement vers le haut de l'élément cible
      });
    }
  };
  function scrollToTop() {
    // Utilisation de 'scrollTo' pour faire défiler la page vers le haut
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <div className='flex items-center justify-between md:justify-center max-md:justify-end'>
        <nav>
          {/* Menu mobile */}
          <section className='flex md:hidden lg:hidden'>
            {/* Menu burger */}
            <div
              className='space-y-2'
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className='block h-0.5 w-8 animate-pulse bg-folly dark:bg-green-dark'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-folly dark:bg-green-dark'></span>
              <span className='block h-0.5 w-8 animate-pulse bg-folly dark:bg-green-dark'></span>
            </div>
            {/* Ouverture du menu burger */}
            <div
              className={`overflow-hidden bg-white ${
                isDarkMode ? "dark:bg-black-bg" : ""
              } ${
                isNavOpen
                  ? isDarkMode
                    ? "darkShowMenuNav"
                    : "showMenuNav"
                  : "hideMenuNav"
              }`}
            >
              <div
                className='absolute top-5 right-10 '
                onClick={() => setIsNavOpen(false)}
              >
                {/* SVG croix */}
                <svg
                  className='h-8 w-8 text-folly dark:text-green-dark'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18' />
                  <line x1='6' y1='6' x2='18' y2='18' />
                </svg>
              </div>
              <ul className='h-full pt-5 flex flex-col justify-evenly bg-white dark:bg-dark uppercase'>
                <a
                  onClick={() => {
                    setIsNavOpen(false);
                    scrollToTop();
                  }}
                >
                  <li>
                    <span className='text-folly dark:text-green-dark'>/ </span>
                    home
                  </li>
                </a>
                <a href='#about' onClick={() => setIsNavOpen(false)}>
                  <li>
                    <span className='text-folly dark:text-green-dark'>/ </span>
                    about
                  </li>
                </a>
                <a href='#work' onClick={() => setIsNavOpen(false)}>
                  <li>
                    <span className='text-folly dark:text-green-dark'>/ </span>
                    work
                  </li>
                </a>
                <a href='#contact' onClick={() => setIsNavOpen(false)}>
                  <li>
                    <span className='text-folly dark:text-green-dark'>/ </span>
                    contact
                  </li>
                </a>
              </ul>
            </div>
          </section>
          {/* Desktop menu */}
          <ul className='hidden md:flex space-x-10 pt-5'>
            <li className='nav-link' onClick={() => handleButtonClick("home")}>
              /home
              <span className='badge relative bottom-4 right-3 text-xs text-folly dark:text-green-dark'>
                01
              </span>
            </li>
            <li className='nav-link' onClick={() => handleButtonClick("about")}>
              /about
              <span className='badge relative bottom-4 right-3 text-xs text-folly dark:text-green-dark'>
                02
              </span>
            </li>
            <li className='nav-link' onClick={() => handleButtonClick("work")}>
              /work
              <span className='badge relative bottom-4 right-3 text-xs text-folly dark:text-green-dark'>
                03
              </span>
            </li>
            <li
              className='nav-link'
              onClick={() => handleButtonClick("contact")}
            >
              /contact
              <span className='badge relative bottom-4 right-3 text-xs text-folly dark:text-green-dark'>
                04
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
