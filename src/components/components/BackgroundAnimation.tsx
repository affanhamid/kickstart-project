"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
export function Stars() {
  return (
    <div className="h-screen rounded-md bg-transparent flex flex-col items-center justify-center relative w-full">
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
