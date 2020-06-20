import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";

import "./Navigation.css";

export default class Navigation extends Component {
  state = {
    isOpen: false,
    active: {
      about: false,
      news: false,
      movies: false,
      booking: false,
    },
  };
  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  activeAbout = () => {
    this.setState({
      active: {
        about: true,
        news: false,
        movies: false,
        booking: false,
      },
    });
  };
  activeNews = () => {
    this.setState({
      active: {
        about: false,
        news: true,
        movies: false,
        booking: false,
      },
    });
  };
  activeMovies = () => {
    this.setState({
      active: {
        about: false,
        news: false,
        movies: true,
        booking: false,
      },
    });
  };
  activeBooking = () => {
    this.setState({
      active: {
        about: false,
        news: false,
        movies: false,
        booking: true,
      },
    });
  };
  activeNone = () => {
    this.setState({
      active: {
        about: false,
        news: false,
        movies: false,
        booking: false,
      },
    });
  };
  render() {
    const { isOpen, active } = this.state;
    return (
      <div className="navigation">
        <Navbar color="light" light expand="md" fixed={true}>
          <Container>
            <NavbarBrand
              tag={Link}
              to="/"
              className="navigation-logo"
              onClick={this.activeNone}
            >
              CinemaXXX
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem
                  className={`navigation-item ${active.about ? "active" : ""}`}
                >
                  <NavLink tag={Link} to="/about" onClick={this.activeAbout}>
                    About
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>
                <NavItem
                  className={`navigation-item ${active.news ? "active" : ""}`}
                >
                  <NavLink tag={Link} to="/news" onClick={this.activeNews}>
                    News
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>
                <NavItem
                  className={`navigation-item ${active.movies ? "active" : ""}`}
                >
                  <NavLink tag={Link} to="/movies" onClick={this.activeMovies}>
                    Movies
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>
                <NavItem
                  className={`navigation-item ${
                    active.booking ? "active" : ""
                  }`}
                >
                  <NavLink
                    tag={Link}
                    to="/booking"
                    onClick={this.activeBooking}
                  >
                    Booking
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>
              </Nav>
              <div className="navigation-btn-group">
                <Link to="/register">
                  <Button className="navigation-btn" onClick={this.activeNone}>
                    Register
                  </Button>
                </Link>
                <Link to="/login">
                  <Button className="navigation-btn" onClick={this.activeNone}>
                    Login
                  </Button>
                </Link>
              </div>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
