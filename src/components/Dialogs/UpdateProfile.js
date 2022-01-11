import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Button } from "@mui/material";
import { Cake, Close, Email, Home, Phone, Save, TextFormat } from '@mui/icons-material'
import InputField from "../InputFields/InputField";

const UpdateProfileDialog = ({ open, handleClose }) => {
    return (
        <section>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='sm' disableEscapeKeyDown="true" onBackdropClick="false">
                <DialogTitle color="primary" className="primary px-0 relative" style={{ backgroundColor: '#f50057', color: 'white' }}>
                    Update Profile
                    <IconButton onClick={() => handleClose()}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                        }}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </DialogTitle>
                <DialogContent dividers>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <InputField type={"text"} label={"First Name"} required={"required"} icon={<TextFormat />}></InputField>
                        <InputField type={"text"} label={"Middle Name"} icon={<TextFormat />}></InputField>
                        <InputField type={"text"} label={"Last Name"} required={"required"} icon={<TextFormat />}></InputField>
                        <InputField type={"text"} label={"Email"} required={"required"} icon={<Email />}></InputField>
                        <InputField type={"number"} label={"Phone"} required={"required"} icon={<Phone />}></InputField>
                        <InputField type={"text"} label={"Address"} required={"required"} icon={<Home />}></InputField>
                        <InputField type={"date"} label={"Date of Birth"} icon={<Cake />}></InputField>
                    </div>
                </DialogContent>

                <DialogActions>
                    <Button variant="text" onClick={() => handleClose()}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" startIcon={<Save />}>
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}

export default UpdateProfileDialog;