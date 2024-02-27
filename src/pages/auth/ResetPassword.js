import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h3" paragraph>
        Forgot your password
      </Typography>
      <Typography sx={{ color: "text.secondary", mb: 5 }} paragraph>
        Please enter the email address associated with your account and we will
        email you a link to reset your password.
      </Typography>
      {/* Reset password form */}
      <Link component={RouterLink} to={""}></Link>
    </Stack>
  );
};

export default ResetPassword;
