import React from "react";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { faker } from "@faker-js/faker";
import {
  CaretDown,
  LinkSimple,
  MagnifyingGlass,
  PaperPlaneTilt,
  Phone,
  Smiley,
  VideoCamera,
} from "phosphor-react";

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
      <Box
        p={2}
        sx={{
          background: "#F8FAFF",
          width: "100%",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          alignItems={"center"}
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Stack direction={"row"} spacing={2}>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              {" "}
              <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
            </StyledBadge>

            <Stack spacing={0.2}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Typography variant="caption">Online</Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <IconButton>
              <VideoCamera />
            </IconButton>
            <IconButton>
              <Phone />
            </IconButton>
            <IconButton>
              <MagnifyingGlass />
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton>
              <CaretDown />
            </IconButton>
          </Stack>
        </Stack>
      </Box>
      {/* msg */}
      <Box sx={{ flexGrow: 1, width: "100%" }}></Box>
      {/* chat footer */}
      <Box
        p={2}
        sx={{
          background: "#F8FAFF",

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
              borderRadius: "1.5px",
            }}
          >
            <IconButton>
              <PaperPlaneTilt />
            </IconButton>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Conversation;
