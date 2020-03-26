import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './styles/navbar.css'




const NavigationBar = () => {
    return (
        <Navbar bg="secondary" variant="dark">
            <Navbar.Brand href="/Landing">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Landing">Sign In Guest</Nav.Link>
                <Nav.Link href="#features">Record Service</Nav.Link>
                <Nav.Link href="/NewGuest">Add New Guest</Nav.Link>
                {true ? <NavDropdown title="Admin Pages" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/ReportGeneration">Report Generation</NavDropdown.Item>
                    <NavDropdown.Item href="/ManageEmployees">Manage Employees</NavDropdown.Item>
                    <NavDropdown.Item href="/ManageEmployees">Manage Services</NavDropdown.Item>
                </NavDropdown> : null}
            </Nav>
            <Nav className="mr-sm-2">
                <Nav.Link href="/Splash">Logout</Nav.Link>
            </Nav>
        </Navbar>

    );
}


export default NavigationBar;