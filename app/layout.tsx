import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedbek",
  description:
    "Build features that your users love. Listening to users feedback has never been this easier before.",
  icons: {
    icon: [
      { url: "/icon_logo.png" },
      { url: "/icon_logo.png", sizes: "16x16", type: "image/png" },
      { url: "/icon_logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon_logo.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <PageHeader />
          {children}
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
