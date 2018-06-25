import React, { Component } from 'react'
import { connect } from "react-redux";
// import { selectBook } from "../actions/index";
import { addPart } from "../../store/actions";
import { bindActionCreators } from "redux";

class PartsTable extends Component {

  constructor(props) {
    super(props);
    // this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addPart('test')
  }

  render() {

    const partsNames = this.props.parts.map((part) => {
      return <li key={part.id}> {part.id} </li>
    })

    return (
      <div>
        Hi, parts table
        <br />
        <ul>
          {partsNames}
        </ul>
        <button onClick={this.handleClick}>HI</button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  // Whatever is returned will show up as props
  console.log('state is: ', state)
  return {
    parts: state.parts
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ addPart }, dispatch);
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PartsTable)

