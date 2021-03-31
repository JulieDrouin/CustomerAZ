import React, { useState } from "react";
import { Nav, Tab, Form } from "react-bootstrap";
import { useLocation, useParams } from "react-router";
import CustomerContact from "./CustomerContact";
import CustomerForm from "./CustomerForm";
import CustomerAdresses from './CustomerAdresses';
import CustomerDocument from "./CustomerDocument";
import CustomerDelete from './CustomerDelete';
import ButtonReturn from '../Common/ButtonReturn';
import CustomerContactForm from '../Customer/CustomerContactForm';

const CustomerInfo = ({...props}) => {
  let { id } = useParams();
  const location = useLocation();
  const customerState = location.state === undefined ? props.customer : location.state.cust;
  const contactState =  location.state === undefined ? props.contact : location.state.contact;
  const adressState = location.state === undefined ? props.add : location.state.add;
  const [ customerCurrentState, setCustomerCurrentState] = useState(customerState);
  const [ contactCurrentState, setContactCurrentState] = useState(contactState);
  const [ addressCurrentState, setAdressCurrentState ] = useState(adressState);
  const returnLink = true;

  // ---->  Change field Customer
  function handleChange(event) {
    setCustomerCurrentState({
      ...customerCurrentState,
      [event.target.name]: event.target.value,
    });
  }

  // ---->  Change field Contact
  function handleChangeContactFields(event) {
    setContactCurrentState({
      ...contactCurrentState,
      [event.target.name]: event.target.value,
    });
  }

  // ---->  Change field Adress
  function handleChangeAdressFields(event) {
    setAdressCurrentState({
      ...addressCurrentState,
      [event.target.name]: event.target.value,
    });
  }

  //  ---->  Change ETAT Customer
  const handleChangeEtat = () =>{
    setCustomerCurrentState({
      ...customerCurrentState,
      etat: !customerCurrentState.etat,
    });
  }

  //  ---->  Change ETAT CONTACT
  const handleChangeEtatContact = () =>{
    setContactCurrentState({
      ...contactCurrentState,
      etat: !contactCurrentState.etat,
    });
  }

  //  ---->  Change ETAT Adress
  const handleChangeEtatAdress = () =>{
    setAdressCurrentState({
      ...addressCurrentState,
      etat: !addressCurrentState.etat,
    });
  }

  //  ---->  PUT ETAT Customer
  const apiUrlDeleteCustomer = `https://app.tacbox.fr/api/customers/${id}`;
  function handleSubmitEtat(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...customerCurrentState
      })
    };
    fetch(apiUrlDeleteCustomer, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => handleChangeEtat({customer : jsonResponse}));
  };

  //  ---->  PUT ETAT CONTACT
  const apiUrlDeleteContact = `https://app.tacbox.fr/api/customer_contacts/${id}`;
  function handleSubmitEtatContact(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...addressCurrentState
      })
    };
    fetch(apiUrlDeleteContact, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => handleChangeEtatContact({contact_customer : jsonResponse}));
  };
  //  ---->  PUT ETAT Adress
  const apiUrlDeleteAdress = `https://app.tacbox.fr/api/customer_addresses/${id}`;
  function handleSubmitEtatAdress(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...addressCurrentState
      })
    };
    fetch(apiUrlDeleteAdress, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => handleChangeEtatAdress({adress : jsonResponse}));
  };

  // ---->  PATCH Customer
  const apiUrlPatchCustomer = `https://app.tacbox.fr/api/customers/${id}`;
  function handleSubmit(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/merge-patch+json' },
      body: JSON.stringify({
        customerType: customerCurrentState.customerType,
        firstName: customerCurrentState.firstName,
        lastName: customerCurrentState.lastName,
        email: customerCurrentState.email,
        tel: customerCurrentState.tel,
        company: customerCurrentState.company,
        companyID: customerCurrentState.companyID
      })
    };
    fetch(apiUrlPatchCustomer, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => setCustomerCurrentState({customer : jsonResponse}));
  };

  // ---->  PATCH CONTACT Customer
  const apiUrlPatchContactCustomer = `https://app.tacbox.fr/api/customer_contacts/${id}`;
  function handleSubmitContact(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/merge-patch+json' },
      body: JSON.stringify({
        contactType: contactCurrentState.contactType,
        firstName: contactCurrentState.firstName,
        lastName: contactCurrentState.lastName,
        email: contactCurrentState.email,
        mobile: contactCurrentState.mobile,
        office: contactCurrentState.office,
      })
    };
    fetch(apiUrlPatchContactCustomer, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => setContactCurrentState({contact_customer : jsonResponse}));
  };

  // ---->  PATCH Adress Customer
  const apiUrlPatchAdressCustomer = `https://app.tacbox.fr/api/customer_addresses/${id}`;
  function handleSubmitAdress(event) {
    event.preventDefault();
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/merge-patch+json' },
      body: JSON.stringify({
        addressType: addressCurrentState.addressType,
        postalCode: addressCurrentState.postalCode,
        country: addressCurrentState.country,
        label: addressCurrentState.label,
        line1: addressCurrentState.line1,
        line2: addressCurrentState.line2,
      })
    };
    fetch(apiUrlPatchAdressCustomer, requestOptions)
    .then(response => response.json())
    .then(jsonResponse => setAdressCurrentState({adress_customer : jsonResponse}));
  };

  if (!id || id.length === 0)
    return (
      <div className="App-infoHeader container">
        <h5>Aucun clients dans la base</h5>
        <ButtonReturn to={{ pathname:`/customers`}}/>
      </div>
    );

  return (
    <div className="App-CustomerInfo container-fluid px-0">
      <Tab.Container id="left-tabs-example" defaultActiveKey="général">
        <Nav fill variant="tabs" defaultActiveKey={`/customer/info/${id}`} >
          <Nav.Item>
            <Nav.Link eventKey="général" className="linkA"><i className="fas fa-home"></i>  Général</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="contact" className="linkA"><i className="far fa-user"></i>  Contact</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="adress" className="linkA"><i className="far fa-id-card"></i>  Adresse</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="devis" className="linkA"><i className="fas fa-paste"></i>  Devis</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="facture" className="linkA"><i className="fas fa-paste"></i>  Facture</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="document" className="linkA"><i className="fas fa-paste"></i>  Document</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="général">
            <div className="App-FormNewCustom container-fluid">
              { location.pathname === `/customer/info/${id}` &&
                <CustomerForm customer={customerState} returnLink={returnLink} titre={"Informations du client"}/>
              }
              { location.pathname === `/customer/edit/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmit}>
                    <CustomerForm customer={customerState} returnLink={returnLink} titre={"Modifier le Client"} onChange={handleChange}/>
                  </Form>
                </div>
              }
              { location.pathname === `/customer/delete/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmitEtat}>
                    <CustomerDelete customer={customerState} titre={"Modifier l'état du client"} onChangeEtat={handleChangeEtat}/>
                  </Form>
                </div>
              }
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="contact">
            <div className="App-FormNewCustom container-fluid">
            { location.pathname === `/customer/info/${id}` &&
              <CustomerContact id={id} />
            }
            { location.pathname === `/customer/contact/edit/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmitContact}>
                    <CustomerContactForm customer={customerState} returnLink={returnLink} titre={"Modifier le Contact"} onChange={handleChangeContactFields}/>
                  </Form>
                </div>
              }
              { location.pathname === `/customer/contact/delete/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmitEtatContact}>
                    <CustomerDelete contact={contactState} titre={"Modifier l'état du contact"} onChangeEtatContact={handleChangeEtatContact}/>
                  </Form>
                </div>
              }
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="adress">
            <div className="App-FormNewCustom container-fluid">
              { location.pathname === `/customer/info/${id}` &&
                <CustomerAdresses id={id} add={addressCurrentState} />
              }
              { location.pathname === `/customer/adress/edit/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmitAdress}>
                    <CustomerContactForm returnLink={returnLink} titre={"Modifier l'adresse du Contact"} onChangeAdress={handleChangeAdressFields}/>
                  </Form>
                </div>
              }
              { location.pathname === `/customer/adress/delete/${id}` &&
                <div className="App-">
                  <Form onSubmit={handleSubmitEtatAdress}>
                    <CustomerDelete add={addressCurrentState} titre={"Modifier l'état de l'adresse du contact"} onChangeEtatAdress={handleChangeEtatAdress}/>
                  </Form>
                </div>
              }
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="devis">
            <div className="App-FormNewCustom container-fluid">
              <div className="App-infoHeader container">
                <h5>Ce client n'a pas de devis</h5>
                <ButtonReturn to={{ pathname:`/customers`}}/>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="facture">
            <div className="App-FormNewCustom container-fluid">
              <div className="App-infoHeader container">
                  <h5>Ce client n'a pas de factures</h5>
                  <ButtonReturn to={{ pathname:`/customers`}}/>
                </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="document">
            <div className="App-FormNewCustom container-fluid">
            <CustomerDocument customer={customerState} returnLink={returnLink} />
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};
export default CustomerInfo;