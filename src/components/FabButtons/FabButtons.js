import { Fab } from "@mui/material";
import { Add, Download, Publish, Print } from '@mui/icons-material'

const FabButtons = ({ handleClickOpen }) => {
    return (
        <div className="flex items-center space-x-2">
            <Fab color='primary' size='small' onClick={() => handleClickOpen()}>
                <Add></Add>
            </Fab>
            <Fab color='secondary' size='small'>
                <Download></Download>
            </Fab>
            <Fab style={{ background: '#2F4858' }} size='small'>
                <Publish className='text-white' />
            </Fab>
            <Fab style={{ background: '#718500' }} size='small'>
                <Print className='text-white' />
            </Fab>
        </div>
    );
}

export default FabButtons;