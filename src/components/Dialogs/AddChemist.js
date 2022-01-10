import { Save, Close, Email, TextFormat, Phone, PhoneAndroid, ContactPhone, Home } from "@mui/icons-material";
import { Button, Dialog, DialogActions, Divider, IconButton } from '@mui/material';
import { useState } from 'react';
import InputField from "../InputFields/InputField";
import SwitchButton from '../InputFields/SwitchButton';
import { isAuthenticated, addChemist } from "../API/api";

const ChemistDialog = ({ open, handleClose }) => {
    const {
        user,
    } = isAuthenticated();

    const [values, setValues] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        contact_person: "",
        contact_person_number: "",
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
        addChemist(user.token, values).then((data) => {
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
                    address: "",
                    contact_person: "",
                    contact_person_number: "",
                    error: "",
                    success: true,
                });
            }
        });
    };

    const AddChemistForm = () => {
        return (
            <Dialog open={open} onClose={() => handleClose()} fullWidth maxWidth='lg' disableEscapeKeyDown="true" onBackdropClick="false" >
                <div className='dialog-title'>
                    <h1 className='text-xl'>Add Chemist</h1>
                    <IconButton onClick={() => handleClose()}>
                        <Close className='text-white'></Close>
                    </IconButton>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 px-5 mt-8">
                    <InputField label={'Full Name'} type={'text'} required={true} name={"name"} value={values.name} onChange={handleChange} icon={<TextFormat></TextFormat>}></InputField>
                    <InputField label={'Email'} type={'email'} required={true} name={"email"} value={values.email} onChange={handleChange} icon={<Email></Email>}></InputField>
                    <InputField label={'Phone Number'} type={'number'} required={true} name={"phone"} value={values.phone} onChange={handleChange} icon={<Phone></Phone>}></InputField>
                    <InputField label={'Contact Person'} type={'text'} required={true} name={"contact_person"} value={values.contact_person} onChange={handleChange} icon={<ContactPhone></ContactPhone>}></InputField>
                    <InputField label={'Contact Person Phone Number'} type={'number'} name={"contact_person_number"} value={values.contact_person_number} onChange={handleChange} icon={<PhoneAndroid></PhoneAndroid>}></InputField>
                    <InputField label={'Address'} type={'text'} required={true} name={"address"} value={values.address} onChange={handleChange} icon={<Home></Home>}></InputField>
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

            Chemist Added
        </div>
    );


    return (
        <>
            {showError()}
            {showSuccess()}
            {AddChemistForm()}
        </>
    );
}

export default ChemistDialog;