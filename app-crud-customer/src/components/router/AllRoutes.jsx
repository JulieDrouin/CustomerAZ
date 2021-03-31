import React from 'react';
import { Switch, Route } from "react-router-dom";
import ListCustomers from '../Customer/ListCustomers';
import CustomerInfo from '../Customer/CustomerInfo';

const AllRoutes = () => {

  return (
    <Switch>
      <Route exact path="/customers" component={ListCustomers} />
      <Route exact path="/customer/info/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/edit/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/delete/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/contact/info/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/contact/edit/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/contact/delete/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/adress/info/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/adress/edit/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route exact path="/customer/adress/delete/:id" render={(props) => <CustomerInfo {...props}/>} />
      <Route render={() => <h1>404: page not found</h1>} />
    </Switch>
  );
};
export default AllRoutes;
