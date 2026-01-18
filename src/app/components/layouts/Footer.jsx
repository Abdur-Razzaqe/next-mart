"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-200 py-1 mt-1">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {/* Logo & Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <Link href="/" className="flex items-center gap-2 mb-3">
            <Image
              src="/assets/mart.png"
              width={40}
              height={35}
              alt="NextMart Logo"
            />
            <span className="text-xl font-bold">NextMart</span>
          </Link>
          <p className="text-gray-500 max-w-xs">
            Your one-stop shop for electronics, gadgets, and everyday
            essentials. Find top-rated products at amazing prices.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-primary transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-primary transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-primary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Categories</h3>
          <ul className="space-y-2">
            <li className="capitalize">
              <Link href="/products" className="hover:text-primary transition">
                Laptops
              </Link>
            </li>
            <li className="capitalize">
              <Link href="/products" className="hover:text-primary transition">
                Smartphones
              </Link>
            </li>
            <li className="capitalize">
              <Link href="/products" className="hover:text-primary transition">
                Accessories
              </Link>
            </li>

            <li className="capitalize">
              <Link href="/products" className="hover:text-primary transition">
                Storage
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <Link
              href="https://www.facebook.com/abdur.razzaq.7169709/"
              target="blank"
              className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="https://x.com/arazzak714"
              target="blank"
              className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaXTwitter />
            </Link>
            <Link
              href="https://github.com/Abdur-Razzaqe/"
              target="blank"
              className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/abdur-razzaqe/"
              target="blank"
              className="p-2 rounded-full bg-base-300 hover:bg-primary hover:text-white transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-base-300 mt-1 pt-1 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} NextMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
