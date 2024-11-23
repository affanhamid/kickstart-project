import { Boxes } from "@/components";
import React from "react";

const page = () => {
  return (
    <section className="text-white w-full flex justify-center">
      <div className="z-20 min-h-screen flex justify-center items-center">
        <h1>For Academies</h1>
      </div>

      <Boxes />
    </section>
  );
};

export default page;
