"use client";

import React from "react";
import { FaTruck, FaLock, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    title: "Fast Delivery",
    desc: "We ensure quick and reliable delivery so you can get your products on time without any hassle.",
    icon: <FaTruck />,
  },
  {
    title: "Secure Payment",
    desc: "Your payment information is fully protected with industry-standard security and encryption.",
    icon: <FaLock />,
  },
  {
    title: "Quality Products",
    desc: "We offer carefully selected products that meet high quality and performance standards.",
    icon: <FaCheckCircle />,
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always available to help you with any questions or issues.",
    icon: <FaHeadset />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-base-50">
      <div className="container mx-auto ">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Why Choose Us
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
              className="card bg-base-100 shadow-md hover:shadow-xl transition"
            >
              <div className="card-body text-center">
                <div className="text-5xl text-primary mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
