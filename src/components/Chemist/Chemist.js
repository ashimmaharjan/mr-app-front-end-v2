import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Science } from '@mui/icons-material';
import ChemistDialog from '../Dialogs/AddChemist';
import FabButtons from '../FabButtons/FabButtons';

import { isAuthenticated, listChemist } from '../API/api';

const Chemists = () => {

    const [chemist, setChemist] = useState([]);

    const { user } = isAuthenticated();
    const loadChemist = () => {
        listChemist(user.token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setChemist(data);

            }
        });
    };

    const headers = [
        { field: '_id', headerName: 'ID' },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'phone', headerName: 'Phone Number', width: 150 },
        { field: 'contact_person', headerName: 'Contact Person', width: 180 },
        { field: 'contact_person_number', headerName: 'Contact Number', width: 150 },
        { field: 'address', headerName: 'Address', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    // const chemists = [
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
        loadChemist();
    }, [])

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <Science fontSize='large'></Science> Chemists</h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid getRowId={(r) => r._id} rows={chemist} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <ChemistDialog open={open} handleClose={handleClose}></ChemistDialog>
        </div >
    );
}

export default Chemists;