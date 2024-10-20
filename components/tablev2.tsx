// "use client";

// import * as React from "react";
// import {
//   ChevronRight,
//   Database,
//   Menu,
//   ChevronLeft,
//   ChevronsLeft,
//   ChevronsRight,
// } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarHeader,
//   SidebarInset,
//   SidebarMenu,
//   SidebarMenuItem,
//   SidebarMenuButton,
//   SidebarProvider,
//   SidebarTrigger,
// } from "@/components/ui/sidebar";

// // Sample data for tables
// const tables = ["users", "projects", "comments", "ratings"];

// type UserData = {
//   id: number;
//   project_id: number;
//   user_name: string;
//   user_email: string;
//   message: string;
//   rating: number;
// };

// // Sample data for the users table
// const usersData: UserData[] = [
//   {
//     id: 1,
//     project_id: 1,
//     user_name: "yap",
//     user_email: "test@gmail.com",
//     message: "testing 4",
//     rating: 3,
//   },
//   {
//     id: 2,
//     project_id: 1,
//     user_name: "yap",
//     user_email: "test@gmail.com",
//     message: "testing 2",
//     rating: 3,
//   },
//   {
//     id: 3,
//     project_id: 1,
//     user_name: "yaper",
//     user_email: "test@gmail.com",
//     message: "testing 1",
//     rating: 2,
//   },
//   {
//     id: 4,
//     project_id: 1,
//     user_name: "yaper",
//     user_email: "test@gmail.com",
//     message: "testing 6",
//     rating: 5,
//   },
//   {
//     id: 5,
//     project_id: 1,
//     user_name: "yaper",
//     user_email: "test@gmail.com",
//     message: "testing 7",
//     rating: 1,
//   },
//   // Add more sample data to test pagination
//   ...Array.from({ length: 20 }, (_, i) => ({
//     id: i + 6,
//     project_id: 1,
//     user_name: `user${i + 6}`,
//     user_email: `user${i + 6}@example.com`,
//     message: `message ${i + 6}`,
//     rating: Math.floor(Math.random() * 5) + 1,
//   })),
// ];

// export default function DatabaseViewer() {
//   const [selectedTable, setSelectedTable] = React.useState("users");
//   const [searchTerm, setSearchTerm] = React.useState("");
//   const [filteredData, setFilteredData] = React.useState(usersData);
//   const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
//   const [currentPage, setCurrentPage] = React.useState(1);
//   const [itemsPerPage, setItemsPerPage] = React.useState(10);
//   const [goToPage, setGoToPage] = React.useState("");

//   React.useEffect(() => {
//     const lowercasedFilter = searchTerm.toLowerCase();
//     const filteredResults = usersData.filter((item) =>
//       Object.keys(item).some((key) =>
//         item[key as keyof UserData]
//           .toString()
//           .toLowerCase()
//           .includes(lowercasedFilter)
//       )
//     );
//     setFilteredData(filteredResults);
//     setCurrentPage(1);
//   }, [searchTerm]);

//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchTerm(event.target.value);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarVisible(!isSidebarVisible);
//   };

//   const totalPages = Math.ceil(filteredData.length / itemsPerPage);
//   const pageData = filteredData.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   const handlePageChange = (page: number) => {
//     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
//   };

//   const handleItemsPerPageChange = (value: string) => {
//     setItemsPerPage(Number(value));
//     setCurrentPage(1);
//   };

//   const handleGoToPage = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     const page = Number(goToPage);
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//     setGoToPage("");
//   };

//   return (
//     <SidebarProvider>
//       <div className="flex h-screen">
//         <Sidebar
//           className={`border-r transition-all duration-300 ease-in-out ${
//             isSidebarVisible ? "w-64" : "w-0"
//           }`}
//         >
//           <SidebarHeader>
//             <div className="flex items-center gap-2 px-4 py-2">
//               <Database className="h-6 w-6" />
//               <span className="font-semibold">Database Tables</span>
//             </div>
//           </SidebarHeader>
//           <SidebarContent>
//             <SidebarMenu>
//               {tables.map((table) => (
//                 <SidebarMenuItem key={table}>
//                   <SidebarMenuButton
//                     onClick={() => setSelectedTable(table)}
//                     isActive={selectedTable === table}
//                   >
//                     {table}
//                     <ChevronRight className="ml-auto h-4 w-4" />
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarContent>
//         </Sidebar>
//         <SidebarInset
//           className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
//             isSidebarVisible ? "" : "ml-0"
//           }`}
//         >
//           <div className="flex h-16 items-center justify-between border-b px-4">
//             <div className="flex items-center gap-2">
//               <SidebarTrigger onClick={toggleSidebar}>
//                 <Menu />
//               </SidebarTrigger>
//               <h1 className="text-lg font-semibold">{selectedTable}</h1>
//             </div>
//             <div className="flex items-center gap-2">
//               <Label htmlFor="search" className="sr-only">
//                 Search
//               </Label>
//               <Input
//                 id="search"
//                 placeholder={`Search ${selectedTable}...`}
//                 className="w-64"
//                 value={searchTerm}
//                 onChange={handleSearch}
//               />
//               <Button variant="outline">Filter</Button>
//               <Button variant="outline">Sort</Button>
//             </div>
//           </div>
//           <div className="flex-1 overflow-auto p-4">
//             <TableView data={pageData} />
//           </div>
//           <div className="border-t p-4">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center space-x-2">
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePageChange(1)}
//                   disabled={currentPage === 1}
//                 >
//                   <ChevronsLeft className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                 >
//                   <ChevronLeft className="h-4 w-4" />
//                 </Button>
//                 <span className="text-sm">
//                   Page {currentPage} of {totalPages}
//                 </span>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                 >
//                   <ChevronRight className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   variant="outline"
//                   size="icon"
//                   onClick={() => handlePageChange(totalPages)}
//                   disabled={currentPage === totalPages}
//                 >
//                   <ChevronsRight className="h-4 w-4" />
//                 </Button>
//               </div>
//               <form
//                 onSubmit={handleGoToPage}
//                 className="flex items-center space-x-2"
//               >
//                 <span className="text-sm">Go to page:</span>
//                 <Input
//                   type="number"
//                   min="1"
//                   max={totalPages}
//                   value={goToPage}
//                   onChange={(e) => setGoToPage(e.target.value)}
//                   className="w-16"
//                 />
//                 <Button type="submit" variant="outline" size="sm">
//                   Go
//                 </Button>
//               </form>
//               <div className="flex items-center space-x-2">
//                 <span className="text-sm">Show:</span>
//                 <Select
//                   value={itemsPerPage.toString()}
//                   onValueChange={handleItemsPerPageChange}
//                 >
//                   <SelectTrigger className="w-[70px]">
//                     <SelectValue placeholder="10" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="5">5</SelectItem>
//                     <SelectItem value="10">10</SelectItem>
//                     <SelectItem value="20">20</SelectItem>
//                     <SelectItem value="50">50</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>
//           </div>
//         </SidebarInset>
//       </div>
//     </SidebarProvider>
//   );
// }

