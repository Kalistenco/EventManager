import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import EventCreation from './components/events/EventCreation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/createEvent">
            <EventCreation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
