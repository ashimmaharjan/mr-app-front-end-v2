import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";

const AlertMessage = ({ message, severity }) => {

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
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                variant="success"
                onClose={handleClose}
                className="mt-14"
            >
                <Alert onClose={handleClose}
                    severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </div>

    );
}

export default AlertMessage;