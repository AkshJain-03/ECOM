/**
 * Button Component
 * Reusable button with multiple variants and sizes
 * Design: Minimalist Luxury - subtle transitions and emerald accent
 */

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  isLoading = false,
  disabled,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-inter font-600 transition-all duration-300 ease-out rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

  const variantStyles = {
    primary:
      "bg-primary text-primary-foreground hover:bg-opacity-90 hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0",
    secondary:
      "bg-secondary text-secondary-foreground hover:bg-opacity-80 hover:shadow-md hover:translate-y-[-1px] active:translate-y-0",
    outline:
      "border border-border text-foreground hover:bg-secondary hover:border-primary hover:shadow-md hover:translate-y-[-1px] active:translate-y-0",
  };

  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
}
