import React from 'react';
import { ArrowRight, CheckCircle, Globe, Users, TrendingUp } from 'lucide-react';

const Hero = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Worldwide' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
  ];

  return (
    <section id="home" className="relative pt-24 pb-20 bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Globe className="h-5 w-5" />
                <span>Global Digital Marketing Excellence</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Dominate Search Rankings
                <span className="text-blue-600"> Worldwide</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your business with our proven SEO and digital marketing strategies. 
                We help companies across the globe achieve sustainable growth and maximum ROI.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-4">
              {[
                'Proven results across 50+ countries',
                'Customized strategies for your market',
                '24/7 global support team',
                'Data-driven approach with transparent reporting'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Your Growth Journey</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
              >
                View Case Studies
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Global Performance</h3>
                  <div className="flex items-center space-x-2 text-green-600">
                    <TrendingUp className="h-5 w-5" />
                    <span className="font-semibold">+247%</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Organic Traffic</span>
                      <span className="font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full w-11/12"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Conversion Rate</span>
                      <span className="font-semibold">87%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-green-600 h-3 rounded-full w-5/6"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ROI Growth</span>
                      <span className="font-semibold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-blue-600 h-3 rounded-full w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl transform rotate-6 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;