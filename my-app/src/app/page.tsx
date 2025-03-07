"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { Col, Container, Nav, Navbar, NavbarBrand, Row } from 'react-bootstrap';
import { Facebook, Instagram, Twitter } from 'react-bootstrap-icons';

const TopMenu = () => {
    return (
        <Navbar className="px-0 justify-content-center pb-2" id="topMenu">
            <Container>
                <Nav className="justify-content-start">
                    <NavbarBrand href="#">
                        <img src="https://courses.ics.hawaii.edu/ics314f23/morea/ui-frameworks/murphyslogowhite.png" width="200px" alt="Logo" />
                    </NavbarBrand>
                </Nav>
                <Nav className="nav justify-content-end">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link>About Us</Nav.Link>
                    <Nav.Link>St. Patrick's Day</Nav.Link>
                    <Nav.Link>To Go Ordering</Nav.Link>
                    <Nav.Link><Instagram/></Nav.Link>
                    <Nav.Link><Facebook/></Nav.Link>
                    <Nav.Link><Twitter/></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

const MainContent = () => {
    return (
    <Row className="row d-flex align-items-center justify-content-center" id="centerText">
        <Col className="col-8 text-center">
        <h1>Now accepting reservations for St Patrick's Day</h1>
        <h1 className="h1">Please call 808-531-0422 for reservations</h1>
        <h1 className="h1">St Patrick's Day To-Go Orders can be ordered on our website menu.</h1>
        </Col>
    </Row>
);
}
const Footer = () => {
    return (
      <footer className="footer mt-auto py-3" id="bottomMenu">
        <Container>
          <Row>
            <Col>
              Lunch
              <hr />
              Monday - Friday: 11:00am - 2:30pm<br />
              Saturday - Sunday: Not open
            </Col>
            <Col>
              Bar
              <hr />
              Monday - Friday: From 11:00am to closing<br />
              Saturday - Sunday: Not open
            </Col>
            <Col>
              Dinner
              <hr />
              Monday - Friday: 5:00pm - 9:00pm<br />
              Saturday - Sunday: Not open
            </Col>
          </Row>
        </Container>
      </footer>
    );
  };

export default function Home() {
    return (
        <main>
            <TopMenu />
            <MainContent />
            <Footer />
        </main>
    );
}
