import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import CustomCursor from './Cursor';

gsap.registerPlugin(ScrollTrigger);

const BakeryLanding = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Hero section animations
    const tl = gsap.timeline();
    
    tl.fromTo(titleRef.current, 
      { y: 10, opacity: 0 },
      { y: 150, opacity: 1, duration: 1.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 200, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.8"
    )
    .fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Floating elements animation
    gsap.to(floatingElementsRef.current.children, {
      y: -30,
      rotation: 360,
      duration: 4,
      ease: "power1.inOut",
      stagger: 0.3,
      yoyo: true,
      repeat: -1
    });

    // Individual floating element animations
    const floatingElements = floatingElementsRef.current.children;
    gsap.to(floatingElements[0], { // Donut
      rotation: 720,
      duration: 8,
      ease: "none",
      repeat: -1
    });
    
    gsap.to(floatingElements[1], { // Cupcake
      scale: 1.2,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });
    
    gsap.to(floatingElements[2], { // Cookie
      rotation: -360,
      duration: 6,
      ease: "none",
      repeat: -1
    });
    
    gsap.to(floatingElements[3], { // Croissant
      rotation: 180,
      duration: 5,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Scroll-triggered animations
    gsap.fromTo(".menu-item", 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: menuRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Parallax effect for hero background
    gsap.to(heroRef.current, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

    // Navigation animations
    gsap.fromTo("nav a", 
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.5
      }
    );

    // About section animations
    gsap.fromTo("#about h2", 
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo("#about p", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#about",
          start: "top 70%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Contact section animations
    gsap.fromTo("#contact .grid > div", 
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#contact",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.5,
        ease: "power2.in"
      });
    }
  };

  const handleCTAClick = () => {
    gsap.to(ctaRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1
    });
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 overflow-hidden cursor-none">
      <CustomCursor />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-orange-600">Sweet Dreams</h1>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Home</a>
              <a href="#menu" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Menu</a>
              <a href="#about" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">About</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-300">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={handleMenuToggle}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-16 right-0 w-64 h-full bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-40">
        <div className="p-6 space-y-4">
          <a href="#home" className="block text-gray-700 hover:text-orange-600 transition-colors duration-300">Home</a>
          <a href="#menu" className="block text-gray-700 hover:text-orange-600 transition-colors duration-300">Menu</a>
          <a href="#about" className="block text-gray-700 hover:text-orange-600 transition-colors duration-300">About</a>
          <a href="#contact" className="block text-gray-700 hover:text-orange-600 transition-colors duration-300">Contact</a>
        </div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center pt-16">
        {/* Floating Elements */}
        <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none z-10">
          {/* Donut */}
          {/* <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-500 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-50 to-orange-100 rounded-full border-2 border-white"></div>
          </div> */}
          {/* Cupcake */}
          {/* <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-b from-pink-300 to-pink-200 rounded-full"></div>
          </div> */}
          {/* Cookie */}
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-4 h-4 bg-amber-800 rounded-full"></div>
            <div className="absolute top-2 left-2 w-2 h-2 bg-amber-800 rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 bg-amber-800 rounded-full"></div>
          </div>
          {/* Croissant */}
          <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-yellow-300 to-amber-400 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full transform rotate-45"></div>
          </div>
          {/* Cake Slice */}
          <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-gradient-to-br from-pink-300 to-red-400 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-4 h-4 bg-gradient-to-b from-pink-200 to-pink-100 rounded-full"></div>
          </div>
          {/* Bread */}
          {/* <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-60 flex items-center justify-center">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-200 to-orange-300 rounded-full"></div>
          </div> */}
        </div>

        <div className="text-center z-20 px-4 relative">
          <h1 
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-gray-800 mb-6 leading-tight"
          >
            Fresh Baked
            <span className="block text-orange-600">Delights</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Experience the art of artisanal baking with our handcrafted pastries, 
            breads, and sweet treats made with love and the finest ingredients.
          </p>
          
          <button 
            ref={ctaRef}
            onClick={handleCTAClick}
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Our Menu
          </button>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section ref={menuRef} id="menu" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Signature Items</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most beloved creations, each made with passion and premium ingredients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div 
              className="menu-item group bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-orange-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🥐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Croissants</h3>
              <p className="text-gray-600 mb-4">Buttery, flaky layers of perfection baked fresh every morning</p>
              <span className="text-orange-600 font-semibold">$4.50</span>
            </div>

            {/* Menu Item 2 */}
            <div 
              className="menu-item group bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-yellow-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🍰</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Artisan Cakes</h3>
              <p className="text-gray-600 mb-4">Custom-designed cakes for every celebration and occasion</p>
              <span className="text-orange-600 font-semibold">From $35</span>
            </div>

            {/* Menu Item 3 */}
            <div 
              className="menu-item group bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-amber-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🥖</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Sourdough Bread</h3>
              <p className="text-gray-600 mb-4">Traditional sourdough with a perfect crust and tangy flavor</p>
              <span className="text-orange-600 font-semibold">$6.50</span>
            </div>

            {/* Menu Item 4 */}
            <div 
              className="menu-item group bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-red-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🍪</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cookies</h3>
              <p className="text-gray-600 mb-4">Classic chocolate chip and seasonal specialty cookies</p>
              <span className="text-orange-600 font-semibold">$2.50</span>
            </div>

            {/* Menu Item 5 */}
            <div 
              className="menu-item group bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-green-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🥨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pretzels</h3>
              <p className="text-gray-600 mb-4">Soft, warm pretzels with your choice of toppings</p>
              <span className="text-orange-600 font-semibold">$3.50</span>
            </div>

            {/* Menu Item 6 */}
            <div 
              className="menu-item group bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1.2,
                  rotation: 360,
                  duration: 0.6,
                  ease: "back.out(1.7)"
                });
              }}
              onMouseLeave={(e) => {
                gsap.to(e.currentTarget.querySelector('span'), {
                  scale: 1,
                  rotation: 0,
                  duration: 0.3,
                  ease: "power2.out"
                });
              }}
            >
              <div className="w-20 h-20 bg-pink-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-3xl transition-transform duration-300">🧁</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Cupcakes</h3>
              <p className="text-gray-600 mb-4">Moist cupcakes with creative frostings and decorations</p>
              <span className="text-orange-600 font-semibold">$4.00</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2010, Sweet Dreams Bakery began as a small family kitchen with a big dream: 
                to create the most delicious, fresh-baked goods using traditional recipes and modern techniques.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                Today, we continue to bake with the same passion and dedication, serving our community 
                with love, one delicious bite at a time.
              </p>
              <button className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-orange-200 to-amber-200 rounded-2xl flex items-center justify-center">
                <span className="text-8xl">🏪</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Visit Us Today</h2>
          <p className="text-xl text-gray-600 mb-8">
            Come experience the warmth and deliciousness of our bakery
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-orange-50 rounded-xl">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">123 Baker Street<br />Sweet Town, ST 12345</p>
            </div>
            <div className="p-6 bg-amber-50 rounded-xl">
              <div className="text-3xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Hours</h3>
              <p className="text-gray-600">Mon-Sat: 6AM-8PM<br />Sunday: 7AM-6PM</p>
            </div>
            <div className="p-6 bg-yellow-50 rounded-xl">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Contact</h3>
              <p className="text-gray-600">(555) 123-4567<br />hello@sweetdreams.com</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            Order Online
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Sweet Dreams Bakery</h3>
          <p className="text-gray-300 mb-6">Fresh baked goods made with love since 2010</p>
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Facebook</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Instagram</a>
            <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors duration-300">Twitter</a>
          </div>
          <p className="text-gray-400">&copy; 2024 Sweet Dreams Bakery. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BakeryLanding; 