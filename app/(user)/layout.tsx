import { Suspense } from "react";
import { Viewport } from "next";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container w-full max-w-screen-xl mx-auto py-10 px-2.5 lg:px-20">
      <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
    </div>
  );
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};
