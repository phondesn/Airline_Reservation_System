import React from "react";
import {Route,Link, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './common.css'
import Flights from './Flights'
import Meals from './Meals'
import Planes from './Planes'

import UpdatePlane from "./UpdatePlane";
import UpdateMeal from "./UpdateMeal";
import Addflight from "./Addflight";
import Updateflight from "./UpdateFlight";
function FlightAdminDashboard()
{
    return <div className='content'>
        <hr></hr>
        <Link to={"/flights"}>Flights</Link> {" "}
        <Link to={"/meals"}>Meals</Link> {" "}
        <Link to={"/planes"}>Planes</Link> {" "}
        <hr></hr>
        {/* <Switch>
        <Route path='/flights' exact  component={Flights} />
        <Route path='/meals' exact component={Meals}/>
        <Route path='/planes' exact component={Planes}/>
        <Route path='/updateplane' exact component={UpdatePlane}/>
        <Route path='/updatemeal' exact component={UpdateMeal}/>
        <Route path='/addflight' exact component={Addflight}/>
        <Route path='/updateflight' exact component={Updateflight}/>
        </Switch> */}
    </div>
}

export default FlightAdminDashboard;