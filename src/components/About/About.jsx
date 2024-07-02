import React from "react";
import Profile from "../../assets/image/ami profile.webp";
import { FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { handleWhatsAppMessage } from "../../helper/handleButtonEvents";
const About = () => {
  return (
    <>
      <Helmet>
        <title>Ami Patel | English Coaching in Pardi Valsad</title>
        <meta
          name="description"
          content="Learn more about Ami Patel and her English coaching center in Pardi Valsad, Gujarat. Enhance your English fluency and communication skills."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "",
              "@type": "Person",
              "name": "Ami Patel",
              "jobTitle": "English Teacher",
              "description": "Passionate about teaching English with over 15 years of experience.",
              "url": "",
              "image": "",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9978764266",
                "contactType": "Customer Support"
              }
            }
          `}
        </script>
      </Helmet>
      <div className="dark:bg-gray-600 dark:text-white">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 py-4 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-center rounded-3xl bg-slate-200 dark:bg-black overflow-hidden">
            <div className="py-4 md:py-8 flex flex-col md:flex-row gap-5 justify-center items-center md:items-start">
              <div className="relative  w-full md:w-auto flex justify-center md:justify-start md:pl-8 mb-4 md:mb-0">
                <div className="relative w-40 h-40 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-72 lg:h-72 my-8 sm:my-8">
                  <img
                    src={Profile}
                    alt="Ami Patel - English Teacher at Spoken English Coaching"
                    className="w-full object-contain rounded-full my-4 "
                  />
                </div>
              </div>
              <div className="w-full sm:px-6 sm:my-8 md:px-8 lg:px-8 text-center md:text-left md:w-3/4">
                <h1 className="sm:px-2 playfair-display-sc-bold-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest">
                  Ami Patel
                </h1>

                <p className="text-base sm:text-lg md:text-lg lg:text-xl mt-4 px-4 sm:px-2">
                  Welcome to my spoken English coaching center! I am passionate
                  about teaching and have been dedicated to nurturing English
                  fluency since 2007 at my coaching center. My journey began
                  after graduating with a specialization in English from JP
                  Shroff Valsad College, where I developed a strong foundation
                  in language and communication. Over the years, I've had the
                  privilege of guiding numerous students towards mastering
                  spoken English, combining academic rigor with practical
                  application. My teaching philosophy emphasizes personalized
                  learning, tailored to individual needs and learning styles, to
                  empower students in both professional and social contexts.
                  Whether preparing for interviews, presentations, or enhancing
                  everyday communication skills, my goal is to instill
                  confidence and proficiency in my students, bridging linguistic
                  barriers and fostering meaningful connections.
                </p>

                <div className="flex justify-center sm:justify-start md:justify-start my-3">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    aria-label="Get in Touch"
                    onClick={handleWhatsAppMessage}
                  >
                    <FaWhatsapp />
                    <span>Get in Touch</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
