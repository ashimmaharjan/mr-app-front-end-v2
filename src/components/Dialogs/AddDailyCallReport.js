import { Save, Close, TextFormat, CalendarToday, Inbox } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import InputField from "../InputFields/InputField";
import TextArea from "../InputFields/TextAreas";
import { useState } from 'react';

const DailyCallReportDialog = ({ open, handleClose }) => {

    const [type, setType] = useState('');

    const handleTypeSelect = (e) => {
        setType(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Daily Call Report</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <FormControl>
                    <InputLabel id="type-select-label">Type</InputLabel>
                    <Select
                        required="true"
                        labelId="type-select-label"
                        value={type}
                        label="Type"
                        onChange={handleTypeSelect}
                    >
                        <MenuItem value='Stokiest'> Stokiest </MenuItem>
                        <MenuItem value='Chemist'> Chemist </MenuItem>
                    </Select>
                </FormControl>
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Date'} type={'date'} required={'required'} icon={<CalendarToday></CalendarToday>}></InputField>
                <InputField label={'Product'} type={'text'} required={'required'} icon={<Inbox></Inbox>}></InputField>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 px-5 mt-7">
                <TextArea label={'Product Details'}></TextArea>
                <TextArea label={'Description'}></TextArea>
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

export default DailyCallReportDialog;