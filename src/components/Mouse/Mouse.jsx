import { React } from "react";

const Mouse = () => {
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
        className='w-32 h-32 mt-32 mb-20 animate-pulse max-lg:mt-24'
        onClick={handleButtonClick}
      >
        <img
          src={"./assets/icon/mouse.svg"}
          alt='Icone de souris pour scroll'
        />
      </button>
    </>
  );
};

export default Mouse;
