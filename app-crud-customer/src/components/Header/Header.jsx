import { React } from "react";

const Header = ({ titre }) => {
    console.log(titre)
    return (
        <header className="App-Header">
            {titre === "CLIENTS" ? (
                <h2>{titre}</h2>
                ) : (
                <h2>DETAILS</h2>
                )
            }
        </header>
        );
    };
    export default Header;