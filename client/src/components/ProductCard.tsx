/**
 * ProductCard Component
 * Displays a single product with image, name, price, and rating
 * Design: Minimalist Luxury - subtle shadows and elegant typography
 */

import React from "react";
import { Product } from "@/data/products";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "./Button";
import { Link } from "wouter";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Product Image Container */}
        <div className="relative overflow-hidden bg-secondary rounded-sm mb-6 aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-sm text-sm font-600">
              -{discountPercentage}%
            </div>
          )}

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-white font-600 text-lg">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Category */}
          <p className="text-sm text-muted-foreground font-500 uppercase tracking-wide">
            {product.category}
          </p>

          {/* Product Name */}
          <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={`${
                    i < Math.floor(product.rating)
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({product.reviewCount})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-2">
            <span className="text-2xl font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="primary"
            size="md"
            className="w-full mt-4"
            disabled={!product.inStock}
            onClick={(e) => {
              e.preventDefault();
              if (onAddToCart) onAddToCart(product);
            }}
          >
            <ShoppingBag size={18} className="mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Link>
  );
}
