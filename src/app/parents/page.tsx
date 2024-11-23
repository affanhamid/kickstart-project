"use client";
import { HeroHighlight, Testimonials, StickyReveal } from "@/components";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <HeroHighlight className="text-white h-screen overflow-y-scroll w-full">
      <div className="flex flex-col h-[30vh] items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Empowering Parents, Enabling Students
        </h1>
      </div>

      <div className="flex flex-col md:flex-row gap-8 p-8 text-white">
        {/* Metric Section */}
        <div className="flex w-1/2 flex-col items-center justify-center text-center md:text-left">
          <p className="text-6xl font-bold text-blue-500 mb-4">65%</p>
          <p className="text-lg">
            Only 65% of applicants passed the 11+ interview stage in 2023.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="w-1/2 space-y-6">
          <h2 className="text-4xl font-bold mb-4">Education Redefined</h2>
          <p className="text-gray-300 mb-6">
            Discover how we empower students with a personalized approach to
            education, ensuring their growth and success.
          </p>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p>
              Tailored tuition for all children, focusing on Math, English, and
              critical thinking.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p>
              Integrated interview preparation to help students develop
              essential skills effectively.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-blue-500 text-white p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p>
              Supportive and engaging environment to help children achieve their
              academic potential.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <StickyReveal />
      </div>
      <div className="pb-40">
        <Testimonials />
      </div>
    </HeroHighlight>
  );
};

export default page;
