import axios from "axios"; 

const FETCH_CHARS_FAILED="FETCH_CHARS_FAILED";
const SET_CHARS="SET_CHARS";
const NEW_CHAR="NEW_CHAR";

export const fetchCharsFailed = () => {
    return {
        type: FETCH_CHARS_FAILED,
        // error: true
    };
}
export const setChars = (items) => {
    return {
        type: SET_CHARS,
        items: items
    }
}
export const fetchingChars= () => {
    let serverURL = "https://www.breakingbadapi.com/api/characters/"    
    return dispatch => {
            axios.get (serverURL)
            .then(response => {
                dispatch(setChars(response.data))
                console.log(response.data);
             })
             .catch(error => {
                 dispatch(fetchCharsFailed());
             } );
        };
}

export const newChar= (item_nmbr) => {
    return {
        type: NEW_CHAR,
        item_nmbr: item_nmbr
    };
}


