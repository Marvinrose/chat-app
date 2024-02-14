import React from "react";
import { Divider, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Timeline = ({ el }) => {
  const theme = useTheme();
  return (
    <Stack
      alignItems="center"
      direction={"row"}
      justifyContent={"space-between"}
    >
      <Divider width="46%" />
      <Typography variant="caption" sx={{ color: theme.palette.text }}>
        {el.text}
      </Typography>
      <Divider width="46%" />
    </Stack>
  );
};

export { Timeline };
