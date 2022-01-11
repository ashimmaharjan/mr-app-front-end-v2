
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Typography } from '@mui/material';
import { useState, useEffect } from 'react';

import FabButtons from '../FabButtons/FabButtons';
import { Delete, Edit, RemoveRedEye, SupervisedUserCircle } from '@mui/icons-material';
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
        { field: 'status', headerName: 'Status', width: 100 },
        { field: 'createdAt', headerName: 'Created At', width: 150 },
        {
            field: 'actions', headerName: 'Actions', width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <div className='flex justify-center w-full'>
                            <IconButton size='small'>
                                <RemoveRedEye fontSize='inherit' className='text-blue-600'></RemoveRedEye>
                            </IconButton>
                            <IconButton size='small'>
                                <Edit fontSize='inherit' className='text-green-600'></Edit>
                            </IconButton>
                            <IconButton size='small'>
                                <Delete fontSize='inherit' className='text-red-600'></Delete>
                            </IconButton>
                        </div>
                    </>
                );
            }
        },
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
        <div style={{ height: '90%', width: '100%' }}>
            <div className="flex justify-between items-center">
                <Typography className='uppercase' variant='h5'>
                    <SupervisedUserCircle fontSize='large'></SupervisedUserCircle> Users
                </Typography>

                <FabButtons handleClickOpen={handleClickOpen} />
            </div>
            <DataGrid checkboxSelection getRowId={(r) => r._id} rows={users} columns={headers} style={{ borderWidth: '2px', borderRadius: '12px', marginTop: '10px', background: '#ffffff' }} />
            <UserDialog open={open} loadUsers={loadUsers} handleClose={handleClose} />
        </div>
    );
}

export default Users;
