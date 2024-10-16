"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ClipboardIcon } from "lucide-react";

const IntegrateCode = () => {
  const { toast } = useToast();
  const codeSnippet = `<my-widget project-id="8"></my-widget>
<script src="https://feedback-widget-three-azure.vercel.app/widget.umd.js"></script>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Code copied to clipboard!",
        duration: 1000, // Display toast for 1 seconds
      });
    });
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">
              Start Collecting Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm sm:text-base">
              Embed the code in your site
            </p>
            <pre className="bg-gray-100 p-2 sm:p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
              <code>{codeSnippet}</code>
            </pre>
            <Button onClick={copyToClipboard} className="mt-4">
              <ClipboardIcon className="w-4 h-4 mr-2" />
              Copy Code
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntegrateCode;
