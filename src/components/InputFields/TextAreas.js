import { TextField } from '@mui/material'

import { Info } from "@mui/icons-material";

const TextArea = ({ label }) => {
    return (
        <TextField
            multiline
            rows={5}
            fullWidth
            label={label}
            type='text'
        >

        </TextField>
    );
}

export default TextArea;