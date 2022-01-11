import {
  Button,
  Dialog,
  DialogActions,
  Divider,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import InputField from "../InputFields/InputField";
import SwitchButton from "../InputFields/SwitchButton";
import {
  Close,
  Email,
  Lock,
  Phone,
  Save,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { register, isAuthenticated } from "../API/api";
import AlertMessage from "../Alerts/Alert";


const UserDialog = ({ open, handleClose, loadUsers }) => {

  const {
    user,
  } = isAuthenticated();

  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    userType: "",
    error: "",
    success: false,
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setValues({
      ...values, error: false,
      [evt.target.name]: value
    });
  }

  const {
    username,
    password,
    email,
    phone,
    userType,
    error,
    success,
  } = values;

  const [successStatus, setSuccessStatus] = useState(false);

  const clickSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    values.parentId = user._id;
    register(user.token, values).then((data) => {
      console.log(data);
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
          userType: "",
          password: "",
          error: "",
          success: true,
        });
        handleClose();
        setSuccessStatus(true);
        loadUsers();
      }
    });
    setSuccessStatus(false);
  };

  const AddUserForm = () => {
    return (
      <Dialog
        open={open}
        onClose={() => handleClose()}
        fullWidth
        maxWidth="md"
        disableEscapeKeyDown="true"
        onBackdropClick="false"
      >
        <form method="POST">
          <div className="dialog-title">
            <h1 className="text-xl">Add User</h1>
            <IconButton onClick={() => handleClose()}>
              <Close className="text-white"></Close>
            </IconButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 px-5 mt-8">
            <InputField
              required={true}
              label={"Email"}
              type={"email"}
              name={'email'}
              value={values.email}
              onChange={handleChange}
              icon={<Email></Email>}
            ></InputField>

            <InputField
              label={"Phone"}
              type={"text"}
              name={'phone'}
              required={'required'}
              value={values.phone}
              onChange={handleChange}
              icon={<Phone></Phone>}
            ></InputField>

            <InputField
              label={"Username"}
              name="username"
              type={"text"}
              value={values.username}
              onChange={handleChange}
              icon={<AccountCircleOutlined></AccountCircleOutlined>}
            ></InputField>
            <InputField
              label={"Password"}
              name="password"
              type={"password"}
              value={values.password}
              onChange={handleChange}
              icon={<Lock></Lock>}
            ></InputField>
            <FormControl>
              <InputLabel id="type-select-label">User Type</InputLabel>
              <Select
                labelId="type-select-label"
                value={values.userType}
                name="userType"
                onChange={handleChange}
                label="User Type"
              >
                <MenuItem value="company"> Company </MenuItem>
                <MenuItem value="user"> User </MenuItem>
              </Select>
            </FormControl>
            <SwitchButton></SwitchButton>
          </div>
          <Divider sx={{ marginTop: "10px" }}></Divider>
          <DialogActions>
            <Button
              sx={{ color: "#424242" }}
              onClick={() => handleClose()}
              startIcon={<Close></Close>}
            >
              Cancel
            </Button>
            <Button
              onClick={clickSubmit}
              type="submit"
              variant="contained"
              endIcon={<Save></Save>}
            >
              Save
            </Button>
          </DialogActions>
        </form>


      </Dialog>
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

  // const showSuccess = () => (
  //   <div
  //     style={{ display: success ? "" : "none" }}
  //   >
  //     <Snackbar style={{ display: success ? "" : "none" }} autoHideDuration={2000}
  //       anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
  //       <Alert severity="success" sx={{ width: '100%' }}>
  //         User Added Successfully
  //       </Alert>
  //     </Snackbar>
  //   </div>

  // );

  return (
    <>
      {
        successStatus ? <AlertMessage message={"User Added Successfully"} severity={"success"} /> : ''
      }

      {
        error ? <AlertMessage message={error} severity={"error"} /> : ''
      }

      {/* {showError()} */}
      {/* {showSuccess()} */}
      {AddUserForm()}
    </>
  );
};

export default UserDialog;
