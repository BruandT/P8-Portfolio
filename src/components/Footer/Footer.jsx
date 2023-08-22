import { useEffect, useState } from "react";
import Social from "../../components/Social/Social";



const Footer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/socials?populate=*", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        const postsArray = response.data;
        setPosts(postsArray);
      });
  }, []); 

  return (
    <>
      <footer id='contact' className='flex h-auto max-md:flex-col'>
        <div className='w-1/6 h-auto bg-skin-bg-color max-md:w-full max-md:flex max-md:flex-row-reverse max-md:justify-center'>          
          {posts.map((post) => (
            <Social key={post.id} post={post} />
          ))}
        </div>
        <div className='w-5/6 flex flex-col justify-end items-center bg-skin-bg-base max-md:w-full'>
          <a className='text-2xl text-skin-base max-sm:text-base max-sm:mt-4' href="mailto:thomas.bruand@gmail.com">thomas.bruand@gmail.com</a>
          <p className='text-skin-base mt-8 max-sm:text-sm max-sm:mt-2'>© 2023 Thomas Bruand.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
