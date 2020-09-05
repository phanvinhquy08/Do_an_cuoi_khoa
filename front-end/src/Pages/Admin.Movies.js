import React, { Component } from 'react'
import { Table, Container, Nav, NavLink, NavItem, TabContent, TabPane, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import classnames from 'classnames';

import './Admin.Movies.css';
import * as act from '../Action/admin.movies.action';

class AdminMovies extends Component {
    state = {
        activeTab: "1"
    }
    toggle = tab => {
        if (this.state.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    }
    componentDidMount() {
        const acc = localStorage.getItem("currentAccount");
        if (!acc || JSON.parse(acc).email !== "admin@admin.com") {
            window.location.href = "/login"
        }
        else {
            this.props.doGetAllMovies();
            this.props.doGetAllSchedules();
            this.props.doGetAllUsers()
        }

    }
    render() {
        const { Allmovies, schedules, users } = this.props;
        console.log(users)
        return (
            <div className="admin-movie">
                <Container>
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}
                            >
                                Movies
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}
                            >
                                Schedules
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({ active: this.state.activeTab === '3' })}
                                onClick={() => { this.toggle('3'); }}
                            >
                                Users
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Kind</th>
                                        <th>Language</th>
                                        <th>Time</th>
                                        <th>Premiere</th>
                                        <th>Showing</th>
                                        <th><button>Add new</button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Allmovies.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.kind}</td>
                                                <td>{item.language}</td>
                                                <td>{item.time}</td>
                                                <td>{item.premiere}</td>
                                                <td>{item.playing ? "Showing" : "Comming soon"}</td>
                                                <td>
                                                    <div className="admin-action">
                                                        <button>Edit</button>
                                                        <button>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="2">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Movie</th>
                                        <th>Start</th>
                                        <th>Date</th>
                                        <th><button>Add new</button></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {schedules.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.movieId}</td>
                                                <td>{item.start}</td>
                                                <td>{item.date }</td>
                                                <td>
                                                    <div className="admin-action">
                                                        <button>Edit</button>
                                                        <button>Delete</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </TabPane>
                        <TabPane tabId="3">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.email}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </TabPane>
                    </TabContent>
                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    Allmovies: state.adminMovies.Allmovies,
    schedules: state.adminMovies.schedules,
    users: state.adminMovies.users
})

const mapDispatchToProps = dispatch => ({
    doGetAllMovies: () => {
        dispatch(act.doGetAllMovies())
    },
    doGetAllSchedules: () => {
        dispatch(act.doGetAllSchedules())
    },
    doGetAllUsers: () => {
        dispatch(act.doGetAllUsers())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminMovies)