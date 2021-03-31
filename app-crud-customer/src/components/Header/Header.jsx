import React from "react";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router";

const Header = () => {
  const titre = "CLIENTS";
  const detail = "DETAILS";
  const location = useLocation();
  return (
    <Container className="App-Header">
      <header >
      { location.pathname !== "/customers" ? (
        <h4>{detail}</h4>
        ) :
        <h4>{titre}</h4>
      }
      </header>
    </Container>
    );
  };
export default Header;