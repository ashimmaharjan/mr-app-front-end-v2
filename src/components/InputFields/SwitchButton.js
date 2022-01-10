import { FormControlLabel, FormGroup, Switch } from "@mui/material";

const SwitchButton = () => {
    return (
        <div>
            <FormGroup>
                <FormControlLabel control={<Switch></Switch>} label="Status"></FormControlLabel>
            </FormGroup>
        </div>
    );
}

export default SwitchButton;