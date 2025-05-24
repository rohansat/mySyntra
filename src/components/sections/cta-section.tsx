"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="py-16 md:py-24 hero-gradient relative overflow-hidden">
      {/* Blob shape backgrounds */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-400/10 rounded-full filter blur-3xl blob-animation -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full filter blur-3xl blob-animation translate-x-1/3 translate-y-1/3"></div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
            Ready to Transform Your Healthcare Practice?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Join hundreds of healthcare providers who have streamlined their operations, reduced costs,
            and improved patient care with Syntra's innovative solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/demo">Schedule a Free Demo</Link>
            </Button>
            <Button size="lg" asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">98%</p>
              <p className="text-sm text-white/80">Customer Satisfaction</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">40%</p>
              <p className="text-sm text-white/80">Reduced Documentation Time</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">90%</p>
              <p className="text-sm text-white/80">Prior Auth Success Rate</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-white">35%</p>
              <p className="text-sm text-white/80">Reduction in Billing Errors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
