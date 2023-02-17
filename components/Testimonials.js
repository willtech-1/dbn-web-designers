import React, { useState } from "react";
import people from "./reviewsData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { HiOutlineArrowNarrowRight, HiOutlineArrowNarrowLeft } from "react-icons/hi";
import Image from "next/image";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div id="testimonials" className="bg-white dark:bg-gray-900 w-full pt-24">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <section className="bg-white dark:bg-gray-900">
          <p className="uppercase text-5xl tracking-wide text-[#1A5276]">
            Testimonials
          </p>
          <br />

          <p className="py-4 text-xl tracking-widest uppercase text-[#1A5276]">
            Reviews
          </p>

         
          <section className="bg-white dark:bg-gray-900">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl font-medium text-gray-900 dark:text-white">
                    {text}
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                 
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    <div className="pr-3 font-medium text-gray-900 dark:text-white">
                      {name}
                    </div>
                    <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                      {job}
                    </div>
                  </div>
                </figcaption>
                <div className="flex justify-center relative top-10">
                  <HiOutlineArrowNarrowLeft onClick={prevPerson} className="mr-3 cursor-pointer text-2xl text-[#817F7E]" />
                  <HiOutlineArrowNarrowRight onClick={nextPerson} className="ml-3 cursor-pointer text-2xl text-[#817F7E]" />
                </div>
                
              </figure>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
};

export default Testimonials;
