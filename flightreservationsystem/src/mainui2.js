import StatChange from "./statusChng";


//not using it now
function MainUI2() {
    return ( 
        <div>
                <Header></Header>
                <Switch>
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
                    {/* <Route path='/listofflights' exact component={ListOfFlights}/> */}
                    <Route path='/passengerDetails' exact component={PassengerDetails}></Route>
                    <Route path='/listOfFlights' exact component={FlightList}></Route>
                    <Route path="/addPassenger" exact component={AddPassenger}></Route>
                    <Route path="/bookTicket" exact component={BookTicket}></Route>
                    <Route path={'/dashboardadmin'} exact component={DashboardAdmin}></Route>
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

export default MainUI2;