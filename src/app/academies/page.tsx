import { Boxes } from "@/components";
import React from "react";
import { FaCalculator, FaBook, FaLaptop, FaComments } from "react-icons/fa";
import { FaUsers, FaBolt, FaClipboardCheck } from "react-icons/fa";

const AboutHighlight = () => (
  <section className="text-white py-16 px-6">
    <div className="max-w-4xl mx-auto">
      <h3 className="text-xl uppercase mb-4">About Us</h3>
      <h2 className="text-3xl font-bold mb-6 leading-relaxed">
        We provide specialised academic support for young athletes, designed to
        keep your players one step ahead of the game.
      </h2>
      <div className="bg-black bg-opacity-25 p-4 rounded-lg">
        <span className="text-4xl font-bold text-orange-300">87%</span>
        <p className="text-sm text-white mt-2">
          Of parents* would appreciate some form of educational support
          alongside their child’s (U9-11) sporting commitments.
        </p>
      </div>
    </div>
  </section>
);

const statistics = [
  {
    percentage: "100%",
    text: 'of students and parents "would like the sessions to continue"',
  },
  {
    percentage: "91%",
    text: 'of students "very much enjoy" the sessions',
  },
  {
    percentage: "100%",
    text: 'of students find the sessions beneficial, of these, 73% find the sessions "very beneficial"',
  },
  {
    percentage: "91%",
    text: 'of students feel "very much engaged" in sessions',
  },
  {
    percentage: "82%",
    text: 'of students would describe the learning environment as "stimulating and positive"',
  },
];

