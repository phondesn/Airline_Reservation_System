import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Switch, useHistory } from "react-router-dom";
import ListOfComplaint from "./ListOfComplaint";

function ListOfUser(){

    var navigate = useHistory();
    var [alluser,setalluser] = useState([]);

    useEffect(()=>{
        debugger;
        var token = sessionStorage.getItem("token");
        axios.get("http://localhost:5050/Admin/Users",
        {headers:{"Authorization" : "Bearer " +token}})
    .then((result)=>{
       //result.data.data.map(user=>{console.log(user.first_name)})
       setalluser(result.data);
    })
    },[])

    var f1 = (email)=>{
        navigate.push('/complaint',{params:email});
    }

    var f2 = (email)=>{
        navigate.push('/feedback',{params:email});
    }
    return <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="table table-responsive">
                <table className="table table-bordered" style={{backgroundColor:'white'}}>
                    <tbody>
                        <tr>
                            <td>FirstName</td>
                            <td>LastName</td>
                            <td>Email</td>
                            <td>Role</td>
                            <td>Dob</td>
                            <td>Mobile</td>
                            <td>Gender</td>
                            <td>Complaints</td>
                            <td>Feedbacks</td>
                        </tr>
                                    {alluser.map(u=>{
                                return (
                                <tr key={u.email}>
                                        <td>{u.firstName}</td>
                                        <td>{u.lastName}</td>
                                        <td>{u.email}</td>
                                        <td>{u.role}</td>
                                        <td>{u.dob}</td>
                                        <td>{u.mobile}</td>
                                        <td>{u.gender}</td>
                                        <td>
                                        <button onClick={()=>{
                                                                f1(u.email)
                                                            }} className = 'btn btn-danger'>click here</button> 
                                        </td>
                                        <td>
                                        <button onClick={()=>{
                                                                f2(u.email)
                                                            }} className = 'btn btn-primary'>click here</button> 
                                        </td>
                                </tr>
                                )
                                })}
                                    </tbody>
                                </table>
            </div>
            </div>
                                {/* <div className="col-md-2">
                                    <div className="table table-responsive">
                                    <table className="table table bordered">
                                        <tbody>
                                            <tr>
                                                <td>Complaints</td>
                                                <td>Feedbacks</td>
                                            </tr>
                                                {alluser.map(u=>{
                                                    return (
                                                            <tr key={u.email}>
                                                            <td>
                                                            {/* <BrowserRouter>
                                                            <Link to={'/ComplaintList'}>Click here</Link>
                                                            <Switch>
                                                                <Route path={'/ComplaintList'} exact component={ListOfComplaint}></Route>
                                                            </Switch>
                                                            </BrowserRouter> */}
                                                            {/* <button onClick={()=>{
                                                                f1(u.email)
                                                            }}>click here</button>
                                                            </td>
                                                            <td>
                                                            <button onClick={()=>{
                                                                f2(u.email)
                                                            }}>click here</button>
                                                            </td>
                                                            </tr>
                                                            )})}
                                        </tbody>
                                    </table>
                                    </div> */}
                                {/* </div> */} 
         </div>
        </div>   
}

export default ListOfUser;