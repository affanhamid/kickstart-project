"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";

const contentHtml = (
  <div className="p-5">
    <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
    <p className="text-lg text-gray-300">
      Discover how we empower students with a personalized approach to
      education, ensuring their growth and success.
    </p>
  </div>
);

const content = [
  {
    title: "Comprehensive Academic Support",
    description:
      "High-quality tutoring tailored to your child's needs in core subjects like Math and English, as well as entrance exam preparation.",
    content: contentHtml,
  },
  {
    title: "Skill Development Beyond Academics",
    description:
      "Integrated interview preparation to build confidence and communication skills, ensuring your child is well-rounded and prepared for future opportunities.",

    content: contentHtml,
  },
  {
    title: "Flexible and Convenient",
    description:
      "Sessions designed to fit into busy family schedules, providing support without adding stress.",
    content: contentHtml,
  },
  {
    title: "Engaging and Relatable Tutors",
    description:
      "Young, enthusiastic tutors who create a fun, supportive learning environment, keeping your child motivated and focused.",
    content: contentHtml,
  },
  {
    title: "Results-Driven Approach:",
    description:
      "A clear focus on achieving measurable progress in academics and personal growth, giving you peace of mind about your child’s development.",
    content: contentHtml,
  },
  {
    title: "",
    description: "",
    content: <></>,
  },
];
export function StickyReveal() {
  return <StickyScroll content={content} />;
}
