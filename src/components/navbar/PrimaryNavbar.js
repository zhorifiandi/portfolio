import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuList from './menu/MenuList'
import SideList from './menu/SideList'

const useStyle = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      fontFamily: "Helvetica Neue",
    },
    appBar: {
      background: "white",
      color: "black",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
        display: 'flex',
        },
      },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        },
    },
  }));  


export default function PrimaryNavbar() { 
    const classes = useStyle();

    const [state, setState] = React.useState({
        left: false,
      });

    const toggleDrawer = (side, open) => event => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setState({ ...state, [side]: open });
    };

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <div className={classes.sectionMobile} >
                <IconButton onClick={toggleDrawer('left', true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </div>
            <Typography variant="h5" className={classes.title}>
              ARIZHO
            </Typography>
            <div className={classes.sectionDesktop} >
                <MenuList/>
            </div>
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
            open={state.left}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
        >
            <SideList className={classes.list}/>
        </SwipeableDrawer>
      </div>
    );
}