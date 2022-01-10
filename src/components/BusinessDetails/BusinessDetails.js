import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Business } from '@mui/icons-material';
import BusinessDetailsDialog from "../Dialogs/AddBusinessDetails";
import FabButtons from '../FabButtons/FabButtons';

const BusinessDetails = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: '70' },
        { field: 'doctorName', headerName: 'Doctor', width: 120 },
        { field: 'departmentName', headerName: 'Department', width: 150 },
        { field: 'hospitalName', headerName: 'Hospital', width: 130 },
        { field: 'productName', headerName: 'Product', width: 130 },
        { field: 'tentativeSales', headerName: 'Tentative Sales', width: 150 },
        { field: 'competitorActivities', headerName: 'Competitor Activities', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Business className='mb-1' fontSize='large'></Business> Dr. Business Details </h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <BusinessDetailsDialog open={open} handleClose={handleClose}></BusinessDetailsDialog>
        </div>
    );
}

export default BusinessDetails;