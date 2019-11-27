import React from 'react';
import { Component } from 'react'
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PrimaryNavbar from './components/navbar/PrimaryNavbar';
import Container from '@material-ui/core/Container';
import Body from './components/body/Body'


let theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

theme = responsiveFontSizes(theme);


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PrimaryNavbar />
        <Container maxWidth="100%" style={{background: "#fafafa", height:"100vh"}}>
          <Container maxWidth="md" style={{marginTop:"80px"}}>
            <Body />
          </Container>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
