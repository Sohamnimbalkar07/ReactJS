
import './App.css';
import Header from './Component/Header';
import MobileList from './Component/MobileList';

function App() {

  var arr= ["iphone","samsung","oneplus","google","Nokia", "Motorola"]
  return (
    <div className="App">
      <Header/>
      <MobileList array={arr}/>
    </div>
  );
}

export default App;
