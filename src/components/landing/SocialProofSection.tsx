
import React from 'react';
import { Star, Quote } from 'lucide-react';

export const SocialProofSection = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Manager",
      content: "DawnLock completely changed my mornings. I used to spend 2+ hours scrolling TikTok before even getting out of bed. Now I'm up, productive, and actually excited to start my day!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Johnson",
      role: "Software Developer",
      content: "As someone who works remotely, morning discipline was killing my productivity. DawnLock's photo verification is genius - can't cheat your way out of building real habits.",
      rating: 5,
      avatar: "MJ"
    },
    {
      name: "Elena Rodriguez",
      role: "Graduate Student",
      content: "I was skeptical about another 'productivity app' but the psychological approach really works. Three weeks in and I've already saved 10+ hours that I would have wasted scrolling.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const stats = [
    { number: "1,247", label: "Beta Users" },
    { number: "89%", label: "Complete Rate" },
    { number: "156", label: "Hours Saved Daily" },
    { number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join <span className="text-blue-600">1,000+</span> People Breaking Free
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from beta users who've transformed their mornings and reclaimed their time.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                <p className="text-gray-700 leading-relaxed pl-6">{testimonial.content}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">No Credit Card Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <span className="text-gray-700 font-medium">iOS & Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
