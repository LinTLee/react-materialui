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
import { withStyles } from '@material-ui/core/styles'

import TypeButton from './elements/type-button'
import FindingsDialog from './elements/findings-dialog'

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
    width: 450,
  },
  gridListTile: {
    padding: '15px'
  },
  searchButtonsPanel: {
    marginTop: '15px'
  },
  searchButtonIcon: {
    marginRight: theme.spacing.unit,
  }
})

class Index extends React.Component {
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
      ],
      isDialogOpen: false
    }
  }

  _onTypeButtonChange = key => {
    let options = this.state.options.map(option => {
      if (option.key !== key) {
        return option
      }
      option.isSelected = !option.isSelected
      return option
    })
    // if no option is selected, default ALL to be selected
    let isSpecificTypeSelected = this.state.options.find(option => {
      return (option.isSelected && (key !== 'all'))
    })
    // if ALL option is selected, de-select everything else
    let isAllTypesSelected = this.state.options.find(option => {
      return (option.isSelected && (key === 'all'))
    })
    options = this.state.options.map(option => {
      if (option.key !== 'all') {
        option.isSelected = (isAllTypesSelected != null) ? false : option.isSelected
        return option
      }
      option.isSelected = (isSpecificTypeSelected == null)
      return option
    })

    this.setState({
      options: options
    })
  }

  _onSearchBtnClick = () => {
    this.setState({
      isDialogOpen: true
    })
  }
  _onDialogCloseBtnClick = () => {
    this.setState({
      isDialogOpen: false
    })
  }

  render() {
    const { classes } = this.props
    let options = this.state.options

    return (
      <div >
        <Typography className="default-text" component="p" variant="caption" gutterBottom>
          Disclaimer: This app is used for Material-UI demonstration. Data is not validated and can't be used for any purpose. 
        </Typography>
        <TextField
          variant="filled"
          value="New York City, NY"
          className={classes.locationTextField}
          InputProps={{
            className: classes.locationTextField,
            startAdornment: (
              <InputAdornment position="start">
                <PlaceIcon className={classes.locationTextFieldIcon} />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <br />
        <div className={classes.buttonsPanel}>
          <GridList cellHeight={134} className={classes.gridList} cols={3}>
            {
              options.map(option => {
                return (
                  <GridListTile key={option.key}>
                    <div className={classes.gridListTile}>
                      <TypeButton selectedKey={option.key} isSelected={option.isSelected} onChange={this._onTypeButtonChange} />
                    </div>
                  </GridListTile> 
                )
              })
            }
          </GridList>
        </div>
        <div className={classes.searchButtonsPanel}>
          <Button variant="contained" size="large" color="primary" disabled={false} onClick={this._onSearchBtnClick}>
            <SearchIcon className={classes.searchButtonIcon} />
            Find GOOD FOOD SPOTS
          </Button>
          <FindingsDialog isOpen={this.state.isDialogOpen} onClose={this._onDialogCloseBtnClick} />
        </div>
      </div>
    )
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Index)