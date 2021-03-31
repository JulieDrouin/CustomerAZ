import React from "react";
import { Form } from "react-bootstrap";
import { useLocation } from "react-router";
import ButtonReturn from './../Common/ButtonReturn';
import ButtonSubmit from './../Common/ButtonSubmit';

const CustomerDelete = ({ onChangeEtat, onChangeEtatContact, onChangeEtatAdress, customer, contact, add, titre }) => {
  const location = useLocation();
  const handleChangeEtatContact = onChangeEtatContact;
  const handleChangeEtatAdress = onChangeEtatAdress;
  const handleChangeEtat = onChangeEtat;
  const locationCustomerState = location.state.customer ? location.state.customer : customer;
  const locationContactState = location.state.contact ? location.state.contact : contact;
  const locationAddState = location.state.add ? location.state.add : add;

  return (
    <div className="App-FormNewCustom d-flex align-items-start flex-column bd-highlight mb-3">
      <h5>{titre}</h5>
      { locationCustomerState &&
          <Form.Group  controlId="etat">
            <Form.Check
              inline
              type="checkbox"
              label="Voulez vous vraiment supprimer ce client ?"
              name="etat"
              id="formCustomerType1"
              value={locationCustomerState.etat || !locationCustomerState.etat }
              onChange={handleChangeEtat}
            />
          </Form.Group>
        }
        { locationContactState &&
          <Form.Group  controlId="etat">
            <Form.Check
              inline
              type="checkbox"
              label="Voulez vous vraiment supprimer ce contact ?"
              name="etat"
              id="formCustomerType1"
              value={locationContactState.etat || !locationContactState.etat }
              onChange={handleChangeEtatContact}
            />
          </Form.Group>
        }
        { locationAddState &&
          <Form.Group  controlId="etat">
            <Form.Check
              inline
              type="checkbox"
              label="Voulez vous vraiment supprimer cette adresse ?"
              name="etat"
              id="formCustomerType1"
              value={locationAddState.etat || !locationAddState.etat }
              onChange={handleChangeEtatAdress}
            />
          </Form.Group>
        }
      <ButtonSubmit/>
      <ButtonReturn to={{ pathname:`/customers` }}/>
    </div>
  );
};
export default CustomerDelete;