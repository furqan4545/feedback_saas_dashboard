// "use client";
// import React, { useState, useEffect } from "react";
// import { X } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Textarea } from "@/components/ui/textarea";

// const improvementOptions = [
//   "Visual style",
//   "Layouts",
//   "Missing content",
//   "Writing quality",
//   "Prompt relevance",
//   "Image quality",
//   "Wrong number of sections",
//   "Wrong language",
//   "Other",
// ];

// function FeedbackWidgetDetail({
//   projectId,
//   allowedRoutes = [],
//   displayAfter = 0,
// }) {
//   const [isOpen, setIsOpen] = useState(true); // Changed to true to always show in hero section
//   const [satisfaction, setSatisfaction] = useState(null);
//   const [improvements, setImprovements] = useState([]);
//   const [feedbackText, setFeedbackText] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = {
//       p_project_id: parseInt(projectId, 10),
//       p_face_rating: satisfaction,
//       p_feeback_message: feedbackText,
//       p_feedback_suggestion: improvements.join(", "), // Convert array to comma-separated string
//     };

//     console.log("Form submitted:", formData);
//     // Reset form fields
//     setSatisfaction(null);
//     setImprovements([]);
//     setFeedbackText("");
//   };

//   return (
//     <Card className="mt-16 w-80 shadow-2xl transform hover:scale-105 transition-all duration-300">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4">
//         <CardTitle className="text-sm font-medium leading-tight">
//           How satisfied are you with the output?
//         </CardTitle>
//       </CardHeader>
//       <CardContent className="px-4 pt-0 pb-4">
//         <div className="flex justify-between mb-4">
//           {[1, 2, 3].map((value) => (
//             <Button
//               key={value}
//               variant={satisfaction === value ? "secondary" : "outline"}
//               size="lg"
//               className="w-[30%] h-10 text-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//               onClick={() => setSatisfaction(value)}
//             >
//               {value === 1 ? "🙁" : value === 2 ? "😐" : "😃"}
//             </Button>
//           ))}
//         </div>
//         <div className="space-y-3">
//           <p className="text-sm font-medium">What could be improved?</p>
//           <div className="grid grid-cols-2 gap-2">
//             {improvementOptions.map((option) => (
//               <Button
//                 key={option}
//                 variant={
//                   improvements.includes(option) ? "secondary" : "outline"
//                 }
//                 size="sm"
//                 className="h-auto py-1 px-2 text-[10px] leading-tight shadow-sm hover:shadow-md transition-shadow duration-300"
//                 onClick={() =>
//                   setImprovements((prev) =>
//                     prev.includes(option)
//                       ? prev.filter((item) => item !== option)
//                       : [...prev, option]
//                   )
//                 }
//               >
//                 {option}
//               </Button>
//             ))}
//           </div>
//         </div>
//         <div className="space-y-2 mt-4">
//           <p className="text-sm font-medium">
//             Is there anything else we should know?
//           </p>
//           <Textarea
//             placeholder="Your feedback..."
//             className="resize-none text-sm shadow-inner"
//             rows={3}
//             value={feedbackText}
//             onChange={(e) => setFeedbackText(e.target.value)}
//           />
//         </div>
//       </CardContent>
//       <CardFooter className="px-4 pb-4 pt-0">
//         <Button
//           className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
//           onClick={handleSubmit}
//         >
//           Submit
//         </Button>
//       </CardFooter>
//     </Card>
//   );
// }

// export default FeedbackWidgetDetail;

"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const improvementOptions = [
  "Visual style",
  "Layouts",
  "Missing content",
  "Writing quality",
  "Prompt relevance",
  "Image quality",
  "Wrong number of sections",
  "Wrong language",
  "Other",
];

function FeedbackWidgetDetail({
  projectId,
  allowedRoutes = [],
  displayAfter = 0,
}) {
  const [isOpen, setIsOpen] = useState(true); // Changed to true to always show in hero section
  const [satisfaction, setSatisfaction] = useState(null);
  const [improvements, setImprovements] = useState([]);
  const [feedbackText, setFeedbackText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      p_project_id: parseInt(projectId, 10),
      p_face_rating: satisfaction,
      p_feeback_message: feedbackText,
      p_feedback_suggestion: improvements.join(", "), // Convert array to comma-separated string
    };

    console.log("Form submitted:", formData);
    // Reset form fields
    setSatisfaction(null);
    setImprovements([]);
    setFeedbackText("");
    setSubmitted(true);
  };

  return (
    <div className="mt-9 h-[500px] w-80">
      {" "}
      {/* Fixed height container */}
      <Card className="mt-16 w-80 shadow-2xl transform hover:scale-105 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 px-4 pt-4">
          {!submitted && (
            <CardTitle className="text-sm font-medium leading-tight">
              How satisfied are you with the output?
            </CardTitle>
          )}
        </CardHeader>
        <CardContent className="px-4 pt-0 pb-4">
          {submitted ? (
            <div>
              <div className="text-center">
                <h3 className="text-lg font-medium">
                  Thank you for your feedback!
                </h3>
                <p className="text-sm text-gray-600 mt-2 mb-6">
                  We appreciate your time and effort in helping us improve our
                  platform.
                </p>
                <Button onClick={() => setSubmitted(false)}>
                  Submit another
                </Button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((value) => (
                  <Button
                    key={value}
                    variant={satisfaction === value ? "secondary" : "outline"}
                    size="lg"
                    className="w-[30%] h-10 text-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    onClick={() => setSatisfaction(value)}
                  >
                    {value === 1 ? "🙁" : value === 2 ? "😐" : "😃"}
                  </Button>
                ))}
              </div>
              <div className="space-y-3">
                <p className="text-sm font-medium">What could be improved?</p>
                <div className="grid grid-cols-2 gap-2">
                  {improvementOptions.map((option) => (
                    <Button
                      key={option}
                      variant={
                        improvements.includes(option) ? "secondary" : "outline"
                      }
                      size="sm"
                      className="h-auto py-1 px-2 text-[10px] leading-tight shadow-sm hover:shadow-md transition-shadow duration-300"
                      onClick={() =>
                        setImprovements((prev) =>
                          prev.includes(option)
                            ? prev.filter((item) => item !== option)
                            : [...prev, option]
                        )
                      }
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="space-y-2 mt-4">
                <p className="text-sm font-medium">
                  Is there anything else we should know?
                </p>
                <Textarea
                  placeholder="Your feedback..."
                  className="resize-none text-sm shadow-inner"
                  rows={3}
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </div>
            </>
          )}
        </CardContent>
        {!submitted && (
          <CardFooter className="px-4 pb-4 pt-0">
            <Button
              className="w-full shadow-md hover:shadow-lg transition-shadow duration-300"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}

export default FeedbackWidgetDetail;
