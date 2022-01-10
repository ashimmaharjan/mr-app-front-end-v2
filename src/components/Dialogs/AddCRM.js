import { Save, Close, TextFormat, Inventory2, AddComment } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton, FormControl, Select, MenuItem, InputLabel } from '@mui/material';

import InputField from "../InputFields/InputField";
import { useState } from 'react';

const CRMDialog = ({ open, handleClose }) => {

    const [type, setType] = useState('');

    const handleTypeSelect = (e) => {
        setType(e.target.value);
    }

    const [input, setInput] = useState('');

    const handleInputSelect = (e) => {
        setInput(e.target.value);
    }

    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='md' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Customer Relation Management</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <FormControl>
                    <InputLabel id="type-select-label">User Type</InputLabel>
                    <Select
                        required="true"
                        labelId="type-select-label"
                        value={type}
                        label="User Type"
                        onChange={handleTypeSelect}
                    >
                        <MenuItem value='Stokiest'> Stokiest </MenuItem>
                        <MenuItem value='Chemist'> Chemist </MenuItem>
                        <MenuItem value='Doctor'> Doctor </MenuItem>
                    </Select>
                </FormControl>
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <FormControl>
                    <InputLabel id="inputs-select-label">Input Type</InputLabel>
                    <Select
                        required="true"
                        labelId="inputs-select-label"
                        value={input}
                        label="Input Type"
                        onChange={handleInputSelect}
                    >
                        <MenuItem value='Gift'> Gift </MenuItem>
                        <MenuItem value='Sample Medicine'> Sample Medicine </MenuItem>
                    </Select>
                </FormControl>
                <InputField label={'Input Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Quantity'} type={'number'} required={'required'} icon={<Inventory2></Inventory2>}></InputField>
                <InputField label={'Remarks'} type={'text'} icon={<AddComment></AddComment>}></InputField>
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

export default CRMDialog;