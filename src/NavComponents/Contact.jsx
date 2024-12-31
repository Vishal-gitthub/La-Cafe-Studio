import React from "react";
import callIcon from "../LA_Cafe_Images/Home/Contact-section-image/cnt-phone.png";
import emailIcon from "../LA_Cafe_Images/Home/Contact-section-image/cnt-email.png";
import locationIcon from "../LA_Cafe_Images/Home/Contact-section-image/cnt-marker.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const header = new URL(
  "../LA_Cafe_Images/Home/about-section-image/portions-various-delicious-ovenbaked-pizzas.jpg",
  import.meta.url
);

export default function Contact() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - LA Cafe</title>
        <meta
          name="description"
          content="Get in touch with LA Cafe for inquiries or support. Find our contact details, email, and address."
        />
        <meta
          name="keywords"
          content="LA Cafe, Contact, Address, Phone, Email, Support"
        />
        <meta name="author" content="LA Cafe Team" />
      </Helmet>
      <div
        style={{ backgroundImage: `url(${header})` }}
        className="bg-cover bg-center"
      >
        <div className="bg-black/40 py-36 text-center text-white">
          <h1 className="font-semibold text-3xl">CONTACT</h1>
          <div className="flex justify-center text-lg">
            <Link to="/" className="font-bold">
              HOME
            </Link>
            <span className="mx-2">/</span>
            <span className="text-customGold">CONTACT</span>
          </div>
        </div>
      </div>

      <div className="mx-auto my-20 px-4 container">
        <div className="flex lg:flex-row flex-col gap-10 mx-auto max-w-7xl">
          {/* Contact Form Section */}
          <div className="w-full lg:w-1/2">
            <div className="mb-8">
              <h1 className="font-semibold text-2xl md:text-3xl uppercase">
                Contact Us
              </h1>
              <div className="bg-customGold mt-4 w-24 h-1" />
            </div>

            <div className="space-y-4">
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  required
                  className="focus:border-customGold px-4 py-3 border w-full font-raleway outline-none"
                  placeholder="Name"
                />
                <input
                  type="text"
                  required
                  className="focus:border-customGold px-4 py-3 border w-full font-raleway outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <div className="gap-4 grid grid-cols-1 sm:grid-cols-2">
                <input
                  type="email"
                  required
                  className="focus:border-customGold px-4 py-3 border w-full font-raleway outline-none"
                  placeholder="Email"
                />
                <input
                  type="text"
                  required
                  className="focus:border-customGold px-4 py-3 border w-full font-raleway outline-none"
                  placeholder="Address"
                />
              </div>
              <textarea
                name="Write Your Message"
                required
                placeholder="Write A Message"
                className="focus:border-customGold px-4 py-3 border w-full h-48 font-raleway outline-none resize-none"
              ></textarea>
            </div>
            <div>
              <button className="border-customGold bg-customGold hover:bg-white px-6 py-3 border font-semibold text-white hover:text-black transition-all duration-300">
                SUBMIT
              </button>
            </div>
          </div>

          {/* Map Section */}
          <div className="w-full lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d219.16353439231685!2d77.13116883468719!3d28.491101063820487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1fafe4c50601%3A0xbbd4b233c5e51057!2sLA%20STUDIO%20CAFE!5e0!3m2!1sen!2sin!4v1735624266763!5m2!1sen!2sin"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-baseline gap-7 mb-28">
        <div className="inline-flex flex-col items-center gap-2 pr-8 text-center">
          <div>
            <img src={callIcon} alt="" />
          </div>
          <span className="py-5 font-raleway font-semibold text-3xl max-md:text-xl">
            CALL US
          </span>
          <div>
            <span className="font-medium text-black/25 text-lg max-md:text-xs">
              (+1) 1532 987 4632
            </span>
          </div>
          <div>
            <span className="font-medium text-black/25 text-lg max-md:text-xs">
              (+4) 3749 372 9876
            </span>
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-2 pr-8 text-center">
          <div>
            <img src={emailIcon} alt="" />
          </div>
          <span className="py-5 font-raleway font-semibold text-3xl max-md:text-xl">
            EMAIL
          </span>
          <div>
            <span className="font-medium text-black/25 text-lg max-md:text-xs">
              lacafe@info
            </span>
          </div>
          <div>
            <span className="font-medium text-black/25 text-lg max-md:text-xs">
              lacafe@support
            </span>
          </div>
        </div>
        <div className="inline-flex flex-col items-center gap-2 p-4 text-center">
          <div>
            <img src={locationIcon} alt="" />
          </div>
          <span className="py-5 font-raleway font-semibold text-3xl max-md:text-xl uppercase">
            Address
          </span>
          <div>
            <span className="font-medium text-lg max-md:text-xs"></span>
          </div>
          <div>
            <span className="font-medium text-black/25 text-lg max-md:text-xs">
              Ghitorni,Delhi NCR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
