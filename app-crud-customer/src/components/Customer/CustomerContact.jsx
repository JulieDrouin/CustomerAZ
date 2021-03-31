import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ButtonReturn from './../Common/ButtonReturn';
import ButtonEditDelete from './../Common/ButtonEditDelete';

const CustomerContact = ({...props}) => {
  let count = 1
  let { id } = useParams();
  const [ contactsState, setContactsState] = useState({ contacts: ''});

  // ---->  FETCH contacts customer
  useEffect(() => {
    const apiUrlContact = `https://app.tacbox.fr/api/customers/${id}/customer_contacts`;
    fetch(apiUrlContact)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setContactsState({ contacts: jsonResponse["hydra:member"] });
    });
}, [setContactsState]);

  if (!contactsState.contacts|| contactsState.contacts.length === 0)
    return (
      <div className="App-infoHeader container">
        <h5>Ce client n'a pas de contacts</h5>
        <ButtonReturn to={{ pathname:`/customers`}}/>
      </div>
    );

  const contacts = contactsState.contacts;

  return (
    <div className="App-CustomerContact container-fluid px-0">
      { contacts.map((contact, i) => (
        <div className="row m-1">
          <div className="col">
            <div className="card shadow p-2 mb-4 bg-body rounded">
              <div className="card-body" key={contact.id}>
                <h5 className="card-title">Contact n° {contact.id} / {count+i}</h5>
                <h6 className="card-title">{contact.firstName.toUpperCase()}, {contact.lastName.toUpperCase()}</h6>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <ButtonEditDelete to={{ pathname:`/customer/contact/edit/${contact.id}`, state:{contact} }} logo={"fas fa-pencil-alt"} />
                <ButtonEditDelete to={{ pathname:`/customer/contact/delete/${contact.id}`, state:{contact} }} logo={"far fa-trash-alt"} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <ButtonReturn to={{ pathname:`/customers` }}/>
    </div>
  );
};
export default CustomerContact;