
class EmployeeAdd extends Component{

    constructor(props)
    {
        super(props);
        this.state={

        }
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
          {this.state.op=="_add"}
          <Button variant="primary" type="submit" onClick={this.addorupdateEmployee}>
            Add or update Employee
          </Button>
        </Form>
        )
        }
}