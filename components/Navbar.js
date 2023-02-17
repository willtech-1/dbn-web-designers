// hooks
import { useState, useEffect } from "react";
// import react scroll link
import { Link } from "react-scroll";
// react icon for mobile view
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import {
  BsFillPersonLinesFill,
  BsFillTelephoneOutboundFill,
} from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
//import useRouter from next router
import { useRouter } from "next/router";
import logo from "../public/assets/company-logo.png";
import Image from "next/image";

const Navbar = () => {
  // toggle mobile nav state
  const [openNav, setOpenNav] = useState(false);
  // nav shadow state
  const [navShadow, setNavShadow] = useState(false);
  // dynamically navbar background style
  const [navBcg, setNavBcg] = useState("#F4F6F6");
  const [linkColour, setLinkColour] = useState("#1f2837");
  const router = useRouter();

  // useEffect that will run everytime the route changes
  useEffect(() => {
    if (
      router.asPath === "/iTunes" ||
      router.asPath === "/shoppingCart" ||
      router.asPath === "/memoryGame" ||
      router.asPath === "/carDealership"
    ) {
      setNavBcg("transparent");
      setLinkColour("#F4F6F6");
    } else {
      setNavBcg("#F4F6F6");
      setLinkColour("#1f2937");
    }
  }, [router]);

  // toggle nav function
  const handleMenu = () => setOpenNav(!openNav);

  // nav shadow logic
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setNavShadow(true);
      } else {
        setNavShadow(false);
      }
    };

    //add event listener
    window.addEventListener("scroll", handleShadow);
  }, []);

  const myImg = {
    width: "70px",
    cursor: "pointer",
  };
  const myLogo = {
    width: "80px",
    cursor: "pointer",
    marginLeft: "1rem",
  };
  return (
    <>
      <div
        style={{ backgroundColor: `${navBcg}` }}
        className={
          navShadow
            ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
            : "fixed w-full h-20 z-[100]"
        }
      >
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-24">
          {/* portfolio nav logo */}
          <Link to="home" smooth={true} duration={1000}>
            <div className="nav-logo">
              {/* <span className="span1">Web</span>
              <span className="span2">Dev</span> */}
              <Image style={myLogo} src={logo} alt="logo" />
            </div>
          </Link>

          {/* Navbar links with react script smooth scroll */}
          <div>
            <ul className="hidden md:flex">
              <Link to="homePage" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Why Choose Us?
                </li>
              </Link>
              <Link to="ourwork" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Our Work
                </li>
              </Link>
              <Link to="services" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Services
                </li>
              </Link>
              <Link to="testimonials" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Testimonials
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={1000}>
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact Us
                </li>
              </Link>
              <Link>
                <li className="ml-10 text-sm uppercase">
                  <span className="flex">
                    <BsFillTelephoneOutboundFill className="mr-2 mt-1 text-xs" />
                    +27 67 782 7144
                  </span>
                </li>
              </Link>
            </ul>

            {/* mobile navbar */}
            <div
              style={{ color: `${linkColour}` }}
              onClick={handleMenu}
              className="md:hidden"
            >
              <AiOutlineMenu size={25} />
            </div>
          </div>
        </div>

        {/* slide menu for mobile devices */}
        {/* overlay style */}
        <div
          className={
            openNav
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
              : ""
          }
        >
          {/* mobile device menu style slider half way mobile conditional logic*/}
          <div
            className={
              openNav
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
            }
          >
            {/* portfolio logo on mobile devices */}
            <div>
              <div className="flex w-full items-center justify-between">
                <Link to="home" smooth={true} duration={1000}>
                  <div className="nav-logo">
                    <Image style={myImg} src={logo} alt="logo" />
                  </div>
                </Link>

                {/* close mobile menu button */}
                <div
                  onClick={handleMenu}
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>

              {/* text */}
              <div className="border-b border-gray-300 my-4">
                <p className="w-[85%] md:w-[90%] py-4">
                  Let&apos;s build together.
                </p>
              </div>
            </div>

            {/* mobile device links */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link to="home" smooth={true} duration={1000}>
                  <li
                    onClick={() => setOpenNav(false)}
                    className="py-4 text-sm"
                  >
                    Why Choose Us?
                  </li>
                </Link>
                <Link to="ourwork" smooth={true} duration={1000}>
                  <li
                    onClick={() => setOpenNav(false)}
                    className="py-4 text-sm"
                  >
                    Our Work
                  </li>
                </Link>
                <Link to="services" smooth={true} duration={1000}>
                  <li
                    onClick={() => setOpenNav(false)}
                    className="py-4 text-sm"
                  >
                    Services
                  </li>
                </Link>
                <Link to="testimonials" smooth={true} duration={1000}>
                  <li
                    onClick={() => setOpenNav(false)}
                    className="py-4 text-sm"
                  >
                    Testimonials
                  </li>
                </Link>
                <Link to="contact" smooth={true} duration={1000}>
                  <li
                    onClick={() => setOpenNav(false)}
                    className="py-4 text-sm"
                  >
                    Contact
                  </li>
                </Link>
                <Link>
                  <li className="py-4 text-sm">
                    <span className="flex">
                      <BsFillTelephoneOutboundFill className="mr-2 mt-1 text-xs" />{" "}
                      {""} +27 67 782 7144
                    </span>
                  </li>
                </Link>

                <div className="pt-8">
                  <p className="uppercase tracking-widest text-[#5651e5]">
                    Let&#39;s Connect
                  </p>
                </div>

                <div className="flex items-center justify-between py-8 w-full sm:w-[80%]">
                  <a
                    href="https://www.instagram.com/afile_digital/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaInstagram />
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaFacebook />
                    </div>
                  </a>

                  <a
                    href="https://www.outlook.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <MdEmail />
                    </div>
                  </a>

                  <a
                    href="https://www.gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
