import { Delete } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const ConfirmDelete = ({ open, closeDeleteDialog }) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => closeDeleteDialog()}
        fullWidth
        maxWidth="xs"
      >
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent dividers>
          Are you sure you want to delete it?
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => closeDeleteDialog()}>
            Cancel
          </Button>
          <Button variant="contained" endIcon={<Delete />}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDelete;
