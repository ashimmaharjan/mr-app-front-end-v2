import { Save, Close, MedicationLiquid, Inbox, Badge } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import { useState } from "react";
import InputField from "../InputFields/InputField";


const TargetProductDialog = ({ open, handleClose }) => {

    const [status, setStatus] = useState('');

    const handleStatusSelect = (e) => {
        setStatus(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='md' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Major Product Target</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField type={'text'} label={'Medicine Name'} required={'required'} icon={<MedicationLiquid></MedicationLiquid>}></InputField>
                <InputField type={'number'} label={'Boxes Per Month'} required={'required'} icon={<Inbox></Inbox>}></InputField>
                <InputField type={'text'} label={'Major Prescriber'} required={'required'} icon={<Badge></Badge>}></InputField>
                <FormControl>
                    <InputLabel id="status-select-label">Status</InputLabel>
                    <Select
                        required="true"
                        labelId="status-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Status"
                        onChange={handleStatusSelect}
                    >
                        <MenuItem value='Unavilable'> Unavailable </MenuItem>
                        <MenuItem value='Available'> Available </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <Divider sx={{ marginTop: '10px' }}></Divider>
            <DialogActions>
                <Button variant='text' sx={{ color: '#424242' }} onClick={() => handleClose()} startIcon={<Close></Close>}>
                    Cancel
                </Button>
                <Button variant='contained' endIcon={<Save></Save>}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TargetProductDialog;