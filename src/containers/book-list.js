import React, { Component } from 'react';
import { connect } from 'react-redux';

// A container is actually a smart component that is able to interact with model(redux)
class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

function mapStateToProps(state){
    // Whatever is returned is shown up as props in BookList
    return(
        {
            books : state.books
        }
    );
}

export default connect(mapStateToProps)(BookList);