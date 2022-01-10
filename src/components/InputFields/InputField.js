import { TextField, InputAdornment } from "@mui/material";

const InputField = (props) => {
  return (
    <div className="col-span-1">
      <TextField
        fullWidth
        required={props.required}
        label={props.label}
        type={props.type}
        name={props.name}
        onChange={props.onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{props.icon}</InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default InputField;
