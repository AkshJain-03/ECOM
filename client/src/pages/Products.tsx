/**
 * Products Page
 * Product listing with filters, sorting, and grid layout
 * Design: Minimalist Luxury - clean sidebar and organized grid
 */

import React, { useState, useMemo } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products, categories, priceRanges } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { ChevronDown, X } from "lucide-react";

type SortOption = "featured" | "price-low" | "price-high" | "rating" | "newest";

export default function Products() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Filter by price range
    if (selectedPriceRange !== null) {
      const range = priceRanges[selectedPriceRange];
      filtered = filtered.filter((p) => p.price >= range.min && p.price <= range.max);
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        sorted.reverse();
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedCategory, selectedPriceRange, sortBy]);

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product, 1);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop All Products
          </h1>
          <p className="text-lg text-muted-foreground">
            Explore our complete collection of premium products
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="flex-1">
        <div className="container py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24 space-y-8">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Category</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label key={category} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value={category}
                          checked={selectedCategory === category}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-foreground hover:text-primary transition-colors">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-4">Price Range</h3>
                  <div className="space-y-3">
                    {priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="price"
                          checked={selectedPriceRange === index}
                          onChange={() => setSelectedPriceRange(index)}
                          className="w-4 h-4 accent-primary"
                        />
                        <span className="text-foreground hover:text-primary transition-colors">
                          {range.label}
                        </span>
                      </label>
                    ))}
                    <button
                      onClick={() => setSelectedPriceRange(null)}
                      className="text-sm text-primary hover:underline mt-2"
                    >
                      Clear Price Filter
                    </button>
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategory !== "All" || selectedPriceRange !== null) && (
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedPriceRange(null);
                    }}
                    className="w-full px-4 py-2 border border-border text-foreground rounded-sm hover:bg-secondary transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6 flex justify-between items-center">
                <button
                  onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 border border-border rounded-sm text-foreground hover:bg-secondary transition-colors"
                >
                  Filters
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${isMobileFilterOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Mobile Filters */}
              {isMobileFilterOpen && (
                <div className="lg:hidden mb-6 p-4 border border-border rounded-sm space-y-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Category</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <label key={category} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="category"
                            value={category}
                            checked={selectedCategory === category}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-foreground">{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Range Filter */}
                  <div>
                    <h3 className="font-bold text-foreground mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {priceRanges.map((range, index) => (
                        <label key={index} className="flex items-center gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="price"
                            checked={selectedPriceRange === index}
                            onChange={() => setSelectedPriceRange(index)}
                            className="w-4 h-4 accent-primary"
                          />
                          <span className="text-foreground">{range.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Desktop Sort Dropdown */}
              <div className="hidden lg:flex justify-between items-center mb-8">
                <p className="text-muted-foreground">
                  Showing {filteredAndSortedProducts.length} products
                </p>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 border border-border rounded-sm bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              {/* Products Grid */}
              {filteredAndSortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={handleAddToCart}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-lg text-muted-foreground mb-4">No products found</p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSelectedPriceRange(null);
                    }}
                    className="text-primary hover:underline font-500"
                  >
                    Clear filters and try again
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
