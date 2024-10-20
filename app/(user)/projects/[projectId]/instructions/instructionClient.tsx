"use client";
import React from "react";
import CopyBtn from "@/components/copy-btn";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import DocumentationCard from "./documentationCard";

const InstructionsClient = ({
  params,
  widgetType,
}: {
  params: {
    projectId: string;
  };
  widgetType: string;
}) => {
  console.log("widgetType: ", widgetType);

  if (!params.projectId) return <div>Invalid Project ID</div>;
  if (!process.env.NEXT_PUBLIC_WIDGET_EMAIL_URL)
    return <div>Missing WIDGET_EMAIL_URL</div>;
  if (!process.env.NEXT_PUBLIC_WIDGET_DETAIL_URL)
    return <div>Missing WIDGET_DETAIL_URL</div>;
  if (!process.env.NEXT_PUBLIC_WIDGET_FACE_URL)
    return <div>Missing WIDGET_FACE_URL</div>;

  const widgetTypeNumber = Number(widgetType);

  let widgetTag = "";
  let scriptTag = "";
  switch (widgetTypeNumber) {
    case 1:
      widgetTag = `<widget-email project-id="${params.projectId}"></widget-email>`;
      scriptTag = `<script src="${process.env.NEXT_PUBLIC_WIDGET_EMAIL_URL}/widget.umd.js"></script>`;
      break;
    case 2:
      widgetTag = `<widget-detail allowed-routes="/, /dashboard" display-after="2" project-id="${params.projectId}"></widget-detail>`;
      scriptTag = `<script src="${process.env.NEXT_PUBLIC_WIDGET_DETAIL_URL}/widget.umd.js"></script>`;
      break;
    case 3:
      widgetTag = `<widget-faces allowed-routes="/, /dashboard" display-after="2" project-id="${params.projectId}"></widget-faces>`;
      scriptTag = `<script src="${process.env.NEXT_PUBLIC_WIDGET_FACE_URL}/widget.umd.js"></script>`;
      break;
    default:
      widgetTag = `<widget-faces allowed-routes="/, /dashboard" display-after="2" project-id="${params.projectId}"></widget-faces>`;
      scriptTag = `<script src="${process.env.NEXT_PUBLIC_WIDGET_FACE_URL}/widget.umd.js"></script>`;
  }

  const fullCode = `${widgetTag}\n${scriptTag}`;

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-800"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Back to Projects
      </Link>

      <div>
        <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
        <p className="text-lg text-secondary-foreground">
          Embed the code in your site
        </p>
      </div>

      <div className="bg-blue-950 p-6 rounded-md relative">
        <code className="text-white">
          {widgetTag}
          <br />
          {scriptTag}
        </code>
        <CopyBtn text={fullCode} />
      </div>
      <DocumentationCard />
    </div>
  );
};

export default InstructionsClient;
