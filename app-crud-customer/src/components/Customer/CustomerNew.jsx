import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const CustomerNew = () => {
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

  function handleChangeFields(event) {
    setNewCustomers({
      ...newCustomer,
      [event.target.name]: event.target.value,
    });
  }
  console.log(newCustomer)
  const urlApi = "https://app.tacbox.fr/api/customers";

  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newCustomer
      })
    };
    fetch(urlApi, requestOptions)
      .then(response => response.json())
      .then(jsonResponse => setNewCustomers({newCustomer : jsonResponse}));
  };

  const isInvalid =  !newCustomer.company || !newCustomer.companyID || !newCustomer.tel || !newCustomer.email || !newCustomer.firstName || !newCustomer.lastName ;
  return (
    <div className="App-FormNewCustom container-fluid">
      <Form onSubmit={handleSubmit}>
        <Form.Row xs={4} md={4}>
          <Form.Group as={Col} xs={6} md={2} controlId="customerType">
            <Form.Check
              type="radio"
              label="Pro"
              name="customerType"
              id="formCustomerType1"
              value={"/api/customer_types/1"}
              onChange={handleChangeFields}
              defaultChecked
             />
          </Form.Group>
          <Form.Group as={Col} xs={6} md={2} controlId="customerType">
            <Form.Check
              type="radio"
              label="Particulier"
              name="customerType"
              id="formCustomerType2"
              value={"/api/customer_types/2"}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="firstName">
            <Form.Label>Nom</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Nom"
              name="firstName"
              value={newCustomer.firstName || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="lastName">
            <Form.Label>Prénom</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Prénom"
              name="lastName"
              value={newCustomer.lastName || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Email"
              name="email"
              value={newCustomer.email || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="tel">
            <Form.Label>Téléphone</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Téléphone"
              name="tel"
              value={newCustomer.tel || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="compagny">
            <Form.Label>Nom de l'entreprise</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Nom de l'entreprise"
              name="company"
              value={newCustomer.company || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="compagnyID">
            <Form.Label>Numéro de siret</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Numéro de siret"
              name="companyID"
              value={newCustomer.companyID || ""}
              onChange={handleChangeFields}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Button disabled={isInvalid} variant="info" type="submit">Submit</Button>
        </Form.Row>
      </Form>
    </div>
  );
};
export default CustomerNew;