import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header>
        <Switch>
          <Route path="/" exact component={ProductList}/>
          <Route path="/product/:productId" exact component={ProductDetails}/>
          <Route> page not found</Route>

        </Switch>
      </Header>
    </div>
  );
}

export default App;
