import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles(theme => ({
  card: {
    color: '#272343',
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: "170px",
    height: "170px",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  bigAvatar: {
    width: 60,
    height: 60,
  },
}));

export default function ExperienceItem() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image="https://material-ui.com/static/images/cards/live-from-space.jpg"
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h1" variant="h5">
            Software Engineer
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Bukalapak
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            April 2018 - January 2020
          </Typography>
          <Typography variant="body2" color="textSecondary">
            1. Create, design, and maintain high-traffic Personalization and Recommendation service and data pipeline.
            <br />
            2. Doing two cutovers on live service from on-premise deployment to Google Cloud
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}
