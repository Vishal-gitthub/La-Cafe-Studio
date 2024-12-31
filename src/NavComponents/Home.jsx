import React, { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import chefLogo from "../LA_Cafe_Images/Home/section-header-sep.png";
import platePng from "../LA_Cafe_Images/Home/platePng.png";

import Loader from "../Loader";
// Lazy load components
const Slider_1 = lazy(() => import("./Home-components/Slider_1"));
const About_us = lazy(() => import("./Home-components/About_us"));
const Services = lazy(() => import("./Home-components/Services"));
const Counters = lazy(() => import("./Home-components/Counters"));
const Menu = lazy(() => import("./Home-components/Menu"));
const Booking = lazy(() => import("./Home-components/Booking"));
const Event = lazy(() => import("./Home-components/Events"));
const Testimonials = lazy(() => import("./Home-components/Testimonials"));

export default function Home() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>LA Cafe - Premium Dining Experience</title>
        <meta
          name="description"
          content="Welcome to LA Cafe - Experience premium dining with our unique dishes, warm ambiance, and exceptional service. Book your table today!"
        />
        <meta
          name="keywords"
          content="LA Cafe, restaurant, fine dining, cuisine, food, reservations"
        />

        {/* OpenGraph Tags */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="LA Cafe - Premium Dining Experience"
        />
        <meta
          property="og:description"
          content="Experience premium dining at LA Cafe"
        />
        <meta property="og:image" content="/la-cafe/public/logo.jpg" />
        <meta property="og:url" content="https://lacafe.com" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LA Cafe - Premium Dining" />
        <meta
          name="twitter:description"
          content="Experience premium dining at LA Cafe"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lacafe.com" />
      </Helmet>

      <Suspense fallback={<Loader />}>
        <main>
          <Slider_1 />
          <About_us />
          <section className="relative surprise-bg">
            <h1 className="bg-black/40 pt-40 pb-[340px] font-greatVibes text-4xl text-center text-white sm:text-6xl lg:text-8xl">
              Surprise For Your Plate
            </h1>
            <img
              src={chefLogo}
              className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2"
              alt="Chef Logo Separator"
              loading="lazy"
              width="150"
              height="150"
            />
            <img
              src={platePng}
              className="top-[70%] left-1/2 absolute w-32 -translate-x-1/2 -translate-y-1/2"
              alt="Decorative Plate"
              loading="lazy"
              width="300"
              height="300"
            />
          </section>
          <Services />
          <Counters />
          <section className="pt-20 text-center">
            <h1 className="font-greatVibes text-4xl text-customGold sm:text-5xl lg:text-8xl">
              This Week Special
            </h1>
            <h3 className="py-4 font-raleway font-semibold text-2xl">
              MENU CARD
            </h3>
          </section>
          <Menu />
          <Booking />
          <Event />
          <Testimonials />
        </main>
      </Suspense>
    </>
  );
}
