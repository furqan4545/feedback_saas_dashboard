"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

function SimpleFeedbackWidget() {
  const [satisfaction, setSatisfaction] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleSatisfactionClick = async (value: number) => {
    setSatisfaction(value);
    console.log("Feedback submitted:", value);
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
      setSatisfaction(null);
    }, 1000);
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Card className="w-full shadow-2xl transform hover:scale-105 transition-all duration-300 relative">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-2 right-2 p-0 w-8 h-8"
        onClick={handleClose}
      >
        <X className="h-4 w-4" />
      </Button>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4">
        <CardTitle className="text-sm font-medium leading-tight">
          How was your experience?
        </CardTitle>
      </CardHeader>
      <CardContent className="px-4 pt-3 pb-5">
        <div className="flex justify-between">
          {[1, 2, 3].map((value) => (
            <Button
              key={value}
              variant="ghost"
              size="lg"
              className="w-[30%] h-22 text-5xl"
              onClick={() => handleSatisfactionClick(value)}
            >
              {value === 1 ? "😞" : value === 2 ? "😐" : "😊"}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default SimpleFeedbackWidget;
