import Axios from 'axios';
import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const getTicket = () => ({
    type: type.GET_TICKET
})
export const getTicketSuccess = tickets => ({
    type: type.GET_TICKET_SUCCESS,
    payload: tickets
})
export const getTicketError = error => ({
    type: type.GET_TICKET_ERROR,
    payload: error
})
export const getTicketBySchedule = (movieId, date, start) => async dispatch => {
    dispatch(getTicket())
    try {
        const day = date.split("-").join("/")
        const res = await Axios.get(
            `${url.url_schedules_jwt}?_embed=tickets&_expand=movie&movieId=${movieId}&date=${day}&start=${start}`,
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        )
        if (res && res.status === 200) {
            dispatch(getTicketSuccess(res.data))
        }
    } catch (error) {
        dispatch(getTicketError(error))
    }
}
// pick 
export const getSeat = () => ({
    type: type.GET_SEAT
})
export const getSeatSuccess = seats => ({
    type: type.GET_SEAT_SUCCESS,
    payload: seats
})
export const getSeatError = error => ({
    type: type.GET_SEAT_ERROR,
    payload: error
})
export const doGetSeat = arr => async dispatch => {
    dispatch(getSeat());
    try {
        const qs = arr.map(item => "id=" + item).join("&")
        const res = await Axios.get(
            `${url.url_tickets_jwt}?${qs}&_expand=seat&_expand=schedule`,
            { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
        )
        if (res && res.status === 200) {
            dispatch(getSeatSuccess(res.data))
        }
    } catch (error) {
        dispatch(getSeatError(error))
    }
}
// UPDATE TICKET
export const updateTicket = () => ({
    type: type.UPDATE_TICKET
})
export const updateTicketSuccess = () => ({
    type: type.UPDATE_TICKET_SUCCESS,
})
export const updateTicketError = error => ({
    type: type.UPDATE_TICKET_ERROR,
    payload: error
})
export const doUpdateTicket = (seats) => async dispatch => {
    dispatch(updateTicket());
    try {
        seats.forEach(seat => {
            Axios.put(url.url_tickets + "/" + seat.id, { ...seat, taken: true, user: JSON.parse(localStorage.getItem("currentAccount")).email })
                .then(res => dispatch(updateTicketSuccess(res)))
        });
    } catch (error) {
        dispatch(updateTicketError(error))
    }
}
// book
export const book = () => ({
    type: type.BOOK
})
export const bookSuccess = () => ({
    type: type.BOOK_SUCCESS,
})
export const bookError = error => ({
    type: type.BOOK_ERROR,
    payload: error
})
export const booking = (seats, movie) => async dispatch => {
    dispatch(book());
    try {
        const userRes = await Axios.get(url.url_users + "?email=" + JSON.parse(localStorage.getItem("currentAccount")).email);
        const user = userRes.data[0];
        const res = await Axios.post(url.url_orders, {userId: user.id, tickets: seats, movie});
        if(res && res.status === 200) {
            dispatch(bookSuccess(res.data))
        }
    } catch (error) {
        dispatch(bookError(error))
    }
}
// get order
export const getOrder = () => ({
    type: type.GET_ORDER
})
export const getOrderSuccess = orders => ({
    type: type.GET_ORDER_SUCCESS,
    payload: orders
})
export const getOrderError = error => ({
    type: type.GET_ORDER_ERROR,
    payload: error
})
export const doGetOrder = (email) => async dispatch => {
    dispatch(getOrder());
    try {
        const userRes = await Axios.get(url.url_users + "?email=" + email);
        const user = userRes.data[0];
        const res = await Axios.get(url.url_orders + "?_expand=user&userId=" + user.id);
        if(res && res.status === 200) {
            dispatch(getOrderSuccess(res.data))
        }
    } catch (error) {
        dispatch(getOrderError(error))
    }
}
// DELETE ORDER
export const deleteOrder = () => ({
    type: type.DELETE_ORDER
})
export const deleteOrderSuccess = () => ({
    type: type.DELETE_ORDER_SUCCESS
})
export const deleteOrderError = () => ({
    type: type.DELETE_ORDER_ERROR
})
export const doDeleteOrder = id => async dispatch => {
    dispatch(deleteOrder());
    try {
        const res = await Axios.delete(url.url_orders + "/" + id);
        if(res && res.status === 200) {
            dispatch(deleteOrderSuccess(res.data))
        }
    } catch (error) {
        dispatch(deleteOrderError(error))
    }
}
export const resetTicket = () => ({
    type: type.RESET_TICKET
})
export const resetTicketSuccess = () => ({
    type: type.RESET_TICKET_SUCCESS,
})
export const resetTicketError = error => ({
    type: type.RESET_TICKET_ERROR,
    payload: error
})
export const doResetTicket = (seats) => async dispatch => {
    dispatch(resetTicket());
    try {
        seats.forEach(seat => {
            Axios.put(url.url_tickets + "/" + seat.id, { ...seat, taken: false, user: null })
                .then(res => dispatch(resetTicketSuccess(res)))
        });
    } catch (error) {
        dispatch(resetTicketSuccess(error))
    }
}