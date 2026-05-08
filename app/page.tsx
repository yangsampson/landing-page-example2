'use client';

import React, { useEffect } from 'react';
import { CheckCircle, Phone, MapPin, Clock, Heart, Leaf, Pill, ClipboardList, Stethoscope } from 'lucide-react';

export default function PharmacyLandingPage() {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-serif text-slate-900 bg-[#fdfdfd]">
      
      {/* CLINICAL TOP BAR */}
      <div className="bg-emerald-700 text-white py-2 text-center text-sm font-medium tracking-wide">
        Providing Sunset Park with Professional Pharmaceutical Care Since 2010
      </div>

      {/* MEDICAL HEADER */}
      <header className="sticky top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b-2 border-emerald-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src="/image/LogoBBRx.png" 
              alt="BBRx Plus Pharmacy" 
              className="h-16 w-auto object-contain"
            />
            <div className="border-l-2 border-emerald-100 pl-4">
              <h1 className="text-xl font-bold tracking-tight text-slate-800 leading-none">BBRx PLUS</h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-600 font-bold">Community Pharmacy</p>
            </div>
          </div>
          
          <nav className="hidden lg:flex space-x-10 font-sans text-sm uppercase tracking-wider font-semibold text-slate-500">
            <a href="#about" className="hover:text-emerald-700 transition">Our Tradition</a>
            <a href="#services" className="hover:text-emerald-700 transition">Services</a>
            <a href="#herbal" className="hover:text-emerald-700 transition">Herbal Care</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Locations</a>
          </nav>

          <div className="flex flex-col items-end">
            <a href="tel:+17188510817" className="flex items-center gap-2 text-lg font-bold text-slate-800">
              <Phone size={20} className="text-emerald-600" /> (718) 851-0817
            </a>
            <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-tighter italic">Professional Service</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        {/* CLINICAL HERO */}
        <section id="about" className="relative py-20 bg-[radial-gradient(#e1f1ea_1px,transparent_1px)] [background-size:20px_20px]">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-16 items-center">
            <div className="lg:col-span-3">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 leading-tight mb-6">
                Quality Pharmaceutical Care You Can <span className="text-emerald-700 underline decoration-emerald-200 underline-offset-8">Always Depend On</span>
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed font-sans border-l-4 border-emerald-500 pl-6">
                At BBRx Plus Pharmacy, we understand that behind every prescription, there's a patient. We provide individualized care tailored to the Sunset Park community.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="relative p-2 bg-white shadow-2xl border border-slate-100 rounded-lg">
                <img 
                  src="/image/StoreBBRx.jpg" 
                  alt="BBRx Pharmacy Sunset Park" 
                  className="rounded shadow-inner w-full object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-emerald-600 text-white p-6 rounded shadow-xl hidden md:block">
                  <p className="text-3xl font-bold">16 Years</p>
                  <p className="text-xs uppercase tracking-widest opacity-80 font-sans">Since 2010</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <div className="bg-slate-50 border-y border-slate-200 py-6">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 font-sans text-xs font-bold uppercase tracking-widest text-slate-500">
             <div className="flex items-center gap-2"><CheckCircle size={18} className="text-emerald-600"/> Multi-Chain Pharmacy</div>
             <div className="flex items-center gap-2"><Stethoscope size={18} className="text-emerald-600"/> Expert Medical Advice</div>
             <div className="flex items-center gap-2"><Pill size={18} className="text-emerald-600"/> Full Pharmaceutical Range</div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <section id="services" className="py-24 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-slate-200 shadow-sm rounded-lg overflow-hidden font-sans">
            <div className="p-10 bg-white border-b lg:border-b-0 lg:border-r border-slate-200">
              <h3 className="text-2xl font-serif font-bold mb-4 text-emerald-800">Prescription Care</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Friendly pharmacists here to guide you with professional service and accessible drug information.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Individualized Care</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Walk-in Clinic Proximity</li>
                <li className="flex items-center gap-2"><CheckCircle size={14} className="text-emerald-500"/> Quality and Value</li>
              </ul>
            </div>

            <div id="herbal" className="p-10 bg-emerald-50/30 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h3 className="text-2xl font-serif font-bold mb-4 text-emerald-800">Herbal & Wellness</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Specializing in imported herbal products and remedies to support your holistic health journey.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Leaf size={14} className="text-emerald-500"/> Imported Herbal Items</li>
                <li className="flex items-center gap-2"><Leaf size={14} className="text-emerald-500"/> Wellness Products</li>
                <li className="flex items-center gap-2"><Leaf size={14} className="text-emerald-500"/> Holistic Advice</li>
              </ul>
            </div>

            <div className="p-10 bg-white">
              <h3 className="text-2xl font-serif font-bold mb-4 text-emerald-800">Senior Services</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Conveniently located near senior daycare centers and dental offices to serve our local community.
              </p>
              <ul className="space-y-3 text-sm font-semibold text-slate-700">
                <li className="flex items-center gap-2"><Heart size={14} className="text-emerald-500"/> Senior Support</li>
                <li className="flex items-center gap-2"><Heart size={14} className="text-emerald-500"/> Supportive Visits</li>
                <li className="flex items-center gap-2"><Heart size={14} className="text-emerald-500"/> Health Partnership</li>
              </ul>
            </div>
          </div>
        </section>

        {/* GOOGLE REVIEWS */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-5xl mx-auto px-6">
            <h4 className="text-center text-white/50 text-xs font-bold uppercase tracking-[0.3em] mb-12 font-sans">Verified Patient Reviews</h4>
            <div 
              className="elfsight-app-613edab7-a57c-4aff-a6e0-b531398c9a9e" 
              data-elfsight-app-lazy 
            />
          </div>
        </section>
      </main>

      {/* FOOTER / CONTACT */}
      <footer id="contact" className="bg-[#f8faf9] border-t-4 border-emerald-700 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20 font-sans">
          <div>
            <div className="flex items-center gap-2 mb-6">
               <img src="/image/LogoBBRX.png" alt="BBRx Logo" className="h-10 w-auto" />
               <span className="text-xl font-serif font-bold tracking-tighter">BBRx Plus</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              We critically evaluate our locations to build upon strengths and remedy shortcomings, ensuring we remain Sunset Park's most trusted health partner.
            </p>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-6">Our Pharmacy Locations</h4>
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-400 pl-4">
                <p className="font-bold text-slate-800">BBRx Plus Pharmacy</p>
                <p className="text-sm text-slate-600">5223 7th Ave, Brooklyn, NY 11220</p>
                <p className="text-sm font-bold text-emerald-700 mt-1">(718) 851-0817</p>
              </div>
              <div className="border-l-2 border-slate-300 pl-4">
                <p className="font-bold text-slate-800">BBRx Pharmacy</p>
                <p className="text-sm text-slate-600">6013 7th Avenue Unit B, Brooklyn, NY 11220</p>
                <p className="text-sm font-bold text-slate-700 mt-1">(718) 439-0502</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs text-slate-400 mb-6">Professional Hours</h4>
            <div className="text-sm text-slate-800 space-y-2">
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span>Mon - Fri</span>
                <span className="font-bold">9:30 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span>Saturday</span>
                <span className="font-bold">10:00 AM – 6:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-1">
                <span>Sunday</span>
                <span className="font-bold">10:00 AM – 6:00 PM</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-4 uppercase">Extended support available during clinic hours.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center text-slate-400 text-[10px] font-sans uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} BBRx Plus Pharmacy Group. Licensed Pharmaceutical Care.
        </div>
      </footer>
    </div>
  );
}
