"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white shadow-2xl">
              <Image
                src="/syntra-logo.png"
                alt="Syntra Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="hidden font-bold sm:inline-block text-xl">Syntra</span>
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center space-x-6 md:flex">
          <Link
            href="/products"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Products
          </Link>
          <Link
            href="/solutions"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Pricing
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            About Us
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <Button variant="outline" className="hidden sm:flex" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button className="hidden sm:flex" asChild>
            <Link href="/demo">Book a Demo</Link>
          </Button>
        </div>

        <div className="flex md:hidden ml-auto">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 pt-0 bg-background">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link
              href="/products"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/solutions"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
          </nav>
          <div className="flex flex-col space-y-3">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/login" onClick={() => setIsMenuOpen(false)}>Login</Link>
            </Button>
            <Button className="w-full" asChild>
              <Link href="/demo" onClick={() => setIsMenuOpen(false)}>Book a Demo</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
