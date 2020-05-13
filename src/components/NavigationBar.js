import React from 'react';
import {Nav, Navbar, Form, FormControl, Button, } from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
.navbar {
    background-color: #222;
}

.navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
        color: white;
    }
}
`;
export const NavigationBar = () => (
    <Styles>
        <Navbar expand="md" bg="dark" variant="dark">
            <Navbar.Brand href="/">Utopian</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="#/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#/programs">Programs</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#/schedule">Schedule</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#/stations">Stations</Nav.Link></Nav.Item>
                </Nav>
                <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
         <Button variant="outline-success">Search</Button>
      </Form>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)