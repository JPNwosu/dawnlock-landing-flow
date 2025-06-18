
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChevronRight, Play, Smartphone, Lock } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-white to-blue-100"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
                <span>Limited Beta Access Available</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                  Lock the Scroll,
                </span>
                <br />
                <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-600 bg-clip-text text-transparent">
                  Unlock Your Day
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Break free from morning doom-scrolling. DawnLock blocks your addictive apps until you complete verified morning routine tasks.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex space-x-2">
                  <Input 
                    placeholder="Enter your email for beta access" 
                    className="flex-1 h-14 text-lg border-2 border-gray-200 focus:border-orange-500 rounded-xl"
                  />
                  <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white px-8 h-14 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                    Join Beta
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>Free Beta Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>iOS & Android</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <span>No Credit Card</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-80 h-[600px] bg-gradient-to-b from-gray-900 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-blue-50">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-sm font-medium">
                      <span>9:41</span>
                      <div className="flex space-x-1">
                        <div className="w-4 h-2 bg-green-500 rounded-sm"></div>
                        <div className="w-6 h-4 border border-gray-400 rounded-sm">
                          <div className="w-full h-full bg-green-500 rounded-sm"></div>
                        </div>
                      </div>
                    </div>

                    {/* App Icons Grid */}
                    <div className="px-8 py-8">
                      <div className="grid grid-cols-4 gap-6">
                        {[
                          { name: 'TikTok', color: 'from-black to-red-500', locked: true },
                          { name: 'Instagram', color: 'from-purple-500 to-pink-500', locked: true },
                          { name: 'Twitter', color: 'from-blue-400 to-blue-600', locked: true },
                          { name: 'YouTube', color: 'from-red-500 to-red-600', locked: true },
                          { name: 'Camera', color: 'from-gray-500 to-gray-600', locked: false },
                          { name: 'Messages', color: 'from-green-500 to-green-600', locked: false },
                          { name: 'DawnLock', color: 'from-orange-500 to-yellow-500', locked: false },
                          { name: 'Settings', color: 'from-gray-400 to-gray-600', locked: false },
                        ].map((app, index) => (
                          <div key={index} className="relative">
                            <div className={`w-14 h-14 bg-gradient-to-br ${app.color} rounded-xl flex items-center justify-center shadow-lg ${app.locked ? 'opacity-50' : ''}`}>
                              {app.locked && (
                                <Lock className="w-6 h-6 text-white" />
                              )}
                              {!app.locked && app.name === 'DawnLock' && (
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                                  <div className="w-6 h-6 bg-gradient-to-r from-orange-500 to-yellow-500 rounded"></div>
                                </div>
                              )}
                            </div>
                            {app.locked && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                                <Lock className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Morning Tasks Card */}
                      <div className="mt-8 bg-white/80 backdrop-blur-lg rounded-2xl p-4 shadow-lg border border-white/50">
                        <h3 className="font-semibold text-gray-800 mb-3">Complete to Unlock Apps</h3>
                        <div className="space-y-2">
                          {[
                            { task: 'Brush Teeth', completed: true },
                            { task: 'Drink Water', completed: false },
                            { task: 'Make Bed', completed: false },
                          ].map((task, index) => (
                            <div key={index} className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded-full border-2 ${
                                task.completed 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300'
                              } flex items-center justify-center`}>
                                {task.completed && (
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                )}
                              </div>
                              <span className={`text-sm ${task.completed ? 'text-green-600 line-through' : 'text-gray-600'}`}>
                                {task.task}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
