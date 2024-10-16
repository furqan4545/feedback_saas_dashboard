// import { ClerkProvider } from "@clerk/nextjs";
// import "./globals.css";
// import { Toaster } from "@/components/ui/toaster";
// import PageHeader from "@/components/page-header";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Feedbek",
//   description:
//     "Build features that your users love. Listening to users feedback has never been this easier before.",
//   viewport: "width=device-width, initial-scale=1",
//   icons: {
//     icon: [
//       { url: "/icon_logo.png" },
//       { url: "/icon_logo.png", sizes: "16x16", type: "image/png" },
//       { url: "/icon_logo.png", sizes: "32x32", type: "image/png" },
//     ],
//     apple: [{ url: "/icon_logo.png" }],
//   },
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <head>
//           <meta
//             name="viewport"
//             content="width=device-width, initial-scale=1.0"
//           ></meta>
//         </head>
//         <body>
//           <PageHeader />
//           {children}
//           <Toaster />
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import PageHeader from "@/components/page-header";
import { Metadata } from "next";

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
        </head>
        <body className="flex flex-col min-h-screen">
          <PageHeader />
          <main className="flex-grow flex justify-center">
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
