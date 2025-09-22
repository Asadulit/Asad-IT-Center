import React from 'react';
import { 
  TrendingUp, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Globe,
  ExternalLink
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'SEO Services', href: '#services' },
    { name: 'PPC Advertising', href: '#services' },
    { name: 'Content Marketing', href: '#services' },
    { name: 'Social Media', href: '#services' },
    { name: 'Analytics', href: '#services' },
    { name: 'Mobile Marketing', href: '#services' }
  ];

  const company = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Career', href: '#contact' },
    { name: 'Partners', href: '#contact' }
  ];

  const resources = [
    { name: 'SEO Blog', href: '#' },
    { name: 'Marketing Guide', href: '#' },
    { name: 'Free SEO Audit', href: '#contact' },
    { name: 'ROI Calculator', href: '#' },
    { name: 'Industry Reports', href: '#' },
    { name: 'Webinars', href: '#' }
  ];

   const globalOffices = [
    { city: 'Dhaka', country: 'Bangladesh', phone: '+880 1925 146273' },
    { city: 'New York', country: 'USA', phone: '+1 ‪(803) 455 4554‬' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/Asadulit/', name: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/asadulit', name: 'X' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/asadulit/', name: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/asadulit', name: 'Instagram' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Asad IT Center</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Global SEO and digital marketing agency helping businesses achieve 
                sustainable growth through proven strategies and innovative solutions.
              </p>

              {/* Global Presence */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-blue-400">
                  <Globe className="h-5 w-5" />
                  <span className="font-medium">Serving 50+ Countries Worldwide</span>
                </div>
                
                <div className="space-y-2">
                  {globalOffices.map((office, index) => (
                    <div key={index} className="flex items-center justify-between text-sm text-gray-400">
                      <span>{office.city}, {office.country}</span>
                      <span>{office.phone}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4" />
                  <span>Asadulit@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4" />
                  <span>24/7 Global Support</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {company.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {resources.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
                    >
                      <span>{link.name}</span>
                      {link.href === '#' && <ExternalLink className="h-3 w-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
              <p className="text-gray-300">
                Get the latest SEO tips, industry insights, and exclusive offers delivered to your inbox.
              </p>
            </div>
            <div className="flex space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder-gray-400"
              />
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400">
                © {currentYear} Asad IT Center. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Global Digital Marketing Agency</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
