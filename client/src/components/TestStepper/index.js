import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Stepper from '@material-ui/core/Stepper'
// import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
// import StepLabel2 from './StepLabel'
// import StepConnector from './StepConnector'
import Step from './Step'

const styles = theme => ({
  root: {
    width: '90%'
  },
  button: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
})

class HorizontalLinearStepper extends React.Component {
  state = {
    activeStep: 0,
    skipped: new Set()
  }

  isStepOptional = step => {
    return step === 1
  }

  handleNext = () => {
    const { activeStep } = this.state
    let { skipped } = this.state
    if (this.isStepSkipped(activeStep)) {
      skipped = new Set(skipped.values())
      skipped.delete(activeStep)
    }
    this.setState({
      activeStep: activeStep + 1,
      skipped
    })
  }

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }))
  }

  handleSkip = () => {
    const { activeStep } = this.state
    if (!this.isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    this.setState(state => {
      const skipped = new Set(state.skipped.values())
      skipped.add(activeStep)
      return {
        activeStep: state.activeStep + 1,
        skipped
      }
    })
  }

  handleReset = () => {
    this.setState({
      activeStep: 0
    })
  }

  isStepSkipped(step) {
    const { skipped } = this.state
    return skipped.has(step)
  }

  render() {
    const { classes, steps } = this.props
    const stepsArr = steps.map(stepInfo => stepInfo.label)
    const { activeStep } = this.state

    const getStepperRow = () => {
      return (
        <Stepper activeStep={activeStep}>
          {stepsArr.map((label, index) => {
            const props = {}
            const labelProps = {}
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>
            }
            if (this.isStepSkipped(index)) {
              props.completed = false
            }
            return (
              <Step
                key={label}
                {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            )
          })}
        </Stepper>
      )
    }

    const getActiveStepContent = () => {
      const { steps } = this.props
      return <Typography className={classes.instructions}>{steps[activeStep].content()}</Typography>
    }

    const getButtonRow = () => {
      return (
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={this.handleBack}
            className={classes.button}>
            Back
          </Button>
          {this.isStepOptional(activeStep) && (
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleSkip}
              className={classes.button}>
              Skip
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={this.handleNext}
            className={classes.button}>
            {activeStep === stepsArr.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      )
    }

    return (
      <div className={classes.root}>
        {getStepperRow()}
        {/* <Step>
          <StepLabel2 />
        </Step> */}
        {/* <StepConnector />
        <StepLabel2 />
        <StepLabel2 /> */}

        <div>
          {activeStep === stepsArr.length ? (
            <div>
              <Typography className={classes.instructions}>All steps completed - you&quot;re finished</Typography>
              <Button
                onClick={this.handleReset}
                className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
              <div>
                {getActiveStepContent()}
                {getButtonRow()}
              </div>
            )}
        </div>
      </div>
    )
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.func.isRequired
    })
  ).isRequired
}

export default withStyles(styles)(HorizontalLinearStepper)
