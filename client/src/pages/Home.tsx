/**
 * Home Page
 * Hero section, featured products, and categories
 * Design: Minimalist Luxury - generous whitespace and elegant composition
 */

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";
import { products, categories } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

export default function Home() {
  const { addItem } = useCart();
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products.slice(0, 6)
      : products.filter((p) => p.category === selectedCategory).slice(0, 6);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product, 1);
    // Show toast notification (could be enhanced with a toast library)
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Hero Content */}
          <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-20 lg:py-32">
            <div className="max-w-lg">
              <p className="text-sm font-600 text-primary uppercase tracking-widest mb-4">
                New Collection
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Curated Luxury
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Discover our handpicked collection of premium products, crafted with precision
                and elegance for the discerning customer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => setLocation("/products")}
                  className="flex items-center justify-center"
                >
                  Shop Now
                  <ArrowRight size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="hidden lg:block relative bg-secondary overflow-hidden">
            <img
              src="https://private-us-east-1.manuscdn.com/sessionFile/gHNZtQpSYqDHnyhColiu5d/sandbox/vnrilOBkBV0oKZ1hWHsz2z-img-1_1771385921000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZ0hOWnRRcFNZcURIbnloQ29saXU1ZC9zYW5kYm94L3ZucmlsT0JrQlYwb0taMWhXSHN6MnotaW1nLTFfMTc3MTM4NTkyMTAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JGSWL6gORhsB3LegUUH80eK0m74QMdavTeYA1EqsqSrlEDkogtTMR7E9N8mwbK3ih-l7~b-WuLRmBUCdaWqbs6JX9By0xRZUNHqKZnNG6tIopp3cT69dbclS0dgUYsLDIbE-BHrvOoZKBAM5CJLL0CbIpPyZoG6N38kuguumrDFDmVGda9s60P92vCU5mChVxasCX6LUrUM0hdNVgEtxQ4UrVtwQmgyN6afdZSPYHJoEyMkQ-pxt-Z-Tx0jKlRBfd9NVhkX8ZEZvvUS9osvv0kFAaCyyHJFhfILkSYmzvnKaP9YUeINzZ5Vti2APj5w2TKlVvhuLlIsA0ygsBAY8Lg__"
              alt="Hero Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-20 border-b border-border">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            Shop by Category
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-sm font-600 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "border border-border text-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Featured Products
              </h2>
              <p className="text-muted-foreground">
                Handpicked selections from our premium collection
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => setLocation("/products")}
              className="hidden sm:inline-flex"
            >
              View All
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Button
              variant="primary"
              size="lg"
              onClick={() => setLocation("/products")}
            >
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-16 md:py-20 bg-secondary border-y border-border">
        <div className="container">
          <div className="max-w-2xl">
            <p className="text-sm font-600 text-primary uppercase tracking-widest mb-4">
              Exclusive Offer
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Summer Collection
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Discover our latest summer collection with up to 30% off on selected items. Limited
              time offer.
            </p>
            <Button variant="primary" size="lg">
              Shop Summer Collection
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
