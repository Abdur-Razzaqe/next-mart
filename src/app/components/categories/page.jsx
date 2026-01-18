"use client";

import React from "react";
import {
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaKeyboard,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Laptops", icon: <FaLaptop /> },
  { name: "Smartphones", icon: <FaMobileAlt /> },
  { name: "Accessories", icon: <FaHeadphones /> },
  { name: "Keyboards", icon: <FaKeyboard /> },
];

const Categories = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="card bg-base-200 shadow-md"
            >
              <Link
                href={`/products?category=${cat.name}`}
                className="card-body items-center text-center"
              >
                <div className="text-5xl text-primary mb-3">{cat.icon}</div>
                <h3 className="font-semibold">{cat.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
