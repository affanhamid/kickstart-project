"use client";
import { HeroHighlight } from "@/components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-transparent py-16 px-64 pt-48 flex items-center justify-between">
      <div className="w-1/2">
        <motion.h1
          className="text-5xl font-bold leading-snug text-gray-300 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Online tutoring that releases potential
        </motion.h1>
        <motion.p
          className="text-lg text-gray-400 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          We can't stop you worrying about your child. But our expert tutors can
          help their grades and confidence soar – and help you worry a little
          less.
        </motion.p>
      </div>
      <motion.div
        className="hidden"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img className="w-96 rounded-lg border-4 border-teal-500" />
      </motion.div>
    </section>
  );
};

const stats = [
  { title: "Excellent", subtitle: "Trustpilot", rating: "⭐⭐⭐⭐⭐" },
  { title: "426,835+", subtitle: "5-star reviews" },
  { title: "1500", subtitle: "schools trust us" },
  { title: "30+", subtitle: "subjects available" },
  { title: "255,203+", subtitle: "students" },
];

const Stats = () => {
  return (
    <div className="bg-transparent backdrop-blur-sm py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center md:flex-row md:text-left gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {stat.title === "Excellent" ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-gray-200">
                  {stat.title}
                </span>
                <span className="text-green-200">{stat.rating}</span>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-gray-200">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-400">{stat.subtitle}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const steps = [
  {
    title: "Share your goals",
    description:
      "Let us know what type of tutoring you need and when, so we can find you the right matches for your needs.",
    image: "/step1.png", // Replace with actual image path
    bgColor: "bg-orange-200",
  },
  {
    title: "Find the perfect fit",
    description:
      "Browse our tutors, get in touch, and book as many free meetings as you need to find the tutor they click with most.",
    image: "/step2.png", // Replace with actual image path
    bgColor: "bg-teal-200",
  },
  {
    title: "Let the learning begin",
    description:
      "Once you’ve found the right fit, it’s time to book your lessons and start learning with MyTutor.",
    image: "/step3.png", // Replace with actual image path
    bgColor: "bg-pink-200",
  },
];

const Steps = () => {
  return (
    <div className="bg-transparent py-16 px-6">
      <h2 className="text-3xl font-bold text-gray-100 text-center mb-12">
        Start learning in 3 steps
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-white/5 backdrop-blur-[1px] border border-white/20 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${step.bgColor} mb-4`}
            >
              <img src={step.image} alt={step.title} className="rounded-full" />
            </div>
            <h3 className="text-xl font-semibold text-gray-100 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-200">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const features = [
  {
    title: "Handpicked tutors from £25/hour",
    description:
      "We're very (very) picky about who we let tutor on our platform - just 1 in 8 who apply make the cut. They're experts in over 30 subjects from KS2 up to GCSE and A Level. Because they're from UK unis, they studied (and aced) the same courses as your teen in the last few years. So they explain tricky concepts in a way teens understand - and they double as cool older role models.",
    image: "/feature1.png", // Replace with actual image path
  },
  {
    title: "Trusted by parents & teachers",
    description:
      "MyTutor is the UK's most trusted tutoring platform by parents. We're rated 4.96/5 by students and parents from the 3.8 million (and counting!) lessons we've delivered so far. And because our tutors get such good results, schools use them to support their teaching. We work with 1500 across the UK, targeting learning gaps and helping teens everywhere achieve their goals.",
    image: "/feature2.png", // Replace with actual image path
  },
  {
    title: "Help from our team, every step of the way",
    description:
      "Our expert tutor-matching team can pair your child with the perfect tutor for their needs - from subject and level, right down to exam board and personality match. They're always on hand to listen, answer questions and give you the tailored support you need.",
    image: "/feature3.png", // Replace with actual image path
  },
  {
    title: "Our interactive learning space makes lessons engaging",
    description:
      "Lessons are much more than a video call. They all happen in our tailor-made, interactive lesson space. So tutors can bring tricky concepts to life with interactive exercises, draw diagrams as they go, plus annotate homework and practice questions together. It can even make dreaded subjects - dare we say it - fun.",
    image: "/feature4.png", // Replace with actual image path
  },
];

const Features = () => {
  return (
    <div className="flex flex-col h-max gap-32 py-16 px-60">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center gap-10"
          initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <div
            className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}
          >
            <div className="w-full md:w-1/2">
              <img src={feature.image} alt={feature.title} className="w-full" />
            </div>
            <div className="w-full md:w-1/2 px-5">
              <h3 className="text-4xl font-bold text-gray-100 mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const faqs = [
  {
    question: "What makes a good tutor?",
    answer:
      "Subject knowledge is a must, but being a good tutor is really about explaining difficult concepts in a way that's clear, engaging and personalised for each student. You can have three degrees in Physics, but that doesn't mean you'll be good at explaining it at GCSE level! Tutors who can empathise with their students and help them build confidence help teens unleash their potential, and we see amazing results in just a few lessons. Our tutors are from top UK unis, and because they're just a few years older, they can explain things in a way that teens find relatable. We interview all of our tutors, and only the friendliest and most knowledgeable make it on to our platform. We're very picky about it - just 1 in 8 applicants make the cut. Pick from over 30 subjects at GCSE, A Level and beyond. Click below to find a tutor at the level you need:",
  },
  {
    question: "Which tutor is right for you?",
    answer:
      "Before you look for a tutor, it's helpful to have a really clear idea of exactly where your child needs help - whether with a specific English Literature text, one area of Maths or their exam technique - and filter your choices accordingly. If you're not sure where they need to focus, having a chat with them or their teacher can help you work out the best place to start. In a free meeting, you can then ask the tutor any questions you like and see how well they get on with your child before deciding to book.",
  },
  {
    question: "Why is online tutoring important?",
    answer:
      "One-to-one tutoring lets kids unleash their potential. Worried about learning gaps? We'll fill them in. No tutors in your area? We've got you covered. No academic confidence? No problem. Whatever your child needs help with, their tutor will guide them through tricky topics and boost their self-belief. With the personalised one-to-one support from their tutor, your child can get the grades they deserve.",
  },
  {
    question: "What are the benefits of online tutoring?",
    answer:
      "Our tutors set their own prices based on their experience and qualifications, starting from £25/hour at GCSE level. Most of our tutors charge between £25 and £39 an hour. You can see all the tutors who match your budget with the handy price filter on our Find a tutor page.",
  },
  {
    question: "How much does a tutor cost?",
    answer:
      "Our tutors set their own prices based on their experience and qualifications, starting from £25/hour at GCSE level. Most of our tutors charge between £25 and £39 an hour. You can see all the tutors who match your budget with the handy price filter on our Find a tutor page.",
  },
  { question: "How to find a tutor?", answer: "Finding a tutor..." },
  {
    question: "How do online lessons work?",
    answer:
      "We have our own online lesson space with video chat, messaging and an interactive whiteboard - this makes it easy for students and tutors to talk to each other, discuss tricky concepts and do practice questions together. With the live video chat, they can have a natural back-and-forth conversation - just like on FaceTime, Whatsapp and other apps teens use all the time.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-transparent py-16 px-6">
      <h2 className="text-3xl text-gray-100 font-bold text-center mb-12">
        Read our FAQs
      </h2>
      <div className="max-w-4xl mx-auto bg-white/5 rounded-lg shadow-md p-6">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b last:border-none">
            <button
              className="w-full flex justify-between items-center py-4 text-left text-2xl font-medium text-gray-200 hover:text-teal-500"
              onClick={() => toggleFaq(index)}
            >
              {faq.question}
              <span className="text-xl">{openIndex === index ? "▼" : "▲"}</span>
            </button>
            {openIndex === index && (
              <motion.div
                className="pl-4 pr-10 pb-10 leading-snug text-gray-200 text-lg"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Mihaela Ghizdeanu",
    role: "Parent",
    quote:
      "Our tutor has been exceptional from the very start - polite, reliable and trustworthy. My son eagerly looked forward to every lesson, and the tutor's patience and understanding made learning enjoyable. We noticed significant improvements in a very short time. After each session, the tutor provided a detailed summary, highlighting the progress made and identifying areas for further development. This personalised feedback was invaluable. I would highly recommend Kickstart Education to anyone seeking professional, effective, and engaging tutoring services.",
  },
  {
    name: "Siddika Moledina",
    role: "Parent",
    quote:
      "Our tutor was instrumental in helping my son prepare for the 9+ exams in Non-Verbal and Verbal Reasoning. He excelled at explaining complex topics that my son had not encountered before, all while being friendly and approachable. He was also exceptionally courteous, always willing to address my questions and accommodate my requests. I especially appreciated the prompt and insightful feedback provided after every lesson, which kept me informed about my son's progress. He is an outstanding tutor, and I would not hesitate to recommend him to others.",
  },
  {
    name: "Ananya Majumda",
    role: "Parent",
    quote:
      "Our tutor provided excellent support for my son as we began preparing for the 11+ exams in Math. He helped us create a detailed study plan, identifying topics to focus on - some for revision and others newly introduced. The topic tests at the end of each lesson were particularly helpful in evaluating my son's progress and pinpointing areas that needed extra attention. He thoroughly enjoyed the one-on-one lessons, which, despite being online, were engaging and kept him focused throughout. I would highly recommend him as a fantastic teacher who makes learning enjoyable for children.",
  },
  {
    name: "Sumera Siddiqi",
    role: "Parent",
    quote:
      "Our tutor was exceptional and had such a fresh and engaging approach to teaching. Being young, he connected effortlessly with my son, making the lessons enjoyable and something he genuinely looked forward to. This relationship they built greatly accelerated my son's learning, and the results have been remarkable. I would highly recommend him without hesitation.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-transparent py-16 px-6">
      <h2 className="text-5xl px-52 text-gray-100 font-bold text-center mb-12">
        Thousands of parents, students and teachers have rated us 4.96/5
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-md bg-white/5 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-gray-100 mt-4">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-200">{testimonial.role}</p>
            <p className="text-sm text-gray-300 mt-4 leading-loose">
              {testimonial.quote}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const page = () => {
  return (
    <HeroHighlight>
      <section className="h-screen overflow-y-scroll">
        {/* <Hero /> */}
        {/* <Stats /> */}
        {/* <Steps /> */}
        {/* <Features /> */}
        {/* <Stats /> */}
        {/* <Faq /> */}
        {/* <Stats /> */}
        {/* <Testimonials /> */}
        <h1 className="text-white pt-80 text-5xl">Coming Soon</h1>
      </section>
    </HeroHighlight>
  );
};
export default page;
