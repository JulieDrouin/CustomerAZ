import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import CustomerNew from "../Customer/CustomerNew";

const ListCustomers = ({...props }) => {

  const { customer } = props;
  const [showForm, setShowForm] = useState(false)
  if (!customer || customer.length === 0) return <p>Pas de Clients dans la base</p>;

  return (
    <Container className="App-View container-fluid px-0">
      <h5 className='App-Head'>TOUT LES CLIENTS</h5>
      <div className="App-ShowFormCustomer">
        <Button type="submit" variant="secondary" size="sm" onClick={() => setShowForm(prevCheck => !prevCheck)}><i className="fas fa-plus-circle"></i></Button>
      </div>
      { showForm ? (
        <div className="App-Container">
          <CustomerNew/>
        </div> ) : null
      }
      <Table className="App-TableList " size="sm" responsive="sm">
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
        {customer.map((repo) => {
          return (
            <tbody key={repo.id} className='listCustomer'>
              <tr>
                <td>{repo.id}</td>
                <td>{repo.firstName}</td>
                <td>{repo.lastName}</td>
                <td>{repo.email}</td>
                <td>{repo.tel}</td>
                <td>{repo.company}</td>
                <td>{repo.companyID}</td>
                <td>
                  <Button type="submit" variant="light" size="sm" ><i className="far fa-eye"></i></Button>
                  <Button type="submit" variant="light" size="sm" ><i className="fas fa-pencil-alt"></i></Button>
                  <Button type="submit" variant="light" size="sm" ><i className="far fa-trash-alt"></i></Button>
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