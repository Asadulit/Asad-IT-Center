import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'TechStart Solutions',
      location: 'United States',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Asad IT Center transformed our online presence completely. Our organic traffic increased by 400% in just 6 months, and our lead quality has never been better. Their global expertise helped us expand to 3 new markets successfully.'
    },
    {
      name: 'Marco Rodriguez',
      title: 'Marketing Director',
      company: 'Global Retail Co.',
      location: 'Spain',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'The team understands international markets like no other agency we\'ve worked with. They helped us navigate the complexities of SEO in multiple languages and cultures. ROI has been exceptional across all campaigns.'
    },
    {
      name: 'Emily Chen',
      title: 'Founder',
      company: 'HealthTech Innovations',
      location: 'Singapore',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Professional, responsive, and results-driven. DigitalBoost doesn\'t just deliver reports - they provide actionable insights that drive real business growth. Our conversion rates doubled within the first quarter.'
    },
    {
      name: 'James Wilson',
      title: 'Operations Manager',
      company: 'Manufacturing Plus',
      location: 'United Kingdom',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Outstanding service and support. The 24/7 availability means we never have to worry about campaign issues. Asad IT Center has helped us establish a strong digital presence in markets we never thought possible.'
    },
    {
      name: 'Lisa Anderson',
      title: 'E-commerce Director',
      company: 'Fashion Forward',
      location: 'Australia',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'The most comprehensive digital marketing partner we\'ve ever had. From SEO to PPC to content marketing, they handle everything seamlessly. Our revenue has grown 250% since partnering with them.'
    },
    {
      name: 'David Kumar',
      title: 'Business Owner',
      company: 'Local Services Pro',
      location: 'Canada',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5,
      testimonial: 'Asad IT Center made digital marketing simple for our small business. They explained everything clearly and delivered results that exceeded our expectations. Local rankings improved dramatically in just 3 months.'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="text-blue-600">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients from around 
            the world say about working with DigitalBoost.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-blue-600 opacity-50" />
                  <div className="flex items-center space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-100">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title} at {testimonial.company}
                    </div>
                    <div className="text-sm text-blue-600">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block border border-gray-100">
            <div className="flex items-center justify-center space-x-2 mb-4">
              {renderStars(5)}
              <span className="text-2xl font-bold text-gray-900 ml-3">5.0</span>
            </div>
            <p className="text-gray-600">
              Average rating from <span className="font-semibold">500+ clients</span> with Asad IT Center worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;