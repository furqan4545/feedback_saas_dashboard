// import { InferSelectModel } from "drizzle-orm";
// import { projects } from "@/db/schema";
// import {
//   Card,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Lock } from "lucide-react";
// import SubscribeBtn from "../payments/subscribe-btn";
// import { monthlyPlanId } from "@/lib/payments";

// type Project = InferSelectModel<typeof projects>;

// type Props = {
//   projects: Project[];
// };

// const ProjectsList = (props: Props) => {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
//       <ul className="grid grid-cols-1 md:grid-cols-3 m-5 mt-3 p-4 gap-4">
//         {props.projects.map((project: Project) => (
//           <li key={project.id}>
//             <Card className="max-w-[350px] flex flex-col h-full">
//               <CardHeader className="flex-1">
//                 <CardTitle>{project.name}</CardTitle>
//                 <CardDescription>{project.description}</CardDescription>
//               </CardHeader>
//               <CardFooter>
//                 <Link href={`/projects/${project.id}`}>
//                   <Button>View Project</Button>
//                 </Link>
//               </CardFooter>
//             </Card>
//           </li>
//         ))}

//         <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
//           <CardHeader className="flex-1">
//             <CardTitle className="flex flex-row text-sm md:text-lg items-center">
//               <Lock className="h-4 w-4 md:h-8 md:w-8 mr-2" />
//               <span>Upgrade to Premium</span>
//             </CardTitle>
//             <CardDescription className="mt-3">
//               Unlock unlimited projects
//             </CardDescription>
//           </CardHeader>
//           <div className="w-fit mx-auto mb-4">
//             <SubscribeBtn price={monthlyPlanId} />
//           </div>
//         </Card>
//       </ul>
//     </div>
//   );
// };
// export default ProjectsList;

"use client";
import { InferSelectModel } from "drizzle-orm";
import { projects } from "@/db/schema";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lock, Trash2 } from "lucide-react";
import SubscribeBtn from "../payments/subscribe-btn";
import { monthlyPlanId } from "@/lib/payments";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { deleteProject } from "@/actions/deleteProject";

type Project = InferSelectModel<typeof projects>;

type Props = {
  projects: Project[];
};

const ProjectsList = (props: Props) => {
  const [projectList, setProjectList] = useState<Project[]>(props.projects);
  const { toast } = useToast();

  const handleDelete = async (projectId: string) => {
    try {
      const result = await deleteProject(projectId);

      if (result.success) {
        setProjectList(
          projectList.filter((project) => project.id !== parseInt(projectId))
        );
        toast({
          title: "Project deleted",
          description: "The project has been successfully deleted.",
        });
      } else {
        throw new Error(result.error || "Failed to delete project");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
      toast({
        title: "Error",
        description: "Failed to delete the project. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-4">Your Projects</h1>
      <ul className="grid grid-cols-1 md:grid-cols-3 m-5 mt-3 p-4 gap-4">
        {projectList.map((project: Project) => (
          <li key={project.id}>
            <Card className="max-w-[350px] flex flex-col h-full">
              <CardHeader className="flex-1">
                <CardTitle>{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-between">
                <Link href={`/projects/${project.id}`}>
                  <Button>View Project</Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(project.id.toString())}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </li>
        ))}

        <Card className="max-w-[350px] flex flex-col h-full bg-gray-300">
          <CardHeader className="flex-1">
            <CardTitle className="flex flex-row text-sm md:text-lg items-center">
              <Lock className="h-4 w-4 md:h-8 md:w-8 mr-2" />
              <span>Upgrade to Premium</span>
            </CardTitle>
            <CardDescription className="mt-3">
              Unlock unlimited projects
            </CardDescription>
          </CardHeader>
          <div className="w-fit mx-auto mb-4">
            <SubscribeBtn price={monthlyPlanId} />
          </div>
        </Card>
      </ul>
    </div>
  );
};

export default ProjectsList;
