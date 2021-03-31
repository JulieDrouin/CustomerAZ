import React, { useState, useEffect } from "react";
import ButtonReturn from './../Common/ButtonReturn';

const CustomerDocument = ({ customer, returnLink }) => {
  const [ documentState, setDocumentState] = useState({ documents : ''});

  //  ---->  FETCH documents
  useEffect(() => {
    const apiUrl = `https://app.tacbox.fr/api/document_types`;
    fetch(apiUrl)
    .then((res) => res.json())
    .then((jsonResponse) => {
      setDocumentState({ documents: jsonResponse["hydra:member"] });
      });
    },
  [setDocumentState]);

  if (!documentState.documents|| documentState.documents.length === 0)
    return (
      <div className="App-infoHeader container">
        <h5>Ce client n'a pas de documents</h5>
      </div>
    );

  const document = documentState.documents;

  return (
    <div className="container-fluid">
      { document && document.map((doc, i) => (
        <div className="row">
          <div className="col-4">
            <div className="list-group" id="list-tab" role="tablist">
              <a key={doc.id} className="list-group-item list-group-item-action" id="list-contrat-list" data-bs-toggle="list" role="tab" aria-controls="contrat">{doc.label}</a>
            </div>
          </div>
          <div className="col-8">
            <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="list-contrat" role="tabpanel" aria-labelledby="list-contrat-list">{doc.id} : {doc.label}</div>
          </div>
       </div>
      </div>
      ))}
    { returnLink ? ( <ButtonReturn to={{ pathname:`/customers` }}/> ) : null }
    </div>
  );
};
export default CustomerDocument;
