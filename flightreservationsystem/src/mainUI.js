import Footer from "./footer";
import Header from "./header";
import Signin from "./signin";
import { Link, Route, Switch, useLocation } from 'react-router-dom';
import Home from "./home";
import Contact from "./contact";
import AboutUs from "./aboutus";
import Complaints from "./complaints";
import UpdatePassword from "./updatepassword";
import UserDashboard from "./userdashboard";
import Register from "./register";
import CrmDashboard from "./crmdashboard";
import ProtectedRoute from "./protectedroute";
import CrmProfile from "./crmprofile";
import CrmBookings from "./crmbookings";
import CrmComplaints from "./crmcomplaints";
import CrmFeedbacks from "./crmfeedbacks";
import FinalTicket from "./finalticket";
import ListOfFlights from "./listofflights";
import DashboardAdmin from "./DashboardAdmin";
import FlightList from "./flightList";
import AddPassenger from "./addPassenger";
import PassengerDetails from "./passengerdetails";
import BookTicket from "./bookTicket";
import ShowUserDetails from "./showuserdetails";
import ShowFeedbackListToUser from "./showfeedbacklisttouser";
import ShowComplaintListToUser from "./showcomplaintlisttouser";
import UpdateUserProfile from "./updateuserprofile";
import ShowTicketsToUser from "./showticketstouser";
import AddFeedbackByUser from "./addfeedbackbyuser";
import AddComplaintByUser from "./addcomplaintbyuser";
import CrmUpdateProfile from "./crmupdateprofile";
import StatChange from "./statusChng";
import DashboardFlightAdmin from "./DashboardFlightAdmin";
import FlightAdminDashboard from "./FlightAdminDashboard";

import Flights from './Flights'
import Meals from './Meals'
import Planes from './Planes'

import UpdatePlane from "./UpdatePlane";
import UpdateMeal from "./UpdateMeal";
import Addflight from "./Addflight";
import Updateflight from "./UpdateFlight";
import ProtectedHeader from "./protectedheader";
function MainUI() {
    var location = useLocation();
    
    return ( <div>
                <ProtectedHeader></ProtectedHeader>
                <Switch>
                    {/* for flight admin */}
                   
        <Route path='/flights' exact  component={Flights} />
        <Route path='/meals' exact component={Meals}/>
        <Route path='/planes' exact component={Planes}/>
        <Route path='/updateplane' exact component={UpdatePlane}/>
        <Route path='/updatemeal' exact component={UpdateMeal}/>
        <Route path='/addflight' exact component={Addflight}/>
        <Route path='/updateflight' exact component={Updateflight}/>
    


                    <Route path='/' exact component={Home}/>
                    <Route path='/home' exact component={Home}/>
                    <Route path='/contact' exact component={Contact}/>
                    <Route path='/aboutus' exact component={AboutUs}/>
                    <Route path='/complaints' exact component={Complaints}/>
                    <Route path='/updatepassword' exact component={UpdatePassword}/>
                    <Route path='/userdashboard' exact component={UserDashboard}/>
                    <Route path='/crmdashboard' exact component={CrmDashboard}/>
                    <Route path='/signin' exact component={Signin}/>
                    <Route path='/register' exact component={Register}/>
                    <Route path='/finalticket' exact component={FinalTicket}/>
                    <Route path={'/flightadmin'} exact component={FlightAdminDashboard}></Route>
                    {/* <Route path='/listofflights' exact component={ListOfFlights}/> */}
                    <Route path='/passengerDetails' exact component={PassengerDetails}></Route>
                    <Route path='/listOfFlights' exact component={FlightList}></Route>
                    <Route path="/addPassenger" exact component={AddPassenger}></Route>
                    <Route path="/bookTicket" exact component={BookTicket}></Route>
                    <Route path={'/dashboardadmin'} exact component={DashboardAdmin}></Route>
                    <Route path={'/statusChange'} exact component={StatChange}></Route>
                    <ProtectedRoute path={'/crmprofile'} exact component={CrmProfile}></ProtectedRoute>
                    <ProtectedRoute path={'/crmbookings'} exact component={CrmBookings}></ProtectedRoute>
                    <ProtectedRoute path={'/crmcomplaints'} exact component={CrmComplaints}></ProtectedRoute>
                    <ProtectedRoute path={'/crmfeedbacks'} exact component={CrmFeedbacks}></ProtectedRoute>
                    <ProtectedRoute path={'/crmupdateprofile'} exact component={CrmUpdateProfile}></ProtectedRoute>
                    {/* for user */}
                    <ProtectedRoute path='/showuserdetails' exact component={ShowUserDetails}></ProtectedRoute>
                    <ProtectedRoute path='/showfeedbacklisttouser' exact component={ShowFeedbackListToUser}></ProtectedRoute>
                    <ProtectedRoute path='/showcomplaintlisttouser' exact component={ShowComplaintListToUser}></ProtectedRoute>
                    <ProtectedRoute path='/updateuserprofile' exact component={UpdateUserProfile}></ProtectedRoute>
                    <ProtectedRoute path='/showticketstouser' exact component={ShowTicketsToUser}></ProtectedRoute>
                    <ProtectedRoute path='/addfeedbackbyuser' exact component={AddFeedbackByUser}></ProtectedRoute>
                    <ProtectedRoute path='/addcomplaintbyuser' exact component={AddComplaintByUser}></ProtectedRoute>
                </Switch>
                <Footer></Footer>
            </div>
     );
}

export default MainUI;