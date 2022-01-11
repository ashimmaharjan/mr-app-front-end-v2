import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import InputField from '../InputFields/InputField';
import SwitchButton from '../InputFields/SwitchButton';
import { Close, Save, AdminPanelSettings } from '@mui/icons-material';

const RolesDialog = ({ open, handleClose }) => {

    const permissions = [
        { id: 1, name: "create.user" },
        { id: 2, name: "create.doctor" },
        { id: 3, name: "create.stokiest" },
        { id: 4, name: "create.chemist" },
        { id: 5, name: "create.leave" },
        { id: 6, name: "create.products" },
    ]

    return (
        <section>
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='md' disableEscapeKeyDown="true" onBackdropClick="false">
                <div className='dialog-title'>
                    <h1 className='text-xl'>Add Role</h1>
                    <IconButton onClick={() => handleClose()}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'Role Name'} type={'text'} required={'required'} icon={<AdminPanelSettings />}></InputField>
                </div>
                {/* Permissions */}
                <div className='px-5 mt-5'>
                    <h2 className='text-lg'>Permissions :</h2>
                    <div className='h-72 overflow-y-auto'>
                        {permissions.map((permission) => (
                            <div key={permission.id} className="grid grid-cols-2 gap-x-5 gap-y-7 px-5 mt-2 py-2 border-2 items-center">
                                <div>
                                    <h6>{permission.name}</h6>
                                </div>
                                <div>
                                    <SwitchButton></SwitchButton>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <Divider sx={{ marginTop: '10px' }}></Divider>
                <DialogActions>
                    <Button sx={{ color: '#424242' }} onClick={() => handleClose()} startIcon={<Close></Close>}>
                        Cancel
                    </Button>
                    <Button variant='contained' endIcon={<Save></Save>}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </section>
    );
}

export default RolesDialog;