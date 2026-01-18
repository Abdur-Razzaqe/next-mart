"use client";

import React from "react";
import products from "@/app/data/products.json";
import ProductCard from "../cards/ProductCard";

const FeaturedProducts = () => {
  // Sort products by rating descending and take top 8
  const topProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Featured Products
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {topProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
