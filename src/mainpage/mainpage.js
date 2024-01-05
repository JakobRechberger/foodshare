import React from 'react';
import './mainpage.css';
import {  signOut, getAuth } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/media/FoodShare_Icon.png'
import search from '../assets/media/search.svg'
import person from '../assets/media/person-fill.svg'
import cart from '../assets/media/cart2.svg'
import titleimage from '../assets/media/img.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




function MainPage() {
    const navigate = useNavigate();
    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
            // An error happened.
        });
    }
    const auth = getAuth();
    const user = auth.currentUser;
    if(user){
        console.log(user.email);
    }

    return (
        <div className={"main-page"}>
            <div className={"title-box"}>
                <Container>
                    <Row className={"align-items-center"}>
                        <Col>
                            <div className={"left-navbar"}>
                                <img src={logo} alt={"icon"} height={75} width={75}/>
                                <Navbar expand="lg" className="bg-body-tertiary donation-shop-switch">
                                    <Container>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav className="me-auto">
                                                <Nav.Link href="onlineshop">Onlineshop</Nav.Link>
                                                <Nav.Link href="donate">Donate</Nav.Link>
                                            </Nav>
                                        </Navbar.Collapse>
                                    </Container>
                                </Navbar>
                            </div>
                        </Col>
                        <Col>
                            <h1>
                                FoodShare
                            </h1>
                        </Col>
                        <Col>
                            <div className={"right-navbar"}>
                                <div className={"search-box"}>
                                    <div type="submit" className="searchButton">
                                        <img src={search} alt={"search-icon"} className={"search-box-svg"}/>
                                    </div>
                                    <input type="text" className="text-field" placeholder="Search..."></input>
                                </div>
                                <div className={"right-icons"}>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="text-dark"
                                            id="dropdown-basic"
                                            size="lg"
                                            bsPrefix
                                            className="btn-icon-only"
                                        >
                                            <img src={person} alt={"icon"} className={"right-navbar-icon-box"}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            {user ? (
                                                <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                                            ) : (
                                                <Dropdown.Item href="/login">LogIn</Dropdown.Item>
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Dropdown.Toggle
                                            variant="text-dark"
                                            id="dropdown-basic"
                                            size="lg"
                                            bsPrefix
                                            className="btn-icon-only"
                                        >
                                            <img src={cart} alt={"icon"} className={"right-navbar-icon-box"}/>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="/">View cart</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>

                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>


            </div>
            <div>
                <img src={titleimage} alt={"icon"} className={"intro-image"}/>
            </div>

        </div>
    );
}

export default MainPage;

