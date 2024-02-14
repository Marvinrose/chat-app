import React from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Outlet } from "react-router-dom";

import SideBar from "./SideBar";

const DashboardLayout = () => {
  const theme = useTheme();

  console.log(theme);
  return (
    <>
      <Stack direction="row">
        {/* SideBar */}
        <SideBar />
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
