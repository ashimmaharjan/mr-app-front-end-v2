import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import { Masks } from '@mui/icons-material';
import DoctorDialog from '../Dialogs/AddDoctor';
import FabButtons from '../FabButtons/FabButtons';
import { isAuthenticated, listDoctors } from '../API/api';

const Doctor = () => {

    const [doctor, setDoctor] = useState([]);

    const { user } = isAuthenticated();
    const loadDoctors = () => {
        listDoctors(user.token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setDoctor(data);

            }
        });
    };

    const headers = [
        { field: '_id', headerName: 'ID', width: 80 },
        { field: 'name', headerName: 'Full Name', width: 150 },
        { field: 'department', headerName: 'Department', width: 150 },
        { field: 'qualification', headerName: 'Qualification', width: 150 },
        { field: 'post', headerName: 'Post', width: 150 },
        { field: 'phone', headerName: 'Phone Number', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'status', headerName: 'Status', width: 150 },
    ];

    // const doctors = [
    //     { id: 1, name: 'Aashish Aryal', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'aashish@gmail.com', },
    //     { id: 2, name: 'Sunil Aryal', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'sunil@gmail.com', },
    //     { id: 3, name: 'Prakash Bista', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'prakash@gmail.com', },
    //     { id: 4, name: 'Nabin Adhikari', department: 'ENT Department', qualification: 'MBBS', 'post': 'Surgeon', phoneNumber: '9876512341', email: 'nabin@gmail.com', },

    // ];

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        loadDoctors();
    }, [])
    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl uppercase"> <Masks fontSize='large'></Masks> Doctors</h1>
                <FabButtons handleClickOpen={handleClickOpen} />
            </div>

            <DataGrid getRowId={(r) => r._id} rows={doctor} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <DoctorDialog open={open} handleClose={handleClose}></DoctorDialog>

        </div >
    );
}

export default Doctor;