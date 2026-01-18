import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "800"],
});

export const metadata = {
  title: "Next-Mart",
  description:
    "NextMart is a Next.js-based product listing application with authentication, API integration, and protected routes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header className=" py-2 md:w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>

        <main className=" py-2 md:w-11/12 mx-auto min-h-[calc(100vh-200px)]">
          {children}
          <Toaster position="top-right" reverseOrder={false} />
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
