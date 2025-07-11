import { useState, useEffect } from "react";
import MUI from "./components/MUI";
import Radix from "./components/Radix";
import SidebarMUI from "./components/SidebarMUI";
import TailwindPra from "./components/TailwindPra";
import Accordian from "./components/Accordian";

// search, filter by role, sort, pagination, accordian

const users = [
  { id: 1, name: "rutu koladiya", role: "admin" },
  { id: 2, name: "pinal korat", role: "user" },
  { id: 3, name: "bansi gajera", role: "user" },
  { id: 4, name: "janki kansagra", role: "admin" },
  { id: 5, name: "mahima gandhi", role: "user" },
];

// let totalData = users.length;
// let limit = 2;
// let pages = Math.ceil(totalData / limit);

// for (let page = 1; page <= pages; page++) {
//   const startIndex = (page - 1) * limit; // 0 // 2 //4
//   const endIndex = page * limit; // 2 //4

//   const data = users.slice(startIndex, endIndex);
//   console.log(`Page ${page}:`, data);
// }

// console.log(totalData, limit, pages);

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeHandler = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [role, setRole] = useState("all");
  const [sortName, setSortName] = useState("ASC");
  const [currentPage, setCurremtPage] = useState(1);
  const limit = 2;

  const filterData = users.filter((user) => {
    const isSearchMatch = user.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const isRoleMatch = role === "all" ? true : role === user?.role;
    return isSearchMatch && isRoleMatch;
  });

  const sortedData = [...filterData].sort((a, b) =>
    sortName === "ASC"
      ? a.name.localeCompare(b.name)
      : b.name.localeCompare(a.name)
  );                            

  const totalPages = Math.ceil(sortedData.length / limit);
  const startIndex = (currentPage - 1) * limit;
  const endIndex = currentPage * limit;
  const paginatedData = sortedData.slice(startIndex, endIndex);

  useEffect(() => {
    setCurremtPage(1);
  }, [searchQuery, role, sortName]);

  return (
    <div>
      <Accordian />
    </div>
    // <div
    //   className={`flex flex-col space-y-4 m-2 ${
    //     theme === "dark" ? "bg-black text-white" : "bg-white text-black"
    //   }`}
    // >
    //   <button onClick={themeHandler}>Toggle theme</button>
    //   <input
    //     placeholder="search..."
    //     value={searchQuery}
    //     onChange={(e) => setSearchQuery(e.target.value)}
    //     className="border p-2 w-1/6 rounded-md focus:ring-none"
    //   />
    //   <select
    //     className="border p-2 w-1/6 rounded-md focus:ring-none"
    //     onChange={(e) => setRole(e.target.value)}
    //   >
    //     <option value="all">All</option>
    //     <option value="user">User</option>
    //     <option value="admin">Admin</option>
    //   </select>

    //   <select
    //     className="border p-2 w-1/6 rounded-md focus:ring-none"
    //     onChange={(e) => setSortName(e.target.value)}
    //   >
    //     <option value="ASC">Ascending</option>
    //     <option value="DEC">Decending</option>
    //   </select>

    //   {paginatedData.length === 0 && <p>No users found.</p>}

    //   <ul>
    //     {paginatedData?.map((user) => (
    //       <li key={user?.id}>
    //         {user?.name} - ({user?.role})
    //       </li>
    //     ))}
    //   </ul>

    //   <div className="flex gap-4 items-center mt-4">
    //     <button
    //       onClick={() => setCurremtPage((prev) => prev - 1)}
    //       disabled={currentPage === 1}
    //       className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    //     >
    //       Prev
    //     </button>
    //     {[...Array(totalPages)].map((_, idx) => {
    //       const pageNum = idx + 1;
    //       return (
    //         <button
    //           key={pageNum}
    //           onClick={() => setCurremtPage(pageNum)}
    //           className={`px-3 py-1 rounded ${
    //             currentPage === pageNum
    //               ? "bg-blue-500 text-white"
    //               : "bg-gray-200"
    //           }`}
    //         >
    //           {pageNum}
    //         </button>
    //       );
    //     })}
    //     <button
    //       onClick={() => setCurremtPage((prev) => prev + 1)}
    //       disabled={currentPage === totalPages}
    //       className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    //     >
    //       Next
    //     </button>
    //   </div>

    //   {/* <TailwindPra /> */}
    //   {/* <Radix /> */}
    //   {/* <MUI /> */}
    //   {/* <SidebarMUI /> */}
    // </div>
  );
}

export default App;
