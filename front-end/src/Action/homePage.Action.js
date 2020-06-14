import * as type from '../Constants/type';
import * as url from '../Constants/url';

export const getMovies = () => dispatch => {
    axios.get(url)
}