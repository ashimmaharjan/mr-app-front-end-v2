import { useState } from "react";

import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';

import { AdminPanelSettings, SupervisedUserCircle, ManageAccounts, AllInbox, Category, Inbox, Medication, Inventory2, Science, Masks, Flight, PhoneCallback, LocalAtm, Paid, TrackChanges, Article, SupportAgent, Business, Timelapse, ContactPhone, Dashboard, Analytics } from '@mui/icons-material';

import NavList from "./NavList";

const NavigationDrawer = () => {
    const [UMDrawer, setUMDrawer] = useState(false);
    const [ProductsDrawer, setProductsDrawer] = useState(false);
    const [DataEntryDrawer, setDataEntryDrawer] = useState(false);

    const openUserManagement = () => {
        setUMDrawer(!UMDrawer);
    };

    const openProducts = () => {
        setProductsDrawer(!ProductsDrawer);
    };

    const openDataEntry = () => {
        setDataEntryDrawer(!DataEntryDrawer);
    };

    return (
        <div className="px-2">
            <div className="nav-list-wapper border rounded-xl bg-white p-1">
                <List sx={{ fontSize: 'body2' }}>
                    <NavList title={'Dashboard'} icon={<Dashboard />} link={'/adminDashboard'}> </NavList>
                    <ListItemButton onClick={openUserManagement} sx={{ borderLeft: "20px" }}>
                        <ListItemIcon>
                            <ManageAccounts></ManageAccounts>
                        </ListItemIcon>
                        <ListItemText primary="User Management"></ListItemText>
                        {UMDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={UMDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            <NavList title={'Users'} icon={<SupervisedUserCircle />} link={'/users'}> </NavList>
                            <NavList title={'Roles & Permissions'} icon={<AdminPanelSettings />} link={'/rolesAndPermissions'}> </NavList>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={openProducts} sx={{ borderLeft: "20px" }}>
                        <ListItemIcon>
                            <AllInbox />
                        </ListItemIcon>
                        <ListItemText primary="Products"></ListItemText>
                        {ProductsDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={ProductsDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Category />
                                </ListItemIcon>
                                <ListItemText primary="Category" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Medication />
                                </ListItemIcon>
                                <ListItemText primary="Medicine Generic" />
                            </ListItemButton>
                            <ListItemButton>
                                <ListItemIcon >
                                    <Inbox />
                                </ListItemIcon>
                                <ListItemText primary="Product" />
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <NavList title={'Stokiest'} icon={<Inventory2 />} link={'/stokiest'}> </NavList>
                    <NavList title={'Chemist'} icon={<Science />} link={'/chemist'}> </NavList>
                    <NavList title={'Doctor'} icon={<Masks />} link={'/doctor'}> </NavList>

                    <ListItemButton onClick={openDataEntry} sx={{ borderLeft: "20px" }}>
                        <ListItemIcon>
                            <Analytics />
                        </ListItemIcon>
                        <ListItemText primary="MR Data Entry"></ListItemText>
                        {DataEntryDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={DataEntryDrawer} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ pl: 2 }}>
                            <NavList title={'Daily Call Report'} icon={<PhoneCallback />} link={'/dailyCallReport'}> </NavList>
                            <NavList title={'Doctor Call'} icon={<ContactPhone />} link={'/doctorCall'}> </NavList>
                            <NavList title={'Expense Process'} icon={<LocalAtm />} link={'/expenseProcess'}> </NavList>
                            <NavList title={'Sale (Monthly)'} icon={<Paid />} link={'/monthlySale'}> </NavList>
                            <NavList title={'Major Product Target'} icon={<TrackChanges />} link={'/targetProduct'}> </NavList>
                            <NavList title={'Leave Application'} icon={<Article />} link={'/leaveApplication'}> </NavList>
                            <NavList title={'Dr. Service Request'} icon={<SupportAgent />} link={'/crm'}> </NavList>
                            <NavList title={'Dr. Business Details'} icon={<Business />} link={'/businessDetails'}> </NavList>
                            <NavList title={'Product Expiry'} icon={<Timelapse />}> </NavList >
                            <NavList title={'Tour Program'} icon={<Flight />}> </NavList>
                        </List>
                    </Collapse>
                </List>
            </div>

        </div >
    );
}

export default NavigationDrawer;