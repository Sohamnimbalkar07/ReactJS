import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import EmployeeList from './component/EmployeeList';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={EmployeeList}></Route>
        {/* <Route path="/employees" exact component={EmployeeList}></Route> */}
         <Route path="/add/:id" exact component={EmployeeAdd}></Route>
        {/* <Route path="/view/:id" exact component={EmployeeDetails}></Route> */} 

      </Switch>
    </div>
  );
}

export default App;
