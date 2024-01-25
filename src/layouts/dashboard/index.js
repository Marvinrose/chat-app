import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
const DashboardLayout = () => {
  const theme = useTheme();

  const [selected, setSelected] = useState(0);
  console.log(theme);
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: "100px",
        }}
      >
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          sx={{ height: "100%" }}
          spacing={3}
        >
          <Stack alignItems="center" spacing={4}>
            <Box
              sx={{
                backgroundColor: theme.palette.primary.main,
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
            >
              <img alt="logo" src={Logo}></img>
            </Box>
            <Stack
              spacing={3}
              sx={{ width: "max-content" }}
              direction="column"
              alignItems="center"
            >
              {Nav_Buttons.map((el) =>
                el.index === selected ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5,
                    }}
                  >
                    {" "}
                    <IconButton
                      key={el.index}
                      sx={{ width: "max-content", color: "#fff" }}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                ) : (
                  <IconButton
                    onClick={() => {
                      setSelected(el.index);
                    }}
                    key={el.index}
                    sx={{ width: "max-content", color: "#000" }}
                  >
                    {el.icon}
                  </IconButton>
                )
              )}
              <Divider sx={{ width: "48px" }} />
              {selected === 3 ? (
                <Box
                  p={1}
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton sx={{ color: "#fff" }}>
                    <Gear></Gear>
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(3);
                  }}
                  sx={{ color: "#000" }}
                >
                  <Gear></Gear>
                </IconButton>
              )}
            </Stack>
          </Stack>

          <Stack spacing={4}>
            <Switch defaultChecked />
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
