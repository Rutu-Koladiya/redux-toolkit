import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  const [serachQuery, setSearchQuery] = useState("");
  console.log(serachQuery);
  
  const location = useLocation();
  return (
    <Box>
      <Navbar onSearch={setSearchQuery} />
      <Outlet context={{ serachQuery }} />
    </Box>
  );
};

export default MainLayout;
