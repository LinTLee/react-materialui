import React from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'

import Index from 'components/index'
import NotFound from 'components/404'
import Spots from 'components/spots'
import withRoot from '../with-root'

const styles = theme => ({
  root: {
    backgroundColor: '#2c2c33',
  },
})

class AppRouter extends React.Component {

  render () {
    const { classes } = this.props

    return(
      <BrowserRouter>
        <div className={classes.root}>
        <Switch>
            <Route path="/" component={Index} exact={true} />
            <Route path="/spots" component={Spots} exact={true} />
            <Route component={NotFound} />
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

AppRouter.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(AppRouter))