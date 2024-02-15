import React, { useState } from "react";
import {
  Box,
  Fab,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import {
  Camera,
  File,
  Image,
  LinkSimple,
  PaperPlaneTilt,
  Smiley,
  Sticker,
  User,
} from "phosphor-react";
import { styled, useTheme } from "@mui/material/styles";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

const Actions = [
  {
    color: "#4da5fe",
    icon: <Image size={24} />,
    y: 102,
    title: "Photo/Video",
  },
  {
    color: "#1b8cfe",
    icon: <Sticker size={24} />,
    y: 172,
    title: "Stickers",
  },
  {
    color: "#0172e4",
    icon: <Camera size={24} />,
    y: 242,
    title: "Image",
  },
  {
    color: "#0159b2",
    icon: <File size={24} />,
    y: 312,
    title: "Document",
  },
  {
    color: "#013f7f",
    icon: <User size={24} />,
    y: 382,
    title: "Contact",
  },
];

const StyledInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-input": {
    paddingTop: "12px !important",
    paddingBottom: "12px !important",
  },
}));

const ChatInput = ({ setOpenPicker }) => {
  return (
    <StyledInput
      variant="filled"
      fullWidth
      placeholder="Write a message..."
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <Stack sx={{ width: "max-content" }}>
            <Stack sx={{ position: "relative" }}>
              {Actions.map((el) => (
                <Tooltip  title={el.title} placement="right" >
                  <Fab
                    sx={{
                      position: "absolute",
                      top: -el.y,
                      backgroundColor: el.color,
                    }}
                  >
                    {el.icon}
                  </Fab>
                </Tooltip>
              ))}
            </Stack>
            <InputAdornment>
              <IconButton>
                <LinkSimple />
              </IconButton>
            </InputAdornment>
          </Stack>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton
              onClick={() => {
                setOpenPicker((prev) => !prev);
              }}
            >
              <Smiley />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const Footer = () => {
  const theme = useTheme();
  const [openPicker, setOpenPicker] = useState(false);
  return (
    <Box
      p={2}
      sx={{
        background:
          theme.palette.mode === "light"
            ? " #F8FAFF"
            : theme.palette.background.default,
        width: "100%",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack alignItems={"center"} direction={"row"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          {/* Chat Input */}
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              position: "fixed",
              zIndex: 10,
              bottom: 81,
              right: 100,
            }}
          >
            <Picker
              theme={theme.palette.mode}
              data={data}
              onEmojiSelect={console.log}
            />
          </Box>

          <ChatInput setOpenPicker={setOpenPicker} />
        </Stack>

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
  );
};

export default Footer;
