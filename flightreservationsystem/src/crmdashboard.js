import { MDBCard } from "mdb-react-ui-kit";
import Fab from '@mui/material/Fab';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function CrmDashboard() {
    return ( 
        <div style={{display:'flex', flexWrap:'wrap'}}>
            <MDBCard style={{width:'15%', margin:'10px', backgroundColor: '#41B3A3'}} alignment='center' className="container">
                <Link to={"/crmprofile"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                        Profile
                    </Fab>
                </Link>
                <Link to={"/crmcomplaints"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                        View Complaints
                    </Fab>
                </Link>
                <Link to={"/crmfeedbacks"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px'}}>
                        View Feedbacks
                    </Fab>
                </Link>
                <Link to={"/crmbookings"}>
                    <Fab variant="extended" style={{backgroundColor:'#05386B', color:"white", marginTop:'15px', marginBottom:'15px'}}>
                        Booking Info
                    </Fab>
                </Link>
            </MDBCard>
            <MDBCard style={{width:'82%', margin:'10px', backgroundColor: '#41B3A3'}} alignment='center' className="container">
                CRM Dashboard details
            </MDBCard>
        </div>
     );
}

export default CrmDashboard;