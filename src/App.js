import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Home} from './pages/Home';
import {Programs} from './pages/Programs';
import {Schedule} from './pages/Schedule';
import {Stations} from './pages/Stations'
import {NotFoundPage} from './pages/NotFoundPage';
import {NavigationBar} from './components/NavigationBar'
import {Jumbotron} from './components/Jumbotron'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Jumbotron/>
      <BrowserRouter  basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/programs" component={Programs}/>
          <Route exact path="/schedule" component={Schedule}/>
          <Route exact path="/stations" component={Stations}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;

