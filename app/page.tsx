import LandingPage from "./landing-page";
import Footer from "./landing-page/footer";

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-34">
    <main className="flex flex-col items-center justify-between min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <LandingPage />
      <Footer />
    </main>
  );
}
