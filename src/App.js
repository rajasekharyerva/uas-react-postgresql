import React, { Component } from 'react';
import StudentHome from './StudentHome';
//import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Shell from './Shell';
import StudentFormWrapper from './StudentFormWrapper';
import StudentView from './StudentView';
import StudentRecord from './StudentRecord';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Shell} />
          <Route path="student" component={StudentRecord} />
          <Route path=":studentId" component={StudentView} />
          <Route path=":studentId/edit" component={StudentFormWrapper} />
          <Route path="*" component={StudentHome} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
