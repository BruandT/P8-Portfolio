import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    position: "absolute",
    width: "95%",
    height: "95%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 999,
  },
  overlay: {
    backgroundColor: "#00000052",
    zIndex: 998, // Z-index pour l'overlay de la modale
  },
  modalContent: {
    position: "relative", // Modifiez cette ligne pour permettre la gestion de z-index
    zIndex: 1000, // Z-index pour le contenu de la modale
  },
  banner: {
    position: "relative", // Modifiez cette ligne pour permettre la gestion de z-index
    zIndex: 1001, // Z-index pour la bannière
  },
  closeButton: {
    position: "absolute",
    top: "-15px",
    right: "-10px",
    zIndex: 1002, // Z-index pour le bouton de fermeture
  },
};
Modal.defaultStyles.overlay.backgroundColor = "#00000052";
Modal.defaultStyles.content.backgroundColor = "#ffffff";

Modal.setAppElement("#root");

const Card = ({
  images,
  name,
  title,
  year,
  description,
  tags,
  roadmap,
  problems,
  link,
  video,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModal() {
    setModalIsOpen(true);
    document.querySelector("header").style.visibility = "hidden";
  }
  function closeModal() {
    setModalIsOpen(false);
    document.querySelector("header").style.visibility = "visible";
  }

  return (
    <>
      {/* Container de Card  */}
      <div className='h-80 max-sm:h-56 card-overlay box-border rounded'>
        <img
          className='card-image w-full h-full rounded'
          src={images}
          alt={name}
        />
        <div
          onClick={openModal}
          className='card-hover w-full h-full flex flex-col items-center justify-center relative bottom-full rounded'
        >
          <h2 className='text-4xl text-skin-color'>{title}</h2>
          <div className='w-full h-8 relative top-28 left-0 max-xl:left-0 max-lg:top-28 max-sm:left-0 max-sm:top-16 flex justify-end'>
            <p className='text-xl text-skin-color mr-5'>Voir plus &#10132;</p>
          </div>
        </div>
        {/* ouverture de la modale */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={`Modal ${title}`}
        >
          <div
            className='w-full h-full p-8 flex flex-col max-xl:p-0'
            style={customStyles.modalContent}
          >
            {/* title */}
            <h2 className='text-skin-base text-4xl max-sm:text-2xl'>{title}</h2>
            {/* div modal top */}
            <div className='flex gap-3 max-xl:flex-col'>
              {/* div banner */}
              <div
                className='w-1/2 flex mt-8 max-xl:w-full max-xl:mt-16 max-sm:mt-6'
                style={customStyles.banner}
              >
                <img
                  className='rounded xl:ml-5 w-5/6 max-xl:w-full'
                  src={images}
                  alt=''
                />
              </div>
              {/* div texte */}
              <div className='text-skin-base w-1/2 p-8 max-xl:w-full max-xl:p-0 max-xl:py-5 max-sm:py-0'>
                {/* div year */}
                <div className='flex items-center mb-3'>
                  <p className='text-xl max-sm:text-lg'>
                    Année: <span className='text-base'>{year}</span>
                  </p>
                </div>
                {/* div description */}
                <div>
                  <h3 className='text-xl mb-2 max-sm:text-lg'>Description:</h3>
                  <p className='mb-3'>{description}</p>
                </div>
                {/* div tag */}
                <div>
                  <p className='text-xl max-sm:text-lg mb-2 max-sm:mb-0'>
                    Technologies utilisées:{" "}
                  </p>
                  <div className='flex flex-wrap gap-3'>
                    {tags.map((tag, index) => (
                      <img
                        key={index}
                        className='w-16 h-16 m-2 max-sm:w-10 object-contain'
                        src={tag.imageUrl}
                        alt={`Logo ${tag.title}`}
                      />
                    ))}
                  </div>
                </div>
                {/* SVG pour fermer la modale */}
                <button
                  onClick={closeModal}
                  style={customStyles.closeButton}
                >
                  <svg
                    className='h-10 w-10 text-skin-color max-xl:h-8 max-xl:w-8'
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
                </button>
              </div>
            </div>
            <hr className='w-full my-10 bg-skin-bg-color' />
            {/* div modal bot */}
            <div className='w-full flex max-xl:flex-col-reverse justify-between'>
              <div className='w-1/2 px-8 flex flex-col justify-between max-xl:w-full max-xl:px-0'>
                <div className='w-full max-xl:mt-5'>
                  <h3 className='text-2xl text-skin-base mb-4 '>
                    Déroulement du projet :
                  </h3>
                  <p className='text-skin-base mb-3'>{roadmap}</p>
                </div>
                <div className='w-full max-xl:mt-5 max-xl:mb-5'>
                  <h3 className='text-2xl text-skin-base mb-4'>
                    Problématique :
                  </h3>
                  <div>
                    {/* Problematique */}
                    {problems ? (
                      <ul className='mb-3'>
                        {problems.split("+").map((problem, index) => (
                          <li className='text-skin-base' key={index}>
                            - {problem}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className='text-skin-base'>
                        Aucune problématique disponible.
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className='w-1/2 flex flex-col-reverse justify-center max-xl:w-full'>
                <div className='mt-3 w-full flex items-center'>
                  <h4 className='text-lg text-skin-base'>Lien du projet :</h4>
                  <a href={link} target='_blank' rel='noopener noreferrer'>
                    <button className='ml-3 px-2 bg-skin-bg-color text-skin-light rounded'>                      
                      Cliquez-ici !
                    </button>
                  </a>
                </div>
                <iframe
                  className='w-full h-80 max-sm:h-40'
                  src={video}
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Card;
