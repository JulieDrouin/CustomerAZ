import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ButtonReturn = ({ to }) => {
return (
    <div className="App- p-2 bd-highlight">
      <Link to={to} className="shadow-sm bg-body rounded linkA"><Button variant="info" size="sm" type="submit">Retour</Button></Link>
    </div>
  )
}
export default ButtonReturn;