import {PersonCircle,Trash,PenFill} from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const EmployeeCard= (props)=>
{
    console.log("in employee card");
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-1">
                <PersonCircle></PersonCircle>
            </div>
            <div>
                <span>{props.employee.id}</span>
                <span>{props.employee.name}</span>
                <span>{props.employee.age}</span>
                <span>{props.employee.jobTitle}</span>
            </div>
            <Link to={{pathname: '/edit/${props.employee.id}', state:{employee:props.employee}}}>
            <div>
                <PenFill/>
            </div>
            </Link>
            <div>
                <Trash onClick={()=>props.deleteHandler(props.employee.id)}/>
            </div>
        </div>
        </div>
    )
}

export default EmployeeCard;