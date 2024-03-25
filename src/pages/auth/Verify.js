import { Stack, Typography } from "@mui/material";
import React from "react";
import VerifyForm from "../../sections/auth/VerifyForm";
import { useSelector } from "react-redux";

const Verify = () => {
  const { email } = useSelector((state) => state.auth);
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h4">Please verify OTP</Typography>
      <Stack direction={"row"} spacing={0.5}>
        <Typography variant="body2">
          Sent to email <span style={{ fontWeight: "bolder" }}> {email} </span>
        </Typography>
      </Stack>
      {/* verify form */}
      <VerifyForm />
    </Stack>
  );
};

export default Verify;
