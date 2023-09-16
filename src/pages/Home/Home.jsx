import Mouse from "../../components/Mouse/Mouse";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const url = "https://portfolio-bt-41d83edce5b3.herokuapp.com";

  useEffect(() => {
    fetch(
      `${url}/api/home?populate=works.card,works.modal,stacks.image,socials.image,works.stacks.image`,
      {
        method: "GET",
        headers: {
          Accept: "Application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        const postsArray = response.data.attributes;
        setPosts(postsArray);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <main className='w-full bg-skin-bg-base text-skin-base h-auto flex flex-col items-center'>
        {/*  Debut partie supp du site */}
        <section className='w-full h-screen pt-64 px-10 flex flex-col items-center linear-bg'>
          <Banner />
          {/* Fin partie supp du site */}
          {/* SVG scroll */}
          <Mouse />
        </section>
        {/* Debut partie about */}
        <section
          id='about'
          className='w-2/3 h-full flex flex-col pt-32 items-center max-md:w-full max-sm:px-4'
        >
          <h2 className='text-skin-base text-6xl font-semibold mb-5 max-md:text-4xl'>
            About me
          </h2>
          <div className='w-10 h-2 mb-28 rounded bg-skin-bg-color'></div>
          <div className='flex items-center'>
            <p className='w-full text-xl sm:px-4'>{posts.about}</p>
            <div className='w-1/2 flex flex-col justify-center items-center max-lg:hidden'>
              <img className='w-2/3' src='./assets/image/Illust.png' alt='' />
            </div>
          </div>
          <div className='logos w-full py-28'>
            <div className='logos-track'>
              <Carousel
                images={posts?.stacks?.data.map((stacks) => ({
                  imageUrl: stacks.attributes.image.data[0]?.attributes.url,
                  title: stacks.attributes.title,
                }))}
              />
            </div>
          </div>
        </section>
        {/* Fin partie about */}
        {/* Debut partie work */}
        <section
          id='work'
          className='w-full flex flex-col pt-32 px-24 items-center linear-bg max-md:px-4'
        >
          <h2 className='text-skin-base text-6xl font-semibold mb-6 max-md:text-4xl'>
            Work
          </h2>
          <div className='w-10 h-2 mb-28 rounded bg-skin-bg-color'></div>
          {/* Les works */}
          <div className='w-full'>
            {isLoading ? (
              <p>Loading..</p>
            ) : (
              <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                {posts?.works?.data.map((post) => (
                  <Card
                    key={post.id}
                    images={post.attributes.card.data.attributes.url}
                    name={post.attributes.card.data.attributes.name}
                    title={post.attributes.title}
                    year={post.attributes.year}
                    description={post.attributes.description}
                    tags={post.attributes.stacks.data.map((test) => ({
                      imageUrl: test.attributes.image.data[0]?.attributes.url,
                      title: test.attributes.title,
                    }))}
                    roadmap={post.attributes.road_map}
                    problems={post.attributes.problem}
                    link={post.attributes.link}
                    video={post.attributes.link_video}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
        {/* Fin partie work */}
      </main>
    </>
  );
}

export default Home;
