
import React from 'react';
import { Smartphone, Clock, AlertTriangle, TrendingDown } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Morning Scroll <span className="text-red-500">Trap</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You know the feeling. Your alarm goes off, you reach for your phone, and suddenly...
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <Clock className="w-8 h-8 text-red-500" />,
              title: "2+ Hours Wasted",
              description: "Average time spent on social media within the first hour of waking up",
              stat: "73% of people"
            },
            {
              icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
              title: "Instant Anxiety",
              description: "News, notifications, and comparisons flood your mind before you're fully awake",
              stat: "85% report"
            },
            {
              icon: <TrendingDown className="w-8 h-8 text-red-600" />,
              title: "Ruined Productivity",
              description: "Starting the day reactive instead of proactive sets a negative tone for everything",
              stat: "90% admit"
            }
          ].map((problem, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{problem.title}</h3>
                  <p className="text-sm text-red-600 font-medium">{problem.stat}</p>
                </div>
              </div>
              <p className="text-gray-600">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Relatable Scenario */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-orange-100">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              "Just a quick check..."
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <div className="text-lg font-semibold text-gray-800 mb-2">6:30 AM</div>
                <p className="text-gray-600">"I'll just check my notifications real quick..."</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <div className="text-lg font-semibold text-gray-800 mb-2">7:45 AM</div>
                <p className="text-gray-600">"Wait, how did I end up watching TikToks for over an hour?"</p>
              </div>
              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6">
                <div className="text-lg font-semibold text-gray-800 mb-2">8:30 AM</div>
                <p className="text-gray-600">"Now I'm stressed, running late, and my day is already ruined."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
