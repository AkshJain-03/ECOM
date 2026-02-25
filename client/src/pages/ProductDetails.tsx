/**
 * Product Details Page
 * Product image gallery, details, and add to cart functionality
 * Design: Minimalist Luxury - spacious layout with large imagery
 */

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useRoute } from "wouter";
import { Star, ShoppingBag, Heart, Share2, Check } from "lucide-react";

export default function ProductDetails() {
  const [match, params] = useRoute("/product/:id");
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!match) {
    return null;
  }

  const product = products.find((p) => p.id === params?.id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The product you're looking for doesn't exist.
            </p>
            <Button variant="primary" onClick={() => (window.location.href = "/products")}>
              Back to Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (value: number) => {
    if (value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-border">
        <div className="container py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-primary transition-colors">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-primary transition-colors">
              Products
            </a>
            <span>/</span>
            <span className="text-foreground font-500">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex-1 py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
            {/* Product Image */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square bg-secondary rounded-sm overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Discount Badge */}
                {discountPercentage > 0 && (
                  <div className="absolute top-6 right-6 bg-primary text-primary-foreground px-4 py-2 rounded-sm text-sm font-bold">
                    Save {discountPercentage}%
                  </div>
                )}

                {/* Stock Status */}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Out of Stock</span>
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-start">
              {/* Category */}
              <p className="text-sm font-600 text-primary uppercase tracking-widest mb-4">
                {product.category}
              </p>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-border">
                <div className="flex items-baseline gap-4">
                  <span className="text-4xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Details */}
              {product.details && (
                <div className="mb-8 pb-8 border-b border-border">
                  <h3 className="font-bold text-foreground mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {product.details.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quantity Selector */}
              <div className="mb-8 flex items-center gap-4">
                <label className="font-600 text-foreground">Quantity:</label>
                <div className="flex items-center border border-border rounded-sm">
                  <button
                    onClick={() => handleQuantityChange(quantity - 1)}
                    className="px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                    className="w-16 text-center border-l border-r border-border bg-background text-foreground focus:outline-none"
                    min="1"
                  />
                  <button
                    onClick={() => handleQuantityChange(quantity + 1)}
                    className="px-4 py-2 text-foreground hover:bg-secondary transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="lg"
                  className="flex-1 flex items-center justify-center"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                >
                  {addedToCart ? (
                    <>
                      <Check size={20} className="mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={20} className="mr-2" />
                      Add to Cart
                    </>
                  )}
                </Button>

                <Button variant="outline" size="lg" className="flex items-center justify-center">
                  <Heart size={20} className="mr-2" />
                  Wishlist
                </Button>
              </div>

              {/* Share */}
              <button className="mt-6 flex items-center gap-2 text-primary hover:underline font-500">
                <Share2 size={18} />
                Share Product
              </button>

              {/* Stock Info */}
              <div className="mt-8 p-4 bg-secondary rounded-sm">
                <p className="text-sm text-muted-foreground">
                  {product.inStock ? (
                    <span className="text-primary font-600">✓ In Stock - Ships within 2-3 business days</span>
                  ) : (
                    <span>Out of Stock - Notify me when available</span>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
