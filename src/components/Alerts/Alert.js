import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const AlertMessage = ({ message, severity, style }) => {
  const [open, setOpen] = useState(true);

  function handleClose(event, reason) {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  }

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        variant="success"
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={severity}
          sx={{ width: "100%" }}
          variant="filled"
        >
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AlertMessage;
