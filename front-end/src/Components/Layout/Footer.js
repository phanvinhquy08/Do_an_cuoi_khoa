import React from "react";
import { Row, Col, Container } from "reactstrap";
import "./Footer.css";
export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <Container>
          <div className="footer-about">
            <h6>About</h6>
            <ul>
              <li>Our Story</li>
              <li>Award</li>
              <li>Our Team</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-company">
            <h6>Company</h6>
            <ul>
              <li>Our Service</li>
              <li>Clients</li>
              <li>Contact</li>
              <li>Press</li>
            </ul>
          </div>
          <div className="footer-resources">
            <h6>Resources</h6>
            <ul>
              <li>Blog</li>
              <li>News</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-contact">
            <h6>Contact</h6>
            <ul>
              <li><i className="fa fa-phone"></i> (+84) 367 324 657</li>
              <li><i className="fa fa-map-marker"></i>  Da Nang, Hai Chau</li>
              <li><i className="fa fa-envelope"></i> cinemaxxx@xxx.vn</li>
            </ul>
          </div>
          <div className="footer-follow">
            <h6>Follow</h6>
            <div className="footer-social">
              <i className="fa fa-facebook"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-youtube"></i>
            </div>
          </div>

        </Container>
      </div>
    );
  }
}
