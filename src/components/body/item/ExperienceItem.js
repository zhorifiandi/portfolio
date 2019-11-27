import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    color: '#272343',
  },
  cardHeader: {
    display: 'flex',
  },
  cardImageContainer: {
    padding: '16px',
    paddingTop: '23px',
    paddingRight: '0',
  },
  cardImage: {
    width: '50px',
    height: '50px',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  content: {
    flex: '1 0 auto',
    "&:last-child": {
      paddingBottom: 0
    },
  },
  cardDescription : {
    padding: '20px',
    paddingTop: '10px',
  },
}));

export default function ExperienceItem() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <div className={classes.cardHeader}>
        <div className={classes.cardImageContainer}>
          <img className={classes.cardImage} src="https://material-ui.com/static/images/cards/live-from-space.jpg" />
        </div>
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
          </CardContent>
        </div>
      </div>

      <div className={classes.cardDescription}>
        <Typography variant="body2" color="textSecondary">
          1. Create, design, and maintain high-traffic Personalization and Recommendation service and data pipeline.
          <br />
          2. Doing two cutovers on live service from on-premise deployment to Google Cloud
        </Typography>
      </div>
      
    </Card>
  );
}
