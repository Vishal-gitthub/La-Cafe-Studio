import React, { useEffect } from "react";
import MenuSection from "./Home-components/Menu";
import header from "../LA_Cafe_Images/Home/about-section-image/portions-various-delicious-ovenbaked-pizzas.jpg";
import { Link } from "react-router-dom";
import Booking from "./Home-components/Booking";
import menuMock1 from "../LA_Cafe_Images/Home/Menu-section-image/menu-card-mock.png";
import menuMock2 from "../LA_Cafe_Images/Home/Menu-section-image/menu-card-mock2.png";
import chefLogo from "../LA_Cafe_Images/Home/section-header-sep.png";
import { Helmet } from "react-helmet";

// gsap imports for animations
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const warmDishes = [
  {
    name: "GRILLED VEGGIE SUPREME",
    description: "Zucchini, Eggplant, Bell Peppers, Mozzarella",
    price: 75,
    image:
      "https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "SPICY BBQ RIBS",
    description: "Slow-cooked Ribs, BBQ Sauce, Caramelized Onions",
    price: 90,
    image:
      "https://images.pexels.com/photos/3756525/pexels-photo-3756525.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CHEESY MUSHROOM MELT",
    description: "Mushrooms, Mozzarella, Garlic Butter",
    price: 70,
    image:
      "https://images.pexels.com/photos/1435823/pexels-photo-1435823.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "HERB ROAST CHICKEN",
    description: "Chicken Thighs, Fresh Herbs, Garlic, Olive Oil",
    price: 85,
    image:
      "https://images.pexels.com/photos/1704731/pexels-photo-1704731.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "SEASIDE PAELLA",
    description: "Shrimp, Clams, Chorizo, Saffron Rice",
    price: 95,
    image:
      "https://images.pexels.com/photos/7110491/pexels-photo-7110491.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CLASSIC LASAGNA",
    description: "Ground Beef, Ricotta, Marinara, Mozzarella",
    price: 80,
    image:
      "https://images.pexels.com/photos/59943/pexels-photo-59943.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "HOT & SPICY WINGS",
    description: "Buffalo Sauce, Ranch Dip, Fresh Celery",
    price: 65,
    image:
      "https://images.pexels.com/photos/5905512/pexels-photo-5905512.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "SWEET TERIYAKI CHICKEN",
    description: "Teriyaki Glazed Chicken, Sesame Seeds, Rice",
    price: 88,
    image:
      "https://images.pexels.com/photos/7191981/pexels-photo-7191981.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "GREEK LAMB PLATTER",
    description: "Grilled Lamb, Tzatziki, Pita Bread, Salad",
    price: 110,
    image:
      "https://images.pexels.com/photos/5793736/pexels-photo-5793736.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CREAMY SHRIMP PASTA",
    description: "Shrimp, Alfredo Sauce, Fettuccine, Parmesan",
    price: 95,
    image:
      "https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CRISPY FISH TACOS",
    description: "Fried Cod, Slaw, Lime, Spicy Mayo",
    price: 78,
    image:
      "https://images.pexels.com/photos/60062/pexels-photo-60062.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "PEPPERONI PIZZA POCKET",
    description: "Pepperoni, Mozzarella, Marinara, Pastry Shell",
    price: 50,
    image:
      "https://images.pexels.com/photos/1639563/pexels-photo-1639563.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "PUMPKIN RISOTTO",
    description: "Roasted Pumpkin, Arborio Rice, Parmesan",
    price: 65,
    image:
      "https://images.pexels.com/photos/1565981/pexels-photo-1565981.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "GARLIC BUTTER SHRIMP",
    description: "Shrimp, Garlic Butter, Lemon, Parsley",
    price: 90,
    image:
      "https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?w=100&h=100&fit=crop",
  },
];

const dinnerDishes = [
  {
    name: "STEAK DIANE",
    description: "Seared Beef Steak, Creamy Mushroom Sauce, Herb Potatoes",
    price: 120,
    image:
      "https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "BUTTER CHICKEN CURRY",
    description: "Creamy Tomato Sauce, Grilled Chicken, Naan Bread",
    price: 110,
    image:
      "https://images.pexels.com/photos/1565984/pexels-photo-1565984.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "GRILLED SALMON FILLET",
    description: "Lemon Herb Butter, Asparagus, Wild Rice",
    price: 130,
    image:
      "https://images.pexels.com/photos/158779/pexels-photo-158779.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "BEEF WELLINGTON",
    description: "Tenderloin, Mushroom Duxelles, Puff Pastry",
    price: 150,
    image:
      "https://images.pexels.com/photos/5718121/pexels-photo-5718121.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "LOBSTER BISQUE",
    description: "Creamy Lobster Soup, Garlic Croutons, Chives",
    price: 140,
    image:
      "https://images.pexels.com/photos/1216249/pexels-photo-1216249.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "VEGETARIAN PAD THAI",
    description: "Rice Noodles, Tofu, Tamarind Sauce, Peanuts",
    price: 95,
    image:
      "https://images.pexels.com/photos/461350/pexels-photo-461350.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "ROASTED DUCK BREAST",
    description: "Orange Glaze, Mashed Sweet Potatoes, Green Beans",
    price: 135,
    image:
      "https://images.pexels.com/photos/60058/pexels-photo-60058.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "THREE-CHEESE GNOCCHI",
    description: "Gnocchi, Parmesan, Ricotta, Mozzarella, Tomato Sauce",
    price: 85,
    image:
      "https://images.pexels.com/photos/58722/pexels-photo-58722.jpeg?w=100&h=100&fit=crop",
  },
];

