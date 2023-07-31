import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handeleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link to={'/category/0'}>Home</Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {user ? <Button onClick={handeleLogOut} variant="secondary">Logout</Button>
                                : <Link to={'/login'}><Button variant="secondary">Login</Button></Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;