import React, { useContext } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const name = loggedInUser.displayName;
    const linkStyle = {
        color: 'black',
        textDecoration: 'none',
        marginRight: '0.8em'
    }

    return (
        <div className="NavClass">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand><Link to="/" style={linkStyle}>TwoWheels</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="#features" style={linkStyle}>Stores</Link></Nav.Link>
                        <Nav.Link><Link to="/orderReview" style={linkStyle}>Orders</Link></Nav.Link>

                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item> <Link to="/addBikes" style={linkStyle}>Add Bikes</Link> </NavDropdown.Item>
                            <NavDropdown.Item><Link to="/manageBikes" style={linkStyle}>Manage Bikes</Link></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="/login" style={linkStyle}>
                        {
                            loggedInUser.name ? <Link to="" style={{display:'none'}}> </Link> : <Link to="/login" style={linkStyle}>Login</Link>
                        }

                        </Link>

                        {
                            loggedInUser.name ? <Link to="" style={linkStyle}> {loggedInUser.name} </Link> : <Link to="/login" style={linkStyle}>User</Link>
                        }
                        
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>


        // <nav className="nav">
        //         <ul>
        //             <li>
        //                 <h3>TwoWheels</h3>
        //             </li>
        //             <li>
        //                 <Link to="/">Home</Link>
        //             </li>
        //             <li>
        //                 {/* this will be orders */}
        //                 <Link to="/orders">Orders</Link>
        //             </li>
        //             <li>
        //                 <Link to="/admin">Admin</Link>
        //             </li>
        //             <li>
        //                 <Link to="/addBike">Add Bikes</Link>
        //             </li>
        //             <li>
        //                 <Link to="/manageBikes">Manage Bikes</Link>
        //             </li>
        //             <li>
        //                 <Link to="/login">Login</Link>
        //             </li>
        //             <li>
        //                 {/* {
        //                     loggedInUser.name ? <h5 style={{color: 'gold'}}> {loggedInUser.name} </h5> : <Link to="/login">Login</Link>
        //                 } */}
        //             </li>
        //         </ul>
        //     </nav>
    );
};

export default Header;