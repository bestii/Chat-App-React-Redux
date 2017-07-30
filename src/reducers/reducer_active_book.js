/* State argument is not the application state, It is the state this-
    reducer is responsible for */
// Here action is something that is send from the action creator
// state will be the one previously retuned by reducer.
export default function(state = null, action) {
    switch(action.type){
        case 'BOOK_SELECTED' : 
            return action.payload;
    }
    return state;
}