import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import StokiestDialog from '../Dialogs/AddStokiest';
import FabButtons from '../FabButtons/FabButtons'
import { Inventory2 } from '@mui/icons-material';
import { isAuthenticated, listStockiest } from '../API/api';

const Stokiest = () => {

    const [stockiest, setStockiest] = useState([]);

    const { user } = isAuthenticated();
    const loadStockiest = () => {
        listStockiest(user.token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStockiest(data);

            }
        });
    };

    const headers = [
        { field: '_id', headerName: 'ID' },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'phone', headerName: 'Phone Number', width: 150 },
        { field: 'contact_person_number', headerName: 'Contact Number', width: 150 },
        { field: 'contact_person', headerName: 'Contact Person', width: 180 },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    // const stokiests = [
    //     { id: 1, name: 'Aashish Aryal', phoneNumber: '5562149', email: 'aashish@gmail.com', mobileNumber: '9876512341', address: 'Smakhusi', contactPerson: 'Null' },
    //     { id: 2, name: 'Sunil Aryal', phoneNumber: '5562148', email: 'sunil@gmail.com', mobileNumber: '9876512341', address: 'Maitidevi', contactPerson: 'Null' },
    //     { id: 3, name: 'Prakash Bista', phoneNumber: '5562147', email: 'prakash@gmail.com', mobileNumber: '9876512341', address: 'Surkhet', contactPerson: 'Null' },
    //     { id: 4, name: 'Nabin Adhikari', phoneNumber: '5562146', email: 'nabin@gmail.com', mobileNumber: '9876512341', address: 'Banepa', contactPerson: 'Null' },
    // ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        loadStockiest();
    }, [])
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <Inventory2 fontSize='large'></Inventory2> Stokiests</h1>
                <FabButtons handleClickOpen={handleClickOpen}></FabButtons>
            </div>

            <DataGrid getRowId={(r) => r._id} rows={stockiest} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <StokiestDialog open={open} handleClose={handleClose}></StokiestDialog>
        </div>
    );
}

export default Stokiest;