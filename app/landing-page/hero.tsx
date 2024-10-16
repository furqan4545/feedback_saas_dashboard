// import { Button } from "@/components/ui/button";
// import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
// import Link from "next/link";
// import { LogIn, Github } from "lucide-react";
// import Image from "next/image";

// const Hero = () => {
//   return (
//     <section className="grow">
//       <div className="container mx-auto px-4 mb-24 mt-0 flex flex-col md:flex-row justify-center">
//         <div className="flex flex-col max-w-xl justify-center">
//           <div className="mb-8">
//             <h1 className="mb-5 text-5xl font-extrabold leading-tight">
//               Collect your feedbacks seamlessly
//             </h1>
//             <p className="text-gray-500 texl-lg">
//               Integrate Feedback Widget in 5 seconds and start collecting
//               feedback today.
//             </p>
//           </div>
//           <div>
//             <SignedOut>
//               <SignUpButton>
//                 <div className="flex gap-3">
//                   <Button>
//                     <LogIn className="w-4 h-4 mr-2" />
//                     Get Started
//                   </Button>
//                   <Button variant="secondary" asChild>
//                     <Link href="https://github.com">
//                       <Github className="w-4 h-4 mr-2" />
//                       GitHub
//                     </Link>
//                   </Button>
//                 </div>
//               </SignUpButton>
//             </SignedOut>
//             <SignedIn>
//               <Button asChild>
//                 <Link href="/dashboard">Dashboard</Link>
//               </Button>
//             </SignedIn>
//           </div>
//         </div>
//         <div className="flex-1 max-w-lg">
//           <Image
//             src={"/demo.gif"}
//             alt="demo"
//             layout={"responsive"}
//             width={155}
//             height={155}
//             unoptimized={true}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { Button } from "@/components/ui/button";
import { SignUpButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Link from "next/link";
import { LogIn, Github } from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/ui/animated-grid-pattern";

const Hero = () => {
  return (
    <section className="grow relative overflow-hidden">
      <GridPattern
        className="absolute inset-0 z-0 opacity-20"
        width={40}
        height={40}
        numSquares={50}
        maxOpacity={0.5}
        duration={4}
        repeatDelay={0.5}
      />
      <div className="container mx-auto px-4 mb-24 mt-0 flex flex-col md:flex-row justify-center relative z-10">
        <div className="flex flex-col max-w-xl justify-center">
          <div className="mb-8">
            <h1 className="mb-5 text-5xl font-extrabold leading-tight">
              Collect your feedbacks seamlessly
            </h1>
            <p className="text-gray-500 texl-lg">
              Integrate Feedback Widget in 5 seconds and start collecting
              feedback today.
            </p>
          </div>
          <div>
            <SignedOut>
              <SignUpButton>
                <div className="flex gap-3">
                  <Button>
                    <LogIn className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                  <Button variant="secondary" asChild>
                    <Link href="https://github.com">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Link>
                  </Button>
                </div>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              {/* <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button> */}
              <RainbowButton asChild>
                <Link href="/dashboard">Dashboard</Link>
              </RainbowButton>
            </SignedIn>
          </div>
        </div>
        <div className="flex-1 max-w-lg">
          <Image
            src={"/demo.gif"}
            alt="demo"
            layout={"responsive"}
            width={155}
            height={155}
            unoptimized={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
