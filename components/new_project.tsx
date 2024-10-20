// import { Button } from "./ui/button";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogFooter,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "./ui/dialog";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { Textarea } from "./ui/textarea";
// import { Plus } from "lucide-react";
// import { createProject } from "@/actions/createProject";
// import SubmitButton from "./submit-proj-btn";
// import { Lock } from "lucide-react";

// type Props = {
//   canCreateNewProject: boolean;
//   maxFreeProjects: number;
// };

// const NewProjButton = ({ canCreateNewProject, maxFreeProjects }: Props) => {
//   return (
//     <div>
//       <Dialog>
//         <DialogTrigger asChild>
//           <Button className="rounded-full px-3">
//             <Plus className="w-4 h-4 mr-1" />
//             Create Project
//           </Button>
//         </DialogTrigger>
//         {canCreateNewProject ? (
//           <DialogContent className="sm:max-w-[425px] rounded-md">
//             <DialogHeader>
//               <DialogTitle>New project</DialogTitle>
//               <DialogDescription>
//                 Create a new project to get started
//               </DialogDescription>
//             </DialogHeader>
//             <form className="flex gap-4 flex-col" action={createProject}>
//               <div className="grid sm:grid-cols-2 gap-4">
//                 <div className="flex flex-col gap-2">
//                   <Label htmlFor="name">Name</Label>
//                   <Input id="name" name="name" placeholder="Project Name" />
//                 </div>
//                 <div className="flex flex-col gap-2">
//                   <Label htmlFor="url">URL</Label>
//                   <Input
//                     id="url"
//                     name="url"
//                     placeholder="https://example.com"
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <Label htmlFor="description">Description</Label>
//                 <Textarea
//                   name="description"
//                   id="description"
//                   placeholder="Description (optional)"
//                 />
//               </div>
//               <DialogFooter>
//                 <SubmitButton />
//               </DialogFooter>
//             </form>
//           </DialogContent>
//         ) : (
//           <DialogContent className="sm:max-w-[425px] rounded-md">
//             <DialogHeader>
//               <DialogTitle className="flex items-center">
//                 <Lock className="h-5 w-5 mr-2" />
//                 Project Limit Reached
//               </DialogTitle>
//               <DialogDescription>
//                 You have reached the maximum limit of {maxFreeProjects} free
//                 projects.
//               </DialogDescription>
//             </DialogHeader>
//             <div className="flex flex-col items-center gap-4 py-4">
//               <p className="text-center justify-center">
//                 Subscribe to our premium plan to create unlimited projects!
//               </p>
//             </div>
//           </DialogContent>
//         )}
//       </Dialog>
//     </div>
//   );
// };

// export default NewProjButton;

import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Plus } from "lucide-react";
import { createProject } from "@/actions/createProject";
import SubmitButton from "./submit-proj-btn";
import { Lock } from "lucide-react";
import ProjectCards from "./ProjectCards";

type Props = {
  canCreateNewProject: boolean;
  maxFreeProjects: number;
};

const NewProjButton = ({ canCreateNewProject, maxFreeProjects }: Props) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full px-3">
            <Plus className="w-4 h-4 mr-1" />
            Create Project
          </Button>
        </DialogTrigger>
        {canCreateNewProject ? (
          <DialogContent className="sm:max-w-[800px] rounded-md">
            <DialogHeader>
              <DialogTitle>New project</DialogTitle>
              <DialogDescription>
                Create a new project to get started
              </DialogDescription>
            </DialogHeader>
            <form className="flex gap-4 flex-col" action={createProject}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Project Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="url">URL</Label>
                  <Input
                    id="url"
                    name="url"
                    placeholder="https://example.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  name="description"
                  id="description"
                  placeholder="Description (optional)"
                />
              </div>
              <ProjectCards />

              <DialogFooter>
                <SubmitButton />
              </DialogFooter>
            </form>
          </DialogContent>
        ) : (
          <DialogContent className="sm:max-w-[425px] rounded-md">
            <DialogHeader>
              <DialogTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2" />
                Project Limit Reached
              </DialogTitle>
              <DialogDescription>
                You have reached the maximum limit of {maxFreeProjects} free
                projects.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
              <p className="text-center justify-center">
                Subscribe to our premium plan to create unlimited projects!
              </p>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};

export default NewProjButton;
