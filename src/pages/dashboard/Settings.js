import React from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Settings = () => {
  const theme = useTheme();
  return (
    <>
      <Stack direction="row" sx={{ width: "100%" }}>
        {/* left panel */}
        <Box
          sx={{
            overflowY: "scroll",
            height: "100vw",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? " #F8FAFF"
                : theme.palette.background,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* header */}
            {/* profile */}
            {/* list of options */}
          </Stack>
        </Box>

        {/* right panel */}
      </Stack>
    </>
  );
};

export default Settings;
