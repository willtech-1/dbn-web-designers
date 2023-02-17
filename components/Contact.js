// import react
import { useState, useRef } from "react";
// import emailjs
import emailjs from "@emailjs/browser";
// import image next

import Image from "next/image";
// import react scroll link
import { Link } from "react-scroll";
// react icons
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill, BsTelephoneOutboundFill } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
// contact image
import webDev from "../public/assets/app.svg";
// import modal
import Modal from "./Modal";


// contact form component
const Contact = () => {
  // form
  const form = useRef();
  // contact form state
  const [formValues, setFormValues] = useState({
    firstName: "",
    user_email: "",
    tel: "",
    message: "",
  });

  //modal state
  const [modalOpen, setModalOpen] = useState(false);

  //modal text
  const [modalText, setModalText] = useState("");

  //toggle modal
  const close = () => setModalOpen(false);

  //handleChage function
  const handleChange = (e) => {
    setFormValues((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  };

  //   handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();

    // emaijs
    emailjs
      .sendForm(
        "service_xe74ik9",
        "template_fdkf091",
        form.current,
        "user_QPtIsrOgk7doKX6SZqBfG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log("error =>" + error.text);
        }
      );

      // modal logic
      // if sends valid values 
    if (formValues.firstName && formValues.message && formValues.tel) {
      setModalOpen(!modalOpen);
      setModalText("Message sent successfully!");
      setFormValues({ firstName: "", user_email: "", message: "", tel: "" });
      // if user user sends empty input values or invalid credentials 
    } else {
      setModalOpen(true);
      setModalText("Please enter valid values!");
    }
  };
  return (
    <>
      <div id="contact" className="w-full sm:h-screen pt-2">
        <div className="max-w-[1240px] m-auto px-2 py-2 w-full ">
          <p className="uppercase text-5xl tracking-widest text-[#1A5276]">
            Contact
          </p>

          <p className="py-2 text-xl tracking-widest uppercase text-[#1A5276]">
            Get In Touch
          </p>
          <div className="grid sm:grid-cols-5 gap-8">
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="lg:p-4 h-full ">
                {/* contact image */}
                <div>
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={webDev}
                    alt="/"
                  />
                </div>
                <br />
                <br />

                <div>
                  <h2 className="py-2 tracking-wider">Afile Digital</h2>
                  <br />
                  <p className="py-2 tracking-wider">Network</p>
                  <p className="py-4 tracking-wider">Let&apos;s Get In Touch</p>
                  <div className="flex space-x-3 py-2">
                    <p>
                      <BsTelephoneOutboundFill />
                    </p>
                    <p>+27 67 782 7144</p>
                  </div>
                  <div className="flex space-x-3 py-4">
                    <p>
                      <MdEmail />
                    </p>
                    <p>afiledigital@outlook.com</p>
                  </div>
                </div>

                {/* social media icons */}
                <div>
                  <p className="uppercase pt-8 tracking-wider uppercase text-[#5651e5]">
                    Connect With Us
                  </p>
                  <div className="flex items-center justify-between py-4">
                    
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaFacebook />
                      </div>
                    </a>

                    <a
                      href="https://www.instagram.com/afile_digital/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <FaInstagram />
                      </div>
                    </a>

                    <a href='https://www.outlook.com'
                    target="_blank"
                    rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <MdEmail />
                      </div>
                    </a>

                    <a
                      href="https://www.gmail.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                        <BsFillPersonLinesFill />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tailwind form */}
            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form onSubmit={handleSubmit} ref={form}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="firstName"
                        onChange={handleChange}
                        value={formValues.firstName}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="tel"
                        name="tel"
                        onChange={handleChange}
                        value={formValues.tel}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="user_email"
                      onChange={handleChange}
                      value={formValues.user_email}
                    />
                  </div>

                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      className="border-2 rounded-lg p-3 border-gray-300"
                      rows="10"
                      name="message"
                      onChange={handleChange}
                      value={formValues.message}
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Modal component conditional rendering*/}
          {modalOpen && (
            <Modal modalOpen={modalOpen} handleClose={close} text={modalText} />
          )}

          {/* scroll up button with smooth scroll */}
          <div className="flex justify-center py-12">
            <Link to="homePage" smooth={true} duration={800}>
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;


