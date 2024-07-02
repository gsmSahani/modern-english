import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import Layout from "./pages/Layout.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ThemeProvider } from "./helper/ThemeContext.jsx";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeShimmer from "./components/Shimmer/HomeShimmer.jsx";
import AboutShimmer from "./components/Shimmer/AboutShimmer.jsx";
import CoursesShimmer from "./components/Shimmer/CourseShimmer.jsx";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const About = lazy(() => import("./components/About/About.jsx"));
const Courses = lazy(() => import("./components/Courses/Courses.jsx"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route 
        path="" 
        element={
          <Suspense fallback={<HomeShimmer />}>
            <Home />
          </Suspense>
        } 
      />
      <Route 
        path="/about" 
        element={
          <Suspense fallback={<AboutShimmer />}>
            <About />
          </Suspense>
        } 
      />
      <Route 
        path="/courses" 
        element={
          <Suspense fallback={<CoursesShimmer />}>
            <Courses />
          </Suspense>
        } 
      />
    </Route>
  )
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught in Error Boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
