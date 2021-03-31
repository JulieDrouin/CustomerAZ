import React from "react";
import { Button } from "react-bootstrap";

const ButtonSubmit = () => {
return (
    <div className="p-2 bd-highlight" style={{marginTop: "10px!important"}}>
        <Button size="sm" variant="danger" type="submit">Submit</Button>
    </div>
  )
}
export default ButtonSubmit;