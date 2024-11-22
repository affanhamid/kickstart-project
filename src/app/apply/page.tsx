import { BackgroundBeams, Form } from "@/components";
import React from "react";

const page = () => {
  return (
    <section className="flex justify-center items-center w-screen h-screen relative">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
      <div className="relative z-10">
        <Form />
      </div>
    </section>
  );
};

export default page;
