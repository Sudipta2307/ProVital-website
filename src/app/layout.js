import React from "react";
import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Lifestyle from "./components/Lifestyle";

export const metadata = {
  title: "ProVital",
  description: "Your trusted lifestyle medicine platform",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add custom meta tags, fonts, or styles here */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {/* Ensure components only render on the client */}
        <React.StrictMode>
          <Navbar />
          <HeroSection />
          <Lifestyle />
        </React.StrictMode>
      </body>
    </html>
  );
}
