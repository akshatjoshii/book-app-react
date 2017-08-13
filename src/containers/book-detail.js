/**
 * Created by Akshat on 13-08-2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

class BookDetail extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        if(this.props.book==null){
            return(<div>
                Choose A Book
            </div>)
        }
        
        return (
            <div>
                <h3>
                    Details For:
                </h3>
                <div>
                   Title: {this.props.book.title}
                </div>
                <div>
                    Pages: {this.props.book.page}
                </div>
            </div>
        )

    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetail);