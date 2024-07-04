import React from "react";
import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";
import Logo from "../../assets/image/logo_modern_englsih_classes-removebg-preview.png";

const Footer = () => {
  const SocialLink = ({ href, icon, label }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-gray-800 rounded-full inline-block p-2"
        aria-label={label}
      >
        {icon}
      </a>
    );
  };

  return (
    <footer className="dark:bg-black dark:text-white bg-gray-900 text-white overflow-hidden">
      <div className="container px-4 py-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <div>Made by ❣ Gautam Sahani</div>
        </div>
        <div className="text-center mt-4 md:mt-0">
          © All Rights Reserved Modern Spoken Classes 2024
        </div>
        <div className="text-center">
          <div className="flex ">
            <SocialLink
              href="https://t.ly/nJuQe"
              icon={
                <FaFacebook
                  className="text-xl hover:bg-blue-500 rounded-full p-2"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              }
              label="Visit us on Facebook"
            />
            <SocialLink
              href="https://t.ly/wc2Ey"
              icon={
                <FaInstagram
                  className="text-xl text-gray-500 rounded-full p-2"
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              }
              label="Follow us on Instagram"
            />
          </div>
        </div>
      </div>
      {/* logo address and contact footer details */}
      <div className="container flex flex-col">
        <div className="mx-auto">
          <img
            src={Logo}
            alt="Modern Spoken Classes Logo"
            className="h-12 md:h-16 text-center "
          />
        </div>
        <div className="flex justify-center mt-4">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-center md:text-left">
            <p>
              Station rd, Opp, Center Point, Above Collegian Tailor, BalaKhadi,
              Killa-Pardi Gujarat 396125
            </p>
          </div>
        </div>
        <div className="flex mx-auto mt-1 ">
          <FaPhone className="text-xl text-blue-600 animate-ring" />
          <span className="ml-2 pb-4">9978764266</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
