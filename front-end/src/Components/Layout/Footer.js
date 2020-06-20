import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./Footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <Row>
            <Col sm="7">
              <Navbar expand="md">
                <Collapse navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink tag={Link} to="/about">
                        About
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/news">
                        News
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/movies">
                        Movies
                      </NavLink>
                    </NavItem>
                    <NavItem tag={Link} to="/booking">
                      <NavLink>Booking</NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
              <div className="note">
                COMPANY TNHH XXX CINEMAS Address: xxx XXXXXXXXXXX, Ward
                xxxxxxxx, State X, Da Nang City / Email: cimemaxxx@xxx.vn / Hotline support 
                : +84 000000 xxx Number : xxxxxxxx - Date start: 13/07/2020
                (Register change xx) / Place start: Department of planning and investment 
                Copyright ©2018 XXX Cinemas. All rights
                reserved.
              </div>
            </Col>
            <Col sm="5">
                <h2>Center Support</h2>
                <div><i className="fa fa-phone" aria-hidden="true"></i></div>
                <h4>XXXXXXXXX</h4>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
