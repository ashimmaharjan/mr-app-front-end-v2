
import { DataGrid } from '@mui/x-data-grid';
import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import FabButtons from '../FabButtons/FabButtons';
import { SupervisedUserCircle } from '@mui/icons-material';
import UserDialog from '../Dialogs/AddUser';
import { allUsers } from '../API/api';

const Users = () => {

    //const [fetched, setFetched] = useState(false);
    const [users, setUsers] = useState([]);

    const loadUsers = () => {
        allUsers().then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                setUsers(data);

            }
        });
    };

    const headers = [
        { field: '_id', headerName: 'ID', width: 80 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'phone', headerName: 'Phone', width: 150 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'createdAt', headerName: 'Created At', width: 150 },
        { field: 'actions', headerName: 'Actions', width: 150 },
    ];


    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        loadUsers();
    }, [])

    return (
        <div style={{ height: '400px', width: '100%' }}>
            <div className="flex justify-between items-center">
                <Typography variant='h4'>
                    <SupervisedUserCircle fontSize='large' className='mb-1' /> Users
                </Typography>

                <FabButtons handleClickOpen={handleClickOpen} />
            </div>
            <DataGrid getRowId={(r) => r._id} rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <UserDialog open={open} handleClose={handleClose} />
        </div>
    );
}

export default Users;
