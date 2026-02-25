/**
 * Navbar Component
 * Top navigation with logo, search, and cart icon
 * Design: Minimalist Luxury - clean and spacious layout
 */

import React, { useState } from "react";
import { Link } from "wouter";
import { Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export function Navbar() {
  const { getTotalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = getTotalItems();

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-2xl font-bold text-foreground hidden sm:inline">Luxe</span>
            </div>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Search
                size={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center gap-4">
            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-6">
              <button className="text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2">
                <User size={20} />
                <span className="text-sm font-500">Login</span>
              </button>

              {/* Cart Icon */}
              <Link href="/cart">
                <div className="relative cursor-pointer">
                  <ShoppingCart
                    size={20}
                    className="text-foreground hover:text-primary transition-colors duration-300"
                  />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="sm:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-border py-4 space-y-4">
            {/* Mobile Search */}
            <div className="px-4">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search
                  size={18}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="px-4 space-y-3">
              <button className="w-full text-left text-foreground hover:text-primary transition-colors duration-300 flex items-center gap-2 py-2">
                <User size={20} />
                <span className="text-sm font-500">Login</span>
              </button>

              <Link href="/cart">
                <div className="flex items-center gap-2 py-2 cursor-pointer">
                  <ShoppingCart size={20} className="text-foreground" />
                  <span className="text-sm font-500 text-foreground">
                    Cart ({cartCount})
                  </span>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
