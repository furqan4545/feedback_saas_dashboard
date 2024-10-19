import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";
import MicrosoftClarity from "@/components/MicrosoftClarity";

export const metadata: Metadata = {
  title: "Feedbek",
  description:
    "Build features that your users love. Listening to users feedback has never been this easier before.",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [
      { url: "/icon_logo.png" },
      { url: "/icon_logo.png", sizes: "16x16", type: "image/png" },
      { url: "/icon_logo.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/icon_logo.png" }],
  },
  openGraph: {
    type: "website",
    url: "https://feedbek.com",
    title: "Feedbek",
    description:
      "Build features that your users love. Integrate feedback widget in your app within 5 seconds.",
    images: [
      {
        url: "/website_screenshot.png",
        width: 1200,
        height: 630,
        alt: "Feedbek - collecting user Feedback Made Super Easy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iamfurqanalii",
    title: "Feedbek",
    description:
      "Build features that your users love. Integrate feedback widget in your app within 5 seconds.",
    images: ["/website_screenshot.png"],
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
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />

          {/* Microsoft Clarity Tracking Code */}
        </head>
        <body className="flex flex-col min-h-screen">
          <PageHeader />
          <main className="flex-grow flex justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Toaster />
          <MicrosoftClarity />
        </body>
      </html>
    </ClerkProvider>
  );
}
