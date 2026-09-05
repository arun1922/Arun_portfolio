import React from 'react';
import stackImage from '../assets/about/arunkumar-avatar.png';
import { aboutContent } from '../data/portfolioData';
import AwsLogo from './AwsLogo';

// Tech stack SVG icons rendered inline for crisp rendering

// AWS Icon
const AWSIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex items-center justify-center shadow-lg hover:border-[#FF9900]/80 transition-all duration-300 group/aws">
      <AwsLogo textColor="#FFFFFF" arrowColor="#FF9900" className="w-full h-full transform group-hover/aws:scale-105 transition-transform duration-300" />
    </div>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">AWS</span>
  </div>
);

// Docker Icon
const DockerIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 flex items-center justify-center shadow-lg hover:border-[#2396ED]/60 transition-colors">
      <svg className="w-full h-full" viewBox="0 0 128 128">
        <path fill="#2396ED" d="M124.8 52.1c-2.6-1.8-8.5-2.4-13.1-1.5-.6-4.4-3.1-8.2-7.8-11.7l-2.6-1.8-1.8 2.6c-2.3 3.5-3.4 8.3-3.1 12.9.1 1.6.6 4.4 2.2 6.9-1.6.9-4.7 2.1-8.8 2H6.6l-.2 1c-.8 4.3-.8 17.9 7.3 28.3 6.4 8 15.9 12.1 28.4 12.1 27 0 47-12.5 56.4-35.1 3.7.1 11.6 0 15.6-7.7.1-.2 1.1-2 1.4-2.6l-1.7-1.1zM68 54.5H54.3V41h13.8v13.5H68zm0-17.9H54.3V23.3h13.8v13.3H68zm-17.8 17.9H36.6V41h13.6v13.5zm0-17.9H36.6V23.3h13.6v13.3zm-17.7 17.9H18.9V41h13.6v13.5zm35.5 17.9H54.3V58.6H68v13.8zm-17.8 0H36.6V58.6h13.6v13.8zm-17.7 0H18.9V58.6h13.6v13.8zm53.3-17.9H72.1V41H86v13.5zm0-17.9H72.1V23.3H86v13.3zm0 35.8H72.1V58.6H86v13.8z"/>
      </svg>
    </div>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Docker</span>
  </div>
);

// Terraform Icon
const TerraformIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 flex items-center justify-center shadow-lg hover:border-[#7B42BC]/60 transition-colors">
      <svg className="w-full h-full" viewBox="0 0 128 128">
        <path fill="#7B42BC" d="M49.6 17.8L80 35.6v35.5L49.6 53.4V17.8z"/>
        <path fill="#4040B2" d="M83.8 35.6l30.4 17.8v35.5L83.8 71.1V35.6z"/>
        <path fill="#7B42BC" d="M13.8 53.4l30.4 17.8v35.5L13.8 88.9V53.4z"/>
        <path fill="#4040B2" d="M49.6 89.2l30.4 17.8V71.5L49.6 53.7v35.5z"/>
      </svg>
    </div>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Terraform</span>
  </div>
);

// Jenkins Icon (Exact Official Jenkins Butler Logo)
const JenkinsIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-2xl p-2 border border-white/20 flex items-center justify-center shadow-lg hover:border-[#D24939]/60 transition-colors">
      <svg className="w-full h-full" viewBox="0 0 380 400" fill="none">
        {/* Top Hat */}
        <path fill="#2E2E2E" d="M125 40h130v70H125z"/>
        <path fill="#D24939" d="M125 90h130v20H125z"/>
        <path fill="#1A1A1A" d="M85 105h210v20H85z"/>
        {/* Hair */}
        <path fill="#E8E8E8" d="M100 125c-20 0-35 20-35 45s15 45 35 45h40v-90h-40zm180 0c20 0 35 20 35 45s-15 45-35 45h-40v-90h40z"/>
        {/* Head */}
        <path fill="#FCDDB0" d="M130 120h120v100H130z"/>
        {/* Ears */}
        <path fill="#F3C892" d="M115 150c-8 0-15 8-15 18s7 18 15 18v-36zm150 0c8 0 15 8 15 18s-7 18-15 18v-36z"/>
        {/* Eyes */}
        <circle cx="160" cy="165" r="8" fill="#2E2E2E"/>
        <circle cx="220" cy="165" r="8" fill="#2E2E2E"/>
        {/* Eyebrows */}
        <path stroke="#2E2E2E" strokeWidth="4" strokeLinecap="round" d="M148 150c8-4 16-4 24 0m36 0c8-4 16-4 24 0"/>
        {/* Mustache */}
        <path fill="#2E2E2E" d="M140 190c25 0 40 15 50 15s25-15 50-15c10 20-15 35-50 35s-60-15-50-35z"/>
        {/* Shirt & Red Bowtie */}
        <path fill="#FFFFFF" d="M140 220h100v110H140z"/>
        <path fill="#D24939" d="M180 220l10 18 10-18h-20z"/>
        <path fill="#D24939" d="M165 220l18 10-5 12h-23zm50 0l-18 10 5 12h23z"/>
        {/* Black Suit Coat */}
        <path fill="#2A2A2A" d="M110 230l30 100h100l30-100-45 10-25 60-25-60z"/>
        {/* Serving Tray & Cup */}
        <path fill="#CCCCCC" d="M220 280h110v12H220z"/>
        <path fill="#EAEAEA" d="M260 255h30v25h-30z"/>
        <path fill="#D24939" d="M290 262h8v10h-8z"/>
      </svg>
    </div>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Jenkins</span>
  </div>
);

// CI/CD Pipeline Icon
const CICDIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <div className="w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md rounded-2xl p-2.5 border border-white/20 flex items-center justify-center shadow-lg hover:border-red-400/60 transition-colors">
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 12c-2-2.5-4.5-4-7-4-3 0-5 2-5 5s2 5 5 5c2.5 0 5-1.5 7-4zm0 0c2 2.5 4.5 4 7 4 3 0 5-2 5-5s-2-5-5-5c-2.5 0-5 1.5-7 4z"/>
        <circle cx="5" cy="13" r="1.5" fill="#FF2A2A" stroke="none"/>
        <circle cx="19" cy="13" r="1.5" fill="#FF2A2A" stroke="none"/>
      </svg>
    </div>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">CI / CD</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Arunkumar M — AWS Cloud & DevOps Engineer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-8">
            <div data-aos="zoom-in" data-aos-delay="200" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <AWSIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="350" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <DockerIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <TerraformIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="650" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JenkinsIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="800" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <CICDIcon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
