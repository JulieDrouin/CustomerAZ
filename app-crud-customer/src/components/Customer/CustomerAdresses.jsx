import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import ButtonReturn from './../Common/ButtonReturn';
import ButtonEditDelete from './../Common/ButtonEditDelete';

const CustomerAdresses = () => {
  let count = 1
  let { id } = useParams();
  const [ adressState, setAdressState] = useState({ adress: ''});

  // ---->  FETCH adress customer
  useEffect(() => {
    const apiUrlAdress = `https://app.tacbox.fr/api/customers/${id}/customer_addresses`;
    fetch(apiUrlAdress)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setAdressState({ adress: jsonResponse["hydra:member"] });
      });
    },
  [setAdressState]);

  if (!adressState.adress|| adressState.adress.length === 0)
    return (
      <div className="App-infoHeader container">
        <h5>Ce client n'a pas d'adresses</h5>
        <ButtonReturn to={{ pathname: `/customers` }}/>
      </div>
    );

  const adress = adressState.adress;

  return (
    <div className="App-CustomerContact container-fluid px-0">
      { adress && adress.map((add, i) => (
        <div className="row m-1">
          <div className="col">
            <div className="card shadow p-2 mb-4 bg-body rounded">
              <div className="card-body" key={add.id}>
                <h5 className="card-title">Adress ID n° {add.id} / {count+i}</h5>
                <h6 className="card-title">{add.label.toUpperCase()}</h6>
                <p>Code postal: {add.postalCode.toUpperCase()}, Ville :{add.city.toUpperCase()}</p>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <ButtonEditDelete to={{ pathname:`/customer/adress/edit/${add.id}`, state:{add} }} logo={"fas fa-pencil-alt"} />
                <ButtonEditDelete to={{ pathname:`/customer/adress/delete/${add.id}`, state:{add} }} logo={"far fa-trash-alt"} />
              </div>
            </div>
          </div>
        </div>
      ))}
      <ButtonReturn to={{ pathname: `/customers` }}/>
    </div>
  );
};
export default CustomerAdresses;