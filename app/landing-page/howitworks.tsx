// export default HowItWorks;

import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden"
    >
      <DotPattern className="absolute inset-0 w-full h-full opacity-50" />
      <div className="container px-4 md:px-6 relative z-10">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          How It Works
        </h2>
        <div className="flex justify-center">
          <Image
            src="/demo_3.gif"
            alt="How It Works Demonstration"
            width={700}
            height={700}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
