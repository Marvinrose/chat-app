import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  console.log(theme);
  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
        }}
      >
        <Box sx={{ backgroundColor: theme.palette.background.paper }}></Box>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
