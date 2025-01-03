import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AboutComponenet from './Component/AboutComponent';
import IndexComponent from './Component/IndexComponent';
import HomeComponent from './Component/HomeComponent';
function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
      <Route path="/" exact component={IndexComponent}></Route> 
      <Route path="/Home" component={HomeComponent}></Route> 
       <Route path="/about" component={AboutComponent}></Route> 

      </Switch>
      </Router>
    </div>
  );
}

export default App;
