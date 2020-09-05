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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";

import "./Navigation.css";
import { connect } from "react-redux";
import logo from '../../Img/logo.svg';
import * as act from '../../Action/booking.action';

class Navigation extends Component {
  state = {
    isOpen: false,
    active: {
      about: false,
      news: false,
      movies: false,
      booking: false,
    }
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
  logOut = () => {
    localStorage.removeItem("currentAccount");
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
  render() {
    const { isOpen, active } = this.state;
    const { currentAccount, openOrderDrawer } = this.props;
    return (
      <div className="navigation">
        <Navbar color="light" light expand="md">
          <Container style={{ padding: "0 8px" }}>
            <NavbarBrand
              tag={Link}
              to="/"
              className="navigation-logo"
              onClick={this.activeNone}
            >
              <img src={logo} />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem
                  className={`navigation-item ${active.about ? "active" : ""}`}
                >
                  <NavLink onClick={this.activeAbout}>
                    About
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>
                <NavItem
                  className={`navigation-item ${active.news ? "active" : ""}`}
                >
                  <NavLink onClick={this.activeNews}>
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
                    to="/"
                    onClick={this.activeBooking}
                  >
                    Booking
                  </NavLink>
                  <div className="navigation-stick" />
                </NavItem>

              </Nav>
              {currentAccount ?
                <div className="navigation-user">
                  <div className="navigation-user-img"></div>
                  {currentAccount.email}
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>

                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem onClick={this.logOut}>
                        Log out
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem onClick={() => {
                        openOrderDrawer();
                        this.props.doGetOrder(currentAccount.email)
                      }}>
                        Tickets
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
                :
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
              }


            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  currentAccount: state.login.currentAccount
})

const mapDispatchToProps = dispatch => ({
  doGetOrder: (email) => {
    dispatch(act.doGetOrder(email))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)