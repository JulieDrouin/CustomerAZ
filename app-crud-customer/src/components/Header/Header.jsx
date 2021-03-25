import React from "react";
import { Container } from "react-bootstrap";

const Header = ({ titre }) => {
  return (
    <Container className="App-Header">
      <header >
        {titre === "CLIENTS" ? (
          <h4>{titre}</h4>
          ) : (
          <h2>DETAILS</h2>
          )
        }
      </header>
    </Container>
    );
  };
export default Header;