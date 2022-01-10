import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const NavList = ({ title, icon, link }) => {

    return (
        <div className="nav-list">
            <Link to={link}>
                <ListItemButton>
                    <ListItemIcon color='primary'>
                        {icon}
                    </ListItemIcon>
                    <ListItemText>{title}</ListItemText>
                </ListItemButton>
            </Link>

        </div>
    );
}

export default NavList;