import React from 'react';
import Splash from './views/splash';
import SignInGuest from './views/signInGuest';
import NewGuest from './views/newGuest';
import ManageEmployees from './views/admin/manageEmployees';
import Reports from './views/admin/reports';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Splash}></Route>
        <Route exact path='/Splash' component={Splash}></Route>
        <Route exact path='/Landing' component={SignInGuest}></Route>
        <Route exact path='/SignInGuest' component={SignInGuest}></Route>
        <Route exact path='/NewGuest' component={NewGuest}></Route>
        <Route exact path='/ManageEmployees' component={ManageEmployees}></Route>
        <Route exact path='/ReportGeneration' component={Reports}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
