import React from "react";
import Profile from "/assets/image/ami_patel.webp";
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
                    className="w-full object-contain rounded-full sm:my-28 md:my-16"
                  />
                </div>
              </div>
              <div className="w-full sm:px-6 sm:my-8 md:px-8 lg:px-8 text-center md:text-left md:w-3/4">
                <h1 className="sm:px-2 playfair-display-sc-bold-italic text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest">
                  Ami Patel
                </h1>

                <p className="text-base sm:text-lg md:text-lg lg:text-xl mt-4 px-4 sm:px-2">
                  Hey there! I'm Ami Patel, a dedicated spoken English teacher
                  with a rich background in language education. From 2007 to
                  2013, I worked as an English teacher, helping students develop
                  their language skills and gain confidence. This valuable
                  experience laid the foundation for my ongoing passion for
                  teaching. Since 2013, I have been guiding students in Pardi
                  Valsad, Gujarat, enhancing their English communication skills
                  through tailored courses and personalized instruction. I
                  graduated with a specialization in English from JP Shroff
                  Valsad College, which has equipped me with the knowledge and
                  skills to effectively support my students. My teaching
                  philosophy centers around creating an engaging and supportive
                  learning environment. I believe in encouraging students to
                  build their confidence, improve their vocabulary, grammar, and
                  public speaking skills. My methods are tailored to meet the
                  unique needs of each student, ensuring they receive the best
                  possible guidance. At Modern Spoken Classes, we offer a range
                  of courses designed to cater to different levels of
                  proficiency. Whether you are a beginner or looking to refine
                  your skills, we have something for everyone. Join us and take
                  the first step towards mastering the English language in a
                  friendly and motivating atmosphere.
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
