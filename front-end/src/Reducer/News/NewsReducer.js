import * as type from '../../Constants/type';

const initialState = {
    news: [],
    getNews: false,
    getNewsuccess: false,
    getNewsError: false,

    oneNews: {},
    getOneNews: false,
    getOneNewSuccess: false,
    getOneNewsError: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case type.GET_ALL_NEWS:
            return {...state,getNews: true, news: [], getNewsuccess: false, getNewsError: null}
        case type.GET_ALL_NEWS_SUCCESS:
            return {...state, getNews: false, getNewsuccess: true, news: action.payload}
        case type.GET_ALL_NEWS_ERROR:
            return {...state, getNews: false, getNewsuccess: action.payload}
        case type.GET_ONE_NEWS:
            return {...state, getOneNews: true, getNewsuccess: false, getNewsError: null}
        case type.GET_ONE_NEWS_SUCCESS:
            return {...state, getOneNews: false, getOneNewSuccess: true, oneNews: action.payload}
        case type.GET_ONE_NEWS_ERROR:
            return {...state, getOneNews: false, getOneNewsError: true, getOneNewsError: action.payload}
        default:
            return state
        }
}