import { Save, Close, Event, TextFormat } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import InputField from "../InputFields/InputField";
import TextArea from "../InputFields/TextAreas";

const LeaveApplicationDialog = ({ open, handleClose }) => {
    return (
        <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false">
            <div className='dialog-title'>
                <h1 className='text-xl'>Leave Application</h1>
                <IconButton onClick={() => handleClose()}>
                    <Close className='text-white'></Close>
                </IconButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                <InputField label={'Full Name'} type={'text'} required={'required'} icon={<TextFormat></TextFormat>}></InputField>
                <InputField label={'Start Date'} type={'date'} required={'required'} icon={<Event></Event>}></InputField>
                <InputField label={'End Date'} type={'date'} required={'required'} icon={<Event></Event>}></InputField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5 px-5 mt-7">
                <TextArea label={'Subject'}></TextArea>
                <TextArea label={'Reason'}></TextArea>
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

export default LeaveApplicationDialog;