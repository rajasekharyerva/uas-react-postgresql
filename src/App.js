import React, { Component } from 'react';
import StudentHome from './StudentHome';
//import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Shell from './Shell';
import StudentFormWrapper from './StudentFormWrapper';
import StudentView from './StudentView';
import StudentRecord from './StudentRecord';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Shell} />
          <Route exact path="/student" component={StudentRecord} />
          {/*<Route path=":studentId" component={StudentView} />*/}
          <Route exact path="/student/:id" component={StudentView} />
          {/*<Route exact path="/student/1" render={StudentView} />*/}
          <Route exact path=":studentId/edit" component={StudentFormWrapper} />
        </Switch>
      </div>

    );
  }
}

export default App;
