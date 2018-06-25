import React, { Component } from 'react'
import { connect } from "react-redux";
// import { selectBook } from "../actions/index";
import { bindActionCreators } from "redux";

class PartsTable extends Component {
  render () {
    return (
      <div>
        Hi, parts table
      </div>
    )
  }
}


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of BookList
  console.log('state is: ', state);
  return {
    books: state.books
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  // return bindActionCreators({ selectBook: selectBook }, dispatch);
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsTable)

