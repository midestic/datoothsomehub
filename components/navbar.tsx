"use client";

import { useCartStore } from "@/store/cart-store";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { items } = useCartStore();
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow">
      <div
        className="container mx-auto flex items-center
       justify-between px-4 py-4 "
      >
        <Link className="hover:text-blue-600" href="/">
          da_Tooth_Some_Hub
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            CheckOut
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/checkout">
            <ShoppingCartIcon />
            {cartCount > 0 && <span>{cartCount}</span>}
          </Link>

          <Button
            variant="ghost"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <XMarkIcon /> : <Bars3Icon />}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <nav>
          <ul>
            <li>
              {" "}
              <Link href={"/"}>Home</Link>{" "}
            </li>

            <li>
              {" "}
              <Link href={"/products"}>Products</Link>{" "}
            </li>

            <li>
              {" "}
              <Link href={"/checkout"}>CheckOut</Link>{" "}
            </li>
          </ul>
        </nav>
      )}
    </nav>
  );
}
