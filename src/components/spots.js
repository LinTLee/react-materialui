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
  topPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  topPanelGridList: {
    width: 650,
  },
  topPanelGridTile: {
    textAlign: 'left',
    minHeight: '350px'
  },
  locationIcon: {
    fontSize: '1em',
    marginRight: '10px'
  },
  locationText: {
    textAlign: 'left',
    color: 'white',
    fontSize: '2em'
  },
  chip: {
    marginRight: '10px'
  },
  featuredCard: {
    maxWidth: 350,
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
  },
  itemsPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    marginTop: '20px'
  },
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
  },
  descriptionPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  descriptionText: {
    width: 650,
    textAlign: 'left',
    color: 'white',
  },
  editPanel: {
    textAlign: 'right',
  },
  editButton: {
    color: 'white'
  },
  editIcon: {
    fontSize: '1.2em'
  }
})

class Spots extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <div >
        <Typography className="default-text" component="p" variant="caption" gutterBottom>
          Disclaimer: This app is used for Material-UI demonstration. Data is not validated and can't be used for any purpose. 
        </Typography>
        
        <div className={classes.topPanel}>
          <GridList className={classes.topPanelGridList} cols={2}>
            <GridListTile className={classes.topPanelGridTile}>
              <Typography component="h2" className={classes.locationText}>
                <LocationIcon className={classes.locationIcon} />
                New York City, NY
              </Typography>
              <br />
              <div className={classes.chips}>
                <Chip
                  icon={<FastfoodIcon />}
                  label="Fast Food"
                  className={classes.chip}
                />
                <Chip
                  icon={<CakeIcon />}
                  label="Bakery"
                  className={classes.chip}
                />                
              </div>
              <br />
              <div className={classes.editPanel}>
                <Button className={classes.editButton}>
                  <EditIcon className={classes.editIcon} />&nbsp;&nbsp;Edit
                </Button>
              </div>
              <br />
              <br />
            </GridListTile>
            <GridListTile className={classes.topPanelGridTile}>
              <Card className={classes.featuredCard}>
                <CardMedia
                  className={classes.featuredCardMedia}
                  image="https://b.zmtcdn.com/data/collections/356588f3c45bc9478718cbd5bacce2cf_1476696884.jpg"
                  title="Paella dish"
                />
                <CardContent>
                  <Chip color="primary" variant="outlined" label="Feature Collection" />
                  <br /><br />
                  <Typography component="h3" className={classes.featuredCardContentTitle}>
                    Brilliant bagels
                  </Typography>
                  <Typography component="p" className={classes.featuredCardContentBody}>
                    A smear of cream cheese, a slice of smoked salmon and you're in food heaven.
                  </Typography>
                </CardContent>
              </Card>
            </GridListTile>
          </GridList>
        </div>

        <div className={classes.descriptionPanel}>
          <Typography component="div" className={classes.descriptionText}>
            61 spots recommended for you
          </Typography>
        </div>
        
        <div className={classes.itemsPanel}>
          <Card className={classes.itemCard}>
            <div className={classes.itemCardDetails}>
              <CardContent className={classes.itemCardContent}>
                <Typography component="h5" className={classes.featuredCardContentTitle}>
                  Absolute Bagels
                </Typography>
                <Typography color="textSecondary" >
                  2788 Broadway, New York 10025, New York City, 10025
                </Typography>
              </CardContent>
            </div>
            <CardMedia
              className={classes.itemCardCover}
              image="https://b.zmtcdn.com/data/res_imagery/16758954_RESTAURANT_a702600b80d298493088a3e7b911019f_c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
              title="Live from space album cover"
            />
          </Card>
        </div>
        <div className={classes.itemsPanel}>
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
              title="Live from space album cover"
            />
          </Card>
        </div>
      </div>
    )
  }
}

Spots.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Spots)