import { BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ChangeRole from './ChangeRole';
import ListOfComplaint from './ListOfComplaint';
import ListOfFeedback from './ListOfFeedback';
import ListOfUser from './ListOfUser';
// import './common.css'

function Home() {
    return <div className='container'>
        <div className='col-md-12 text-justify' style={{backgroundColor : 'yellow'}}>
            <h2>Welcome Super Admin </h2>
        </div>
        <br></br><br></br>
        
            <div>
                <BrowserRouter>
                <center>
                <div style={{backgroundColor:'white'}}>
                <Link to={'/UserList'}>UserList</Link>{"  "}
                <Link to={'/changeRole'}>Change Role</Link>
                </div>
                </center>
                <Switch>
                    <Route path={'/UserList'} exact component={ListOfUser}></Route>
                    <Route path={'/complaint'} exact component={ListOfComplaint}></Route>
                    <Route path={'/feedback'} exact component={ListOfFeedback}></Route>
                    <Route path={'/changeRole'} exact component={ChangeRole}></Route>
                </Switch>
                </BrowserRouter>
            </div>
    </div>
}

export default Home;