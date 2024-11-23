import { HeroHighlight } from "@/components";
import React from "react";

const page = () => {
  return (
    <section className="text-white w-full min-h-screen">
      <HeroHighlight containerClassName="min-h-screen">
        <div>For Parents</div>
      </HeroHighlight>
    </section>
  );
};

export default page;
