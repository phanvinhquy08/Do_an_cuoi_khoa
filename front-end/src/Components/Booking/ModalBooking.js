import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import "./ModalBooking.css"
class ModalBooking extends React.Component {
    render() {
        const { open, onClose, seats, movie, date, start, doUpdateTicket, booking } = this.props;
        return (
            <div>
                {/* <Button color="danger" onClick={onClose}>{buttonLabel}</Button> */}
                <Modal isOpen={open} toggle={onClose} className="modal-booking">
                    <ModalHeader toggle={onClose}>Your tickets</ModalHeader>
                    <ModalBody>
                        <div className="modal-booking-img">
                            {/* <h6></h6> */}
                            <img src={movie.img} alt={movie.id} />
                        </div>
                        <div className="modal-booking-title">
                            <h6>Movie name</h6>
                            <p>{movie.name}</p>
                        </div>
                        <div className="modal-booking-date">
                            <h6>Date</h6>
                            <p>{new Date(date).toDateString()}</p>
                        </div>
                        <div className="modal-booking-time">
                            <h6>Time</h6>
                            <p>{start}</p>
                        </div>
                        <div className="modal-booking-seats">
                            <h6>Seat</h6>
                            <p>
                                {
                                    seats.reduce((r, i) => {
                                        return r + " " + i.seat.name
                                    }, "")
                                }
                            </p>
                        </div>
                        <div className="modal-booking-price">
                            <h6>Price</h6>
                            <p>
                                {
                                    seats.reduce((r, i) => {
                                        return r + i.price
                                    }, 0).toLocaleString()
                                }
                            </p>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => {
                            doUpdateTicket(seats);
                            booking(seats, movie)
                            onClose();
                        }}>
                            Book
                        </Button>{' '}
                        <Button color="secondary" onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalBooking;