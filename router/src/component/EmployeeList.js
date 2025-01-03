import EmployeeCard from "./EmployeeCard";
import { Link } from 'react-router-dom';

const EmployeeList= (props)=>
{

        
    // const EmployeeBody = (props) => {
    //     return (
    //       props.emplist.map((emp, index) =>
    //       {
    //       return  (
    //         <tr key={emp.id}>
    //           <td>{emp.id}</td>
    //           <td>{emp.name}</td>
    //           <td>{emp.age}</td>
    //           <td>{emp.jobTitle}</td>
    //         </tr>
    //       )
    //       })
    //     )
    //   }

    // const EmployeeBody=()=> {props.emplist.map((emp,list)=>
    // {
    //   console.log("in employeeBody" + emp);
    //   return( <EmployeeCard employee={emp} key={emp.empid}></EmployeeCard>)
    // })}

    const EmployeeBody = () => {
      return props.emplist.map((emp, list) => {
        return <EmployeeCard  deleteHandler={deleteById} employee={emp} key={emp.id}></EmployeeCard>;
      });
    };

    const deleteById=(empid)=>
    {
      props.removeHandler(empid);
    }
    
    

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-9">
              <Link to="/add">
              <div>
                <button type="button" name="btn" className="btn btn-primary"> AddEmployee</button>
              </div>
              </Link>
            {EmployeeBody()}
            </div>
            </div>
        </div>
    )
}

export default EmployeeList;