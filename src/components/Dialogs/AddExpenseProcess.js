import { Save, Close, Event, TextFormat, Money, ReceiptLong } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton, styled, Select, FormControl, InputLabel, MenuItem } from '@mui/material';
import InputField from "../InputFields/InputField";
import { useState } from "react";

const ExpenseProcessDialog = ({ open, handleClose }) => {
    const Input = styled('input')(
        {
            display: 'none',
        }
    );

    const [status, setStatus] = useState('');

    const handleStatusSelect = (e) => {
        setStatus(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Expense Process</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Date'} type={'date'} required={'required'} icon={<Event></Event>}></InputField>
                <InputField label={'Expense Topic'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Amount'} type={'number'} required={'required'} icon={<Money></Money>}></InputField>
                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" />
                    <Button variant="outlined" sx={{ height: '56px' }} fullWidth component="span" startIcon={<ReceiptLong></ReceiptLong>}>
                        Upload Bill
                    </Button>
                </label>
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
                        <MenuItem value='Pending'> Pending </MenuItem>
                        <MenuItem value='Verified'> Verified </MenuItem>
                        <MenuItem value='Processing'> Processing </MenuItem>
                        <MenuItem value='Passed'> Passed </MenuItem>
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

export default ExpenseProcessDialog;