"use client";
import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function ProjectCards() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const cardData = [
    { id: "1", image: "/email_card.png" },
    { id: "2", image: "/detail_card.png" },
    { id: "3", image: "/face_card.png" },
  ];

  return (
    <div className="mt-2">
      <Label className="text-lg font-semibold mb-2 block">
        Which widget would you like to choose for collecting the feedback?
      </Label>
      <Input type="hidden" name="widgetType" value={selectedCard || "3"} />
      <RadioGroup
        value={selectedCard || "3"}
        onValueChange={setSelectedCard}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2"
      >
        {cardData.map((card) => (
          <Card key={card.id} className="relative overflow-hidden">
            <CardContent className="p-0 aspect-[5/8]">
              <img
                src={card.image}
                alt={`Card ${card.id}`}
                className="w-full h-full object-contain"
              />
              <div className="absolute top-2 right-2">
                <RadioGroupItem
                  value={card.id}
                  id={`card-${card.id}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`card-${card.id}`}
                  className={`w-6 h-6 rounded-full border ${
                    selectedCard === card.id ||
                    (!selectedCard && card.id === "3")
                      ? "bg-primary border-primary"
                      : "border-gray-300"
                  } flex items-center justify-center cursor-pointer`}
                >
                  {(selectedCard === card.id ||
                    (!selectedCard && card.id === "3")) && (
                    <div className="w-3 h-3 rounded-full bg-white" />
                  )}
                </Label>
              </div>
            </CardContent>
          </Card>
        ))}
      </RadioGroup>
    </div>
  );
}

export default ProjectCards;
