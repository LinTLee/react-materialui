import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({})

class NotFound extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {}
  }

  render() {
    const { classes } = this.props

    return (
      <div >
        <Typography className="default-text" component="p" variant="caption" gutterBottom>
          Disclaimer: This app is used for Material-UI demonstration. Data is not validated and can't be used for any purpose. 
        </Typography>
      </div>
    )
  }
}

NotFound.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(NotFound)
