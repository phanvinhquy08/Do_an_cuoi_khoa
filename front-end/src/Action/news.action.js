import axios from 'axios';

import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const getNews = () => ({
    type: type.GET_ALL_NEWS
});
export const getNewsuccess = news => ({
    type: type.GET_ALL_NEWS_SUCCESS,
    payload: news
})
export const getNewsError = error => ({
    type: type.GET_ALL_NEWS_ERROR,
    payload: error
});

export const doGetNews = () => async dispatch => {
    dispatch(getNews())
    try {
        const res = await axios.get(url.url_news);
        if(res && res.status === 200) {
            dispatch(getNewsuccess(res.data));
        }
    } catch (error) {
        dispatch(getNewsError(error))
    }

}
// GET ONE
export const getOneNews = () => ({
    type: type.GET_ONE_NEWS
});
export const getOneNewsuccess = news => ({
    type: type.GET_ONE_NEWS_SUCCESS,
    payload: news
});
export const getOneNewsError = error => ({
    type: type.GET_ONE_NEWS_ERROR,
    payload: error
});
export const doGetOneNews = id => async dispatch => {
    dispatch(getOneNews());
    try {
        const res = await axios.get(url.url_news + "/" + id);
        if(res && res.status === 200) {
            dispatch(getOneNewsuccess(res.data))
        }
    } catch (error) {
        dispatch(getOneNewsError(error))
    }
}
