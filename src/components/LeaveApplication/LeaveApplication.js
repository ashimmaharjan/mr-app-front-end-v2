import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { Article } from '@mui/icons-material';
import LeaveApplicationDialog from '../Dialogs/AddLeaveApplication';
import FabButtons from '../FabButtons/FabButtons';

const LeaveApplication = () => {

    const headers = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'subject', headerName: 'Subject', width: 200 },
        { field: 'reason', headerName: 'Reason', width: 200 },
        { field: 'startDate', headerName: 'Start Date', width: 150 },
        { field: 'endDate', headerName: 'End Date', width: 200 },
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
                <h1 className="text-2xl uppercase"> <Article className='mb-0.5'></Article> Leave Application</h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <LeaveApplicationDialog open={open} handleClose={handleClose}></LeaveApplicationDialog>
        </div>
    );
}

export default LeaveApplication;