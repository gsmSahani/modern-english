import React, { useContext, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import ThemeContext from "../../helper/ThemeContext";

// Lazy-loaded components
const Hero = React.lazy(() => import("../Hero/Hero"));
const About = React.lazy(() => import("../About/About"));
const Cards = React.lazy(() => import("../Cards/Cards"));
const Testimonials = React.lazy(() => import("../Testimonials/Tesitimonials"));

const Home = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Helmet>
        <title>Home | Spoken English Classes in Pardi Valsad, Gujarat</title>
        <meta
          name="description"
          content="Join our spoken English classes in Pardi Valsad, Gujarat, and enhance your English speaking skills with expert coaching."
        />
      </Helmet>
      <Suspense
        fallback={
          <div className="flex flex-col items-center space-y-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 h-96 w-96 animate-pulse rounded-md"
              ></div>
            ))}
          </div>
        }
      >
        <Hero />
        <About />
        <Cards />
        <Testimonials />
      </Suspense>
    </>
  );
};

export default Home;
