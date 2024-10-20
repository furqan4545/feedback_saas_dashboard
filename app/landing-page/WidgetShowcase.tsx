import React from "react";
import WidgetFace from "./WidgetFace";
import { Widget as WidgetEmail } from "./WidgetEmail";
import FlickeringGrid from "@/components/ui/flickering-grid";

const WidgetShowcase = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <FlickeringGrid
          squareSize={4}
          gridGap={6}
          flickerChance={0.3}
          color="rgb(0, 0, 255)"
          maxOpacity={0.1}
          className="w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">
          More Feedback Widgets
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">Simple Face Rating</h3>
            <div className="w-full max-w-sm">
              <WidgetFace />
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-2xl font-semibold mb-6">
              Detailed Feedback Form
            </h3>
            <div className="w-full max-w-sm">
              <WidgetEmail projectId="22" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WidgetShowcase;
