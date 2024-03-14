import React from "react";
import { Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Navigate, Outlet } from "react-router-dom";

import SideBar from "./SideBar";
import { useSelector } from "react-redux";

const DashboardLayout = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const theme = useTheme();

  console.log(theme);

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
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
