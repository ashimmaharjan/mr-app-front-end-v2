import { Save, Close, Event, MedicationLiquid, AllInbox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import InputField from "../InputFields/InputField";
import { useState } from "react";

const MonthlySaleDialog = ({ open, handleClose }) => {

    const [type, setType] = useState('');

    const handleTypeSelect = (e) => {
        setType(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='md' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Monthly Sale</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Date'} type={'date'} required={'required'} icon={<Event></Event>}></InputField>
                <FormControl>
                    <InputLabel id="type-select-label">Sales Of</InputLabel>
                    <Select
                        required="true"
                        labelId="type-select-label"
                        value={type}
                        label="Sales Of"
                        onChange={handleTypeSelect}
                    >
                        <MenuItem value='Stokiest'> Stokiest </MenuItem>
                        <MenuItem value='Chemist'> Chemist </MenuItem>
                    </Select>
                </FormControl>
                <InputField label={'Medicine Name'} type={'text'} required={'required'} icon={<MedicationLiquid></MedicationLiquid>}></InputField>
                <InputField label={'No. of Boxes'} type={'number'} required={'required'} icon={<AllInbox></AllInbox>}></InputField>
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
        </Dialog >
    );
}

export default MonthlySaleDialog;