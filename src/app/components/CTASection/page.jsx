"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Start Shopping?
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
          Discover top-rated products, exclusive deals, and the best shopping
          experience only on NextMart.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link href="/products">
            <button className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary transition-all duration-300 flex items-center gap-2">
              <FaShoppingCart />
              Browse Products
            </button>
          </Link>

          <Link href="/login">
            <button className="btn btn-secondary btn-lg shadow-lg hover:scale-105 transition-transform duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
