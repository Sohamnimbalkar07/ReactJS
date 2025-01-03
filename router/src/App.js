
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './component/Header';
import EmployeeList from './component/EmployeeList';
import EmployeeAdd from './component/EmployeeAdd';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import EmployeeEdit from './component/EmployeeEdit';


function App() {
  

  const LOCAL_STORAGE_EMPARR= 'emparr';

  // const employees = [
  //   { id: 1, name: "John Doe", age: 50, jobTitle: "Software Engineer" },
  //   { id: 2, name: "Jane Smith", age: 25, jobTitle: "Graphic Designer" },
  //   { id: 3, name: "Bob Johnson", age: 35, jobTitle: "Project Manager" },
  //   // Add more employees as needed
  // ];

  const [employees,setemployees]= 
  useState([])

  useEffect(()=> {
    const arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_EMPARR))
    if(arr)
    {
      setemployees(arr);
    }
  },[])

  useEffect(()=> {
    if(employees.length !==0)
    {
      localStorage.setItem(LOCAL_STORAGE_EMPARR,JSON.stringify(employees))
    }
  },[employees])

  const addEmployee=(ob)=>
  {
    let newarr= [...employees,{...ob}];
    setemployees(newarr)
  }

  const removeEmp=(eid) => 
  {
    const newarr = employees.filter((emp)=>
    {
      return emp.id!==eid;
    });
    setemployees(newarr);
    console.log(newarr);
  }

  const updateEmp=(emp)=>
  {
    console.log("in update emp" + emp);
    setemployees(
      employees.map((e)=>
      {
        return e.id===emp.id?{...emp}:e
      }
    ));
  }

  return (
    <div className="App">
    <Header/>
    <Router>
      <Switch>
        <Route path="/" exact
        render={(props) => ( <EmployeeList {...props} removeHandler={removeEmp} emplist={employees}/>
        )}></Route>
        <Route path="/add"  render={(props) => (<EmployeeAdd  {...props} addEmployeeHandler={addEmployee}/>)}></Route>
        <Route path="/edit/:empid" exact render={(props) => <EmployeeEdit {...props} editEmployeeHandler={updateEmp} ></EmployeeEdit>}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
