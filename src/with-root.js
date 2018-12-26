import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#99e4ee',
      main: '#80deea',
      dark: '#599ba3',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900',
      contrastText: '#fff',
    },
    // error: will use the default color
  },
  typography: {
    useNextVariants: true
  },
})

function withRoot (Component) {

  function WithRoot(props) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    return (
      <MuiThemeProvider theme={theme}>

        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot
}

export default withRoot