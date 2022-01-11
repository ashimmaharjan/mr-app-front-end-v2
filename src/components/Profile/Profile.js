import DummyDP from '../../images/myself.png'
import ProfileBg from '../../images/background-profile.jpg'
import { Edit, Email, Phone } from '@mui/icons-material';
import NotFoundGif from "../../images/not-found.gif"
import { useState } from 'react';
import UpdateProfileDialog from '../Dialogs/UpdateProfile';
import { IconButton } from '@mui/material';

const Profile = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <section className='text-gray-600 pb-10'>
            <div className="w-full h-52 bg-gray-200 rounded-xl shadow-md overflow-hidden">
                <img src={ProfileBg} className='w-full h-52 object-cover' alt="" />
            </div>

            <div className="w-[95%] p-4 profile-floating-div rounded-2xl mx-auto flex
             justify-between h-auto items-center space-x-5 -mt-16 z-50 shadow-lg">
                {/* Name and Image */}
                <div className='flex items-center space-x-5'>
                    <div className="w-20 h-20 rounded-xl shadow-md bg-gray-400 overflow-hidden">
                        <img src={DummyDP} className='w-20 h-20 object-scale-down' alt="" />
                    </div>
                    <div className="text-sm">
                        <h2 className='text-lg font-semibold'>Nabin Adhikari</h2>
                        <p className='text-gray-400'>Company User</p>
                    </div>
                </div>

                <div className='flex items-center space-x-5 text-sm'>
                    <a href=""><p><Phone fontSize='small' /> 9812456122</p></a>
                    <a href=""> <p><Email fontSize='small' /> nabinadhikari@gmail.com</p></a>
                </div>
            </div>

            <div className='mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-7 gap-5'>
                <div className='col-span-1 h-auto p-4 pb-10 bg-white rounded-xl shadow'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold'>Personal Information</h2>
                        <div>
                            <IconButton onClick={() => handleOpen()}>
                                <Edit fontSize='small' className='cursor-pointer text-gray-400' />
                            </IconButton>
                        </div>
                    </div>

                    {/* Details */}
                    <div className='mt-5 space-y-3 text-sm'>
                        <p><b>First Name:</b> Nabin </p>
                        <p><b>Middle Name:</b> null </p>
                        <p><b>Last Name:</b> Adkhikari </p>
                        <p><b>Date of Birth:</b> 5th June, 1998 </p>
                        <p><b>Address:</b> Mid-Baneshwor, Kathmandu </p>
                    </div>
                </div>

                <div className='col-span-1 h-auto p-4 pb-10 bg-white rounded-xl shadow'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold'>Other Information</h2>

                        <Edit fontSize='small' className='cursor-pointer text-gray-400' />
                    </div>

                    {/* Details */}
                    <div className='mt-5 space-y-3 tracking-wide text-sm'>
                        <img src={NotFoundGif} className='w-full h-40 object-contain' alt="" />
                    </div>
                </div>

                <div className='col-span-1 h-auto p-4 pb-10 bg-white rounded-xl shadow'>
                    <div className='flex items-center justify-between'>
                        <h2 className='font-semibold'>Other Information</h2>

                        <Edit fontSize='small' className='cursor-pointer text-gray-400' />
                    </div>

                    {/* Details */}
                    <div className='mt-5 space-y-3 tracking-wide text-sm'>
                        <img src={NotFoundGif} className='w-full h-40 object-contain' alt="" />
                    </div>
                </div>
            </div>

            <UpdateProfileDialog open={open} handleClose={handleClose} />

        </section>
    );
}

export default Profile;