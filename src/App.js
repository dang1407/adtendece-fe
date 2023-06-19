import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import {} from './redux/store/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Home from  './Home.js'
import  Classes from './Class.js'

function App() {
    return (
        <div className="App">
          <Home/>
          <Classes/>
        </div>
      );
}

export default App;
