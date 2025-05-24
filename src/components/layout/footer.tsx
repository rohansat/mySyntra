import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div className="space-y-3">
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
              <span className="font-bold text-xl">Syntra</span>
            </Link>
            <p className="text-sm text-slate-600 max-w-xs">
              Automating healthcare administrative tasks so you can focus on what matters most — your patients.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-600 hover:text-primary"><Facebook className="h-5 w-5" /><span className="sr-only">Facebook</span></Link>
              <Link href="#" className="text-slate-600 hover:text-primary"><Twitter className="h-5 w-5" /><span className="sr-only">Twitter</span></Link>
              <Link href="#" className="text-slate-600 hover:text-primary"><Instagram className="h-5 w-5" /><span className="sr-only">Instagram</span></Link>
              <Link href="#" className="text-slate-600 hover:text-primary"><Linkedin className="h-5 w-5" /><span className="sr-only">LinkedIn</span></Link>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Products</h3>
              <ul className="space-y-2">
                <li><Link href="/products/ehr" className="text-sm text-slate-600 hover:text-primary">Electronic Health Records</Link></li>
                <li><Link href="/products/coding" className="text-sm text-slate-600 hover:text-primary">AI Medical Coding</Link></li>
                <li><Link href="/products/authorization" className="text-sm text-slate-600 hover:text-primary">Prior Auth Automation</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-sm text-slate-600 hover:text-primary">About Us</Link></li>
                <li><Link href="/careers" className="text-sm text-slate-600 hover:text-primary">Careers</Link></li>
                <li><Link href="/blog" className="text-sm text-slate-600 hover:text-primary">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-slate-600 hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-medium uppercase tracking-wider text-primary">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="text-sm text-slate-600 hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-sm text-slate-600 hover:text-primary">Terms of Service</Link></li>
                <li><Link href="/hipaa" className="text-sm text-slate-600 hover:text-primary">HIPAA Compliance</Link></li>
                <li><Link href="/security" className="text-sm text-slate-600 hover:text-primary">Security</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Syntra Health Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
