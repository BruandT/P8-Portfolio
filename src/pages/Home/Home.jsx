import Mouse from "../../components/Mouse/Mouse";
import Stack from "../../components/Stack/Stack";
import Card from "../../components/Card/Card";
import datas from "../../data/Stack.json";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/works?populate=*", {
      method: "GET",
      headers: {
        Accept: "Application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const postsArray = response.data;
        setPosts(postsArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <main className='w-full bg-skin-bg-base text-skin-base h-auto flex flex-col items-center'>
        {/*  Debut partie supp du site */}
        <section className='w-full h-screen pt-40 px-10 flex flex-col items-center linear-bg'>
          <div className='bg-skin-bg-color/80 flex items-center justify-center w-2/3 h-80 mb-20 max-md:w-full '>
            <div className='flex flex-col items-center'>
              <h1 className='text-6xl max-md:text-4xl text-center'>
                {/* Machine a ecrire */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter.typeString("THOMAS BRUAND").start();
                  }}
                />
              </h1>
              <h2 className='text-4xl uppercase max-md:text-2xl'>
                web developer
              </h2>
            </div>
          </div>
          {/* Fin partie supp du site */}
          {/* SVG scroll */}
          <Mouse />
        </section>
        {/* Debut partie about */}
        <section
          id='about'
          className='w-2/3 h-full flex flex-col pt-20 items-center max-md:w-full'
        >
          <h2 className='text-skin-base text-6xl font-semibold mb-5 max-md:text-4xl'>
            About me
          </h2>
          <div className="w-10 h-2 mb-28 rounded bg-skin-bg-color"></div>
          <div className='flex items-center'>
            <p id="hover-text" className='w-full text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consectetur inventore quis rem? Cum quos accusamus quisquam! Ut
              recusandae quod eaque nobis, impedit ipsum velit quis, est eveniet
              totam id ad pariatur neque exercitationem error sint amet dicta
              nostrum beatae numquam et hic! Accusantium eveniet et error
              commodi voluptas earum maxime.
            </p>
            <div className='w-1/2 flex flex-col justify-center items-center max-lg:hidden'>
              <img className='w-2/3' src='./assets/image/Illust.png' alt='' />
            </div>
          </div>
          <div className='min-w-2/3 grid grid-cols-3 grid-rows-1 mt-56 mb-40 max-md:w-full max-md:grid-cols-1 max-md:grid-rows-3'>
            {datas.map((data) => {
              const { id, title, description, image, alt } = data;
              return (
                <Stack
                  key={id}
                  title={title}
                  description={description}
                  image={image}
                  alt={alt}
                />
              );
            })}
          </div>
        </section>
        {/* Fin partie about */}
        {/* Debut partie work */}
        <section
          id='work'
          className='flex flex-col items-center linear-bg'
        >
          <div className="w-2/3 h-full flex flex-col pt-24 items-center max-md:w-full max-md:h-full">
            <h2 className='text-skin-base text-6xl font-semibold mb-6 max-md:text-4xl'>
              Work
            </h2>
            <div className="w-10 h-2 mb-28 rounded bg-skin-bg-color"></div>
            <div className='w-full h-full flex'>
              {isLoading ? (
                <p>Loading..</p>
              ) : (
                <div className='h-screen flex flex-row flex-wrap max-lg:flex-col max-lg:flex-nowrap'>
                  {posts.map((post) => (
                    <Card key={post.id} post={post} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
        {/* Fin partie work */}
      </main>   
    </>
  );
}

export default Home;
