import React from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
        <div className="mb-2 md:mb-0 text-center md:text-left">
          Made by ❣ Gautam Sahani
        </div>
        <div className="text-center mb-2 md:mb-0">
          © All Rights Reserved Modern Spoken Classes 2024
        </div>
        <div className="text-center">
          <div className="flex space-x-4">
            <SocialLink
              href="https://facebook.com/your-facebook-page-url"
              icon={
                <FaFacebook
                  className="text-2xl hover:bg-blue-500 rounded-full p-2 "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              }
              label="Visit us on Facebook"
            />
            <SocialLink
              href="https://instagram.com/your-instagram-account-url"
              icon={
                <FaInstagram
                  className="text-2xl text-gray-500 rounded-full p-2 "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              }
              label="Follow us on Instagram"
            />
            <SocialLink
              href="https://wa.me/your-whatsapp-number"
              icon={
                <FaWhatsapp
                  className="text-2xl text-green-500 rounded-full p-2 "
                  style={{ width: "2.5rem", height: "2.5rem" }}
                />
              }
              label="Contact us via WhatsApp"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
