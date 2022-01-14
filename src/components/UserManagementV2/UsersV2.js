import { DataGrid } from "@mui/x-data-grid";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";

import FabButtons from "../FabButtons/FabButtons";
import {
  Delete,
  Edit,
  RemoveRedEye,
  SupervisedUserCircle,
  Close,
  Email,
  Lock,
  Phone,
  Save,
  AccountCircleOutlined,
} from "@mui/icons-material";
import { allUsers } from "../API/api";
import DialogComponent from "../DialogComponent/DialogComponent";
import InputField from "../InputFields/InputField";
import SwitchButton from "../InputFields/SwitchButton";
import { register, isAuthenticated } from "../API/api";
import AlertMessage from "../Alerts/Alert";

const UsersV2 = () => {
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

  const { user } = isAuthenticated();

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
      ...values,
      error: false,
      [evt.target.name]: value,
    });
  }

  const { error } = values;

  const [successStatus, setSuccessStatus] = useState(false);

  const headers = [
    { field: "_id", headerName: "ID", width: 80 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 180 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "status", headerName: "Status", width: 100 },
    { field: "createdAt", headerName: "Created At", width: 150 },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <div className="flex justify-center w-full">
              <IconButton size="small">
                <RemoveRedEye
                  fontSize="inherit"
                  className="text-blue-600"
                ></RemoveRedEye>
              </IconButton>
              <IconButton size="small">
                <Edit
                  fontSize="inherit"
                  className="text-green-600"
                  onClick={() => openEditDialog()}
                ></Edit>
              </IconButton>
              <IconButton size="small" onClick={() => openDeleteDialog()}>
                <Delete fontSize="inherit" className="text-red-600"></Delete>
              </IconButton>
            </div>
          </>
        );
      },
    },
  ];

  useEffect(() => {
    loadUsers();
  }, []);

  const [addDialog, setAddDialog] = useState(false);

  const openAddDialog = () => {
    setAddDialog(true);
  };

  const closeAddDialog = () => {
    setAddDialog(false);
  };

  const [editDialog, setEditDialog] = useState(false);

  const openEditDialog = () => {
    setEditDialog(true);
  };

  const closeEditDialog = () => {
    setEditDialog(false);
  };

  const [deleteDialog, setdeleteDialog] = useState(false);

  const openDeleteDialog = () => {
    setdeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setdeleteDialog(false);
  };

  const addDialogContent = () => {
    return (
      <form method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 p-5">
          <InputField
            required={true}
            label={"Email"}
            type={"email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            icon={<Email></Email>}
          ></InputField>

          <InputField
            label={"Phone"}
            type={"text"}
            name={"phone"}
            required={"required"}
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
      </form>
    );
  };

  const editDialogContent = () => {
    return (
      <form method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 p-5">
          <InputField
            required={true}
            label={"Email"}
            type={"email"}
            name={"email"}
            value={values.email}
            onChange={handleChange}
            icon={<Email></Email>}
          ></InputField>

          <InputField
            label={"Phone"}
            type={"text"}
            name={"phone"}
            required={"required"}
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
      </form>
    );
  };

  const deleteDialogContent = () => {
    return <div>Are you sure you want to delete it?</div>;
  };

  const handleAdd = (event) => {
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
        closeAddDialog();
        setSuccessStatus(true);
        loadUsers();
      }
    });
    setSuccessStatus(false);
  };

  const HandleUser = () => {
    return (
      <div style={{ height: "450px", width: "100%" }}>
        <div className="flex justify-between items-center">
          <Typography className="uppercase" variant="h5">
            <SupervisedUserCircle fontSize="large"></SupervisedUserCircle> Users
            Version 2
          </Typography>

          <FabButtons handleClickOpen={openAddDialog} />
        </div>
        <DataGrid
          checkboxSelection
          getRowId={(r) => r._id}
          rows={users}
          columns={headers}
          style={{
            borderWidth: "2px",
            borderRadius: "12px",
            marginTop: "10px",
            background: "#ffffff",
          }}
        />

        <DialogComponent
          openState={addDialog}
          title={"Add User"}
          dialogContent={addDialogContent}
          handleClose={closeAddDialog}
          handleAction={handleAdd}
          maxWidth={"md"}
        ></DialogComponent>

        <DialogComponent
          openState={editDialog}
          title={"Edit User"}
          dialogContent={editDialogContent}
          handleClose={closeEditDialog}
          maxWidth={"md"}
        ></DialogComponent>

        <DialogComponent
          openState={deleteDialog}
          title={"Delete User"}
          dialogContent={deleteDialogContent}
          handleClose={closeDeleteDialog}
          maxWidth={"sm"}
        ></DialogComponent>
      </div>
    );
  };

  return (
    <>
      {HandleUser()}
      {successStatus ? (
        <AlertMessage
          message={"User Added Successfully"}
          severity={"success"}
        />
      ) : (
        ""
      )}

      {error ? (
        <AlertMessage
          message={error}
          severity={"error"}
          style={{ background: "#f44336", color: "#ffffff" }}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default UsersV2;
