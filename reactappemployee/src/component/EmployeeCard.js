import {PersonCircle,Trash,PenFill} from 'react-bootstrap-icons';

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
            <div>
                <PenFill/>
            </div>
            <div>
                <Trash/>
            </div>
        </div>
        </div>
    )
}

export default EmployeeCard;