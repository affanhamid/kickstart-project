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
