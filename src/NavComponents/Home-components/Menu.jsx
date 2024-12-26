import React from "react";
import veggies from "../../LA_Cafe_Images/Home/Menu-section-image/vegies_bottom.png";

const menuName = [
  {
    name: "PORK SHRIMP MULTIGRAIN",
    description: "Vegetables, Cheese, Mushroom, Grill Items",
    price: 55,
    image:
      "https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CHICKEN SUPREME",
    description: "Grilled Chicken, Bell Peppers, Onions, Mozzarella",
    price: 60,
    image:
      "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "VEGAN DELIGHT",
    description: "Broccoli, Spinach, Avocado, Vegan Cheese",
    price: 50,
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "BEEF BACON BLAST",
    description: "Grilled Beef, Bacon, Caramelized Onions, Cheddar",
    price: 70,
    image:
      "https://images.pexels.com/photos/1639564/pexels-photo-1639564.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "SEAFOOD EXTRAVAGANZA",
    description: "Shrimp, Crab Meat, Seaweed, Mozzarella",
    price: 65,
    image:
      "https://images.pexels.com/photos/17649370/pexels-photo-17649370/free-photo-of-rice-and-meat-with-spices.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "CLASSIC MARGHERITA",
    description: "Tomato Sauce, Fresh Basil, Mozzarella Cheese",
    price: 45,
    image:
      "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "SPICY PEPPERONI",
    description: "Pepperoni, Jalapeños, Chili Flakes, Mozzarella",
    price: 58,
    image:
      "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "HAWAIIAN TWIST",
    description: "Pineapple, Ham, Mozzarella, Tomato Sauce",
    price: 52,
    image:
      "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "BBQ CHICKEN",
    description: "BBQ Sauce, Grilled Chicken, Red Onion, Cilantro",
    price: 68,
    image:
      "https://images.pexels.com/photos/3771612/pexels-photo-3771612.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "CHEESE LOVER'S",
    description: "Mozzarella, Parmesan, Cheddar, Gouda",
    price: 40,
    image:
      "https://images.pexels.com/photos/2762933/pexels-photo-2762933.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "ITALIAN DELIGHT",
    description: "Salami, Pepperoni, Olives, Mozzarella",
    price: 65,
    image:
      "https://images.pexels.com/photos/9407173/pexels-photo-9407173.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "MEXICAN FIESTA",
    description: "Ground Beef, Jalapeños, Sour Cream, Salsa",
    price: 60,
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?w=100&h=100&fit=crop",
  },
  {
    name: "TURKEY & CRANBERRY",
    description: "Roast Turkey, Cranberry Sauce, Swiss Cheese",
    price: 55,
    image:
      "https://images.pexels.com/photos/5702786/pexels-photo-5702786.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
  {
    name: "MEDITERRANEAN FEAST",
    description: "Feta Cheese, Kalamata Olives, Spinach, Tomatoes",
    price: 62,
    image:
      "https://images.pexels.com/photos/7799698/pexels-photo-7799698.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1",
  },
];

export default function Menu() {
  return (
    <div>
      <div className="py-20 text-center">
        <div>
          <h1 className="font-greatVibes text-8xl text-customGold max-sm:text-3xl max-md:text-5xl">
            This Week Special
          </h1>
          <h3 className="py-4 font-raleway font-semibold text-2xl">
            MENU CARD
          </h3>
          <div className="relative">
            <div className="flex justify-center items-center py-10">
              <div className="gap-20 max-sm:gap-8 grid grid-cols-2 max-sm:grid-cols-1 px-5">
                {menuName.map((menu, index) => (
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
                      <h1 className="font-semibold text-customGold text-lg max-sm:text-base">
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
            <img
              className="-bottom-20 left-0 -z-[1] absolute w-full h-full object-cover"
              src={veggies}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
