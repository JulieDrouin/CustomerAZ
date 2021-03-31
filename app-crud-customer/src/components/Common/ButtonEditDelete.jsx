import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const ButtonEditDelete = ({ to, props, customer, logo, onChange}) => {
  const location = useLocation();
  return (
    <>
      { location.pathname === "/customers" ? (
        <Link to={to} props={props} customer={customer} className="m-1 shadow-sm bg-body rounded linkA" onChange={onChange}>
          <i className={logo}></i>
        </Link>
      ) :
        <Button type="submit" size="" variant="" >
          <Link to={to} props={props} customer={customer} className=" shadow-sm bg-body rounded linkA" onChange={onChange}>
            <i className={logo}></i>
          </Link>
        </Button>
      }
    </>
  )
}
export default ButtonEditDelete;