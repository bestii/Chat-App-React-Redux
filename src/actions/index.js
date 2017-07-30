// all the events in redux is handled using a action
export function selectBook(book) {
    return(
        {
            // Every action has a type that identifies the type of action
            type : 'BOOK_SELECTED',
            payload : book
        }
    );
}