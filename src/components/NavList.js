import { Link } from 'react-router-dom';
import { ListItemIcon, ListItemButton, ListItemText, makeStyles, ListItem } from '@mui/material';
import { useLocation } from "react-router-dom";
import { style } from '@mui/system';

const NavList = ({ title, icon, link }) => {
    const location = useLocation();

    let CustomListItem = ({ title, icon, to }) => (
        <ListItem button component={Link} to={to} selected={to === location.pathname}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText>{title}</ListItemText>
        </ListItem>
    )

    return (
        <div className="nav-list">
            <CustomListItem title={title} icon={icon} to={link}></CustomListItem>
        </div >
    );
}

export default NavList;