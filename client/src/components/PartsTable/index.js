import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { selectBook } from "../actions/index";
import { addPart } from '../../store/actions'
import { bindActionCreators } from 'redux'
import { withStyles } from '@material-ui/core/styles'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  }
})

// TODO action is conditional
const columnFields = ['Part Name', 'Part Number', 'Qty', 'location', 'Action']

const columnHeaders = columnFields.map(field => {
  return <TableCell id={field}>{field}</TableCell>
})

let id = 0
function createData(name, calories, fat, carbs, protein) {
  id += 1
  return { id, name, calories, fat, carbs, protein }
}

class PartsTable extends Component {
  constructor(props) {
    super(props)
    // this.state = { isToggleOn: true };
    this.classes = props.classes
    // This binding is necessary to make `this` work in the callback
    console.log('partssss', this.props.parts)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.addPart('test')
  }

  render() {
    const columnRows = this.props.parts.map((part, index) => {
      return (
        <TableRow key={index}>
          <TableCell component="th" scope="row">
            {part['partName']}
          </TableCell>
          <TableCell>{part['partNumber']}</TableCell>
          <TableCell>{part['Qty']}</TableCell>
          <TableCell>{part['location']}</TableCell>
          <TableCell>{part['Action']}</TableCell>
        </TableRow>
      )
    })

    return (
      <Paper className={this.classes.root}>
        <Table className={this.classes.table}>
          <TableHead>
            <TableRow>{columnHeaders}</TableRow>
          </TableHead>
          <TableBody>{columnRows}</TableBody>
        </Table>
      </Paper>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  return {
    parts: state.parts
  }
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ addPart }, dispatch)
  return {}
}

const styledComponent = withStyles(styles)(PartsTable)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(styledComponent)
