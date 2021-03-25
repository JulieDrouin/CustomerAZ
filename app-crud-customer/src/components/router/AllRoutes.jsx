import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import ListCustomers from '../Customer/ListCustomers';

const apiUrl = `https://app.tacbox.fr/api/customers`;

const AllRoutes = () => {
  const [appState, setAppState] = useState({ customer: ''});

  useEffect(() => {
    fetch(apiUrl)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setAppState({  customer: jsonResponse["hydra:member"] });
    });
  }, [setAppState]);

  return (
    <Switch>
      <Route exact path="/Customer/ListCustomers" render={() => <ListCustomers customer={appState.customer} /> } />
    </Switch>
  );
};
export default AllRoutes;
