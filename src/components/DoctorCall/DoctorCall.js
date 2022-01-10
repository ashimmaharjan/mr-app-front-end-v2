import { DataGrid } from '@mui/x-data-grid';

import { useState } from 'react';
import { ContactPhone } from '@mui/icons-material';

import DoctorCallDialog from '../Dialogs/AddDoctorCall';
import FabButtons from '../FabButtons/FabButtons';

const DoctorCall = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: 'Date', width: 120 },
        { field: 'hospitalName', headerName: 'Hospital Name', width: 130 },
        { field: 'departmentName', headerName: 'Department', width: 130 },
        { field: 'doctorName', headerName: 'Doctor', width: 130 },
        { field: 'productName', headerName: 'Product', width: 130 },
        { field: 'productDetails', headerName: 'Description', width: 150 },
        { field: 'remarks', headerName: 'Remarks', width: 150 },
    ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <ContactPhone className='mb-0.5'></ContactPhone> Doctor Call</h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />

            <DoctorCallDialog open={open} handleClose={handleClose}></DoctorCallDialog>
        </div>
    );
}

export default DoctorCall;