// import Head from next to customize title and meta description
import Head from "next/head";
// import image
import Image from "next/image";
// nextjs routing link
import Link from "next/link";
// import carDealership image
import centerImg from "../public/assets/dbn-events-1.png";
import { RiRadioButtonFill } from "react-icons/ri";

// carDealership project information
const center = () => {
  return (
    <>
      <Head>
        <title>Durban Web Designers</title>
        <meta name="description" content="Website, web designers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full overflow-hidden">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />

          {/* project background image */}
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={centerImg}
            alt="/"
          />

          {/* overlay text */}
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Durban Convention Center</h2>
            <h3>React JS / Contentful CMS / CSS / HTML</h3>
          </div>
        </div>

        {/* project description */}
        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p className="uppercase tracking-wider text-[#1A5276]">Project</p>
            <h2 className="py-2">Overview</h2>
            <br />

            <p>
              This is a car dealership web application, where customers
              can browse and see which cars are available at the dealership, they can filter
              using car prices, brands, and model of cars. I developed this application using React
              Context API and implemented Contentful Headless CMS to fetch cars data.
            </p>

            {/* links to github and live code */}
            <a
              href="https://github.com/willtech-1/auto-setters"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Code</button>
            </a>
            <a
              href="https://auto-setters.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>

          {/* project tech stack */}
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> HTML
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> CSS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Javascript
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> ReactJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Contentful Headless CMS
                </p>
              </div>
            </div>
          </div>

          {/* Back button */}
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default center;