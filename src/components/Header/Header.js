import React, { useContext } from 'react';
import {Navbar,Nav,Form,Button,FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
const Home = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Gamers House</Navbar.Brand>
                <Nav className="ml-auto px-5">
                    <Nav.Link as={Link} to ="/">Home</Nav.Link>
                    <Nav.Link as={Link} to ="/orders">Orders</Nav.Link>
                    <Nav.Link as={Link} to ="/admin">Admin</Nav.Link>
                    <Nav.Link as={Link} to ="/deals">Deals</Nav.Link>
                </Nav>
                <Form inline>
                    <Button as={Link} to ="/login" variant="outline-info">
                        Login
                        {/* loggedInUser === null ? 'Login': 'Logged In'  */}
                        
                    </Button>
                </Form>
            </Navbar>
        </div>
    );
};

export default Home;