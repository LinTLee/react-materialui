import React from 'react'
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import LocalCafeIcon from '@material-ui/icons/LocalCafe'
import RestaurantIcon from '@material-ui/icons/Restaurant'
import LocalPizzaIcon from '@material-ui/icons/LocalPizza'
import LocalBarIcon from '@material-ui/icons/LocalBar'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import CakeIcon from '@material-ui/icons/Cake'
import BreakfastIcon from '@material-ui/icons/WbSunny'
import AllIcon from '@material-ui/icons/Apps'
import { withStyles } from '@material-ui/core/styles'

let _arrowGenerator = (color) => {
  return {
    '&[x-placement*="bottom"] $arrow': {
      top: 0,
      left: 0,
      marginTop: '-0.9em',
      width: '3em',
      height: '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: `transparent transparent ${color} transparent`,
      }
    }
  }
}

const styles = theme => ({
  arrowPopper: _arrowGenerator(theme.palette.grey[700]),
  arrow: {
    position: 'absolute',
    fontSize: '9',
    width: '3em',
    height: '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid',
    },
  },
  tooltipLabel: {
    fontSize: '12px'
  },
  foodButton: {
    color: 'white',
    borderColor: 'white',
    width: '100px',
    height: '100px'
  },
  foodButtonSelected: {
    color: '#2c2c33',
    borderColor: 'white',
    width: '100px',
    height: '100px'
  },
  foodButtonIcon: {
    fontSize: '3em'
  },
  foodButtonBadge: {
    fontSize: '3em'
  }
})

class TypeButton extends React.Component {

  constructor (props, context) {
    super(props, context)
    const { classes } = this.props
    const { isSelected } = this.props

    this.state = {
      arrowRef: null,
      types: [ 
        { key: 'fast-food', label: 'Fast Food', icon: <FastfoodIcon className={classes.foodButtonIcon} /> },
        { key: 'coffee', label: 'Coffee', icon: <LocalCafeIcon className={classes.foodButtonIcon} /> },
        { key: 'italian', label: 'Italian Restaurant', icon: <RestaurantIcon className={classes.foodButtonIcon} /> },
        { key: 'pizza', label: 'Pizza', icon: <LocalPizzaIcon className={classes.foodButtonIcon} /> },
        { key: 'bar', label: 'Drink and Bar', icon: <LocalBarIcon className={classes.foodButtonIcon} /> },
        { key: 'steak', label: 'Steak House', icon: <RoomServiceIcon className={classes.foodButtonIcon} /> },
        { key: 'bakery', label: 'Bakery', icon: <CakeIcon className={classes.foodButtonIcon} /> },
        { key: 'breakfast', label: 'Breakfast', icon: <BreakfastIcon className={classes.foodButtonIcon} /> },
        { key: 'all', label: 'Everything', icon: <AllIcon className={classes.foodButtonIcon} /> },
      ],
      isSelected: isSelected
    }
  }

  _handleArrowRef = node => {
    this.setState({
      arrowRef: node,
    })
  }

  _onButtonClick = () => {
    const { selectedKey } = this.props
    this.props.onChange(selectedKey)
  }

  render () {
    const { classes } = this.props
    const { selectedKey } = this.props
    const { isSelected } = this.props

    let selectedOption = this.state.types.find(option => {
      return (option.key === selectedKey)
    })
    
    return ( 
      <div>
        <Tooltip
          title={
            <React.Fragment>
              <span className={classes.tooltipLabel}>{selectedOption.label}</span>
              <span className={classes.arrow} ref={this._handleArrowRef} />
            </React.Fragment>
          }
          classes={{ popper: classes.arrowPopper }}
          PopperProps={{
            popperOptions: {
              modifiers: {
                arrow: {
                  enabled: Boolean(this.state.arrowRef),
                  element: this.state.arrowRef,
                },
              },
            },
          }}
        >
          <Button
            variant={isSelected ? 'contained' : 'outlined'}
            className={isSelected ? classes.foodButtonSelected : classes.foodButton}
            onClick={this._onButtonClick}
          >
            {selectedOption.icon}
          </Button>
        </Tooltip>
      </div>
    )
  }
}

TypeButton.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TypeButton)