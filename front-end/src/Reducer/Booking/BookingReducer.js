import * as type from '../../Constants/type';


const initialState = {
    tickets: [],
    getTicket: false,
    getTicketSuccess: false,
    getTicketError: null,
    
    seats: [],
    getSeat: false,
    getSeatSuccess: false,
    getSeatError: null,

    updateTicket: false,
    updateTicketSuccess: false,
    updateTicketError: null,

    book: false,
    bookSuccess: false,
    bookError: null,

    orders : [],
    getOrder: false,
    getOrderSuccess: false,
    getOrderError: null,

    resetTicket: false,
    resetTicketSuccess: false,
    resetTicketError: null,
    
    deleteOrder: false,
    deleteOrderSuccess: false,
    deleteOrderError: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_TICKET:
            return { ...state, getTicket: true, tickets: [], getTicketSuccess: false, getTicketError: null }
        case type.GET_TICKET_SUCCESS:
            return { ...state, getTicket: false, tickets: action.payload }
        case type.GET_TICKET_ERROR:
            return { ...state, getTicket: false, getTicketError: action.payload }
        case type.GET_SEAT:
            return {...state, getSeat: true, seats: [], getSeatSuccess: false, getSeatError: null}
        case type.GET_SEAT_SUCCESS:
            return {...state, getSeat: false, getSeatSuccess: true, seats: action.payload}
        case type.GET_SEAT_ERROR:
            return {...state, getSeat: false, getSeatError: action.payload}
        case type.UPDATE_TICKET:
            return {...state, updateTicket: true, updateTicketSuccess: false, updateTicketError: null}
        case type.UPDATE_TICKET_SUCCESS:
            return {...state, updateTicket: false, updateTicketSuccess: true}
        case type.UPDATE_TICKET_ERROR:
            return {...state, updateTicket: false, updateTicketError: action.payload}
        case type.BOOK:
            return {...state, book: true, bookSuccess: false, bookError: null}
        case type.BOOK_SUCCESS:
            return {...state, book: false, bookSuccess: true}
        case type.BOOK_ERROR:
            return {...state, book: false, bookError: action.payload}
        case type.GET_ORDER:
            return {...state, getOrder: true, getOrderSuccess: false, getOrderError: null, orders: []}
        case type.GET_ORDER_SUCCESS:
            return {...state, getOrder: false, getOrderSuccess: true, orders: action.payload}
        case type.GET_ORDER_ERROR:
            return {...state, getOrder: false, getOrderError: action.payload}
        case type.RESET_TICKET: 
            return {...state, resetTicket: true, resetTicketSuccess: false, resetTicketError: null}
        case type.RESET_TICKET_SUCCESS:
            return {...state, resetTicket: false, resetTicketSuccess: true}
        case type.RESET_TICKET_ERROR:
            return {...state, resetTicket: false, resetTicketError: action.payload}
        case type.DELETE_ORDER:
            return {...state, deleteOrder: true, deleteOrderSuccess: false, deleteOrderError: null}
        case type.DELETE_ORDER_SUCCESS:
            return {...state, deleteOrder: false, deleteOrderSuccess: true}
        case type.DELETE_ORDER_ERROR:
            return {...state, deleteOrder: false, deleteOrderError: action.payload}
        default:
            return state
    }
}