import axios from "axios";
import React, { useState,useEffect } from "react"
import { useHistory } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
function Meals()
{
    var history = useHistory();
    var [meals,setmeals] = useState([]);
    var [meal,setmeal]  = useState({ name: "", category:"", subCategory:""});


    useEffect(()=>{
        var token = sessionStorage.getItem("token");
        axios.get("http://localhost:5050/meals",
        {headers:{"Authorization" : "Bearer " +token}}
        )
        .then((res)=>{setmeals(res.data)})
    },[])

    var HandleChange=(args)=>{
        var copyOfMeal = {...meal};
        copyOfMeal[args.target.name] = args.target.value;
        setmeal(copyOfMeal);
    }

    var Add=()=>{
        debugger
        var token = sessionStorage.getItem("token")
        axios.post("http://localhost:5050/meals",{
            name : meal.name,
            category:meal.category,
            subCategory:meal.subCategory
            
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            var copyOfMeal = [...meals]
            copyOfMeal.push(result.data)
            setmeals(copyOfMeal)
            history.push('/meals');

        })
    }

    var Update=(no)=>{
   
        history.push('/updatemeal',{params:no})
    }

    return(<div className='table-responsive'>
        <center>
        <table className="table table-bordered registerTable">
            <tbody>
                <tr>
                    <td>
                        Name:
                    </td>
                    <td>
                         <input type={"text"} name="name"
                                value={meal.name}
                                onChange={HandleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Category:
                    </td>
                    <td>
                         <select name="category"
                                onChange={HandleChange}>
                            <option value=' '>Select Category</option>
                            <option value='veg'>Veg.</option>
                            <option value='non-veg'>Non-veg.</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>
                        Sub-Category:
                    </td>
                    <td>
                    <select name="subCategory"
                                onChange={HandleChange}>
                            <option value=' '>Select Sub-Category</option>
                            <option value='breakfast'>BreakFast</option>
                            <option value='lunch'>Lunch</option>
                            <option value='dinner'>Dinner</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <center>
                            <button className="btn btn-primary"
                                    onClick={Add}>
                                Add Meal
                            </button>
                        </center>
                    </td>
                </tr>

            </tbody>
        </table>
        </center>
        <hr></hr>
        <table className="table table-hover content">
            <tbody>
                <tr>
                    <td>Meal ID</td>
                    <td>Name</td>
                    <td>Category</td>
                    <td>Sub-Category</td>
                </tr>
                {
                     meals.map(meal=>{
                        return(<tr key={meal.id}>
                                <td>{meal.id}</td>
                                <td>{meal.name}</td>
                                <td>{meal.category}</td>
                                <td>{meal.subCategory}</td>
                                <td>
                                <td>
                                <button className="btn btn-success"
                                        onClick=
                                        {
                                            ()=>{
                                                    Update(meal.id)
                                                }
                                        }>
                                    Update
                                    </button>
                            </td>
                                </td>
                                </tr>)            
                    })
                }
            </tbody>
        </table>
    </div>);
}

export default Meals;