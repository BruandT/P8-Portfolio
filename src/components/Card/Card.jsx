import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    width: "65%",
    height: "80%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#141C1A",
  },
};

Modal.setAppElement("#root");

const Card = ({ post }) => {
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
      {/*Container de Card  */}
      <div
        className='card-overlay w-1/2 h-1/2 box-border p-3 rounded max-lg:w-full'
        key={post.id}
      >
        <img
          className='card-image w-full h-full rounded'
          src={`http://localhost:1337${post.attributes.card.data.attributes.url}`}
          alt={post.attributes.card.data.attributes.name}
        />
        <div
          onClick={openModal}
          className='card-hover w-full h-full flex flex-col items-center justify-center relative bottom-full rounded'
        >
          <h2 className='text-xl'>{post.attributes.title}</h2>
          <p className='text-xl relative top-44 left-48 text-green-dark max-lg:left-0 max-lg:top-20 '>
            Voir plus &#10132;
          </p>
        </div>
        {/* ouverture de la modale */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel={`Modal ${post.attributes.title}`}
        >
          <div className='w-full h-full flex flex-col'>
            {/* div modal top */}
            <div className='flex gap-3 mb-3 max-lg:flex-col'>
              {/* div banner */}
              <div className='w-1/2 mt-8 max-lg:w-full max-lg:mt-16'>
                <img
                  className='rounded'
                  src={`http://localhost:1337${post.attributes.card.data.attributes.url}`}
                  alt=''
                />
              </div>
              {/* div texte */}
              <div className='text-white w-1/2 p-8 max-lg:w-full max-lg:p-0 max-lg:py-5'>
                <h2 className='text-3xl mb-3 max-lg:text-4xl'>{post.attributes.title}</h2>
                <div className="flex items-center mb-3">
                <p className='text-xl'>Année: <span className="text-base">{post.attributes.year}</span></p>
                </div>                
                <h3 className='text-xl mb-2'>Description:</h3>
                <p className='mb-3'>
                  {post.attributes.description}
                </p>
               
                <div>
                  <div>
                    <p className='text-xl mb-2'>Technologies utilisées: </p>
                    <div className='flex flex-wrap gap-3'>
                    {post.attributes.tag1  ? <p className='border-2 text-green-dark rounded py-1 px-3'>{post.attributes.tag1}</p> : ' '}
                    {post.attributes.tag2  ? <p className='border-2 text-green-dark rounded py-1 px-3'>{post.attributes.tag2}</p> : ' '}
                    {post.attributes.tag3  ? <p className='border-2 text-green-dark rounded py-1 px-3'>{post.attributes.tag3}</p> : ' '}
                    {post.attributes.tag4  ? <p className='border-2 text-green-dark rounded py-1 px-3'>{post.attributes.tag4}</p> : ' '}
                    </div>
                  </div>
                </div>
                {/* SVG pour fermer la modale */}
                <button className='absolute top-5 right-5' onClick={closeModal}>
                  <svg
                    className='h-10 w-10 text-green-dark max-lg:h-8 max-lg:w-8'
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
            {/* div modal bot */}
            <div className='w-full flex justify-start flex-wrap gap-3 max-lg:justify-center'>
              {Array.isArray(post.attributes.modal.data) &&
              post.attributes.modal.data.length > 0 ? (
                post.attributes.modal.data.map((image, index) => (
                  <img
                    key={index}
                    className='image-w-modal object-fill rounded max-lg:w-full'
                    src={`http://localhost:1337${image.attributes.url}`}
                    alt={`Image du projet ${index + 1}`}
                  />
                ))
              ) : (
                <p>Aucune image disponible</p>
              )}
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Card;
