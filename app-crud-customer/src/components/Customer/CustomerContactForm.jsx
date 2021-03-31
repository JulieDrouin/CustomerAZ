import React from "react";
import { useParams, useLocation } from "react-router";
import { Form, Col } from "react-bootstrap";
import ButtonReturn from './../Common/ButtonReturn';
import ButtonSubmit from './../Common/ButtonSubmit';

const CustomerContactForm = ({ onChange, returnLink, titre, onChangeAdress }) => {
  const { id } = useParams();
  const location = useLocation();
  const contactState = location.state.contact;
  const addState = location.state.add;
  const handleChangeAdressFields = onChangeAdress;
  const handleChangeFields = onChange;

  return (
    <div className="App-FormNewCustom container-fluid">
      { contactState &&
      <>
       <h5>{titre}</h5>
         <Form.Row xs={4} md={4}>
           <Form.Group as={Col} xs={6} md={2} controlId="contactType">
             <Form.Check
               type="radio"
               label="Pro"
               name="contactType"
               id="formContactType1"
               value={"/api/customer_types/1"}
               onChange={handleChangeFields}
               defaultChecked={ contactState ? contactState.contactType = "/api/customer_types/1" : contactState.contactType ="/api/customer_types/1" }
              />
           </Form.Group>
           <Form.Group as={Col} xs={6} md={2} controlId="contactType">
             <Form.Check
               type="radio"
               label="Particulier"
               name="contactType"
               id="formContactType2"
               value={"/api/customer_types/2"}
               onChange={handleChangeFields}
               defaultChecked={ contactState ? contactState.contactType = "/api/customer_types/2" : contactState.contactType = "/api/customer_types/2" }
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
               defaultValue={contactState.firstName || ""}
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
              defaultValue={contactState.lastName || ""}
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
               defaultValue={contactState.email || ""}
             />
           </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
           <Form.Group as={Col} md={4} controlId="mobile">
             <Form.Label>Mobile</Form.Label>
             <Form.Control
               className="formControl"
               type="text"
               placeholder="Mobile"
               name="mobile"
               onChange={handleChangeFields}
               defaultValue={contactState.mobile || ""}
             />
           </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
           <Form.Group as={Col} md={4} controlId="office">
             <Form.Label>Office</Form.Label>
             <Form.Control
               className="formControl"
               type="text"
               placeholder="Office"
               name="office"
               onChange={handleChangeFields}
               defaultValue={contactState.office || ""}
             />
           </Form.Group>
         </Form.Row>
         { location.pathname === `/customer/contact/edit/${id}` ? <ButtonSubmit/> : null }
        { returnLink ? ( <ButtonReturn to={{ pathname:`/customers` }}/> ) : null }
      </>
      }
      { addState &&
        <>
         <h5>{titre}</h5>
         <Form.Row xs={4} md={4}>
           <Form.Group as={Col} xs={6} md={2} controlId="addressType">
             <Form.Check
               type="radio"
               label="Siège"
               name="addressType"
               id="formAddressType1"
               value={"/api/address_types/1"}
               onChange={handleChangeAdressFields}
               defaultChecked={addState.addressType === "/api/address_types/1"}
              />
           </Form.Group>
           <Form.Group as={Col} xs={6} md={2} controlId="addressType">
             <Form.Check
               type="radio"
               label="Dépôt"
               name="addressType"
               id="formAddressType2"
               value={"/api/address_types/2"}
               onChange={handleChangeAdressFields}
               defaultChecked={addState.addressType === "/api/address_types/2"}
             />
           </Form.Group>
           <Form.Group as={Col} xs={6} md={2} controlId="addressType">
             <Form.Check
               type="radio"
               label="Boutique"
               name="addressType"
               id="formAddressType3"
               value={"/api/address_types/3"}
               onChange={handleChangeAdressFields}
               defaultChecked={addState.addressType === "/api/address_types/3"}
             />
           </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
           <Form.Group as={Col} md={4} controlId="label">
             <Form.Label>Label</Form.Label>
             <Form.Control
               className="formControl"
               type="text"
               placeholder="Label"
               name="label"
               onChange={handleChangeAdressFields}
               defaultValue={addState.label || ""}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row md={4}>
          <Form.Group as={Col} md={4} controlId="line1">
            <Form.Label>Ligne 1</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Ligne 1"
              name="line1"
              onChange={handleChangeAdressFields}
              defaultValue={addState.line1 || ""}
            />
          </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
         <Form.Group as={Col} md={4} controlId="line2">
            <Form.Label>Ligne 2</Form.Label>
            <Form.Control
              className="formControl"
              type="text"
              placeholder="Ligne 2"
              name="line2"
              onChange={handleChangeAdressFields}
              defaultValue={addState.line2 || ""}
            />
          </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
           <Form.Group as={Col} md={4} controlId="postalCode">
             <Form.Label>Code Postal</Form.Label>
             <Form.Control
               className="formControl"
               type="text"
               placeholder="Code Postal"
               name="postalCode"
               onChange={handleChangeAdressFields}
               defaultValue={addState.postalCode || ""}
             />
           </Form.Group>
         </Form.Row>
         <Form.Row md={4}>
           <Form.Group as={Col} md={4} controlId="country">
             <Form.Label>Ville</Form.Label>
             <Form.Control
               className="formControl"
               type="text"
               placeholder="Ville"
               name="country"
               onChange={handleChangeAdressFields}
               defaultValue={addState.country || ""}
             />
           </Form.Group>
         </Form.Row>
        { location.pathname === `/customer/adress/edit/${id}` ? <ButtonSubmit/> : null }
        { returnLink ? ( <ButtonReturn to={{ pathname:`/customers` }}/> ) : null }
      </>
    }
    </div>
  );
};
export default CustomerContactForm;