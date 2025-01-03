import React,{Component, Componet} from 'react';
import EmployeeService from './EmployeeService';
class EmployeeList extends Component{

    constructor(props)
    {
        super(props)
        {
            this.state={
                emparr:[],
                searcharr:[],
                flag:false
            }
        }
    }

    ComponentDidmout()
    {
        EmployeeService.getEmployees().then((response)=>{
            this.setState({emparr:response.data,searcharr:response.data})
        })
    }

    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.searchtext!==this.state.searchtext)
        {
            if(this.state.searchtext!="")
            {
                 this.setState({searcharr: this.state.emparr.filter((emp) =>
                    {
                        return emp.ename.include(this.state.searchtext);
                    })

                 });
            }else{
                this.setState({searcharr:this.state.emparr});
            }
        }
    }

    searchEmployee()
    {
        if(this.state.searchtext!="")
            {
                 this.setState({searcharr: this.state.emparr.filter((emp) =>
                    {
                        return emp.ename.include(this.state.searchtext);
                    })

                 });
            }else{
                this.setState({searcharr:this.state.emparr});
            }
    }

    addEmployee()
    {
        this.props.history.push("/add/_add");
    }

    render()
    {
        return (
            <div>
            <h2 className="text-center"> Employee List </h2>
            <div className="row text-right">
                <button className="btn btn primary" onClick={this.addEmployee}>Add Employee</button>
            </div>
            <div className="row col-md-6 offset-md-2">
             <input type="text" name="search" placeholder="Text to search"
             value={this.state.searchtext}
             onChange={(event)=>this.setState({searchtext:event.target.value})}></input>
             <button className="btn btn-primary" onClick={this.searchEmployee}>search</button>
            </div>
            <div className="row">
                <table className="table table-stripped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee id</th>
                            <th>Employee name</th>
                            <th>Employee salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                              this.state.searcharr.map((emp,index)=>
                              <tr key={index}>
                                <td>{emp.emppid}</td>
                                <td>{emp.ename}</td>
                                <td>{emp.sal}</td>
                                <td></td>
                              </tr>)
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }
}
export default EmployeeList;