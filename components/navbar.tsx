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

import { BsFacebook, BsInstagram, BsTiktok } from "react-icons/bs";

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
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="hover:text-blue-600  font-bold ">
          da_Tooth_Some_Hub
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products" className="hover:text-blue-600">
            Products
          </Link>
          <Link href="/checkout" className="hover:text-blue-600">
            Checkout
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>

        <div
          className=" flex justify-between items-center
         w-[10%] max-md:hidden"
        >
          <Link
            target="_blank"
            href={
              "https://web.facebook.com/badmus.basiratullahititilayo/?_rdc=1&_rdr#"
            }
          >
            <BsFacebook className="h-6 w-6" />
          </Link>

          <Link
            href={"https://www.instagram.com/da_toothsome_hub/"}
            target="_blank"
          >
            <BsInstagram className="h-6 w-6" />
          </Link>

          <Link href={"https://www.tiktok.com/@datoothsomehub"} target="_blank">
            <BsTiktok className="h-6 w-6" />
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/checkout" className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      {mobileOpen && (
        <nav
          className="md:hidden w-[50%] fixed  h-full bg-white 
        shadow-2xl"
        >
          <ul className="flex flex-col p-4 space-y-10 ">
            <li>
              <Link href="/" className="block hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className="block hover:text-blue-600">
                Products
              </Link>
            </li>
            <li>
              <Link href="/checkout" className="block hover:text-blue-600">
                Checkout
              </Link>
            </li>

            <li>
              <Link href="/contact" className="block hover:text-blue-600">
                Contact Us
              </Link>
            </li>
          </ul>

          <div
            className=" flex justify-between items-center mx-auto mt-[100%] 
         w-[50%] "
          >
            <Link
              target="_blank"
              href={
                "https://web.facebook.com/badmus.basiratullahititilayo/?_rdc=1&_rdr#"
              }
            >
              <BsFacebook className="h-6 w-6" />
            </Link>

            <Link
              href={"https://www.instagram.com/da_toothsome_hub/"}
              target="_blank"
            >
              <BsInstagram className="h-6 w-6" />
            </Link>

            <Link
              href={"https://www.tiktok.com/@datoothsomehub"}
              target="_blank"
            >
              <BsTiktok className="h-6 w-6" />
            </Link>
          </div>
        </nav>
      )}
    </nav>
  );
}
