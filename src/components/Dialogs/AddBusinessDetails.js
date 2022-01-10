import { Save, Close, TextFormat, Apartment, LocalHospital, Inbox, Paid, Attractions } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';

import InputField from "../InputFields/InputField";

const BusinessDetailsDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Dr. Business Details</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Department Name'} type={'text'} required={'required'} icon={<Apartment></Apartment>}></InputField>
                <InputField label={'Hospital Name'} type={'text'} required={'required'} icon={<LocalHospital></LocalHospital>}></InputField>
                <InputField label={'Product Name'} type={'text'} required={'required'} icon={<Inbox></Inbox>}></InputField>
                <InputField label={'Tentative Sales'} type={'number'} required={'required'} icon={<Paid></Paid>}></InputField>
                <InputField label={'Competitor Activities'} type={'text'} icon={<Attractions></Attractions>}></InputField>
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

export default BusinessDetailsDialog;