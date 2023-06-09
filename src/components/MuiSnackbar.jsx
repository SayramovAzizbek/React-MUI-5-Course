import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClose = (evt, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      <Snackbar
        message="Form submitted successfully!"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      />
    </>
  );
};

export default MuiSnackbar;
