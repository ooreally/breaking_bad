import {updateObject} from "../../shared/utility"; 

const initialState= {
        error: null,
        //isLoaded: false,
        items: [],
        clicked: false,
        item_nmbr: null,
        
}
const fetchCharsfailed = (state) => {
    return updateObject(state,{error: true});
}

const setChars = (state,action) => {
    return updateObject(state, {
        items: action.items
    });

}
const newChar = (state,action) => {
    return updateObject (state,{
        item_nmbr: action.item_nmbr
    });
}


const reducer = (state=initialState, action) => {
    switch(action.type)
    {
        case 'FETCH_CHARS_FAILED': return fetchCharsfailed(state);
        case 'SET_CHARS': return setChars(state,action);
        case 'NEW_CHAR' : return newChar(state,action);
        default: return state;
    }

}

export default reducer;