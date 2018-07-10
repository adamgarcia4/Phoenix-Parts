import React, { Component } from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  withStyles,
  Button
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
const styles = {
  panel: {
    marginBottom: '10px',
    width: '100%'
  },
  column: {
    flexBasis: '33.33%'
  }
}

class SimpleAccordion extends Component {
  render() {
    const { classes, header, body, buttons } = this.props
    return (
      <ExpansionPanel className={classes.panel} key={header}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>{header}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{body}</Typography>
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
          <Button size="small">{buttons[0]}</Button>
          <Button
            size="small"
            color="primary"
            onClick={() => this.props.onSubmit()}
          >
            {buttons[1]}
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    )
  }
}

const styledComponent = withStyles(styles)(SimpleAccordion)

const createExpansionPanel = ({ header, body, buttons }) => {}

export default styledComponent
