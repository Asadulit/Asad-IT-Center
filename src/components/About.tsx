import React from 'react';
import { Globe, Award, Users, Clock, CheckCircle } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Globe, value: '50+', label: 'Countries' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
    { icon: Clock, value: '7', label: 'Years Experience' }
  ];

  const values = [
    {
      title: 'Global Expertise',
      description: 'Deep understanding of international markets and local search behaviors across 50+ countries.'
    },
    {
      title: 'Data-Driven Results',
      description: 'Every strategy backed by comprehensive analytics and proven performance metrics.'
    },
    {
      title: 'Transparent Communication',
      description: 'Regular reporting and clear communication throughout every project and campaign.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support ensuring your campaigns run smoothly across all time zones.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Asad IT Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're a global team of digital marketing experts passionate about helping businesses 
            achieve sustainable growth through innovative SEO and marketing strategies.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Driving Digital Success Worldwide
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2018, Asad IT Center has grown from a small team of SEO enthusiasts 
                to a globally recognized digital marketing agency. We've helped over 500 businesses 
                across 50+ countries achieve remarkable growth through our proven strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines cutting-edge technology with human expertise to deliver 
                personalized solutions that drive real results. Whether you're a startup looking 
                to make your mark or an enterprise seeking to expand globally, we have the 
                experience and tools to help you succeed.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                'Certified Google Partners and Facebook Marketing Partners',
                'Average 300% ROI improvement across all client campaigns',
                'Multilingual team supporting campaigns in 20+ languages',
                'Custom strategies tailored to local markets and cultures'
              ].map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-3">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Asad IT Center?
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our core values drive everything we do, ensuring exceptional results and lasting partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <h4 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
              To empower businesses worldwide with innovative digital marketing strategies that drive 
              sustainable growth, increase visibility, and create lasting competitive advantages in 
              their respective markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;