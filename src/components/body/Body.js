import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExperienceItem from './item/ExperienceItem'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    marginBottom: '25px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Body() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h1" component="h2">
          Work Experience
        </Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <ExperienceItem />
        </Grid>
      </Grid>
    </div>
  );
}
