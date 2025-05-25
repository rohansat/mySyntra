"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [showDemoImage, setShowDemoImage] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative overflow-hidden hero-gradient py-20 md:py-28"
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={`space-y-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5">
              <span className="text-sm font-medium text-white">Revolutionizing Healthcare Administration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Practice <span className="text-cyan-300">Medicine</span>, Not Paperwork
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-xl">
              Syntra eliminates administrative burdens with AI-powered solutions, giving healthcare professionals more time to focus on patient care.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/demo">Book a Demo</Link>
              </Button>
              <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
            <div className="pt-4">
              <p className="text-sm text-white/80">Trusted by 500+ healthcare providers across the country</p>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative z-10 floating bg-white rounded-lg shadow-2xl p-4">
              {showDemoImage ? (
                <Image
                  src="/syntra demo pic .png"
                  alt="Syntra Demo"
                  width={600}
                  height={400}
                  className="object-contain cursor-pointer"
                  onClick={() => setShowDemoImage(false)}
                />
              ) : (
                <Image
                  src="/syntra-logo.png"
                  alt="Syntra Platform"
                  width={600}
                  height={400}
                  className="object-contain cursor-pointer"
                  onMouseEnter={() => setShowDemoImage(true)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
