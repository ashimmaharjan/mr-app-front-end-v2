import { Save, Close, Email, TextFormat, Phone, School, Badge, Apartment } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import { useState } from 'react';
import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';

import { isAuthenticated, addDoctor } from "../API/api";

const DoctorDialog = ({ open, handleClose }) => {



    const {
        user,
    } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        department: "",
        qualification: "",
        post: "",
        error: "",
        success: false,
    });

    const {
        error,
        success,
    } = values;


    function handleChange(evt) {
        const value =
            evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
        setValues({
            ...values, error: false,
            [evt.target.name]: value
        });
    }

    const clickSubmit = (event) => {
        event.preventDefault();
        setValues({ ...values, error: false });
        values.createdBy = user._id;
        addDoctor(user.token, values).then((data) => {
            if (data.error) {
                setValues({
                    ...values,
                    error: data.error,
                    success: false,
                });
            } else {
                setValues({
                    ...values,
                    name: "",
                    email: "",
                    phone: "",
                    qualification: "",
                    department: "",
                    post: "",
                    error: "",
                    success: true,
                });
            }
        });
    };
    const AddDoctorForm = () => {
        return (
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false" >
                <div className='dialog-title'>
                    <h1 className='text-xl'>Add Doctor</h1>
                    <IconButton onClick={() => handleClose()}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'Full Name'} type={'text'} required={'required'} name={"name"} value={values.name} onChange={handleChange} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Department'} type={'text'} required={'required'} name={"department"} value={values.department} onChange={handleChange} icon={<Apartment></Apartment>}></InputField>
                    <InputField label={'Qualification'} type={'text'} required={'required'} name={"qualification"} value={values.qualification} onChange={handleChange} icon={<School></School>}></InputField>
                    <InputField label={'Post'} type={'email'} required={'required'} name={"post"} value={values.post} onChange={handleChange} icon={<Badge></Badge>}></InputField>
                    <InputField label={'Email'} type={'email'} required={'required'} name={"email"} value={values.email} onChange={handleChange} icon={<Email></Email>}></InputField>
                    <InputField label={'Phone Number'} type={'number'} required={'required'} name={"phone"} value={values.name} onChange={handleChange} icon={<Phone></Phone>}></InputField>
                    <SwitchButton></SwitchButton>
                </div>
                <Divider sx={{ marginTop: '10px' }}></Divider>
                <DialogActions>
                    <Button variant='text' sx={{ color: '#424242' }} onClick={() => handleClose()} startIcon={<Close></Close>}>
                        Cancel
                    </Button>
                    <Button onClick={clickSubmit}
                        type="submit" variant='contained' endIcon={<Save></Save>}>
                        Save
                    </Button>
                </DialogActions>
            </Dialog >
        );
    };
    const showError = () => (
        <div
            className="flex alert alert-danger justify-center items-center bg-red-500 text-white py-1"
            style={{ display: error ? "" : "none" }}
        >
            {error}
        </div>
    );

    const showSuccess = () => (
        <div
            className="flex alert alert-info justify-center items-center bg-green-500 text-white py-1"
            style={{ display: success ? "" : "none" }}
        >
            Doctor Added
        </div>
    );


    return (
        <>
            {showError()}
            {showSuccess()}
            {AddDoctorForm()}
        </>
    );
}

export default DoctorDialog;