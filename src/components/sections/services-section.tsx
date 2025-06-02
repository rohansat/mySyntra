"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const serviceList = [
    {
      id: 1,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
          <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
          <path d="M8 9H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 13H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "Electronic Health Records",
      description: "Modern cloud-based EHR system that simplifies patient record management. Reduce documentation time by 40%.",
      link: "/products/ehr",
    },
    {
      id: 2,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
          <path d="M16 10H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M14 14H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M17 7L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M7 7L8 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
      title: "AI Medical Coding",
      description: "Automatically assign CPT and ICD codes with remarkable accuracy. Our AI analyzes patient encounters and assigns appropriate billing codes.",
      link: "/products/coding",
    },
    {
      id: 3,
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animated-icon">
          <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" />
        </svg>
      ),
      title: "Prior Auth Automation",
      description: "Cut prior authorization time from days to minutes. Our platform automates insurance approvals for medications and procedures.",
      link: "/products/authorization",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="py-16 md:py-24 bg-white"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">OUR SERVICES</div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Comprehensive Healthcare Solutions</h2>
          <p className="text-lg text-slate-600 mt-4">Transform your practice with our AI-powered healthcare technology suite. From an intelligent EHR to fully automated prior authorizations.</p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
            {serviceList.map((service) => (
              <Card
                key={service.id}
                className={`service-card border-slate-200 ${activeCard === service.id ? "border-primary/50 shadow-lg" : ""}`}
                onMouseEnter={() => setActiveCard(service.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardHeader>
                  <div className={`text-primary transition-colors ${activeCard === service.id ? "text-primary" : "text-slate-800"}`}>{service.icon}</div>
                  <CardTitle className="text-xl mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">{service.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" asChild className="p-0 hover:bg-transparent group">
                    <Link href={service.link} className="flex items-center text-primary">
                      Learn more
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
