import React from "react";
import { Route, Switch } from 'react-router-dom'

import Users from './UserManagement/Users'
import RolesAndPermissions from "./UserManagement/RolesAndPermissions";
import Stokiest from './Stokiest/Stokiest';
import Chemists from './Chemist/Chemist';
import Doctor from './Doctor/Doctors';
import DailyCallReport from './DailyCallReport/DailyCallReport';
import DoctorCall from './DoctorCall/DoctorCall';
import ExpenseProcess from './ExpenseProcess/ExpenseProcess';
import MonthlySale from './MonthlySale/MonthlySale';
import TargetProduct from './TargetProduct/TargetProduct';
import LeaveApplication from './LeaveApplication/LeaveApplication';
import CRM from './CustomerRelationManagement/CRM';
import BusinessDetails from './BusinessDetails/BusinessDetails';
import Profile from "./Profile/Profile";

import MyAppBar from "./AppBar";
import NavigationDrawer from "./NavigationDrawer";
import Dashboard from "./Dashboard";

const AdminLayout = () => {
    return (
        <section>
            <MyAppBar />
            <div className="flex">
                <div className="navigation-drawer">
                    <NavigationDrawer />
                </div>
                <div className="content rounded-tl-xl p-4">
                    <Route path="/adminDashboard" component={Dashboard}></Route>
                    <Switch>
                        <Route path="/users" component={Users}></Route>
                        <Route path="/rolesAndPermissions" component={RolesAndPermissions}></Route>
                        <Route path="/stokiest" component={Stokiest}></Route>
                        <Route path="/chemist" component={Chemists}></Route>
                        <Route path="/doctor" component={Doctor}></Route>
                        <Route path="/dailyCallReport" component={DailyCallReport}></Route>
                        <Route path="/doctorCall" component={DoctorCall}></Route>
                        <Route path="/expenseProcess" component={ExpenseProcess}></Route>
                        <Route path="/monthlySale" component={MonthlySale}></Route>
                        <Route path="/targetProduct" component={TargetProduct}></Route>
                        <Route path="/leaveApplication" component={LeaveApplication}></Route>
                        <Route path="/crm" component={CRM}></Route>
                        <Route path="/businessDetails" component={BusinessDetails}></Route>
                        <Route path="/profile" component={Profile}></Route>
                    </Switch>
                </div>
            </div>
        </section>
    );
}

export default AdminLayout;