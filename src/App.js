import React from 'react';
import { Component } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PrimaryNavbar from './components/navbar/PrimaryNavbar';
import Container from '@material-ui/core/Container';
import Body from './components/body/Body'


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '"Helvetica Neue"',
      'Roboto',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});


class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <PrimaryNavbar />
        <Container maxWidth="100%" style={{background: "#edededed", height:"100vh"}}>
          <Container maxWidth="md" style={{marginTop:"80px"}}>
            <Body />
          </Container>
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
