import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useState } from 'react';

import FabButtons from '../FabButtons/FabButtons';
import { AdminPanelSettings } from '@mui/icons-material';
import RolesDialog from '../Dialogs/AddRole';

const RolesAndPermissions = () => {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'role', headerName: 'Role Name', width: 150 },
        { field: 'permissions', headerName: 'Permissions', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];

    return (
        <section>
            <div style={{ height: '400px', width: '100%' }}>
                <div className="flex justify-between items-center">
                    <Typography variant='h5' className='uppercase'>
                        <AdminPanelSettings fontSize='large' className='mb-1' /> Roles & Permissions
                    </Typography>

                    <FabButtons handleClickOpen={handleClickOpen} />
                </div>
                <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
                <RolesDialog open={open} handleClose={handleClose} />
            </div>
        </section>
    );
}

export default RolesAndPermissions;