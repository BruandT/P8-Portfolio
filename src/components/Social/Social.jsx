import React from "react";

const Social = ({ post }) => {
  return (
    <>
      <div className="flex justify-center" id={post.id}>
        <a
          className='w-40 flex flex-row-reverse justify-end items-center p-3 gap-3 max-lg:p-2 max-lg:gap-0 max-lg:flex-col-reverse max-sm:flex-row-reverse max-sm:gap-3'
          href={post.attributes.link}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h3 className="text-xl text-skin-light max-lg:text-base">{post.attributes.title}</h3>
          <img className="w-8 h-8" src={`${post.attributes.image.data.attributes.url}`} alt={`Logo ${post.attributes.title}`} />
        </a>
      </div>
    </>
  );
};

export default Social;
