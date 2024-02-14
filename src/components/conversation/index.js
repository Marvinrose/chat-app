import React from "react";
import {
  Badge,
  Box,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import Header from "./Header";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack sx={{ height: "100vh", maxHeight: "100vh", width: "auto" }}>
      {/* chat header */}
      <Header />
      {/* msg */}
      <Box sx={{ flexGrow: 1, width: "100%" }}></Box>
      {/* chat footer */}
      <Box
        p={2}
        sx={{
          background:
            theme.palette.mode === "light"
              ? " #F8FAFF"
              : theme.palette.background.paper,
          width: "100%",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack alignItems={"center"} direction={"row"} spacing={3}>
          <StyledInput
            variant="filled"
            fullWidth
            placeholder="Write a message..."
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment>
                  <IconButton>
                    <LinkSimple />
                  </IconButton>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <Smiley />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 48,
              width: 48,
              borderRadius: 1.5,
            }}
          >
            <Stack
              sx={{ width: "100%", height: "100%" }}
              alignItems="center"
              justifyContent="center"
            >
              <IconButton>
                <PaperPlaneTilt color="#fff" />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
