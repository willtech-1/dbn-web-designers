import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
// import ReactWhatsapp from "react-whatsapp";
// import { IoLogoWhatsapp } from "react-icons/io";
import { Link } from "react-scroll";
import data from "./homeSliderData";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import { RxDotFilled, RxDot } from "react-icons/rx";
import whatsappPng from "../public/assets/whatsapp.png";
const HomePage = () => {
  // state
  const [sliderData, setSliderData] = useState(data);

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
      
    },
    {
      url: "https://images.unsplash.com/photo-1485841890310-6a055c88698a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setCurrentIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > sliderData.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [currentIndex]);

  return (
    <div  id="homePage" className="w-full h-screen text-center">
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-cover rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {currentIndex === 0 && (
          <div>
            <p className="absolute tracking-widest lg:text-xl text-center uppercase text-[#4BB3C5] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Get a Website
            </p>
            <p className="absolute tracking-widest lg:text-lg text-center uppercase text-[#1C1E1A] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Packages from R300 to R1000
            </p>
            <p className="absolute sm:text-red  lg:text-xl text-center tracking-widest uppercase text-[#142124] bottom-72 left-1/2 -translate-x-1/2">
              Passionate about bringing clients ideas to life.
            </p>
          </div>
        )}
        {currentIndex === 1 && (
          <div>
            <p className="absolute tracking-widest lg:text-xl text-center uppercase text-[#4BB3C5] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
              E-Commerce
            </p>
            <p className="absolute uppercase text-center lg:text-lg tracking-widest text-[#1C1E1A] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Appear to larger demographic
            </p>
            <p className="absolute tracking-widest text-center lg:text-xl uppercase text-[#142124] bottom-72 left-1/2 -translate-x-1/2">
              More visibility lead to increase in revenue.
            </p>
          </div>
        )}
        {currentIndex === 2 && (
          <div>
            <p className="absolute tracking-widest lg:text-xl text-center uppercase text-[#4BB3C5] top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Pay once-off
            </p>
            <p className="absolute uppercase tracking-widest lg:text-lg text-center text-[#1C1E1A] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              Advance Websites
            </p>
            <p className="absolute tracking-widest text-center lg:text-xl uppercase text-[#142124] bottom-72 left-1/2 -translate-x-1/2">
              Our mission has been to do exceptional work.
            </p>
          </div>
        )}

        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-zinc-400 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-zinc-400 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          <div className="text-2xl cursor-pointer">
            {currentIndex === 0 ? <RxDotFilled /> : <RxDot />}
          </div>
          <div className="text-2xl cursor-pointer">
            {currentIndex === 1 ? <RxDotFilled /> : <RxDot />}
          </div>
          <div className="text-2xl cursor-pointer">
            {currentIndex === 2 ? <RxDotFilled /> : <RxDot />}
          </div>
        </div>
        <div>
          <ReactWhatsapp
            number="+27 677827144"
            message="I want to choose a plan but I have an enquiry"
          >
            <Image src={whatsappPng} alt="whatsapp" className="bg-[#F4F6F6] rounded-lg" />
          </ReactWhatsapp>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
