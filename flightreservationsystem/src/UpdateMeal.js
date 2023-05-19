import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { useState } from "react";

function UpdateMeal(){
    var history = useHistory();
    var [meal,setmeal]  = useState({ name: "", category:"", subCategory:""});
    var location = useLocation();
    
    var HandleChange=(args)=>{
        var copyOfMeal = {...meal};
        copyOfMeal[args.target.name] = args.target.value;
        setmeal(copyOfMeal);
    }

    var Update=()=>{
        debugger;
        var token = sessionStorage.getItem("token");
        var url = "http://localhost:5050/meals/"+location.state.params;
        axios.put(url,{
            name: meal.name,
            category:meal.category,
            subCategory:meal.subCategory
 
        },{headers:{"Authorization" : "Bearer " +token}}).then((result)=>{
            history.push('/meals');
        })
    }

    return(<div>
        <center>
                 <table className="table table-bordered registerTable">
                     <tbody>
                         <tr>
                             <td>
                                 Meal Id:
                             </td>
                             <td>
                                 <input type = {"number"} name = "id"
                                         value={location.state.params}/>
                             </td>
                         </tr>
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
                                     <button className="btn btn-success"
                                             onClick={Update}>
                                                 Update Meal
                                             </button>
                                 </center>
                             </td>
                         </tr>
                     </tbody>
                 </table>
             </center>
         </div>);
}

export default UpdateMeal;