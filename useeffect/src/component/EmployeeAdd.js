
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React,{Component} from 'react';


class EmployeeAdd extends Component
{
    constructor(props)
    {
        super();
        this.state={
            id:"",
            name:"",
            age:"",
            jobTitle:""
        }
    }

    add=(event)=>
    {
        event.preventDefault();
        if(this.state.id==="" || this.state.name==="" || this.state.age==="" || this.state.jobTitle==="")
           {
                 alert("all fields are mandatery")
                 return;
           }
        this.props.addEmployeeHandler(this.state);
        this.setState({id:"",name:"",age:"",jobTitle:""});
    }

    render(){
    return (
        <Form>
      <Form.Group className="mb-3" controlId="formBasicId">
        <Form.Label>Employee id</Form.Label>
        <Form.Control type="text" placeholder="Enter Id"
        value={this.state.id}
        onChange={(event)=> this.setState({id:event.target.value})}
        />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" 
        value={this.state.name}
        onChange={(event)=> this.setState({name:event.target.value})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicAge">
        <Form.Label>Employee age</Form.Label>
        <Form.Control type="text" placeholder="Enter Age" 
        value={this.state.age}
        onChange={(event)=> this.setState({age:event.target.value})}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicjobTitle">
        <Form.Label>Employee jobTitle</Form.Label>
        <Form.Control type="text" placeholder="Enter JobTitle" 
        value={this.state.jobTitle}
        onChange={(event)=> this.setState({jobTitle:event.target.value})}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit" onClick={this.add}>
        Submit
      </Button>
    </Form>
    )
    }
}

export default EmployeeAdd;