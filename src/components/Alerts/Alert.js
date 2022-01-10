import { Close } from "@mui/icons-material";
import { IconButton, Snackbar } from "@mui/material";
import { useState } from "react";

const AlertMessage = ({ message }) => {

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
                message={message}
                variant="success"
                onClose={handleClose}
                action={[
                    <IconButton key="close" onClick={handleClose}>
                        <Close className="text-white" />
                    </IconButton>
                ]}
                ContentProps={{
                    sx: {
                        background: "#0980C5"
                    }
                }}
            >

            </Snackbar>
        </div>

    );
}

export default AlertMessage;