import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import PlaceIcon from '@material-ui/icons/Place'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import SearchIcon from '@material-ui/icons/Search'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/core/styles'

import FeaturedCard from './featured-card'
import ItemCard from './item-card'
import Data from '../../data/collection.json'

const styles = theme => ({
  locationTextField: {
    fontSize: '1.4em',
    color: "white",
    width: '380px',
    padding: '0px'
  },
  locationTextFieldIcon: {
    fontSize: '1.5em'
  },
  buttonsPanel: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    //width: 450,
  },
  gridListTile: {
    padding: '15px',
    //minHeight: '300px'
  },
  searchButtonsPanel: {
    marginTop: '15px'
  },
  searchButtonIcon: {
    marginRight: theme.spacing.unit,
  }
})

class FindingsDialog extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      options: [ 
        { key: 'fast-food', isSelected: false },
        { key: 'coffee', isSelected: false },
        { key: 'italian', isSelected: false },
        { key: 'pizza', isSelected: false },
        { key: 'bar', isSelected: false },
        { key: 'steak', isSelected: false },
        { key: 'bakery', isSelected: false },
        { key: 'breakfast', isSelected: false },
        { key: 'all', isSelected: true },
      ]
    }
  }

  _onDialogCloseBtnClick = () => {
    this.props.onClose()
  }

  render() {
    const { classes } = this.props
    const { isOpen } = this.props

    let collection = Data.restaurants.filter(recordset => {
      return recordset.restaurant != null &&
      recordset.restaurant.featured_image != null &&
      recordset.restaurant.featured_image.length > 0
    })
    let featuredRestaurant = collection[0].restaurant
    let restaurants = collection.slice(1, collection.length - 1)

    return (
      <div>
        <Dialog
          open={isOpen}
          onClose={this._onDialogCloseBtnClick}
          scroll='paper'
          aria-labelledby="scroll-dialog-title"
        >
          <DialogContent>
            <DialogContentText>
              <FeaturedCard restaurant={featuredRestaurant} />
              <div className={classes.descriptionPanel}>
                <Typography component="div" className={classes.descriptionText}>
                  {restaurants.length} spots recommended for you
                </Typography>
              </div>
              <GridList className={classes.gridList} cols={2}>
                {
                  restaurants.map(recordset => {
                    return (
                      <GridListTile className={classes.gridListTile}>
                        <div className={classes.itemsPanel}>
                          <ItemCard restaurant={recordset.restaurant} />
                        </div>
                      </GridListTile>
                    )
                  })
                }
              </GridList>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this._onDialogCloseBtnClick} color="primary">
              Close and Start New Search
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

FindingsDialog.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FindingsDialog)