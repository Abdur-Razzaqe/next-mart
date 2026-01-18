"use client";
import React, { useEffect, useState } from "react";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status from cookie
  useEffect(() => {
    const auth = Cookies.get("auth");
    setIsLoggedIn(auth === "true");
  }, []);

  const handleLogout = () => {
    Cookies.remove("auth");
    setIsLoggedIn(false);
    router.push("/login");
  };

  const nav = (
    <>
      <li>
        <NavLink href="/">Home</NavLink>
      </li>
      <li>
        <NavLink href="/products">Products</NavLink>
      </li>
      <li>
        <NavLink href="/about">About</NavLink>
      </li>
      <li>
        <NavLink href="/contact">Contact</NavLink>
      </li>
      {isLoggedIn && (
        <li>
          <NavLink href="/add-product">Add Product</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-error btn-outline w-full mt-2"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link href="/login">
                    <button className="btn btn-primary btn-outline w-full mt-2">
                      Login
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <Logo></Logo>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="btn btn-error btn-outline ml-2"
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="btn btn-primary btn-outline ml-2">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
