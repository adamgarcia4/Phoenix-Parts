import React from 'react'
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ExpansionPanelActions,
  Typography,
  withStyles,
  Button
} from '@material-ui/core'
import PropTypes from 'prop-types'
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

const SimpleAccordion = props => {
  const { classes, header, body, buttons, onSubmit } = props
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
          onClick={() => onSubmit()}
        >
          {buttons[1]}
        </Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}

SimpleAccordion.propTypes = {
  classes:PropTypes.object,
   header:PropTypes.string,
   body:PropTypes.string,
   buttons:PropTypes.array,
   onSubmit: PropTypes.func,
}

const styledComponent = withStyles(styles)(SimpleAccordion)

export default styledComponent
