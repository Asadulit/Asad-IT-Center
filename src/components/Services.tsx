import React from 'react';
import { 
  Search, 
  Target, 
  PenTool, 
  Share2, 
  BarChart3, 
  Smartphone,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Dominate search results with our comprehensive SEO strategies tailored for global markets.',
      features: ['Keyword Research & Strategy', 'Technical SEO Optimization', 'Content Optimization', 'Link Building'],
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Pay-Per-Click Advertising',
      description: 'Maximize ROI with targeted PPC campaigns across Google Ads, Bing, and social platforms.',
      features: ['Campaign Strategy', 'Ad Copy Creation', 'Bid Management', 'Landing Page Optimization'],
      color: 'green'
    },
    {
      icon: PenTool,
      title: 'Content Marketing',
      description: 'Engage audiences with compelling content that drives conversions and builds brand authority.',
      features: ['Content Strategy', 'Blog Writing', 'Video Content', 'Infographic Design'],
      color: 'purple'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Build communities and drive engagement across all major social media platforms.',
      features: ['Social Strategy', 'Community Management', 'Paid Social Ads', 'Influencer Outreach'],
      color: 'pink'
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize performance and demonstrate clear ROI.',
      features: ['Performance Tracking', 'Custom Dashboards', 'Monthly Reports', 'Strategy Optimization'],
      color: 'orange'
    },
    {
      icon: Smartphone,
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with optimized mobile marketing strategies.',
      features: ['Mobile SEO', 'App Store Optimization', 'Mobile Ads', 'SMS Marketing'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      pink: 'bg-pink-100 text-pink-600 group-hover:bg-pink-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      indigo: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white'
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to drive growth, 
            increase visibility, and maximize ROI for businesses worldwide.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${getColorClasses(service.color)}`}>
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More */}
                  <div className="pt-4 border-t border-gray-100">
                    <a
                      href="#contact"
                      className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get a free consultation and discover how our services can drive growth for your business.
            </p>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;