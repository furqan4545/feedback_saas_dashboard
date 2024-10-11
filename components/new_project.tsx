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

const NewProjButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full px-3">
            <Plus className="w-4 h-4 mr-1" />
            Create Project
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] rounded-md">
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
                <Input id="url" name="url" placeholder="https://example.com" />
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
            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewProjButton;
