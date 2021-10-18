import { Route, Switch } from 'react-router';
import Navbar from './components/Navbar'
import './App.css';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}