const Statistics = () => (
  <section className="text-white py-16 px-6">
    <div className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold uppercase mb-6">
        Chelsea F.C. Student Feedback 2024
      </h2>
      <hr className="border-gray-700 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {statistics.map((stat, index) => (
          <div key={index}>
            <h3 className="text-5xl font-bold mb-2">{stat.percentage}</h3>
            <p>
              {stat.text.split('"').map((chunk, i) =>
                i % 2 === 1 ? (
                  <span key={i} className="text-green-500">
                    "{chunk}"
                  </span>
                ) : (
                  chunk
                ),
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const services = [
  {
    title: "Online Group Math Support",
    description:
      "Weekly Math classes, tailored for your students, separated by age group.",
    icon: <FaCalculator />,
  },
  {
    title: "Online Group English Support",
    description:
      "Weekly comprehension, creative writing and SPaG classes for each age group.",
    icon: <FaBook />,
  },
  {
    title: "Resources & Recordings",
    description:
      "Class recordings and a range of resources are uploaded to Google Classroom weekly.",
    icon: <FaLaptop />,
  },
  {
    title: "Interview Preparation",
    description:
      "For those sitting entrance exams, personalised 1-2-1 interview prep is offered.",
    icon: <FaComments />,
  },
];

const ServicesOverview = () => (
  <section className=" text-white py-16 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <h3 className="text-lg uppercase mb-4">Services Overview</h3>
      <h2 className="text-4xl font-bold mb-12">
        We deliver comprehensive academic support* tailored to your U9 – 11s.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-lg flex flex-col items-center text-center"
          >
            <div className="text-green-500 text-4xl mb-4">{service.icon}</div>
            <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const feedbacks = [
  {
    quote:
      "It is a great opportunity for our boys to have a club where education is also taken seriously, not only football. As a parent, it is very important to know that the club are going the extra mile for the growth of our kids. Well done Chelsea Football Club.",
    parent: "Parents of Nathan Bagaza (U9)",
  },
  {
    quote:
      "The sessions have been so beneficial and help to consolidate the boys learning. The tutors are really engaging with the children which in turn makes our son feel comfortable to ask questions.",
    parent: "Parents of Kairo Bailey (U11)",
  },
  {
    quote: "These weekly sessions perfectly supplement school lessons.",
    parent: "Parents of Alfred Mensah (U10)",
  },
  {
    quote:
      "Sessions have been very well planned and have been a good insight into the structure of the 11+ topics and questions. We really appreciate this additional support in aiding Kayden’s development.",
    parent: "Parents of Kayden Clement (U10)",
  },
  {
    quote: "The tutors are very good with the boys.",
    parent: "Parents of Fletcher Fenton (U9)",
  },
];

const ParentFeedback = () => (
  <section className=" text-white py-16 px-6">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold uppercase mb-6 text-center">
        Chelsea F.C. Parent Feedback 2024
      </h2>
      <hr className="border-gray-700 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {feedbacks.map((feedback, index) => (
          <div key={index} className="flex flex-col gap-4">
            <p className="text-lg text-gray-300 italic">“{feedback.quote}”</p>
            <p className="font-semibold text-green-500">{feedback.parent}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const stats = [
  {
    value: "33%",
    description: "Annual growth rate of our educational services",
  },
  {
    value: "98%",
    description: "Student, parent and coaches satisfaction rate",
  },
];

const feedback = [
  {
    quote:
      "This initiative is fantastic for the boys to keep ahead of the game",
    author: "Chelsea F.C. Academy",
  },
  {
    quote:
      "The sessions have kept me from falling behind at school. The tutors are great and I feel well prepared for my 11+ exams.",
    author: "U11 Player",
  },
];

const schools = [
  "Whitgift School",
  "St. Dunstans",
  "Dulwich College",
  "Brighton College",
  "Royal Russell",
  "Epsom College",
];

const SuccessOverview = () => (
  <section className=" text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">
        Our success is evident through customer feedback and data-driven
        results.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 bg-black bg-opacity-40 rounded-lg text-center"
          >
            <p className="text-5xl font-bold text-green-500">{stat.value}</p>
            <p className="mt-2 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
      <div className=" bg-opacity-40 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-bold mb-4">
          We’ve successfully prepared our students for the following 10/11+
          entrance examinations:
        </h3>
        <div className="flex flex-wrap gap-4">
          {schools.map((school, index) => (
            <span
              key={index}
              className="px-4 py-2 border border-green-500 text-green-500 rounded-full text-sm"
            >
              {school}
            </span>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {feedback.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-black bg-opacity-40 rounded-lg text-center"
          >
            <p className="italic text-sm mb-4">“{item.quote}”</p>
            <p className="font-semibold text-green-500">{item.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const points = [
  {
    title: "Targeted Service",
    description:
      "It can be challenging for parents to find specialised academic services that truly understand the lifestyle and pressures of student-athletes.",
    icon: <FaUsers />,
  },
  {
    title: "Academic Pressure",
    description:
      "Young athletes often find it hard to keep up with academic expectations while training and competing. Our services alleviate this pressure.",
    icon: <FaBolt />,
  },
  {
    title: "11+ Exam Preparation",
    description:
      "As students transition to secondary school, parents are aware of the importance of preparation for entrance exams. Let Kickstart prepare your athletes.",
    icon: <FaClipboardCheck />,
  },
];

const SupportOverview = () => (
  <section className=" text-white py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <h3 className="text-lg uppercase mb-4">Our Purpose</h3>
      <h2 className="text-4xl font-bold mb-12">
        What is the need for this support?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div className="space-y-8">
          {points.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-green-500 text-4xl">{point.icon}</div>
              <div>
                <h4 className="text-lg font-semibold">{point.title}</h4>
                <p className="text-gray-400">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Right Section */}
        <div className="bg-opacity-40 p-6 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <p className="text-green-500 text-4xl font-bold mb-4">“</p>
            <p className="italic text-lg mb-4">
              We’re sacrificing a lot at a young age to even have a small chance
              at this.
            </p>
            <p className="font-semibold">Trent Alexander-Arnold</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const page = () => {
  return (
    <section className="text-white w-full flex justify-center h-screen overflow-y-scroll">
      <div className="z-20 pt-32">
        <AboutHighlight />
        <Statistics />
        <ServicesOverview />
        <ParentFeedback />
        <SuccessOverview />
        <SupportOverview />
      </div>

      <Boxes />
    </section>
  );
};

export default page;
