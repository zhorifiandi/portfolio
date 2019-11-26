import React from 'react';
import { Component } from 'react'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import PrimaryNavbar from './components/navbar/PrimaryNavbar';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';


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
        <Container fixed style={{marginTop:"9.5vh"}}>
          <Box component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
        </Container>
      </ThemeProvider>
    );
  }
}

export default App;
