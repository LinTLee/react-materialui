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
import EditIcon from '@material-ui/icons/Edit'

import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import LocationIcon from '@material-ui/icons/PinDrop'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'

import Chip from '@material-ui/core/Chip'

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  featuredCard: {
    //maxWidth: 250,
  },
  featuredCardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  featuredCardContentTitle: {
    textAlign: 'left'
  },
  featuredCardContentBody: {
    fontSize: '0.8em',
    textAlign: 'left'
  }
})

class FeaturedCard extends React.Component {
  render() {
    const { classes } = this.props
    const { restaurant } = this.props
    let title = restaurant.name
    let address = restaurant.location.address + ' ' + restaurant.location.city + ' ' + restaurant.location.zipcode
    let featuredImageUrl = restaurant.featured_image

    return (
      <div >
        <Card className={classes.featuredCard}>
          <CardMedia
            className={classes.featuredCardMedia}
            image={featuredImageUrl}
            title={title}
          />
          <CardContent>
            <Chip color="primary" variant="outlined" label="Featured Collection" />
            <br /><br />
            <Typography component="h3" className={classes.featuredCardContentTitle}>
              {title}
            </Typography>
            <Typography component="p" className={classes.featuredCardContentBody}>
              {address}
            </Typography>
          </CardContent>
        </Card>
      </div>
    )
  }
}

FeaturedCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FeaturedCard)