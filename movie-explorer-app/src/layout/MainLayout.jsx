import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(query);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <>
      <Navbar onSearch={setQuery} />
      <Outlet context={{ searchQuery }} />
    </>
  );
};

export default MainLayout;
