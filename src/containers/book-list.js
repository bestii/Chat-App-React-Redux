import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

// A container is actually a smart component that is able to interact with model(redux)
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key={book.title}
                    onClick={()=>{this.props.selectBook(book)}}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                {this.renderList()}
            </ul>
        );
    }
};

function mapStateToProps(state) {
    // Whatever is returned is shown up as props in BookList
    return (
        {
            books: state.books
        }
    );
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatcherToProps(dispatch) {
    // When selectBook is called, the result should be passed to our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}
// Promote BookList froam a component ti a container -it needs to know about this  new -
// dispatch metho, selectBook. Make it avialable as a prop
export default connect(mapStateToProps, mapDispatcherToProps)(BookList);