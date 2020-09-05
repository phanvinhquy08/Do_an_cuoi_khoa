import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, Button } from 'reactstrap';

import "./SideBar.css";
import * as act from '../../Action/booking.action';
const converDateToParams = date => {
    return date.split("/").join("-")
}

class SideBar extends Component {
    state = {
        email: localStorage.getItem("currentAccount") ? JSON.parse(localStorage.getItem("currentAccount")).email : "",
        openModal: false,
    }
    componentDidMount() {
        this.props.doGetOrder(this.state.email)
    }
    render() {

        const { show, onClose, orders, doDeleteOrder, doResetTicket } = this.props;
        console.log(orders)
        return (
            <>
                <div className={`bongMo ${show ? "show" : ""}`} onClick={onClose}></div>
                <div className={`side-bar ${show ? "show" : ""}`}>
                    {orders.length > 0 && <h3>YOUR TICKETS</h3>}
                    <div className="side-bar-content">
                        {orders.length === 0 && <h3>NOT ORDER YET</h3>}
                        {orders.length > 0 && orders.map((order, index) => {
                            return (
                                <div
                                    className="order" key={index}
                                // onClick={() => {
                                //     window.location.href=`/booking/${order.movie.id}/${converDateToParams(order.tickets[0].schedule.date)}/${order.tickets[0].schedule.start}`
                                // }}
                                >
                                    <div className="order-img">
                                        <img src={order.movie.img} alt={order.movie.id} />
                                    </div>
                                    <div className="order-content">
                                        <ul>
                                            <li><span>Name:</span> {order.movie.name}</li>
                                            <li><span>Date:</span> {new Date(order.tickets[0].schedule.date).toDateString()}</li>
                                            <li><span>Time:</span> {order.tickets[0].schedule.start}</li>
                                            <li><span>Seat:</span> {order.tickets.reduce((r, i) => {
                                                return r + " " + i.seat.name
                                            }, "")}</li>
                                            <li><span>Price:</span> {order.tickets.reduce((r, i) => {
                                                return r + i.price
                                            }, 0).toLocaleString()}</li>
                                        </ul>
                                    </div>
                                    <div className="order-close">
                                        <button type="button" onClick={() => this.setState({ openModal: true })}>x</button>
                                        <Modal isOpen={this.state.openModal} toggle={() => this.setState({ openModal: false })} style={{ width: "400px" }}>
                                            <ModalHeader toggle={() => this.setState({ openModal: false })}>Are your sure to cancel this tickets?</ModalHeader>
                                            <ModalBody>
                                                <Button style={{ width: "47%" }} onClick={() => {
                                                    doDeleteOrder(order.id)
                                                    doResetTicket(order.tickets)
                                                    this.props.doGetOrder(this.state.email)
                                                    this.props.getTicketBySchedule(order.movie.id, order.tickets[0].schedule.date, order.tickets[0].schedule.start)
                                                }}>Yes</Button>
                                                <Button style={{ width: "47%" }} onClick={() => this.setState({ openModal: false })}>No</Button>
                                            </ModalBody>
                                        </Modal>
                                        {/* <UncontrolledPopover trigger="focus" placement="bottom" target="PopoverFocus">
                                            <PopoverBody>
                                                <button onClick={() => {
                                                    doDeleteOrder(order.id)
                                                    doResetTicket(order.tickets)
                                                    this.props.doGetOrder(this.state.email)
                                                    this.props.getTicketBySchedule(order.movie.id, order.tickets[0].schedule.date, order.tickets[0].schedule.start)
                                                }}>Yes</button>
                                                <button>No</button>
                                            </PopoverBody>
                                        </UncontrolledPopover> */}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="side-bar-payment">
                        <h4>
                            Total: {orders.reduce((r, i) => {
                            return r + i.tickets.reduce((result, item) => {
                                return result + item.price
                            }, 0)
                        }, 0).toLocaleString()}
                        </h4>
                        <div className="side-bar-button">
                            <button style={{ width: "100%" }}>Payment</button>

                        </div>
                    </div>

                </div>

            </>
        )
    }
}

const mapStateToProps = (state) => ({
    orders: state.booking.orders,
    deleteOrderSuccess: state.booking.deleteOrderSuccess
})

const mapDispatchToProps = dispatch => ({
    doGetOrder: (email) => {
        dispatch(act.doGetOrder(email))
    },
    doDeleteOrder: id => {
        dispatch(act.doDeleteOrder(id))
    },
    doResetTicket: seats => {
        dispatch(act.doResetTicket(seats))
    },
    getTicketBySchedule: (id, date, start) => {
        dispatch(act.getTicketBySchedule(id, date, start))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)