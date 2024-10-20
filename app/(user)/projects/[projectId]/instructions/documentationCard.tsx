import { Info } from "lucide-react";
import React from "react";

function DocumentationCard() {
  return (
    <>
      {/* Documentation Card */}
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <h2 className="text-lg font-semibold mb-6 flex items-center">
          <Info className="w-5 h-5 mr-2 text-indigo-600" />
          Widget Parameters Explained
        </h2>
        <dl className="space-y-4">
          <div>
            <dt className="font-bold text-gray-700">allowed-routes</dt>
            <dd className="mt-1 text-gray-600">
              Specifies the pages where the widget should appear. For example,
              "/, /dashboard" means the widget will show on the home page and
              dashboard page... If you want the widget to appear on all pages,
              then you have to add all the pages in the allowed-routes beginning
              with a slash e.g. "/, /dashboard, /blogs, /profile".
            </dd>
          </div>
          <div>
            <dt className="font-bold text-gray-700">display-after</dt>
            <dd className="mt-1 text-gray-600">
              Determines the delay (in seconds) before the widget appears
              automatically. For instance, "2" means the widget will appear
              after 2 seconds of the page loaded. You can change this value.
            </dd>
          </div>
          <div>
            <dt className="font-bold text-gray-700">project-id</dt>
            <dd className="mt-1 text-gray-600">
              A unique identifier assigned to your project. It links the
              feedback to your account and helps collect data specifically for
              this project.
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export default DocumentationCard;
