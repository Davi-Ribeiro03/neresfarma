import React, { useState } from "react";
import Header from "./components/Header/Header";
import Slide from "./components/Slide/Slide";
import Services from "./components/Services/Services";
import Products from "./components/Products/Products";
import Advantages from "./components/Advantages/Advantages";
import Location from "./components/Location/Location";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WppButton from "./components/WppButton/WppButton";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main>
        {/* Hero Slider */}
        <Slide />
        {/* Services Section */}
        <Services />
        {/* Featured Products */}
        <Products />
        {/* Advantages */}
        <Advantages />

        {/* Location and Contact */}
        <section className="grid grid-cols-1 lg:grid-cols-2 m-16 gap-10">
          <Location />
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
      {/* WhatsApp Floating Button */}
      <WppButton />
    </div>
  );
};

export default App;
