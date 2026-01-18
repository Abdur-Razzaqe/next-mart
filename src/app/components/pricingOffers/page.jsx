"use client";

import React from "react";
import { FaBolt, FaGift, FaTags, FaHeadset } from "react-icons/fa";
import "animate.css";

const offers = [
  {
    title: "Fast Delivery",
    price: "Free",
    icon: <FaBolt className="text-4xl text-primary mb-2" />,
    description:
      "Get your products delivered within 24 hours with our priority service.",
  },
  {
    title: "Special Discounts",
    price: "Up to 30% Off",
    icon: <FaTags className="text-4xl text-primary mb-2" />,
    description: "Save big on top products with seasonal and bundle discounts.",
  },
  {
    title: "Gift Packages",
    price: "Surprise Gifts",
    icon: <FaGift className="text-4xl text-primary mb-2" />,
    description: "Receive exclusive gift packs on selected purchases.",
  },
  {
    title: "24/7 Support",
    price: "Always Online",
    icon: <FaHeadset className="text-4xl text-primary mb-2" />,
    description:
      "Our customer support team is available 24/7 to help you anytime.",
  },
];

const PricingOffers = () => {
  return (
    <section className="py-16 bg-base-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeInDown">
          Pricing & Special Offers
        </h2>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`card bg-base-100 p-6 shadow-md hover:shadow-xl transition animate__animated animate__fadeInUp animate__delay-${index}s`}
            >
              <div className="flex flex-col items-center text-center">
                {offer.icon}
                <h3 className="text-2xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-lg font-bold text-primary mb-2">
                  {offer.price}
                </p>
                <p className="text-gray-700">{offer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingOffers;
