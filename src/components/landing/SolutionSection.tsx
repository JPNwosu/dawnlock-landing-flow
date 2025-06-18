
import React from 'react';
import { ArrowRight, Camera, CheckCircle, Unlock } from 'lucide-react';

export const SolutionSection = () => {
  const steps = [
    {
      number: "1",
      title: "Set Your Alarm & Choose Apps",
      description: "Select which apps to block (TikTok, Instagram, Twitter, etc.) and set your wake-up time.",
      icon: <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl"></div>
    },
    {
      number: "2", 
      title: "Apps Lock When Alarm Rings",
      description: "When your alarm goes off, your chosen apps automatically become inaccessible.",
      icon: <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded opacity-50"></div>
      </div>
    },
    {
      number: "3",
      title: "Complete Tasks with Photo Proof",
      description: "Brush your teeth, make your bed, or drink water. Take a photo to verify completion.",
      icon: <Camera className="w-12 h-12 text-green-500" />
    },
    {
      number: "4",
      title: "Apps Unlock & Day Starts Right",
      description: "Once all tasks are verified complete, your apps unlock and you're ready for a productive day.",
      icon: <Unlock className="w-12 h-12 text-green-600" />
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <CheckCircle className="w-4 h-4" />
            <span>The Solution</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">DawnLock</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A simple, proven system that breaks the morning scroll cycle and builds healthy habits through accountability.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-blue-100">
                    <span className="text-2xl font-bold text-blue-600">{step.number}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-blue-300 to-transparent"></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center">
                    <ArrowRight className="w-6 h-6 text-blue-400 rotate-90" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Demo */}
        <div className="mt-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl p-8 lg:p-12 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">The Result?</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">15 min</div>
                <div className="text-lg">Average morning routine completion time</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-lg">Reduction in morning phone usage</div>
              </div>
              <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">93%</div>
                <div className="text-lg">Report better mood and productivity</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
