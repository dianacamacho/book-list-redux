import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    // since at first app startup we set state to null, this.props.book will be null so can't call title on it

    // so, if book prop not yet defined by user action, return early telling user to select a book
    if (!this.props.book) {
      return <div>Select a Book!</div>
    }

    // once book is selected and we have an active book, can call regular return function with book details
    return (
      <div>
        <h3>Details For:</h3>
        <div>
          {this.props.book.title}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);