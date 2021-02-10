import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './components/Inicio/Inicio';
import Header from './components/Header/Header';
import Equipos from './components/Equipos/Equipos';
import Contacto from './components/Contacto/Contacto';


function App() {
  return (
    <Router>
    <Header/>
       <Switch>
        <Route path='/' exact component={Inicio} />
        <Route path='/equipos' exact component={Equipos} />
        <Route path='/contacto' exact component={Contacto} />
      </Switch>
    </Router>
  );
}

export default App;
