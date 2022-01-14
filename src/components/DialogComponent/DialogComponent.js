import { ArrowForward, Close } from "@mui/icons-material";
import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
} from "@mui/material";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const DialogComponent = ({
  openState,
  maxWidth,
  title,
  dialogContent,
  handleClose,
  handleAction,
}) => {
  return (
    <div>
      <Dialog
        open={openState}
        TransitionComponent={Transition}
        fullWidth
        maxWidth={maxWidth}
        disableEscapeKeyDown
        onClose={() => handleClose()}
      >
        <DialogTitle style={{ backgroundColor: "#f50057", color: "white" }}>
          {title}
          {handleClose ? (
            <IconButton
              aria-label="close"
              onClick={() => handleClose()}
              sx={{
                position: "absolute",
                right: 8,
                top: 12,
                color: (theme) => theme.palette.grey[100],
              }}
            >
              <Close />
            </IconButton>
          ) : null}
        </DialogTitle>
        <DialogContent dividers>{dialogContent()}</DialogContent>

        <DialogActions>
          <Button variant="text" onClick={() => handleClose()}>
            Cancel
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => handleAction()}
            endIcon={<ArrowForward className="-mt-0.5" />}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogComponent;