export default function Menu() {
  useEffect(() => {
    gsap.fromTo(
      ".fromLeft",
      {
        x: "-100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "ease.out(1, 0.3)",
        scrollTrigger: {
          trigger: ".fromLeft",
          start: "top 80%",
          end: "top 50%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
    gsap.fromTo(
      ".fromRight",
      {
        x: "100%",
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        duration: 1,
        ease: "ease.out(1,0.3)",
        scrollTrigger: {
          trigger: ".fromRight",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);
  return (
    <>
      <Helmet>
        <title>LA Cafe - Warm Dishes Menu</title>
        <meta
          name="description"
          content="Discover our selection of warm dishes at LA Cafe. From traditional favorites to modern cuisine."
        />
        <meta
          name="keywords"
          content="LA Cafe, warm dishes, restaurant menu, dining, cuisine"
        />
        <meta property="og:title" content="LA Cafe - Menu" />
        <meta
          property="og:description"
          content="Explore our warm dishes menu"
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div>
        <div
          style={{ backgroundImage: `url(${header})` }}
          className="bg-cover bg-no-repeat bg-center"
        >
          <div className="bg-black/40 py-36 text-center text-white">
            <h1 className="font-semibold text-3xl">ABOUT</h1>
            <div className="flex justify-center text-lg">
              <Link to="/" className="font-bold">
                HOME &nbsp;
              </Link>
              / &nbsp; <h1 className="font-semibold text-customGold">MENU</h1>
            </div>
          </div>
        </div>

        {/* -------------------------  menu  CARD one ----------------- */}

        <div className="pt-20">
          <h1 className="font-greatVibes text-7xl text-center text-customGold">
            So Good Break Fast
          </h1>
          <p className="font-raleway font-semibold text-3xl text-center">
            Break Fast
          </p>
          <div className="flex justify-center items-center pt-4">
            <img src={chefLogo} className="" alt="" />
          </div>
        </div>
        <MenuSection showImage={false} />
        {/* --------------------------------------------------------------------------------------- */}

        {/* -------------------------  menu  CARD two----------------- */}

        <div className="relative">
          <img
            src={menuMock1}
            className="top-0 -z-[1] absolute max-sm:opacity-40 fromLeft"
            alt=""
          />
          <div className="pt-20">
            <h1 className="font-greatVibes text-7xl text-center text-customGold">
              Taste Something Now
            </h1>
            <p className="font-raleway font-semibold text-3xl text-center">
              WARM DISHES
            </p>
            <div className="flex justify-center items-center pt-4">
              <img src={chefLogo} className="" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <div className="gap-20 max-sm:gap-8 grid grid-cols-2 max-sm:grid-cols-1 px-5">
              {warmDishes.map((menu, index) => (
                <div
                  className="items-center gap-4 max-sm:gap-2 grid grid-cols-[auto,1fr,auto]"
                  key={index}
                >
                  <div>
                    <img
                      src={menu.image}
                      alt=""
                      className="rounded-full w-16 max-sm:w-12 h-16 max-sm:h-12"
                    />
                  </div>
                  <div className="text-left">
                    <h1 className="font-semibold text-base text-customGold max-sm:text-base">
                      {menu.name}
                    </h1>
                    <div className="font-medium text-gray-700/75 text-sm max-sm:text-xs">
                      {menu.description}
                    </div>
                  </div>
                  <div className="flex justify-end max-sm:justify-start items-center">
                    <span className="font-bold font-raleway text-2xl text-customGold max-sm:text-xl">
                      ${menu.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}

        {/* -------------------------  menu  CARD three----------------- */}
        <div className="relative overflow-hidden">
          <img
            src={menuMock2}
            className="top-0 right-0 -z-[1] absolute max-sm:opacity-40 fromRight"
            alt=""
          />
          <div className="pt-20">
            <h1 className="font-greatVibes text-7xl text-center text-customGold">
              Taste Something Now
            </h1>
            <p className="font-raleway font-semibold text-3xl text-center">
              DINNER DISHES
            </p>
            <div className="flex justify-center items-center pt-4">
              <img src={chefLogo} className="" alt="" />
            </div>
          </div>
          <div className="flex justify-center items-center py-10">
            <div className="gap-20 max-sm:gap-8 grid grid-cols-2 max-sm:grid-cols-1 px-5">
              {dinnerDishes.map((menu, index) => (
                <div
                  className="items-center gap-4 max-sm:gap-2 grid grid-cols-[auto,1fr,auto]"
                  key={index}
                >
                  <div>
                    <img
                      src={menu.image}
                      alt=""
                      className="rounded-full w-16 max-sm:w-12 h-16 max-sm:h-12"
                    />
                  </div>
                  <div className="text-left">
                    <h1 className="font-semibold text-base text-customGold max-sm:text-base">
                      {menu.name}
                    </h1>
                    <div className="font-medium text-gray-700/75 text-sm max-sm:text-xs">
                      {menu.description}
                    </div>
                  </div>
                  <div className="flex justify-end max-sm:justify-start items-center">
                    <span className="font-bold font-raleway text-2xl text-customGold max-sm:text-xl">
                      ${menu.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* --------------------------------------------------------------------------------------- */}
        <Booking />
      </div>
    </>
  );
}
