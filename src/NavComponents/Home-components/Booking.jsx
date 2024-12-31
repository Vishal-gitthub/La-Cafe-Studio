import React, { useState } from "react";
import bookinBg from "../../LA_Cafe_Images/Home/Booking-section-image/booking-section-bg.jpg";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    tableNumber: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, tableNumber } = formData;

    if (!name || !email || !phone || !tableNumber) {
      alert("Please fill out all fields.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert("Reservation submitted successfully!");
  };

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${bookinBg})` }}
      >
        <div className="bg-black/50 py-40 w-full h-full text-center">
          <h1 className="font-greatVibes text-8xl text-customGold">
            Book your Table
          </h1>
          <h3 className="py-5 font-semibold text-3xl text-white">
            MAKE A RESERVATION
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-6 mt-20 px-4 w-full"
          >
            <div className="flex md:flex-row flex-col gap-6 w-full md:w-3/4">
              <input
                className="bg-white px-4 py-3 rounded-md w-full text-base text-black outline-none"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                className="bg-white px-4 py-3 rounded-md w-full text-base text-black outline-none"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex md:flex-row flex-col gap-6 w-full md:w-3/4">
              <input
                className="bg-white px-4 py-3 rounded-md w-full text-base text-black outline-none"
                type="text"
                name="phone"
                placeholder="Enter Your Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                className="bg-white px-4 py-3 rounded-md w-full text-base text-black outline-none"
                type="text"
                name="tableNumber"
                placeholder="Choose Table Number"
                value={formData.tableNumber}
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              className="bg-customGold hover:bg-black/80 px-6 py-3 rounded-lg w-1/2 md:w-1/3 text-2xl text-black hover:text-white transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
