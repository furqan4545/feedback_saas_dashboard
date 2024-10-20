"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ClipboardIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const IntegrateCode = () => {
  const { toast } = useToast();

  const widgetCodes = {
    face: `<widget-faces project-id="20"></widget-faces>
<script src="${process.env.NEXT_PUBLIC_WIDGET_FACE_URL}/widget-face.umd.js"></script>`,
    email: `<widget-email project-id="20"></widget-email>
<script src="${process.env.NEXT_PUBLIC_WIDGET_EMAIL_URL}/widget-email.umd.js"></script>`,
    detail: `<widget-detail project-id="20"></widget-detail>
<script src="${process.env.NEXT_PUBLIC_WIDGET_DETAIL_URL}/widget-detail.umd.js"></script>`,
  };

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      toast({
        title: "Copied to clipboard!",
        description: "Code copied to clipboard!",
        duration: 1000,
      });
    });
  };

  return (
    <section className="py-8 sm:py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          How to Integrate
        </h2>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl">
              Start Collecting Feedback
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="face">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="face">Face Widget</TabsTrigger>
                <TabsTrigger value="email">Email Widget</TabsTrigger>
                <TabsTrigger value="detail">Detail Widget</TabsTrigger>
              </TabsList>
              {Object.entries(widgetCodes).map(([key, code]) => (
                <TabsContent key={key} value={key}>
                  <p className="mb-4 text-sm sm:text-base">
                    Embed the code in your site
                  </p>
                  <pre className="bg-gray-100 p-2 sm:p-4 rounded-md overflow-x-auto text-xs sm:text-sm">
                    <code>{code}</code>
                  </pre>
                  <Button
                    onClick={() => copyToClipboard(code)}
                    className="mt-4"
                  >
                    <ClipboardIcon className="w-4 h-4 mr-2" />
                    Copy Code
                  </Button>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default IntegrateCode;
