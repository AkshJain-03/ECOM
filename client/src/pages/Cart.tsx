/**
 * Cart Page
 * Shopping cart with product list, quantity controls, and checkout
 * Design: Minimalist Luxury - clean layout with clear pricing
 */

import React from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { useCart } from "@/contexts/CartContext";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { items, removeItem, updateQuantity, getTotalPrice } = useCart();
  const subtotal = getTotalPrice();
  const shipping = items.length > 0 ? 10 : 0;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Page Header */}
      <section className="border-b border-border py-12 md:py-16">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">Shopping Cart</h1>
        </div>
      </section>

      {/* Cart Content */}
      <div className="flex-1 py-12 md:py-16">
        <div className="container">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {items.map((item) => (
                    <div
                      key={item.product.id}
                      className="flex gap-6 pb-6 border-b border-border last:border-b-0"
                    >
                      {/* Product Image */}
                      <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 bg-secondary rounded-sm overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <Link href={`/product/${item.product.id}`}>
                            <h3 className="text-lg font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-sm text-muted-foreground mt-1">
                            {item.product.category}
                          </p>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border border-border rounded-sm">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="px-4 py-2 text-foreground font-600">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="px-3 py-2 text-foreground hover:bg-secondary transition-colors"
                            >
                              <Plus size={16} />
                            </button>
                          </div>

                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="text-destructive hover:text-opacity-80 transition-colors"
                            title="Remove from cart"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="text-right flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Price</p>
                          <p className="text-xl font-bold text-foreground">
                            ${item.product.price}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Subtotal</p>
                          <p className="text-xl font-bold text-foreground">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="mt-8">
                  <Link href="/products">
                    <Button variant="outline" className="flex items-center">
                      Continue Shopping
                      <ArrowRight size={18} className="ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-secondary rounded-sm p-8 sticky top-24">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Order Summary</h2>

                  <div className="space-y-4 mb-6 pb-6 border-b border-border">
                    <div className="flex justify-between text-foreground">
                      <span>Subtotal</span>
                      <span className="font-600">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Shipping</span>
                      <span className="font-600">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-foreground">
                      <span>Tax (10%)</span>
                      <span className="font-600">${tax.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-8">
                    <span className="text-lg font-bold text-foreground">Total</span>
                    <span className="text-3xl font-bold text-primary">${total.toFixed(2)}</span>
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    className="w-full mb-4"
                    onClick={() => alert("Proceeding to checkout...")}
                  >
                    Proceed to Checkout
                  </Button>

                  <Button variant="outline" size="lg" className="w-full">
                    Continue Shopping
                  </Button>

                  {/* Promo Code */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <input
                      type="text"
                      placeholder="Promo code"
                      className="w-full px-4 py-2 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-2"
                    />
                    <Button variant="outline" size="md" className="w-full">
                      Apply Code
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Your cart is empty</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Start shopping to add items to your cart
              </p>
              <Link href="/products">
                <Button variant="primary" size="lg">
                  Continue Shopping
                  <ArrowRight size={20} className="ml-2" />
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
