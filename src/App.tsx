import { useState } from 'react';
import { Menu, X, Instagram, Coffee, Users, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';

interface Post {
  id: number;
  image: string;
  username: string;
  caption: string;
  likes: number;
  comments: number;
}

interface Testimonial {
  id: number;
  name: string;
  business: string;
  quote: string;
  avatar: string;
  rating: number;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      alert("Thank you! We'll get back to you within 24 hours.");
    }, 800);
  };

  const posts: Post[] = [
    {
      id: 1,
      image: '/images/cafe1.jpg',
      username: '@urbanbrewco',
      caption: 'Morning ritual ☕ Freshly baked croissants and our signature oat milk latte. Come visit us today!',
      likes: 1243,
      comments: 87
    },
    {
      id: 2,
      image: '/images/bakery1.jpg',
      username: '@sweetflourpatisserie',
      caption: 'Flaky, buttery croissants baked fresh every morning. The perfect start to your day 🥐',
      likes: 982,
      comments: 64
    },
    {
      id: 3,
      image: '/images/rest1.jpg',
      username: '@lavitarestaurant',
      caption: 'Our house special: Truffle mushroom risotto. Paired perfectly with a glass of Pinot Noir 🍷',
      likes: 1567,
      comments: 112
    },
    {
      id: 4,
      image: '/images/coffee1.jpg',
      username: '@cornercafecreations',
      caption: 'Latte art that tells a story. Every cup is a canvas 🎨',
      likes: 765,
      comments: 45
    },
    {
      id: 5,
      image: '/images/food1.jpg',
      username: '@bloomcafe',
      caption: 'Avocado toast with a twist: pickled onions, chili flakes & microgreens 🥑',
      likes: 1342,
      comments: 98
    },
    {
      id: 6,
      image: '/images/store1.jpg',
      username: '@boulangerieparis',
      caption: 'Fresh baguettes straight from the oven. The smell of home 🥖',
      likes: 1105,
      comments: 73
    }
  ];

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Maria Lopez",
      business: "Urban Brew Co.",
      quote: "Since working with Instagram Portfolio Builder, our engagement has tripled. The daily posts are beautiful and the captions are spot on.",
      avatar: '/images/avatar1.jpg',
      rating: 5
    },
    {
      id: 2,
      name: "James Chen",
      business: "Flour & Bloom Bakery",
      quote: "They completely transformed our Instagram presence. We went from sporadic posts to a beautiful, cohesive feed that brings customers in daily.",
      avatar: '/images/avatar2.jpg',
      rating: 5
    },
    {
      id: 3,
      name: "Sophie Laurent",
      business: "Le Petit Bistro",
      quote: "The team understands our brand perfectly. The growth in followers and foot traffic has been incredible. Best investment for my restaurant!",
      avatar: '/images/cafe1.jpg',
      rating: 5
    }
  ];

  const services = [
    {
      icon: <Instagram className="w-8 h-8" />,
      title: "Daily Instagram Posts",
      description: "Professionally crafted images and Reels posted daily to keep your feed active and engaging."
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Content Planning",
      description: "Strategic monthly content calendars tailored to your business and target audience."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Caption Writing",
      description: "Compelling, SEO-optimized captions that drive engagement and tell your story."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Hashtag Research",
      description: "Targeted hashtag strategies that increase visibility and reach the right customers."
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Feed Design",
      description: "Cohesive visual branding and grid layouts that make your profile look professional."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-rose-500 via-violet-500 to-amber-500 rounded-xl flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-2xl tracking-tight">InstaPortfolio</div>
              <div className="text-[10px] text-zinc-500 -mt-1">BUILDER</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-rose-500 transition-colors">About</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-rose-500 transition-colors">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-rose-500 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-rose-500 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-rose-500 transition-colors">Testimonials</button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 text-sm font-medium border border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all rounded-full"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="px-6 py-2.5 bg-gradient-to-r from-rose-500 via-violet-500 to-amber-500 text-white text-sm font-medium rounded-full hover:shadow-xl hover:shadow-rose-500/20 transition-all"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white px-6 py-8 flex flex-col gap-6 text-lg">
            <button onClick={() => scrollToSection('about')} className="text-left py-1">About</button>
            <button onClick={() => scrollToSection('services')} className="text-left py-1">Services</button>
            <button onClick={() => scrollToSection('pricing')} className="text-left py-1">Pricing</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-left py-1">Portfolio</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left py-1">Testimonials</button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-1">Contact</button>
            
            <div className="pt-4 border-t flex flex-col gap-3">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="py-3 bg-gradient-to-r from-rose-500 via-violet-500 to-amber-500 text-white rounded-full"
              >
                View Plans
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="pt-20 min-h-[100dvh] flex items-center relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-[length:4px_4px]"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 pt-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs tracking-[2px] mb-6">
              FOR CAFES • RESTAURANTS • BAKERIES
            </div>
            
            <h1 className="text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tighter mb-8">
              Grow your business with<br />beautiful daily Instagram posts
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-400 max-w-md mb-10">
              Professional content that attracts customers. 
              No time? No problem.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-10 py-4 bg-white text-zinc-950 rounded-full font-medium text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform group"
              >
                View Plans
                <div className="group-hover:-rotate-45 transition-transform">→</div>
              </button>
              
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="px-10 py-4 border border-white/40 hover:bg-white/10 rounded-full font-medium text-lg transition-colors"
              >
                See Examples
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-8 text-sm opacity-70">
              <div>Trusted by 240+ businesses</div>
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800"></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 right-12 hidden lg:block">
          <div className="text-[180px] font-black text-white/5 tracking-[-10px] select-none">IG</div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 border-b">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-7">
              <div className="uppercase tracking-[3px] text-sm text-rose-500 mb-3">THE PROBLEM</div>
              <h2 className="text-5xl font-semibold tracking-tight leading-none mb-8">
                Small businesses struggle to keep their Instagram alive
              </h2>
              
              <div className="space-y-8 text-lg text-zinc-600">
                <div className="flex gap-5">
                  <div className="text-rose-500 mt-1">•</div>
                  <div>Creating high-quality content takes too much time</div>
                </div>
                <div className="flex gap-5">
                  <div className="text-rose-500 mt-1">•</div>
                  <div>Inconsistent posting makes you look unprofessional</div>
                </div>
                <div className="flex gap-5">
                  <div className="text-rose-500 mt-1">•</div>
                  <div>Poorly designed feeds don't convert followers into customers</div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-5">
              <div className="bg-zinc-100 aspect-video rounded-3xl flex items-center justify-center p-10 relative">
                <div className="-rotate-6 bg-white shadow-xl rounded-2xl overflow-hidden w-4/5">
                  <div className="bg-black h-1.5"></div>
                  <div className="p-4">
                    <div className="flex items-center justify-between text-xs mb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-6 h-6 bg-zinc-800 rounded-full"></div>
                        <div>@yourcafe</div>
                      </div>
                      <div>•••</div>
                    </div>
                    
                    <div className="bg-zinc-200 h-[200px] rounded-xl mb-4"></div>
                    
                    <div className="text-xs text-zinc-500">1,284 likes • 4d ago</div>
                  </div>
                </div>
              </div>
              <p className="mt-8 text-zinc-500 max-w-xs">
                We handle everything so you can focus on running your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-rose-500 text-sm tracking-[3px] mb-4">OUR SERVICES</div>
            <h2 className="text-5xl font-semibold tracking-tight">Everything you need to shine on Instagram</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white p-10 rounded-3xl border border-zinc-100 group hover:border-rose-200 transition-all"
              >
                <div className="text-rose-500 mb-8 group-hover:scale-110 transition-transform inline-block">
                  {service.icon}
                </div>
                <h3 className="font-semibold text-3xl tracking-tight mb-4">{service.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase text-rose-500 tracking-widest text-sm">PRICING</div>
            <h2 className="text-5xl font-semibold tracking-tight mt-3">Simple, transparent pricing</h2>
            <p className="mt-4 text-xl text-zinc-500">Cancel anytime. 14-day money-back guarantee.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="border border-zinc-200 rounded-3xl p-10 flex flex-col">
              <div>
                <div className="uppercase tracking-widest text-xs mb-3">STARTER</div>
                <div className="text-6xl font-semibold tracking-tighter mb-1">$149</div>
                <div className="text-sm text-zinc-500">/month</div>
              </div>
              
              <ul className="my-12 space-y-4 text-sm flex-1">
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> 15 posts per month</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Content ideas</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Basic captions</li>
                <li className="flex gap-3 items-start text-zinc-400"><span>✓</span> Basic hashtag suggestions</li>
              </ul>
              
              <button onClick={() => scrollToSection('contact')} 
                className="mt-auto py-4 border border-zinc-900 hover:bg-zinc-900 hover:text-white rounded-2xl text-sm font-medium transition-colors">
                SELECT PLAN
              </button>
            </div>

            {/* Growth - Popular */}
            <div className="relative border-2 border-rose-500 rounded-3xl p-10 flex flex-col scale-[1.02] shadow-xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-rose-500 text-white text-xs font-medium tracking-wider px-8 py-1 rounded-full">MOST POPULAR</div>
              
              <div>
                <div className="uppercase tracking-widest text-xs mb-3 text-rose-500">GROWTH</div>
                <div className="text-6xl font-semibold tracking-tighter mb-1">$299</div>
                <div className="text-sm text-zinc-500">/month</div>
              </div>
              
              <ul className="my-12 space-y-4 text-sm flex-1">
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> 30 posts per month</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Professional captions</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Hashtag strategy</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Monthly feed planning</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Story highlights</li>
              </ul>
              
              <button onClick={() => scrollToSection('contact')} 
                className="mt-auto py-4 bg-gradient-to-r from-rose-500 to-violet-500 text-white rounded-2xl text-sm font-medium hover:brightness-110 transition">
                SELECT GROWTH PLAN
              </button>
            </div>

            {/* Premium */}
            <div className="border border-zinc-200 rounded-3xl p-10 flex flex-col">
              <div>
                <div className="uppercase tracking-widest text-xs mb-3">PREMIUM</div>
                <div className="text-6xl font-semibold tracking-tighter mb-1">$499</div>
                <div className="text-sm text-zinc-500">/month</div>
              </div>
              
              <ul className="my-12 space-y-4 text-sm flex-1">
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Daily posts (30+)</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Custom graphics &amp; Reels</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Full content strategy</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Growth recommendations</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Competitor analysis</li>
                <li className="flex gap-3 items-start"><span className="text-emerald-500">✓</span> Monthly performance reports</li>
              </ul>
              
              <button onClick={() => scrollToSection('contact')} 
                className="mt-auto py-4 border border-zinc-900 hover:bg-zinc-900 hover:text-white rounded-2xl text-sm font-medium transition-colors">
                SELECT PLAN
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="text-amber-400 text-xs tracking-[3px]">REAL RESULTS</div>
            <h2 className="text-5xl font-semibold tracking-tight mt-3">Instagram feeds that convert</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.div 
                key={post.id} 
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.04 }}
                className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-white/30 transition-colors"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.username} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 text-xs rounded-full flex items-center gap-1">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div> LIVE
                  </div>
                </div>
                
                <div className="p-7">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-gradient-to-br from-rose-400 to-amber-400 rounded-full flex items-center justify-center text-xs font-bold">📸</div>
                      <div>
                        <div className="font-medium text-sm">{post.username}</div>
                        <div className="text-xs text-zinc-500">3 days ago</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-1">
                        ❤️ <span>{Math.floor(post.likes / 100) / 10}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        💬 <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-sm text-zinc-400 line-clamp-3 leading-snug">
                    {post.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-16 text-xs text-zinc-500 tracking-widest">
            AND MANY MORE. YOURS COULD BE NEXT.
          </div>
        </div>
      </section>

      {/* FUTURE SERVICES */}
      <section className="py-20 border-b bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block px-5 py-1.5 bg-zinc-100 rounded-full text-xs tracking-widest mb-6">COMING SOON</div>
          
          <h3 className="text-4xl font-semibold tracking-tight mb-8">Full website design for your business</h3>
          
          <p className="max-w-md mx-auto text-zinc-600">
            Pair your stunning Instagram presence with a beautiful website built specifically for your cafe, restaurant, or bakery.
          </p>
          
          <div className="flex justify-center mt-12">
            <div className="px-6 py-2 bg-black text-white inline-flex items-center gap-2 text-xs rounded-full">
              <span>COMING IN Q1 2025</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-24 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="uppercase text-rose-500 text-xs tracking-[3px]">DON'T TAKE OUR WORD FOR IT</div>
            <h2 className="text-5xl font-semibold tracking-tight mt-4">Loved by local businesses</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white p-9 rounded-3xl shadow-sm"
              >
                <div className="flex mb-9">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400">★</span>
                  ))}
                </div>
                
                <blockquote className="text-lg leading-tight mb-10">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-2xl" 
                  />
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-xs text-zinc-500">{testimonial.business}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 bg-zinc-950 text-white">
        <div className="max-w-2xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-semibold tracking-tighter">Let's grow your Instagram together</h2>
            <p className="mt-5 text-xl text-zinc-400">Tell us about your business. We'll reply within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-sm mb-3 text-zinc-400">YOUR NAME</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-2xl px-8 py-6 text-lg placeholder:text-zinc-600 outline-none" 
                placeholder="Maria Gonzalez" 
              />
            </div>
            
            <div>
              <label className="block text-sm mb-3 text-zinc-400">BUSINESS EMAIL</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-white rounded-2xl px-8 py-6 text-lg placeholder:text-zinc-600 outline-none" 
                placeholder="you@yourcafe.com" 
              />
            </div>
            
            <div>
              <label className="block text-sm mb-3 text-zinc-400">TELL US ABOUT YOUR BUSINESS</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={7}
                className="w-full resize-y bg-zinc-900 border border-zinc-800 focus:border-white rounded-3xl px-8 py-7 text-lg placeholder:text-zinc-600 outline-none" 
                placeholder="We are a family-owned bakery in downtown Austin looking to increase foot traffic through Instagram..."
              ></textarea>
            </div>

            <button 
              type="submit"
              disabled={formSubmitted}
              className="mt-4 w-full py-7 text-lg font-medium bg-gradient-to-r from-rose-500 via-violet-500 to-amber-500 rounded-3xl hover:brightness-110 disabled:opacity-70 transition flex items-center justify-center gap-4 group"
            >
              {formSubmitted ? (
                <>SENDING<span className="animate-pulse">...</span></>
              ) : (
                <>START MY FREE CONSULTATION <span className="group-hover:translate-x-1 transition">→</span></>
              )}
            </button>
            
            <p className="text-center text-xs text-zinc-500 pt-4">Or email us directly at hello@instaportfoliobuilder.com</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white/70 py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-12 gap-y-16">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-gradient-to-br from-rose-500 via-violet-500 to-amber-500 rounded-2xl flex items-center justify-center">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div className="font-semibold text-3xl tracking-tighter text-white">InstaPortfolio</div>
            </div>
            
            <p className="max-w-xs text-sm">Helping cafes, restaurants, and bakeries build their Instagram presence since 2022.</p>
            
            <div className="mt-10 flex gap-6">
              <a href="#" className="hover:text-white transition">𝕏</a>
              <a href="#" className="hover:text-white transition">📸</a>
              <a href="#" className="hover:text-white transition">𝕃</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <div className="font-mono text-xs tracking-[2px] mb-6 text-white/40">EXPLORE</div>
            <div className="space-y-3 text-sm">
              <div><button onClick={() => scrollToSection('about')}>About the service</button></div>
              <div><button onClick={() => scrollToSection('services')}>How it works</button></div>
              <div><button onClick={() => scrollToSection('pricing')}>Pricing</button></div>
            </div>
          </div>
          
          <div className="md:col-span-4">
            <div className="font-mono text-xs tracking-[2px] mb-6 text-white/40">LEGAL</div>
            <div className="text-sm space-y-3">
              <div>Privacy Policy</div>
              <div>Terms of Service</div>
              <div>© 2025 Instagram Portfolio Builder</div>
            </div>
          </div>
        </div>
        
        <div className="text-center text-[10px] pt-20 text-white/40 tracking-widest">MADE FOR SMALL BUSINESS OWNERS WHO WANT TO FOCUS ON WHAT MATTERS</div>
      </footer>
    </div>
  );
}

export default App;
