import React from 'react'
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography'

import FastfoodIcon from '@material-ui/icons/Fastfood'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import CakeIcon from '@material-ui/icons/Cake'
import BreakfastIcon from '@material-ui/icons/WbSunny'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import LocationIcon from '@material-ui/icons/PinDrop'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

import Chip from '@material-ui/core/Chip'


import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  avator: {
    margin: 10,
    width: 90,
    height: 90,
  },
  itemCardContentTitle: {
    width: '100%',
  },
})

class ItemCard extends React.Component {
  render() {
    const { classes } = this.props
    const { restaurant } = this.props
    let title = restaurant.name
    let address = restaurant.location.address
    let featuredImageUrl = restaurant.featured_image

    return (
      <div>
        <Grid container justify="center" alignItems="center">
          <Avatar alt={title} src={featuredImageUrl} className={classes.avator} />
          <Typography component="h5" className={classes.itemCardContentTitle}>
            {title}
          </Typography>
          <Typography color="textSecondary" >
            {address}
          </Typography>
        </Grid>
      </div>
    )
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemCard)
