import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Paid } from '@mui/icons-material';
import MonthlySaleDialog from '../Dialogs/AddMonthlySale';
import FabButtons from '../FabButtons/FabButtons';

const MonthlySale = () => {
    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'date', headerName: 'Date', width: 150 },
        { field: 'type', headerName: 'Stokiest/Chemist', width: 200 },
        { field: 'medicineName', headerName: 'Medicine Name', width: 250 },
        { field: 'boxesNumber', headerName: 'No. of Boxes', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Paid className='mb-0.5'></Paid> Monthly Sale</h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <MonthlySaleDialog open={open} handleClose={handleClose}></MonthlySaleDialog>
        </div>
    );
}

export default MonthlySale;