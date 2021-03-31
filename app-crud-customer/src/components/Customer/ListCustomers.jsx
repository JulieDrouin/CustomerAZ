import React, { useState, useEffect } from "react";
import { Table, Button, Container, Form } from "react-bootstrap";
import CustomerForm from "./CustomerForm";
import ButtonEditDelete from './../Common/ButtonEditDelete';

const ListCustomers = () => {
  const [newCustomer, setNewCustomers] = useState({
    customerType: "/api/customer_types/1",
    company: "",
    companyID: "",
    tel: "",
    email: "",
    firstName: "",
    lastName: "",
    hasAccount: true,
    etat: false,
    billingType : "/api/billing_types/1"
  });
  const [showForm, setShowForm] = useState(false);

  // ---->  GET All Customers
  const [appState, setAppState] = useState({ customer: ''});
  useEffect(() => {
    const apiUrlGetAllCustomers = `https://app.tacbox.fr/api/customers`;
    fetch(apiUrlGetAllCustomers)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setAppState({ customer: jsonResponse["hydra:member"] });
      });
    },
  [setAppState]);


  // ---->  Change State fields Customer
  function handleChangeFields(event) {
    setNewCustomers({
      ...newCustomer,
      [event.target.name]: event.target.value,
    });
  }

  // ---->  POST New Customer
  const apiUrlPostCustomer = "https://app.tacbox.fr/api/customers";
  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newCustomer
      })
    };
    fetch(apiUrlPostCustomer, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => setNewCustomers({newCustomer : jsonResponse}));
  };

  if (!appState.customer || appState.customer.length === 0)
    return (
      <div className="App-infoHeader container">
        <h5>Aucuns clients trouvés</h5>
      </div>
  );

  const isInvalid =  !newCustomer.company || !newCustomer.companyID || !newCustomer.tel || !newCustomer.email || !newCustomer.firstName || !newCustomer.lastName ;

  return (
    <Container className="App-View">
      <h5 className='App-Head'>TOUT LES CLIENTS</h5>
      <div className="App-ShowFormCustomer">
        <Button type="submit" variant="secondary" size="sm" onClick={() => setShowForm(prevCheck => !prevCheck)}><i className="fas fa-plus-circle"></i></Button>
      </div>
      { showForm ? (
        <div className="App-">
          <Form onSubmit={handleSubmit}>
            <CustomerForm onChange={handleChangeFields} customer={newCustomer} titre={"Ajouter un Client"}/>
            <div className="mt-20">
              <Button className="" disabled={isInvalid} variant="danger" type="submit">Submit</Button>
            </div>
          </Form>
        </div> ) : null
      }
      <Table className="App-TableList table table-hover" size="sm" responsive="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Email</th>
            <th>Téléphone</th>
            <th>Nom de l'entreprise</th>
            <th>Siret</th>
            <th>Action</th>
          </tr>
        </thead>
        {appState.customer.map((cust) => {
          return (
            <tbody key={cust.id} className='listCustomer'>
              <tr>
                <td>{cust.id}</td>
                <td>{cust.firstName}</td>
                <td>{cust.lastName}</td>
                <td>{cust.email}</td>
                <td>{cust.tel}</td>
                <td>{cust.company}</td>
                <td>{cust.companyID}</td>
                <td>
                  <ButtonEditDelete to={{ pathname:`/customer/info/${cust.id}`, state:{cust} }} logo={"far fa-eye"}/>
                  <ButtonEditDelete to={{ pathname:`/customer/edit/${cust.id}`, state:{cust} }} logo={"fas fa-pencil-alt"} onChange={handleChangeFields}/>
                  <ButtonEditDelete to={{ pathname:`/customer/delete/${cust.id}`, state:{cust} }} logo={"far fa-trash-alt"} onChange={handleChangeFields}/>
                </td>
              </tr>
            </tbody>
            );
        })}
      </Table>
    </Container>
  );
};
export default ListCustomers;