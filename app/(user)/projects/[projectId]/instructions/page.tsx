import React from "react";

import CopyBtn from "@/components/copy-btn";

const Instructions = ({
  params,
}: {
  params: {
    projectId: string;
  };
}) => {
  if (!params.projectId) return <div>Invalid Project ID</div>;
  if (!process.env.WIDGET_URL) return <div>Missing WIDGET_URL</div>;

  return (
    <>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">
        Embed the code in your site
      </p>
      <div className="bg-blue-950 p-6 rounded-md mt-6 relative">
        <code className="text-white">
          {`<my-widget projectId="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>
        <CopyBtn
          text={`<my-widget projectId="${params.projectId}"></my-widget>\n<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </>
  );
};

export default Instructions;
