import './App.css';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import Login from './pages/login/login';
import { Switch, Route, BrowserRouter} from 'react-router-dom'
import productData from './produitachetes';


function App() {
  return (

    <BrowserRouter>
    <Switch>
      <Route path='/' element = {<Login/>}/>
      <Layout />


    </Switch> 
    </BrowserRouter>
    
  
  );
}

export default App;
