import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './animations.css';

// Domain background images
const domainImages = {
  ai: '/image/aip.avif',
  cybersecurity: '/image/cyp.avif',
  iot: '/image/iot.avif',
  app: '/image/appp.avif',
};

// Google Form URL
const REGISTRATION_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSel4QGgWbcFn5K94QYMa77D74rakKldQHqGwraWTty8PRkCnw/viewform?usp=sharing";

// Domain coordinators
const domainCoordinators = {
  ai: [
    { name: 'Mithra', phone: '+919876543211' },
    { name: 'Yunus', phone: '+919876543212' },
  ],
  cybersecurity: [
    { name: 'Kavya', phone: '+919876543213' },
    { name: 'Dharun vidhyakar', phone: '+919876543214' },
  ],
  app: [
    { name: 'Immanuvel', phone: '+919876543215' },
    { name: 'Swathi', phone: '+919876543216' },
  ],
  iot: [
    { name: 'Nisar', phone: '+919876543217' },
    { name: 'Rohith', phone: '+919876543218' },
  ],
};

const ProblemStatementCards = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [viewMode, setViewMode] = useState('domains');

  // Domains data with problems
  const domains = [
    {
      id: 'ai',
      title: 'Artificial Intelligence',
      description: 'Exploring the frontier of machine learning and cognitive computing',
      icon: '🤖',
      problems: [
        {
          id: 'AI01',
          title: 'AI for Code Vulnerability Detection',
          description: 'Create an AI-powered tool that scans and predicts security vulnerabilities in codebases, suggesting real-time fixes for developers',
        },
        {
          id: 'AI02',
          title: 'Self-Healing AI Systems',
          description: 'Develop an AI system that can autonomously detect its own failures or performance drops and recover without human intervention, ensuring robustness in critical applications.',
        }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protecting digital assets in an increasingly connected world',
      icon: '🛡️',
      problems: [
        {
          id: 'CBS01',
          title: 'AI-Driven Adaptive Cyber Defense System',
          description: 'Build an AI-based system that autonomously detects, analyzes, and mitigates cyber threats in real-time by adapting to new attack patterns',
        },
        {
          id: 'CBS02',
          title: 'Biometric Authentication with Deepfake Resistance',
          description: 'Develop an advanced biometric security system (facial recognition, voice authentication, retina scan) that can detect and prevent deepfake-based identity fraud',
        }
      ]
    },
    {
      id: 'iot',
      title: 'Internet of Things',
      description: 'Connecting devices to create smarter environments',
      icon: '🌐',
      problems: [
        {
          id: 'IOT01',
          title: 'IoT-Enabled Air Pollution Meter',
          description: 'Air pollution is a growing concern in urban and industrial areas, leading to severe health and environmental issues. Traditional air quality monitoring systems are expensive and lack real-time accessibility. There is a need for an affordable, IoT-enabled air pollution meter that can continuously monitor key air quality parameters such as CO2 levels, PM2.5, PM10, humidity, and temperature, and provide real-time data to users.',
          objectives: [
            'Continuously measures air quality parameters.',
            'Sends real-time data to a web or mobile dashboard',
            'Generates alerts when pollution levels exceed safe thresholds',
            'Helps users make informed decisions to improve air quality'
          ]
        },
        {
          id: 'IOT02',
          title: 'IoT Energy Meter with Current, Voltage, and Cost Monitoring System',
          description: 'With the increasing cost of electricity and the need for energy conservation, there is a demand for smart solutions to monitor energy usage in real time. Traditional energy meters only show total consumption, lacking real-time tracking of voltage, current, and cost',
          objectives: [
            'Monitors voltage, current, and power consumption',
            'Provides real-time data on energy usage and cost',
            'Sends alerts when consumption reaches a specified threshold',
            'Helps users optimize energy usage and reduce electricity bills'
          ]
        }
      ]
    },
    {
      id: 'app',
      title: 'App Development',
      description: 'Creating solutions for the mobile-first world',
      icon: '📱',
      problems: [
        {
          id: 'APP01',
          title: 'Student-Alumni Connect App',
          description: 'Students often struggle to find the right guidance on careers, industry trends, and skill development. Meanwhile, alumni have valuable experience but lack an easy way to share it. There is a need for a mobile platform where students can connect with alumni, ask questions, discuss topics, and get career advice in an interactive way.',
          objectives: [
            'Ask & Answer Questions (like Stack Overflow)',
            'Create Discussions & Polls (like Reddit)',
            'Find Mentors for career guidance',
            'Post Jobs & Internships to help students',
            'Host Events & Webinars for learning and networking'
          ],
          execution: [
            'User Login & Verification – Students and alumni sign up with verification.',
            'Q&A & Discussions – Users can ask questions, post discussions, and upvote answers.',
            'Mentorship Feature – Alumni can offer guidance; students can request mentors.',
            'Job & Internship Board – Alumni can post job opportunities for students.',
            'Event Hub – Webinars, AMA (Ask Me Anything) sessions, and career talks.',
            'Notifications & Gamification – Badges, leaderboards, and engagement rewards.',
            'Simple & Secure – Easy-to-use interface with moderation to ensure quality content.'
          ]
        },
        {
          id: 'APP02',
          title: 'BNYS Campus Healthcare App',
          description: 'Managing outpatient appointments, doctor consultations, and bed bookings in a BNYS (Bachelor of Naturopathy and Yogic Sciences) campus clinic is often inefficient and time-consuming. Patients face difficulties in scheduling treatments, finding the right doctor, and accessing essential healthcare services. A digital solution is needed to simplify and streamline the entire process for both patients and healthcare providers.',
          objectives: [
            'Book Appointments with doctors based on availability',
            'Reserve Beds for inpatient treatments',
            'View Doctor Profiles and select specialists',
            'Access Treatment Plans & Reports in one place',
            'Receive Notifications & Reminders for upcoming appointments'
          ],
          execution: [
            'User Registration & Login – Patients sign up and manage their profiles.',
            'Doctor & Treatment Search – View available doctors and book treatments.',
            'Appointment & Bed Booking System – Schedule outpatient visits and inpatient admissions.',
            'Medical History & Reports – Patients can access past consultations and prescriptions.',
            'Notifications & Alerts – Get reminders for appointments and treatment follow-ups.',
            'Simple & User-Friendly UI – Easy navigation for both patients and doctors.'
          ]
        }
      ]
    }
  ];

  const handleDomainSelect = (domain) => {
    setSelectedDomain(domain);
    setViewMode('problems');
  };

  const handleBack = () => {
    setViewMode('domains');
    setSelectedDomain(null);
  };

  const renderDomainCards = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 px-4 sm:px-6 max-w-6xl mx-auto">
      {domains.map((domain) => (
        <motion.div
          key={domain.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
          className="relative rounded-xl overflow-hidden shadow-2xl cursor-pointer group"
          onClick={() => handleDomainSelect(domain)}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img 
              src={domainImages[domain.id]} 
              alt={domain.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 h-80 sm:h-96 flex flex-col justify-end">
            <div className="mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">{domain.icon}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
              {domain.title}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{domain.description}</p>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs sm:text-sm font-medium text-white bg-blue-600/50 backdrop-blur-sm px-3 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-lg shadow-blue-500/30 border border-blue-400/20 animate-pulse">
                {domain.problems.length} Problem Statements
              </span>
              
              <a 
                href={REGISTRATION_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/30 group-hover:shadow-xl group-hover:shadow-blue-500/40 animate-[pulse_2s_infinite] text-sm sm:text-base"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="mr-1 sm:mr-2 font-medium">View Problems</span>
                <svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-blue-500/10 rounded-xl"></div>
          </div>
        </motion.div>
      ))}
    </div>
  );

  const renderProblemsView = () => {
    if (!selectedDomain) return null;
    
    // Get the coordinators for the selected domain
    const coordinators = domainCoordinators[selectedDomain.id] || [];
    
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-6 sm:mb-8 flex items-center">
          <button 
            onClick={handleBack}
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full p-2 mr-3 sm:mr-4 transition-colors"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {selectedDomain.title} Problems
          </h2>
        </div>
        
        {/* Event information card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 mb-6 sm:mb-8"
        >
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 flex items-center">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Hackathon Information
            </h3>
            <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-indigo-500 to-transparent mb-3 sm:mb-4"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Team Size:</span> 3-4 members</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Selection:</span> Selected teams advance</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Preliminaries:</span> Prototype optional</p>
                </div>
              </div>
              <div className="space-y-1 sm:space-y-2">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Presentation:</span> PPT required</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Refreshments:</span> Food provided</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-blue-600/30 mr-2 mt-0.5">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="text-blue-300 font-medium">Judging:</span> Innovation & complexity</p>
                </div>
              </div>
            </div>
            
            {/* Coordinator contact information */}
            <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-indigo-500/20">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 sm:h-8 sm:w-8 flex items-center justify-center rounded-full bg-pink-600/30 mr-2 sm:mr-3">
                  <div className="relative">
                    <span className="text-sm sm:text-lg">👁️</span>
                    <span className="absolute top-0 left-0 text-sm sm:text-lg animate-[blink_2s_ease-in-out_infinite]">😉</span>
                  </div>
                </div>
                <div>
                  <p className="text-pink-300 font-bold text-sm sm:text-lg mb-1">Don't forget to join our whatsapp group</p>
                  
                  {/* Domain coordinators */}
                  <div className="flex flex-col gap-2">
                    {coordinators.map((coordinator, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 md:gap-4">
                        <div className="flex items-center">
                          <span className="text-white font-medium mr-1 sm:mr-2 text-xs sm:text-sm">Coordinator:</span> 
                          <span className="text-gray-200 text-xs sm:text-sm">{coordinator.name}</span>
                        </div>
                        <a 
                          href={`tel:${coordinator.phone}`}
                          className="inline-flex items-center px-2 py-1 sm:px-3 sm:py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 text-xs sm:text-sm"
                        >
                          <svg className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          {coordinator.phone}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-bl from-blue-500/20 to-transparent -z-10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-500/10 to-transparent -z-10 rounded-tr-full"></div>
        </motion.div>
        
        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          {selectedDomain.problems.map((problem) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="p-4 sm:p-6">
                <div>
                  <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-medium mb-2 sm:mb-3 bg-blue-600/30 text-blue-200">
                    {problem.id}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white mb-2 sm:mb-3">{problem.title}</h4>
                  <div className="h-px w-24 sm:w-32 bg-gradient-to-r from-blue-500 to-transparent mb-3 sm:mb-4"></div>
                  
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div>
                      <h5 className="text-base sm:text-lg font-medium text-blue-300 mb-1 sm:mb-2">Problem Description</h5>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{problem.description}</p>
                    </div>
                    
                    {/* Objectives Section */}
                    {problem.objectives && (
                      <div className="mt-3 sm:mt-4">
                        <h5 className="text-base sm:text-lg font-medium text-green-300 mb-2 sm:mb-3 flex items-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Objectives
                        </h5>
                        <div className="bg-gradient-to-r from-green-900/20 to-blue-900/10 rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                          <ul className="space-y-1 sm:space-y-2">
                            {problem.objectives.map((objective, index) => (
                              <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-green-600/30 mr-2 mt-0.5">
                                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </div>
                                <span className="text-gray-200 text-xs sm:text-sm">{objective}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                    
                    {/* Execution Steps Section */}
                    {problem.execution && (
                      <div className="mt-3 sm:mt-4">
                        <h5 className="text-base sm:text-lg font-medium text-orange-300 mb-2 sm:mb-3 flex items-center">
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                          Execution
                        </h5>
                        <div className="bg-gradient-to-r from-orange-900/20 to-red-900/10 rounded-lg p-3 sm:p-4 border-l-4 border-orange-500">
                          <ul className="space-y-1 sm:space-y-2">
                            {problem.execution.map((step, index) => (
                              <li key={index} className="flex items-start">
                                <div className="flex-shrink-0 h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center rounded-full bg-orange-600/30 mr-2 mt-0.5">
                                  <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                  </svg>
                                </div>
                                <span className="text-gray-200 text-xs sm:text-sm">{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 sm:mt-6 flex flex-wrap justify-center sm:justify-start">
                    <a 
                      href={REGISTRATION_FORM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto relative overflow-hidden group px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-full transition duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 mb-3 sm:mb-0 text-sm sm:text-base"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                        </svg>
                        Register Now
                      </span>
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Problem card corner decorations */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-bl from-blue-500/20 to-transparent -z-10 rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-500/10 to-transparent -z-10 rounded-tr-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/5 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500/5 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 text-center mb-12 sm:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
          DOMAINS
        </h1>
        <div className="h-px w-48 sm:w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-4 sm:mt-6 mb-3 sm:mb-4"></div>
        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
          Choose a domain that interests you and explore the problem statements
        </p>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {viewMode === 'domains' && renderDomainCards()}
          {viewMode === 'problems' && renderProblemsView()}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProblemStatementCards;