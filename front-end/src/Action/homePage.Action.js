import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const getMovies = (limit) => dispatch => {
    axios.get(url.url_movie + "?_page-0&_limit=" + limit).then()
}
export const getOneMovies = id => dispatch => {
    axios.get(url.url_movies + "/" + id)
}