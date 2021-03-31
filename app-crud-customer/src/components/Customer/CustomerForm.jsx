import React from "react";
import { useLocation, useParams } from "react-router";
import { Form, Col } from "react-bootstrap";
import ButtonReturn from './../Common/ButtonReturn';
import ButtonSubmit from './../Common/ButtonSubmit';
import ButtonEditDelete from './../Common/ButtonEditDelete';

const CustomerForm = ({ onChange, customer, returnLink, titre }) => {
  let { id } = useParams();
  const location = useLocation();
  const custom = customer;
  const handleChangeFields = onChange;
  const loc = location.state === undefined ? undefined : location.state;
  const locationStateCust = loc ? loc.cust || loc.customer : undefined;
  const locationCust = custom === undefined ? locationStateCust : custom;

  return (
    <>
    { ( location.pathname === `/customers` || location.pathname === `/customer/info/${id}` || location.pathname === `/customer/edit/${id}`) &&
    <div className="App-FormNewCustom container-fluid">
      <h5>{titre}</h5>
        <Form.Row xs={4} md={4}>
          <Form.Group as={Col} xs={6} md={2} controlId="customerType">
            <Form.Check
              type="radio"
              label="Pro"
              name="customerType"
              id="formCustomerType1"
              value={"/api/customer_types/1"}
              onChange={handleChangeFields}
              defaultChecked={ locationCust.customerType = "/api/customer_types/1"}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              defaultChecked={ locationCust.customerType = "/api/customer_types/2"}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.firstName || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.lastName || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.email || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.tel || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.company || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
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
              onChange={handleChangeFields}
              defaultValue={locationCust.companyID || ""}
              disabled={location.pathname === `/customer/info/${id}` ? true : false}
            />
          </Form.Group>
        </Form.Row>
        { location.pathname === `/customer/info/${id}` &&
        <div className="mt-20">
          <ButtonEditDelete to={{ pathname:`/customer/edit/${id}`, state:{customer} }} props={customer.id} customer={customer} logo={"fas fa-pencil-alt"}/>
          <ButtonEditDelete to={{ pathname: `/customer/delete/${id}`, state:{customer} }} props={customer.id} customer={customer} logo={"far fa-trash-alt"}/>
        </div>
        }
    </div>
    }
    { location.pathname === `/customer/edit/${id}` ? <ButtonSubmit/> : null }
    { returnLink ? ( <ButtonReturn to={{ pathname: `/customers`}}/> ) : null }
    </>
  );
};
export default CustomerForm;