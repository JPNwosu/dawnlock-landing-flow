
import React from 'react';
import { Camera, Smartphone, BarChart3, AlarmClock, Shield, Zap } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-blue-400" />,
      title: "Photo Verification",
      description: "Take real photos of completed tasks. No cheating, no shortcuts - just honest accountability.",
      color: "from-blue-900/30 to-blue-800/20"
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      title: "Any App Blocking",
      description: "Block TikTok, Instagram, Twitter, YouTube, or any app that steals your morning focus.",
      color: "from-purple-900/30 to-purple-800/20"
    },
    {
      icon: <AlarmClock className="w-8 h-8 text-orange-400" />,
      title: "Smart Alarm Integration",
      description: "Built-in alarm system that triggers app blocking the moment you wake up.",
      color: "from-orange-900/30 to-orange-800/20"
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Progress Tracking",
      description: "See your streak, completion rates, and how much time you're saving each day.",
      color: "from-green-900/30 to-green-800/20"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Instant Feedback",
      description: "Get immediate confirmation when tasks are completed and apps are unlocked.",
      color: "from-yellow-900/30 to-yellow-800/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: "Tamper-Proof",
      description: "Advanced protection prevents disabling the app or bypassing the morning routine.",
      color: "from-red-900/30 to-red-800/20"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Powerful Features for <span className="text-blue-400">Lasting Change</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            DawnLock combines smart technology with behavioral psychology to create habits that stick.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className={`bg-gradient-to-br ${feature.color} backdrop-blur-sm rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-700/50`}>
              <div className="w-16 h-16 bg-gray-800/80 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Feature Showcase */}
        <div className="mt-20 bg-gradient-to-br from-gray-800/50 to-blue-900/30 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-gray-700/50">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Customize Your Perfect Morning
              </h3>
              <div className="space-y-4">
                {[
                  "Choose which apps to block during morning hours",
                  "Set custom tasks that matter to your routine",
                  "Adjust verification requirements for each task",
                  "Configure unlock times for different days",
                  "Track progress with detailed analytics"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700/50">
                <h4 className="font-semibold text-white mb-4">Morning Routine Setup</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-blue-900/30 rounded-lg border border-blue-800/30">
                    <span className="text-gray-300">Brush Teeth</span>
                    <Camera className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-900/30 rounded-lg border border-green-800/30">
                    <span className="text-gray-300">Drink Water</span>
                    <Camera className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-900/30 rounded-lg border border-orange-800/30">
                    <span className="text-gray-300">Make Bed</span>
                    <Camera className="w-5 h-5 text-orange-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
