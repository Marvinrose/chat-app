import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CircleDashed } from "phosphor-react";
import React from "react";

const Chats = () => {
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: 320,
          backgroundColor: "#F8FAFF",
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
      </Box>
    </div>
  );
};

export default Chats;
