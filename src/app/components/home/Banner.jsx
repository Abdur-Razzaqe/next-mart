"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // animation library
import React from "react";

const Banner = () => {
  return (
    <section className="bg-base-50 py-16">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 gap-10">
        {/* Text Content with fade-in animation */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Welcome to <span className="text-primary">Next Mart</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Your one-stop shop for electronics, gadgets, and everyday
            essentials. Discover amazing deals and top-rated products curated
            just for you!
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <Link href="/products">
              <button className="btn btn-primary btn-lg">
                Explore Products
              </button>
            </Link>
            <Link href="/about">
              <button className="btn btn-outline btn-lg">Learn More</button>
            </Link>
          </div>
        </motion.div>

        {/* Banner Image with floating animation */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ y: 0 }}
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="relative w-full max-w-md md:max-w-lg">
            <Image
              src="/assets/banner.png"
              alt="Next Mart Banner"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
