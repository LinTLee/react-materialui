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

import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  itemCard: {
    display: 'flex',
    width: '650px'
  },
  itemCardDetails: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    fontSize: '0.8em',
    textAlign: 'left'
  },
  itemCardContent: {
    flex: '1 0 auto',
  },
  itemCardCover: {
    width: 150,
  }
})

class ItemCard extends React.Component {
  render() {
    const { classes } = this.props
    const { title } = this.props
    const { address } = this.props
    const { featuredImageUrl } = this.props

    return (
      <Card className={classes.itemCard}>
        <div className={classes.itemCardDetails}>
          <CardContent className={classes.itemCardContent}>
            <Typography component="h5" className={classes.featuredCardContentTitle}>
              Murray's Bagels
            </Typography>
            <Typography color="textSecondary" >
              500 Sixth Avenue, New York 10011, New York City, 10025
            </Typography>
          </CardContent>
        </div>
        <CardMedia
          className={classes.itemCardCover}
          image="https://b.zmtcdn.com/data/res_imagery/16773028_CHAIN_3b8b7ffafba0d8551de42a6b1b8e7f97_c.jpg?output-format=webp"
        />
      </Card>
    )
  }
}

ItemCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ItemCard)
