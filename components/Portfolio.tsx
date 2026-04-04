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
  ThumbsUp
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
            className="absolute top-0 right-0 w-[380px] aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 bg-[#1a1a1a]"
          >
            <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1 z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            </div>
            <Image 
              src="https://picsum.photos/seed/shopify-fashion/800/1400" 
              alt="Shopify Fashion Store" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 pt-6"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-32 -right-16 w-[420px] aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-20 bg-[#1a1a1a]"
          >
            <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1 z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            </div>
            <Image 
              src="https://picsum.photos/seed/shopify-tech/800/600" 
              alt="Shopify Tech Store" 
              fill
              className="object-cover pt-6"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute bottom-4 right-12 w-[320px] aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-30 bg-[#1a1a1a]"
          >
            <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/10 flex items-center px-3 gap-1 z-20">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50" />
            </div>
            <Image 
              src="https://picsum.photos/seed/shopify-minimal/800/800" 
              alt="Shopify Minimal Store" 
              fill
              className="object-cover pt-6"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
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
                <a href="mailto:ezemdukas1@gmail.com" className="p-2 bg-white/5 rounded-full hover:bg-blue-600 transition-colors"><Mail size={18} /></a>
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
      title: "Shopify Development",
      description: "Custom theme development from scratch or feature-rich store setups using Liquid and modern JS frameworks.",
      icon: <ShoppingBag size={32} />,
      color: "bg-blue-600"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Data-driven UI/UX audits and implementation to turn your existing traffic into high-value customers.",
      icon: <BarChart3 size={32} />,
      color: "bg-indigo-600"
    },
    {
      title: "Store Migration",
      description: "Seamlessly moving your data, SEO rankings, and customer base from WooCommerce, Magento, or BigCommerce to Shopify.",
      icon: <RefreshCw size={32} />,
      color: "bg-purple-600"
    },
    {
      title: "Performance Engineering",
      description: "Speed optimization that actually works. Improving Core Web Vitals to boost SEO and user retention.",
      icon: <Zap size={32} />,
      color: "bg-emerald-600"
    },
    {
      title: "E-commerce Compliance",
      description: "Ensuring your store meets all legal and accessibility standards (ADA, GDPR) to protect your business.",
      icon: <ShieldCheck size={32} />,
      color: "bg-orange-600"
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Strategic <span className="text-blue-500">Services.</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Scalable solutions designed to handle the complexities of modern e-commerce.</p>
        </div>

        <div className="relative">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="sticky top-24 mb-12"
            >
              <div className={`group relative bg-[#1a1a1a] p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl flex flex-col md:flex-row gap-8 items-center transition-all duration-500 hover:border-blue-500/30`}>
                <div className={`w-20 h-20 md:w-24 md:h-24 ${service.color} rounded-3xl flex items-center justify-center text-white shrink-0 shadow-lg`}>
                  {service.icon}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                    {service.description}
                  </p>
                </div>
                <div className="hidden md:block">
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <ArrowRight size={20} />
                  </div>
                </div>
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
      title: "Skin Care E-commerce",
      category: "Shopify Custom Development",
      image: "https://picsum.photos/seed/skincare/800/600",
      views: "12.4k",
      appreciations: "842"
    },
    {
      title: "Crypto Wallet App",
      category: "UI/UX Design & Integration",
      image: "https://picsum.photos/seed/crypto/800/600",
      views: "8.9k",
      appreciations: "560"
    },
    {
      title: "Food Delivery UI",
      category: "Mobile-First Storefront",
      image: "https://picsum.photos/seed/foodapp/800/600",
      views: "15.2k",
      appreciations: "1.2k"
    },
    {
      title: "Tech Gadgets Hub",
      category: "Performance Optimization",
      image: "https://picsum.photos/seed/gadgets/800/600",
      views: "6.7k",
      appreciations: "420"
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
              className="group cursor-pointer"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl mb-6 bg-[#1a1a1a]">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Behance-style Overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px] flex flex-col items-center justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="flex gap-6"
                  >
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
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute bottom-8"
                  >
                    <span className="px-6 py-2 bg-white text-black rounded-full text-sm font-bold flex items-center gap-2">
                      View Project <ExternalLink size={14} />
                    </span>
                  </motion.div>
                </div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-500 font-medium text-sm uppercase tracking-wider">{project.category}</p>
                </div>
              </div>
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
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
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
                    <div className="text-lg font-bold">ezemdukas1@gmail.com</div>
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
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
