"use client"
import React from 'react';
import { MapPin, Clock, Users, Briefcase, Car, Zap, Globe, Award } from 'lucide-react';
import Image from 'next/image';

export default function JobOpenings() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Section */}
      <section className="h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 text-white">
              JOB OPENINGS
            </h1>
            <h2 className="text-xl font-semibold text-gray-200">
              Changing the future of transportation means thinking differently.
            </h2>
          </div>

          {/* Main Content Section with Left Paragraph and Right Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Paragraph */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white"></div>
              <div className="pl-8 text-left max-w-[500px]">
                <p className="text-base leading-relaxed text-gray-300">
                  At our company, we're not just building transportation—we're reimagining how the world moves. 
                  Our mission is to create sustainable, intelligent, and accessible mobility solutions that transform 
                  cities and connect communities. We believe that innovation happens when diverse minds come together 
                  to solve complex challenges.
                </p>
                <p className="text-base leading-relaxed text-gray-300 mt-4">
                  Join us in revolutionizing transportation through cutting-edge technology, from autonomous vehicles 
                  to smart infrastructure. We're looking for passionate individuals who share our vision of a more 
                  connected, efficient, and sustainable future.
                </p>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="h-[400px] w-full relative rounded-lg overflow-hidden">
              <Image
                src="/2.jpg"
                alt="Job Openings"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section - Job Cards */}
      <section className="min-h-screen bg-black flex items-center py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Cards with Vertical Lines */}
            <div className="bg-zinc-900 p-8 rounded-lg h-[300px] flex flex-col justify-between relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-lg"></div>
              <div className="pl-6">
                <h3 className="text-2xl font-semibold mb-2">Software Engineer</h3>
                <p className="text-gray-400 mb-4">San Francisco, CA</p>
                <p className="text-gray-300">Lead the development of next-generation autonomous vehicle systems and contribute to groundbreaking mobility solutions.</p>
              </div>
              <button className="text-white bg-black hover:bg-zinc-900 border border-white/20 px-8 py-3 rounded-lg mt-4 w-fit transition-all duration-300">
                Apply Now
              </button>
            </div>

            {/* Right Card with Vertical Line */}
            <div className="bg-zinc-900 p-8 rounded-lg h-[300px] flex flex-col justify-between relative">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-r-lg"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Product Designer</h3>
                <p className="text-gray-400 mb-4">Remote</p>
                <p className="text-gray-300">Shape the future of transportation through innovative design solutions and user-centric experiences.</p>
              </div>
              <button className="text-white bg-black hover:bg-zinc-900 border border-white/20 px-8 py-3 rounded-lg mt-4 w-fit transition-all duration-300">
                Apply Now
              </button>
            </div>

            {/* Left Cards with Vertical Lines */}
            <div className="bg-zinc-900 p-8 rounded-lg h-[300px] flex flex-col justify-between relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-l-lg"></div>
              <div className="pl-6">
                <h3 className="text-2xl font-semibold mb-2">AI Research Scientist</h3>
                <p className="text-gray-400 mb-4">Boston, MA</p>
                <p className="text-gray-300">Develop cutting-edge AI algorithms and models to advance autonomous driving capabilities.</p>
              </div>
              <button className="text-white bg-black hover:bg-zinc-900 border border-white/20 px-8 py-3 rounded-lg mt-4 w-fit transition-all duration-300">
                Apply Now
              </button>
            </div>

            {/* Right Card with Vertical Line */}
            <div className="bg-zinc-900 p-8 rounded-lg h-[300px] flex flex-col justify-between relative">
              <div className="absolute right-0 top-0 bottom-0 w-1 bg-white rounded-r-lg"></div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">Operations Manager</h3>
                <p className="text-gray-400 mb-4">New York, NY</p>
                <p className="text-gray-300">Drive operational excellence and scale our innovative transportation solutions across markets.</p>
              </div>
              <button className="text-white bg-black hover:bg-zinc-900 border border-white/20 px-8 py-3 rounded-lg mt-4 w-fit transition-all duration-300">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}