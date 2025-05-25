"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatarUrl: string;
};

export function TestimonialsSection() {
  const testimonialList: Testimonial[] = [
    {
      id: 1,
      quote:
        "Syntra has completely transformed our practice. The automated prior authorization feature alone has saved our staff countless hours. We've reduced processing time from days to minutes.",
      name: "Dr. Sarah Chen",
      title: "Medical Director",
      company: "Pacific Medical Group",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      id: 2,
      quote:
        "As a small practice, administrative costs were eating into our margins. Syntra's AI medical coding accurately assigns codes and has reduced our billing errors by 35%. Highly recommended!",
      name: "Dr. Michael Rodriguez",
      title: "Primary Care Physician",
      company: "Family Care Clinic",
      avatarUrl: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop",
    },
    {
      id: 3,
      quote:
        "The EHR system is intuitive and actually helps our workflow instead of hindering it. My clinicians can now focus on patients instead of documentation. Patient satisfaction scores are up 28%.",
      name: "Dr. Rebecca Johnson",
      title: "Chief Medical Officer",
      company: "Westside Health Partners",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&h=256&auto=format&fit=crop",
    },
  ];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonialList.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, testimonialList.length]);

  return (
    <section className="py-16 md:py-24 gradient-bg">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
            TESTIMONIALS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Trusted by Healthcare Providers
          </h2>
          <p className="text-lg text-slate-600 mt-4">
            See how Syntra is helping medical practices across the country
            streamline their operations and improve patient care.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-xl min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialList[current].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full"
              >
                <Card
                  className="testimonial-card border border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-primary/20"
                      >
                        <path
                          d="M11.9748 23.6108C10.5126 22.5895 9.28492 21.5059 8.29183 20.3599C7.32457 19.1934 6.84094 18.0268 6.84094 16.8602C6.84094 15.5099 7.26126 14.3538 8.1019 13.3918C8.97257 12.4095 10.0778 11.9183 11.4176 11.9183C12.7573 11.9183 13.8521 12.4095 14.7021 13.3918C15.5827 14.3538 16.023 15.5099 16.023 16.8602C16.023 18.2105 15.5726 19.3666 14.6717 20.3285C13.8014 21.2904 12.7162 21.7714 11.4176 21.7714C11.2753 21.7714 11.1535 21.761 11.0522 21.7402C11.7701 22.8032 12.8137 24.178 14.1841 25.8648L11.9748 27.1533L11.9748 23.6108ZM25.9185 23.6108C24.4871 22.5895 23.2697 21.5059 22.2664 20.3599C21.2936 19.1934 20.8072 18.0268 20.8072 16.8602C20.8072 15.5099 21.2275 14.3538 22.0682 13.3918C22.9388 12.4095 24.0441 11.9183 25.3838 11.9183C26.7236 11.9183 27.8184 12.4095 28.6683 13.3918C29.549 14.3538 29.9893 15.5099 29.9893 16.8602C29.9893 18.2105 29.5389 19.3666 28.638 20.3285C27.7676 21.2904 26.6825 21.7714 25.3838 21.7714C25.2415 21.7714 25.1197 21.761 25.0184 21.7402C25.7363 22.8032 26.78 24.178 28.1503 25.8648L25.9411 27.1533L25.9185 23.6108Z"
                          fill="currentColor"
                        />
                      </svg>
                      <p className="text-slate-700 leading-relaxed">"{testimonialList[current].quote}"</p>
                      <div className="flex items-center">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonialList[current].avatarUrl}
                            alt={testimonialList[current].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900">{testimonialList[current].name}</h4>
                          <p className="text-sm text-slate-600">
                            {testimonialList[current].title}, {testimonialList[current].company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonialList.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === idx ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
