import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes, Outlet } from "react-router-dom";
import Navbar from "./NavComponents/Navbar";
import Footer from "./NavComponents/Footer";
import Loader from "./Loader";
import Gallery from "./NavComponents/Gallery";
import ScrollToTop from "./ScrollToTop";
import Contact from "./NavComponents/Home-components/Contact";
// Lazy load components
const Home = lazy(() => import("./NavComponents/Home"));
const About = lazy(() => import("./NavComponents/About"));
const Menu = lazy(() => import("./NavComponents/Menu"));

const Layout = () => (
  <>
    <Navbar />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu showImage={true} />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