// function TableView({ data }: { data: any[] }) {
//   if (!data || data.length === 0) {
//     return <div>No data available</div>;
//   }

//   const columns = Object.keys(data[0]);

//   return (
//     <div className="overflow-x-auto">
//       <table className="w-full border-collapse">
//         <thead>
//           <tr className="bg-muted">
//             {columns.map((column) => (
//               <th key={column} className="border p-2 text-left">
//                 {column}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, index) => (
//             <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
//               {columns.map((column) => (
//                 <td
//                   key={column}
//                   className="border p-2 overflow-hidden text-ellipsis whitespace-nowrap"
//                 >
//                   {row[column]}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

"use client";

import * as React from "react";
import {
  ChevronRight,
  Database,
  Menu,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

// Sample data for tables
const tables = ["feedbacks"];

type FeedbackData = {
  id: number;
  project_id: number;
  user_name: string;
  user_email: string;
  message: string;
  rating: number;
};

export default function DatabaseViewer({
  feedbacks,
}: {
  feedbacks: FeedbackData[];
}) {
  const [selectedTable, setSelectedTable] = React.useState("feedbacks");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredData, setFilteredData] = React.useState(feedbacks);
  const [isSidebarVisible, setIsSidebarVisible] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [itemsPerPage, setItemsPerPage] = React.useState(10);
  const [goToPage, setGoToPage] = React.useState("");

  React.useEffect(() => {
    const lowercasedFilter = searchTerm.toLowerCase();
    const filteredResults = feedbacks.filter((item) =>
      Object.keys(item).some((key) =>
        item[key as keyof FeedbackData]
          .toString()
          .toLowerCase()
          .includes(lowercasedFilter)
      )
    );
    setFilteredData(filteredResults);
    setCurrentPage(1);
  }, [searchTerm, feedbacks]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const pageData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const handleItemsPerPageChange = (value: string) => {
    setItemsPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleGoToPage = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const page = Number(goToPage);
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
    setGoToPage("");
  };

  return (
    <SidebarProvider>
      <div className="flex h-full">
        <Sidebar
          className={`border-r transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "w-64" : "w-0"
          }`}
        >
          <SidebarHeader>
            <div className="flex items-center gap-2 px-4 py-2">
              <Database className="h-6 w-6" />
              <span className="font-semibold">Feedback Data</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {tables.map((table) => (
                <SidebarMenuItem key={table}>
                  <SidebarMenuButton
                    onClick={() => setSelectedTable(table)}
                    isActive={selectedTable === table}
                  >
                    {table}
                    <ChevronRight className="ml-auto h-4 w-4" />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        <SidebarInset
          className={`flex flex-col flex-1 transition-all duration-300 ease-in-out ${
            isSidebarVisible ? "" : "ml-0"
          }`}
        >
          <div className="flex h-16 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger onClick={toggleSidebar}>
                <Menu />
              </SidebarTrigger>
              <h1 className="text-lg font-semibold">{selectedTable}</h1>
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <Input
                id="search"
                placeholder={`Search ${selectedTable}...`}
                className="w-64"
                value={searchTerm}
                onChange={handleSearch}
              />
              <Button variant="outline">Filter</Button>
              <Button variant="outline">Sort</Button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <TableView data={pageData} />
          </div>
          {/* Pagination controls */}
          <div className="border-t p-4">
            {/* ... pagination controls ... */}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

function TableView({ data }: { data: FeedbackData[] }) {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-muted">
            {columns.map((column) => (
              <th key={column} className="border p-2 text-left">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-muted/50" : ""}>
              {columns.map((column) => (
                <td
                  key={column}
                  className="border p-2 overflow-hidden text-ellipsis whitespace-nowrap"
                >
                  {row[column as keyof FeedbackData]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
