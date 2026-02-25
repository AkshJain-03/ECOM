/**
 * Footer Component
 * Footer with links, newsletter signup, and company info
 * Design: Minimalist Luxury - clean typography and generous spacing
 */

import React, { useState } from "react";
import { Button } from "./Button";
import { Mail } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-background border-t border-border mt-20">
      <div className="container py-16">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-border">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-muted-foreground mb-6">
              Get exclusive offers, new arrivals, and style tips delivered to your inbox.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-border rounded-sm bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Mail
                  size={18}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none"
                />
              </div>
              <Button variant="primary" size="md">
                Subscribe
              </Button>
            </form>

            {subscribed && (
              <p className="text-primary text-sm mt-3 font-500">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-4">Luxe</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium e-commerce for those who appreciate quality and craftsmanship.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Shop</h5>
            <ul className="space-y-2">
              {["New Arrivals", "Best Sellers", "Accessories", "Clothing", "Footwear"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Customer Service</h5>
            <ul className="space-y-2">
              {["Contact Us", "Shipping Info", "Returns", "FAQ", "Size Guide"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-bold text-foreground mb-4">Company</h5>
            <ul className="space-y-2">
              {["About Us", "Sustainability", "Careers", "Press", "Blog"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; 2026 Luxe. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
