"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CreditCard, Folder, Menu } from "lucide-react";
import Link from "next/link";

function HeaderMenu() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="p-2 hover:bg-gray-100 rounded-md">
          <Menu className="h-6 w-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href="/dashboard" className="flex">
              <Folder className="h-4 w-4 mr-2" />
              <span>Projects</span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer" asChild>
            <Link href="/payments" className="flex">
              <CreditCard className="h-4 w-4 mr-2" />
              <span>Billing</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}

export default HeaderMenu;
