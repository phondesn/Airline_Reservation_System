import { Route } from "react-router-dom";
import AddComplaintByUser from "./addcomplaintbyuser";
import AddFeedbackByUser from "./addfeedbackbyuser";
import CrmBookings from "./crmbookings";
import CrmComplaints from "./crmcomplaints";
import CrmFeedbacks from "./crmfeedbacks";
import CrmProfile from "./crmprofile";
import ShowComplaintListToUser from "./showcomplaintlisttouser";
import ShowFeedbackListToUser from "./showfeedbacklisttouser";
import ShowTicketsToUser from "./showticketstouser";
import ShowUserDetails from "./showuserdetails";
import Signin from "./signin";
import UpdateUserProfile from "./updateuserprofile";
import CrmUpdateProfile from "./crmupdateprofile";

function ProtectedRoute(props) {

    var isLoggedIn = false;

    var email = sessionStorage.getItem("email");

    if(email != null){
        isLoggedIn = true;}
    else{
        isLoggedIn = false;}

    if(isLoggedIn){

    if(props.path == '/crmprofile')
        return ( <Route path={props.path} exact component={CrmProfile}></Route> );
    if(props.path == '/crmupdateprofile')
        return ( <Route path={props.path} exact component={CrmUpdateProfile}></Route> );
    if(props.path == '/crmcomplaints')
        return ( <Route path={props.path} exact component={CrmComplaints}></Route> );
    if(props.path == '/crmfeedbacks')
        return ( <Route path={props.path} exact component={CrmFeedbacks}></Route> );
    if(props.path == '/crmbookings')
        return ( <Route path={props.path} exact component={CrmBookings}></Route> );
    // if(props.path == '/addPassenger')
    //     return ( <Route path='/addPassenger' exact component={AddPassenger}></Route> );
    }
    else{
        return(<Signin></Signin>);
    }

    
   

    // For User

    if(props.path == '/showuserdetails'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={ShowUserDetails}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/showfeedbacklisttouser'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={ShowFeedbackListToUser}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/showcomplaintlisttouser'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={ShowComplaintListToUser}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/updateuserprofile'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={UpdateUserProfile}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/showticketstouser'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={ShowTicketsToUser}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/addfeedbackbyuser'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={AddFeedbackByUser}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    if(props.path == '/addcomplaintbyuser'){

        if (sessionStorage.getItem("email")!=null) {
            return ( <Route path={props.path} exact component={AddComplaintByUser}></Route> );
        } else {
            <Route path='/signin' exact component={Signin}/>
        }
    }

    }

export default ProtectedRoute;