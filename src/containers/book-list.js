/**
 * Created by Akshat on 11-08-2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends Component{
    constructor(props){
        super(props);
    }

    renderList(){
        return this.props.books.map((book)=>{
            return <li onClick={(e)=>{this.props.selectBook(book)}} key={book.title} className="list-group-item">{book.title}</li>
        })
    }

    render(){
        return (
            <ul className="col-sm-4 list-group">
                {this.renderList()}
            </ul>
        )
    }
}

function mapDispatchToProp(dispatch) {
    return bindActionCreators(
        {
            selectBook: selectBook
        }, dispatch)
}

function mapStateToProp(state) {
    return {
        books: state.books
    }
}


export default connect(mapStateToProp, mapDispatchToProp)(BookList)