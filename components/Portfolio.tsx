'use client';

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Download, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ShoppingBag,
  Zap,
  ShieldCheck,
  RefreshCw,
  BarChart3,
  Eye,
  ThumbsUp,
  Trophy,
  Medal,
  Megaphone,
  Search,
  Truck,
  Target,
  Headphones
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Our apps', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Our Work', href: '#work', hasDropdown: true },
    { name: 'Resources', href: '#', hasDropdown: true },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black italic tracking-tighter flex items-center gap-1"
        >
          <span className="text-white">ALEX</span>
          <span className="text-blue-500">HUB</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-[15px] font-bold text-white/90 hover:text-white transition-colors flex items-center gap-1 group"
            >
              {link.name}
              {link.hasDropdown && (
                <motion.span animate={{ y: [0, 2, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                  <ChevronRight size={14} className="rotate-90 text-white/40 group-hover:text-white/80" />
                </motion.span>
              )}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 border border-white rounded-lg text-[15px] font-bold text-white hover:bg-white/5 transition-all"
          >
            Get a Quote
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-2.5 bg-white text-black rounded-lg text-[15px] font-bold hover:bg-white/90 transition-all"
          >
            Schedule a Call
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#121212] border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-center font-bold flex items-center justify-center gap-2">
                <Download size={18} />
                Download CV
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const constraintsRef = useRef(null);

  return (
    <section ref={constraintsRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-black">
      {/* Abstract Background Waves */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 600C200 400 600 800 1000 400C1400 0 1600 200 1800 100" stroke="url(#paint0_linear)" strokeWidth="80" strokeLinecap="round" />
          <path d="M-200 500C100 300 500 700 900 300C1300 -100 1500 100 1700 0" stroke="url(#paint1_linear)" strokeWidth="60" strokeLinecap="round" />
          <defs>
            <linearGradient id="paint0_linear" x1="0" y1="400" x2="1440" y2="400" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0070f3" />
              <stop offset="1" stopColor="#00a3ff" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear" x1="0" y1="300" x2="1440" y2="300" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00a3ff" />
              <stop offset="1" stopColor="#0070f3" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]" />
      
      {/* Draggable Floating Marquee */}
      <motion.div
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        dragMomentum={true}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        whileDrag={{ scale: 1.05, cursor: 'grabbing' }}
        className="absolute top-48 right-12 md:right-32 z-40 cursor-grab hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full flex items-center gap-6 shadow-2xl shadow-blue-500/20 select-none"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            <span className="text-sm font-bold tracking-tight whitespace-nowrap">6+ Years Exp</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight whitespace-nowrap text-blue-400">Shopify Expert</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold tracking-tight whitespace-nowrap">UK Based</span>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Shopify Partner Badge */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="bg-white p-2 rounded-lg flex items-center justify-center">
              <ShoppingBag className="text-black" size={24} />
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-black text-white leading-none tracking-wider uppercase">Shopify</span>
              <span className="text-[13px] font-black text-white leading-none tracking-wider uppercase">Platinum Partner</span>
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-[80px] font-display font-black leading-[0.95] mb-8 tracking-tighter uppercase text-white">
            The Future-Powered <br />
            <span className="text-blue-500">Shopify Partner</span> <br />
            Your Store Deserves
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 mb-12 max-w-xl leading-relaxed font-medium">
            Join Forces with <span className="text-white font-bold">Certified Shopify Platinum Partner</span> Alex Hub to build, grow, and thrive on Shopify.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-white rounded-xl text-lg font-bold text-white hover:bg-white/5 transition-all"
            >
              Get a Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black rounded-xl text-lg font-bold hover:bg-white/90 transition-all shadow-xl shadow-white/10"
            >
              Schedule a Call
            </motion.button>
          </div>
        </motion.div>

        <div className="relative hidden lg:block h-[600px]">
          {/* Staggered Image Stack - Shopify Store Layouts */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 right-0 w-[280px] aspect-[9/19] rounded-[3rem] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl z-10 bg-[#0a0a0a]"
          >
            {/* Mobile Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="w-8 h-1 rounded-full bg-white/10" />
            </div>
            <Image 
              src="/regenerated_image_1777567248389.png" 
              alt="Shopify Skincare Store" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-20 -right-24 w-[280px] aspect-[9/19] rounded-[3rem] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl z-20 bg-[#0a0a0a]"
          >
            {/* Mobile Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="w-8 h-1 rounded-full bg-white/10" />
            </div>
            <Image 
              src="/regenerated_image_1777567259857.png" 
              alt="Shopify Fashion Store" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-0 right-16 w-[280px] aspect-[9/19] rounded-[3rem] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl z-30 bg-[#0a0a0a]"
          >
            {/* Mobile Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1a1a1a] rounded-b-2xl z-30 flex items-center justify-center gap-1.5">
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="w-8 h-1 rounded-full bg-white/10" />
            </div>
            <Image 
              src="/regenerated_image_1777567232395.png" 
              alt="Shopify Tech Store" 
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TrustBadges = () => {
  const badges = [
    {
      platform: "shopify",
      rating: "Highest-Rated With 5/5 Star On",
      icon: <Star className="text-yellow-400 fill-yellow-400" size={20} />,
      logo: (
        <div className="flex items-center gap-2">
          <ShoppingBag size={28} className="text-white" />
          <span className="text-3xl font-bold tracking-tight">shopify</span>
        </div>
      )
    },
    {
      platform: "Clutch",
      rating: "Top-Rated With 325+ Reviews On",
      icon: <Trophy className="text-orange-400" size={20} />,
      logo: <span className="text-3xl font-bold tracking-tight">Clutch<span className="text-red-500">.</span></span>
    },
    {
      platform: "GoodFirms",
      rating: "Perfect 5.0 Score On",
      icon: <Medal className="text-blue-400" size={20} />,
      logo: (
        <div className="flex items-center gap-1">
          <div className="w-7 h-7 bg-blue-500 rounded flex items-center justify-center font-black text-[12px]">F</div>
          <span className="text-3xl font-bold tracking-tight">GoodFirms</span>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-5 shrink-0"
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-white/10">
              <ShoppingBag className="text-black" size={40} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-[0.2em] leading-none text-white">SHOPIFY</span>
              <span className="text-2xl font-black tracking-[0.2em] leading-none text-white">PLATINUM</span>
              <span className="text-2xl font-black tracking-[0.2em] leading-none text-white">PARTNER</span>
            </div>
          </motion.div>
          
          <div className="hidden md:block w-px h-20 bg-white/10 mx-4" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl font-display font-bold max-w-3xl leading-[1.1] tracking-tight"
          >
            Proud Shopify Plus Solutions Agency, <br />
            <span className="text-gray-500">Empowering Global Businesses</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (index * 0.1) }}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.02)",
                borderColor: "rgba(59, 130, 246, 0.4)"
              }}
              className="group relative p-12 rounded-[40px] border border-white/5 bg-[#0a0a0a] flex flex-col items-center justify-center text-center transition-all duration-500 cursor-default"
            >
              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-[40px] bg-blue-500/0 group-hover:bg-blue-500/5 transition-all duration-500 blur-2xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-8 text-gray-500 group-hover:text-white transition-colors duration-300">
                  {badge.icon}
                  <span className="text-xs font-black uppercase tracking-[0.15em]">{badge.rating}</span>
                </div>
                <div className="group-hover:scale-110 transition-transform duration-500 ease-out">
                  {badge.logo}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BrandSection = () => {
  const brands = [
    "COSORI", "pawsync", "REUZEL", "KNOSS", "mosqitter", "nani", "FASCO", "LOST COAST", "PAINTLIFE", "SPEEDGEAR", "BLUEBIRD", "NANI", "KNOSS", "COSORI", "pawsync"
  ];

  // Duplicate brands for seamless loop
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-black leading-tight tracking-tight max-w-xl">
            Trusted by <br />
            <span className="text-gray-400 italic">Dreamers, Doers,</span> <br />
            and Leaders
          </h2>

          {/* New Horizontal Logo Row */}
          <div className="mt-12 overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-white to-transparent z-10" />
            
            <motion.div 
              animate={{ x: [0, -1000] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-12 items-center whitespace-nowrap py-4"
            >
              {[...brands, ...brands].map((brand, i) => (
                <div 
                  key={i} 
                  className="text-2xl font-black text-black/20 hover:text-blue-600 hover:scale-110 transition-all duration-300 cursor-default tracking-tighter"
                >
                  {brand}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Isometric Marquee Container */}
      <div className="relative h-[500px] md:h-[600px] -mt-20 md:-mt-40 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-[200%] h-full flex flex-col gap-6"
          style={{
            transform: "rotateX(45deg) rotateZ(-20deg) skewX(10deg) translateY(-100px)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Row 1: Left to Right */}
          <div className="flex gap-6 whitespace-nowrap">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {duplicatedBrands.map((brand, i) => (
                <div 
                  key={i} 
                  className="w-48 h-24 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center px-8 transition-all hover:shadow-xl hover:border-blue-500/20"
                >
                  <span className="text-black font-black tracking-tighter text-xl opacity-80">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2: Right to Left */}
          <div className="flex gap-6 whitespace-nowrap ml-[-500px]">
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {duplicatedBrands.map((brand, i) => (
                <div 
                  key={i} 
                  className="w-48 h-24 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center px-8 transition-all hover:shadow-xl hover:border-blue-500/20"
                >
                  <span className="text-black font-black tracking-tighter text-xl opacity-80">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 3: Left to Right (Faster) */}
          <div className="flex gap-6 whitespace-nowrap ml-[-200px]">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="flex gap-6"
            >
              {duplicatedBrands.map((brand, i) => (
                <div 
                  key={i} 
                  className="w-48 h-24 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center px-8 transition-all hover:shadow-xl hover:border-blue-500/20"
                >
                  <span className="text-black font-black tracking-tighter text-xl opacity-80">{brand}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay for transition back to dark */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent z-20" />
    </section>
  );
};

const SocialProofStrip = () => {
  const stats = [
    { 
      label: "Stores Worked With", 
      value: 50, 
      suffix: "+",
      icon: <ShoppingBag size={20} className="text-blue-500" />,
      detail: "From startups to enterprise"
    },
    { 
      label: "Proven Sales Growth", 
      value: 100, 
      suffix: "%",
      icon: <BarChart3 size={20} className="text-emerald-500" />,
      detail: "Average client revenue boost"
    },
    { 
      label: "Optimization Expert", 
      value: 99, 
      suffix: "/100",
      icon: <Zap size={20} className="text-yellow-500" />,
      detail: "Lighthouse performance score"
    }
  ];

  return (
    <div className="relative z-30 -mt-12 max-w-5xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-black/40 backdrop-blur-2xl border border-white/10 rounded-3xl p-1 md:p-2 shadow-2xl shadow-blue-500/10"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
              className="relative group px-8 py-6 rounded-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Animated Glow on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/5 group-hover:to-blue-500/5 transition-all duration-500" />
              
              <div className="relative z-10 flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  {stat.icon}
                </div>
                <div>
                  <div className="flex items-baseline gap-1">
                    <motion.span 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="text-2xl font-black text-white"
                    >
                      {stat.value}{stat.suffix}
                    </motion.span>
                  </div>
                  <div className="text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-blue-400 transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>

              {/* Tooltip-like detail on hover */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-2 left-8 text-[10px] font-bold text-gray-600 pointer-events-none"
              >
                {stat.detail}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const About = () => {
  const skills = [
    'Liquid', 'JavaScript', 'HTML5', 'CSS3', 'JSON', 'Technical SEO', 'CRO', 'API Integration'
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-8">The Technical Engine Behind <span className="text-blue-500">Digital Retail.</span></h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              6+ years experience specializing in the technical engine of digital retail, fixing complex backend errors and optimizing site growth. I don&apos;t just build stores; I engineer sales machines.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold text-blue-500 mb-1">6+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Years Experience</div>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                <div className="text-3xl font-bold text-blue-500 mb-1">150+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-bold">Stores Optimized</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#121212] p-8 rounded-3xl border border-white/10"
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-blue-500" />
              Core Technical Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-white/5 rounded-lg text-sm font-medium border border-white/5 hover:border-blue-500/50 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
            
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">AS</div>
                <div>
                  <div className="font-bold">Alex Smart Hub</div>
                  <div className="text-sm text-gray-500">Senior Shopify Developer</div>
                </div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Github size={18} /></a>
                <a href="mailto:ezendukas1@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Mail size={18} /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Shopify Store Setup & Management",
      description: "End-to-end Shopify solutions, from initial configuration to daily operational management and scaling.",
      icon: <ShoppingBag size={28} />,
      color: "bg-blue-600"
    },
    {
      title: "Social Media Advertising",
      description: "High-ROI ad campaigns across Meta, TikTok, and Google to drive targeted traffic to your storefront.",
      icon: <Megaphone size={28} />,
      color: "bg-pink-600"
    },
    {
      title: "SEO Optimization",
      description: "Technical and on-page SEO strategies to improve your organic rankings and search visibility.",
      icon: <Search size={28} />,
      color: "bg-emerald-600"
    },
    {
      title: "Product Page Optimization (CRO)",
      description: "Optimizing product descriptions, images, and layouts to maximize conversion rates and average order value.",
      icon: <BarChart3 size={28} />,
      color: "bg-indigo-600"
    },
    {
      title: "Email Marketing",
      description: "Automated flows and targeted campaigns to nurture leads and increase customer lifetime value.",
      icon: <Mail size={28} />,
      color: "bg-purple-600"
    },
    {
      title: "Dropshipping Store Setup",
      description: "Specialized setups for dropshipping businesses, including supplier integration and automated fulfillment.",
      icon: <Truck size={28} />,
      color: "bg-orange-600"
    },
    {
      title: "Marketing Strategy",
      description: "Comprehensive digital marketing roadmaps tailored to your brand's unique goals and market position.",
      icon: <Target size={28} />,
      color: "bg-red-600"
    },
    {
      title: "360° Consultation & Ongoing Support",
      description: "Expert guidance and technical support to ensure your store remains competitive and technically sound.",
      icon: <Headphones size={28} />,
      color: "bg-cyan-600"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Expert <span className="text-blue-500">Solutions.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Comprehensive e-commerce services to build, grow, and scale your digital brand.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -12 }}
              className="group relative bg-[#1a1a1a] p-8 rounded-[32px] border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/0 via-transparent to-blue-600/0 group-hover:from-blue-600/10 group-hover:to-blue-600/5 transition-all duration-700 pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/0 group-hover:bg-blue-600/10 rounded-full blur-3xl transition-all duration-700 pointer-events-none" />

              <div className={`relative z-10 w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-115 group-hover:-translate-y-1 transition-all duration-500`}>
                {service.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold mb-4 leading-tight group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-500 origin-left">
                {service.title}
              </h3>
              <p className="relative z-10 text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                {service.description}
              </p>
              <div className="relative z-10 flex items-center gap-2 text-blue-500 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Sopotex",
      url: "https://sopotex.eu/",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567294682.png",
      views: "12.4k",
      appreciations: "842"
    },
    {
      title: "Wilkinson & Rivera",
      url: "https://www.wilkinson-rivera.com/",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567322663.png",
      views: "8.9k",
      appreciations: "560"
    },
    {
      title: "Rokia Jewelries",
      url: "https://rokiajewelries.com/",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567336963.png",
      views: "15.2k",
      appreciations: "1.2k"
    },
    {
      title: "Hey Pretty Beauty",
      url: "https://www.heyprettybeauty.com/",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567234885.png",
      views: "18.1k",
      appreciations: "1.5k"
    },
    {
      title: "Cognvita",
      url: "https://cognvita.com",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567248073.png",
      views: "6.7k",
      appreciations: "420"
    },
    {
      title: "Rays Online Store",
      url: "https://raysonlinestore.com/",
      description: "Shopify setup, product optimization, SEO, and conversion rate improvements.",
      image: "/regenerated_image_1777567258446.png",
      views: "9.3k",
      appreciations: "610"
    }
  ];

  return (
    <section id="work" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Featured <span className="text-blue-500">Work.</span></h2>
            <p className="text-gray-400">A selection of high-performance digital products.</p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-full border border-white/10 text-sm font-bold hover:bg-white/5 transition-all">All Projects</button>
            <button className="px-6 py-2 rounded-full bg-blue-600 text-white text-sm font-bold hover:bg-blue-700 transition-all">Shopify Stores</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="group"
            >
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block cursor-pointer"
              >
                <div className="relative aspect-4/3 overflow-hidden rounded-3xl mb-6 bg-[#1a1a1a] border border-white/10 group-hover:border-blue-500/30 transition-colors">
                  {/* Browser Top Bar Mockup */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-[#2a2a2a] border-b border-white/5 z-20 flex items-center px-4 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    <div className="ml-4 h-4 w-32 bg-white/5 rounded-full" />
                  </div>

                  <div className="pt-8 w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  
                  {/* Behance-style Overlay */}
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center">
                    <div className="flex gap-6">
                      <div className="flex flex-col items-center gap-2 text-white">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <Eye size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">{project.views}</span>
                      </div>
                      <div className="flex flex-col items-center gap-2 text-white">
                        <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                          <ThumbsUp size={20} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest">{project.appreciations}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <div 
                      className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-all"
                    >
                      View Project <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CEO, GlowBeauty",
      content: "Alex transformed our Shopify store. Our conversion rate jumped by 35% within the first month of the new custom theme launch.",
      avatar: "https://picsum.photos/seed/user1/100/100"
    },
    {
      name: "Marcus Thorne",
      role: "Founder, TechGear",
      content: "The technical precision Alex brings is unmatched. He fixed backend errors that three other developers couldn't solve.",
      avatar: "https://picsum.photos/seed/user2/100/100"
    },
    {
      name: "Elena Rodriguez",
      role: "Marketing Director, EcoLife",
      content: "A true strategist. Alex doesn't just code; he understands the business goals and builds systems that scale.",
      avatar: "https://picsum.photos/seed/user3/100/100"
    }
  ];

  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-display font-bold mb-16 text-center">Client <span className="text-blue-500">Feedback.</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.1,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="bg-[#1a1a1a] p-8 rounded-3xl border border-white/5 relative"
            >
              <div className="flex gap-1 text-blue-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-gray-400 mb-8 italic leading-relaxed">&quot;{t.content}&quot;</p>
              <div className="flex items-center gap-4">
                <Image 
                  src={t.avatar} 
                  alt={t.name} 
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full grayscale" 
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  projectType: z.string(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      projectType: "Shopify Development",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    console.log('Form data:', data);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[40px] p-10 md:p-20 overflow-hidden relative">
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/20 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">Ready to Scale Your <br />Store?</h2>
              <p className="text-blue-100 text-xl mb-12 max-w-md">
                Let&apos;s discuss your project and see how technical precision can drive your sales growth.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 uppercase font-bold tracking-wider">Email Me</div>
                    <div className="text-lg font-bold">ezendukas1@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 uppercase font-bold tracking-wider">Call Me</div>
                    <div className="text-lg font-bold">+44 7402 174123</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-blue-200 uppercase font-bold tracking-wider">Location</div>
                    <div className="text-lg font-bold">United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl relative">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. Alex will get back to you shortly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 text-blue-600 font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900">Name</label>
                        <input
                          {...register('name')}
                          type="text"
                          className={`w-full px-4 py-3 bg-gray-100 border-2 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all ${
                            errors.name ? 'border-red-500 bg-red-50' : 'border-transparent'
                          }`}
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <p className="text-xs font-bold text-red-500 mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-900">Email</label>
                        <input
                          {...register('email')}
                          type="email"
                          className={`w-full px-4 py-3 bg-gray-100 border-2 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all ${
                            errors.email ? 'border-red-500 bg-red-50' : 'border-transparent'
                          }`}
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <p className="text-xs font-bold text-red-500 mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900">Project Type</label>
                      <select
                        {...register('projectType')}
                        className="w-full px-4 py-3 bg-gray-100 border-2 border-transparent rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden"
                      >
                        <option>Shopify Development</option>
                        <option>CRO Audit</option>
                        <option>Store Migration</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-900">Message</label>
                      <textarea
                        {...register('message')}
                        rows={4}
                        className={`w-full px-4 py-3 bg-gray-100 border-2 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all ${
                          errors.message ? 'border-red-500 bg-red-50' : 'border-transparent'
                        }`}
                        placeholder="Tell me about your store goals..."
                      ></textarea>
                      {errors.message && (
                        <p className="text-xs font-bold text-red-500 mt-1">{errors.message.message}</p>
                      )}
                    </div>
                    <button
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="animate-spin" size={20} />
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <div className="text-2xl font-display font-bold mb-2">ALEX<span className="text-blue-500">.</span>HUB</div>
            <p className="text-gray-500 font-medium">Smart Systems. Scalable Growth.</p>
          </div>
          <div className="flex gap-8">
            <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><Linkedin size={18} /></a>
            <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><Github size={18} /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-sm text-gray-600">© 2026 Alex Smart Hub. All rights reserved.</p>
          <button className="text-sm text-gray-600 hover:text-white flex items-center gap-2">
            <Download size={14} />
            Download Resume (PDF)
          </button>
        </div>
      </div>
    </footer>
  );
};

export default function Portfolio() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <TrustBadges />
      <BrandSection />
      <SocialProofStrip />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
