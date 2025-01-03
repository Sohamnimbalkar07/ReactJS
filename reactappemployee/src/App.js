import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import {useState} from 'react';


function App() {

  const LOCAL_STORAGE_EMPARR= 'emparr';

  // const employees = [
  //   { id: 1, name: "John Doe", age: 50, jobTitle: "Software Engineer" },
  //   { id: 2, name: "Jane Smith", age: 25, jobTitle: "Graphic Designer" },
  //   { id: 3, name: "Bob Johnson", age: 35, jobTitle: "Project Manager" },
  //   // Add more employees as needed
  // ];

  const [employees,setemployees]= useState(
    [
      { id: 1, name: "John Doe", age: 50, jobTitle: "Software Engineer" },
      { id: 2, name: "Jane Smith", age: 25, jobTitle: "Graphic Designer" },
      { id: 3, name: "Bob Johnson", age: 35, jobTitle: "Project Manager" },
      // Add more employees as needed
    ]
  )

  const addEmployee=(ob)=>
  {
    let newarr= [...employees,{...ob}];
    setemployees(newarr)
  }

  return (
    <div className="App">
    <Header/>
    <div ClassName="container">
      <div className="row">
        <div className="col-md-6">
          <EmployeeAdd addEmployeeHandler={addEmployee}/>
        </div>
      <div className="col-md-6">
    <EmployeeList emplist={employees}/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
