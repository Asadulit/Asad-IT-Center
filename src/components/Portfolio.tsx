import React from 'react';
import { ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const Portfolio = () => {
  const caseStudies = [
    {
      title: 'E-commerce Giant Growth',
      client: 'Global Retailer',
      industry: 'E-commerce',
      location: 'United States',
      challenge: 'Struggling with organic visibility and conversion rates in competitive market',
      results: [
        { metric: 'Organic Traffic', value: '+340%', icon: TrendingUp },
        { metric: 'Conversion Rate', value: '+127%', icon: Users },
        { metric: 'Revenue Growth', value: '+280%', icon: DollarSign }
      ],
      description: 'Comprehensive SEO overhaul including technical optimization, content strategy, and link building campaign.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'SaaS Platform Expansion',
      client: 'Tech Startup',
      industry: 'Software',
      location: 'Europe',
      challenge: 'Limited brand awareness and high customer acquisition costs',
      results: [
        { metric: 'Lead Generation', value: '+450%', icon: Users },
        { metric: 'Cost per Lead', value: '-65%', icon: DollarSign },
        { metric: 'Market Reach', value: '+200%', icon: TrendingUp }
      ],
      description: 'Multi-channel digital strategy combining SEO, PPC, and content marketing for rapid scaling.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Healthcare Practice Growth',
      client: 'Medical Group',
      industry: 'Healthcare',
      location: 'Australia',
      challenge: 'Low local visibility and difficulty reaching target patients',
      results: [
        { metric: 'Local Rankings', value: '+500%', icon: TrendingUp },
        { metric: 'Patient Inquiries', value: '+220%', icon: Users },
        { metric: 'Online Reviews', value: '+300%', icon: DollarSign }
      ],
      description: 'Local SEO optimization and reputation management strategy for multiple clinic locations.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how our proven strategies have transformed 
            businesses across different industries and markets worldwide.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {study.industry}
                    </span>
                    <span className="text-gray-500">{study.location}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed">
                    {study.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-6">
                  {study.results.map((result, resultIndex) => {
                    const Icon = result.icon;
                    return (
                      <div key={resultIndex} className="text-center">
                        <div className="flex justify-center mb-3">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-blue-600" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-gray-900 mb-1">
                          {result.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.metric}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* View Details */}
                <div>
                  <a
                    href="#contact"
                    className="inline-flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    <span>Get Similar Results</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Be Our Next Success Story?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our proven strategies.
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Success Story</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;