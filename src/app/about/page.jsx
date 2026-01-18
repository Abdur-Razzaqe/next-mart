import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero / Title */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">About NextMart</h1>
        <p className="text-lg text-gray-600">
          NextMart is your one-stop online store for electronics, gadgets, and
          accessories. We provide high-quality products, excellent customer
          support, and a seamless shopping experience.
        </p>
      </div>

      {/* Mission / Vision Section */}
      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700">
            To provide a seamless and reliable online shopping experience with
            top-quality products, fast delivery, and excellent customer support.
            We aim to empower our customers with the best technology solutions.
          </p>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To become the most trusted online marketplace, connecting people
            with the technology and products they need, while maintaining
            transparency, innovation, and sustainability.
          </p>
        </div>
      </div>

      {/* Story / Image Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <Image
            src="/assets/mart.png"
            alt="NextMart Story"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
            NextMart started with a vision to make online shopping simple,
            secure, and enjoyable. We began as a small startup and quickly grew
            into a trusted platform for tech enthusiasts. Our team is passionate
            about delivering quality products and creating a memorable customer
            experience.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Customer First</h3>
            <p className="text-gray-700">
              We prioritize our customers and aim to provide exceptional service
              every time.
            </p>
          </div>
          <div className="card bg-base-200 p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
            <p className="text-gray-700">
              We carefully select our products to ensure the best quality and
              performance.
            </p>
          </div>
          <div className="card bg-base-200 p-6 shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Innovation</h3>
            <p className="text-gray-700">
              We continuously innovate to bring modern solutions and technology
              to our customers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
