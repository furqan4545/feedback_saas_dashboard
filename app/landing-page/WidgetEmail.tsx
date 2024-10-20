"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Widget = ({ projectId }: { projectId: string }) => {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted");
    // Here you would typically handle the submission to your backend
    setSubmitted(true);
  };

  return (
    <Card className="w-full shadow-2xl transform hover:scale-105 transition-all duration-300">
      <CardHeader className="pb-2 px-4 pt-4">
        <CardTitle className="text-lg font-medium">
          Tell us how we did?
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        {submitted ? (
          <div className="text-center">
            <h3 className="text-lg font-medium">
              Thank you for your feedback!
            </h3>
            <p className="text-sm text-gray-600 mt-2 mb-4">
              We appreciate your time and effort in helping us improve our
              platform.
            </p>
            <Button onClick={() => setSubmitted(false)}>Submit another</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Your name" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="Your email"
                type="email"
                required
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="feedback">Feedback</Label>
              <Textarea id="feedback" placeholder="Your feedback" required />
            </div>
            <div className="flex items-center justify-between">
              <Label>Rating</Label>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="p-1 hover:bg-transparent"
                    onClick={() => handleRating(star)}
                  >
                    <Star
                      className={`h-6 w-6 ${
                        rating >= star
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                    <span className="sr-only">{star} stars</span>
                  </Button>
                ))}
              </div>
            </div>
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  );
};
