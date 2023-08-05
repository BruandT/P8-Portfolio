import { useState, useEffect, React } from "react";

const Mouse = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
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

  const handleButtonClick = () => {
    // Trouver l'élément cible par son identifiant (ID) ou en utilisant une référence React (ref)
    const targetElement = document.getElementById("about"); // Remplacez 'elementId' par l'ID de l'élément cible

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth", // Fait le défilement en douceur
        block: "start", // Défilement vers le haut de l'élément cible
      });
    }
  };

  return (
    <>
      <button
        id='mouse'
        className='w-32 h-32 mt-32 mb-20 animate-pulse'
        onClick={handleButtonClick}
      >
        <img
          src={
            isDarkMode
              ? "./assets/icon/mouse.svg"
              : "./assets/icon/mouse-dark.svg"
          }
          alt='Icone de souris pour scroll'
        />
      </button>
    </>
  );
};

export default Mouse;
