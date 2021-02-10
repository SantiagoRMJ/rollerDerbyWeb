import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Header from './containers/Header/Header'

function App() {
  return (
    <Router>
       <Switch>
        <Header/>
      </Switch>
    </Router>
  );
}

export default App;
