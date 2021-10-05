import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home/Home';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}