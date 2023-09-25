import Home from './views/Home.js';
import LogIn from './views/LogIn.js';
import NoPage from './views/NoPage.js';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route path="/*">
            <NoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
