import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap';

import * as act from '../Action/booking.action';
import Loading from '../Components/Common/Loading';
import CardMovie from '../Components/Movies/CardMovie';
import "./Booking.css";
import CommonButton from '../Components/Common/CommonButton';
import ModalBooking from '../Components/Booking/ModalBooking';
import { ToastContainer, toast } from 'react-toastify';

// const currentAccount = localStorage.getItem("currentAccount") ? JSON.parse(localStorage.getItem("currentAccount")).email : ""

class Booking extends Component {
    state = {
        currentAccount: localStorage.getItem("currentAccount") ? JSON.parse(localStorage.getItem("currentAccount")).email : "",
        seatIds: [],
        openModal: false,
    }
    componentDidMount() {
        const { match, getTicketBySchedule } = this.props;
        const { id, date, start } = match.params;
        getTicketBySchedule(id, date, start)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        const { updateTicket } = this.props;
        if (nextProps.updateTicket && nextProps.updateTicket !== updateTicket) {
            toast.success("Booking success");
            setTimeout(() => window.location.reload(), 2000)
        }
    }
    pickSeat = (id) => {
        let { seatIds } = this.state;
        if (seatIds.includes(id)) {
            seatIds = seatIds.filter(seat => seat !== id)
        }
        else {
            seatIds = [...seatIds, id]
        }
        this.setState({ seatIds: [...seatIds] }, () => {
            const { seatIds } = this.state;
            const { doGetSeat } = this.props;
            if (seatIds.length > 0) {
                doGetSeat(seatIds)
            }
            else {
                doGetSeat([10000])
            }
        })
    }
    onClose = () => {
        this.setState({ openModal: false })
    }
    render() {
        const { tickets, getTicket } = this.props;
        let movie = {};
        let listTickets = []
        if (tickets[0]) {
            movie = tickets[0].movie;
            listTickets = tickets[0].tickets
        }
        return (
            // <div>abc</div>
            <div className="booking-detail" style={{
                height: "100vh",
                backgroundImage: `url(${movie.banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                {getTicket && <Loading />}
                <div className="booking-detail-blur" />
                <div className="booking-detail-group">
                    <Container>
                        <CardMovie movie={movie} showDetail={false} />
                        <div className="booking-detail-content">
                            <h3>{movie.name}</h3>
                            <div className="booking-detail-time">
                                <p><i className="fa fa-table"></i>{tickets[0] && tickets[0].date}</p>
                                <p><i className="fa fa-play"></i>{tickets[0] && tickets[0].start}</p>
                            </div>
                            <div className="booking-seats">
                                <Row>
                                    <Col xs={6}>
                                        {listTickets && <div className="screen"></div>}
                                        <Row>
                                            {listTickets && listTickets.map((item, index) => {
                                                if (item.taken
                                                    && item.user !== this.state.currentAccount
                                                ) {
                                                    return (
                                                        <Col xs={2} key={index}>
                                                            <div className="seat taken"></div>
                                                        </Col>
                                                    )
                                                }
                                                if (item.user === this.state.currentAccount) {
                                                    return (
                                                        <Col xs={2} key={index}>
                                                            <div className="seat select"></div>
                                                        </Col>
                                                    )
                                                }
                                                return (
                                                    <Col xs={2} key={index}>
                                                        <div
                                                            className={`seat ${this.state.seatIds.includes(item.id) ? "select" : ""}`}
                                                            value={0}
                                                            onClick={() => this.pickSeat(item.id)}
                                                        ></div>
                                                    </Col>
                                                )
                                            })}
                                        </Row>
                                    </Col>
                                    <Col xs={6}>
                                        <div className="booking-instruction">
                                            <div>
                                                <div className="seat available"></div><span>Availble</span>

                                            </div>
                                            <div>
                                                <div className="seat taken"></div><span>Taken</span>

                                            </div>
                                            <div>
                                                <div className="seat select"></div><span>Your Select</span>
                                            </div>
                                            {
                                                this.state.seatIds.length > 0 && <CommonButton
                                                    children="Book now"
                                                    style={{ marginTop: "20px" }}
                                                    onClick={() => this.setState({ openModal: true })}
                                                />
                                            }
                                        </div>
                                    </Col>
                                </Row>

                            </div>
                        </div>
                    </Container>
                </div>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ModalBooking
                    open={this.state.openModal}
                    onClose={this.onClose}
                    seats={this.props.seats}
                    movie={movie}
                    date={tickets[0] && tickets[0].date}
                    start={tickets[0] && tickets[0].start}
                    doUpdateTicket={this.props.doUpdateTicket}
                    booking={this.props.booking}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    tickets: state.booking.tickets,
    getTicket: state.booking.getTicket,

    seats: state.booking.seats,
    getSeat: state.booking.getSeat,

    updateTicket: state.booking.updateTicket
})

const mapDispatchToProps = dispatch => ({
    getTicketBySchedule: (id, date, start) => {
        dispatch(act.getTicketBySchedule(id, date, start))
    },
    doGetSeat: arr => {
        dispatch(act.doGetSeat(arr))
    },
    doUpdateTicket: arr => {
        dispatch(act.doUpdateTicket(arr))
    },
    booking: (arr, movie) => {
        dispatch(act.booking(arr, movie))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Booking)