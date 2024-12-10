import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "../app/globals.css";
import SimilarProducts from "@/components/similarProduct";
import ServicesSection from "@/components/services";
import SubscriptionSection from "@/components/subscription";
import Footer from "@/components/footer";
import Interested from "@/components/interested";

const Home = () => {
  

  return (
    <div>
      <Navbar />
      <Header />
      <SimilarProducts />
      <Interested/>
      <ServicesSection />
      <SubscriptionSection />
      <Footer />
    </div>
  );
};

export default Home;
