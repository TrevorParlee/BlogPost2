import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 15,
  },
  media: {
    height: 140,

    margin: 5,
  },
});

function Projects() {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  This portfolio page was built following this tutorial
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Finished on: 2/21/2021 Location: Calgary Type: school
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This was the portfolio I created following the tutorial on
                  youtube.
                  https://www.youtube.com/watch?v=NO7_jgzVgbc&ab_channel=TraversyMedia
                  This is the link to this page on my GitHub:
                  https://github.com/TrevorParlee/TrevorPortfolio This is
                  built-in React and styled with tailwindcss.
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://www.youtube.com/watch?v=NO7_jgzVgbc&ab_channel=TraversyMedia'
                    onClick={preventDefault}
                  >
                    Link to the tutorial
                  </Link>
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://github.com/TrevorParlee/TrevorPortfolio'
                    onClick={preventDefault}
                  >
                    Link to the project on my gitHub
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  1st Video blog post for Emerging trends
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Finished on: 2/27/2021 Location: Calgary AB Type: school
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This video shows me working through the first part of the
                  JavaScript course and then starting the React course. Both are
                  on Udemy. I tried to have some fun with the video. I hope you
                  enjoy 😁
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://www.youtube.com/watch?v=IvJ8Abc6qos&ab_channel=TrevorParlee'
                    onClick={preventDefault}
                  >
                    Link to the video
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  1st blog post for emerging trends part B
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Finished on: 2/28/2021 Location: Calgary AB Type: school
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This video is mostly just showing the work I've done with
                  React. Nothing too final but a look into what I've attempted.
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://www.youtube.com/watch?v=_CuZTd2OkMo&ab_channel=TrevorParlee'
                    onClick={preventDefault}
                  >
                    Link to the tutorial
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
      <Grid
        container
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
      >
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Here is the website I started for Health Results.
                </Typography>

                <Typography variant='body2' color='textSecondary' component='p'>
                  This was the website I started for Health Results
                  https://hrbytrevor.netlify.app/ This is the link to the
                  project on my GitHub:
                  https://github.com/TrevorParlee/HealthResults This is built-in
                  React and styled with css and material-ui
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://hrbytrevor.netlify.app/'
                    onClick={preventDefault}
                  >
                    Link to the website
                  </Link>
                </Typography>
                <Typography className={classes.root}>
                  <Link url='https://github.com/TrevorParlee/HealthResults'>
                    Link to the project on my gitHub
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  1st Video blog post for Emerging trends
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Finished on: 2/27/2021 Location: Calgary AB Type: school
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This video shows me working through the first part of the
                  JavaScript course and then starting the React course. Both are
                  on Udemy. I tried to have some fun with the video. I hope you
                  enjoy 😁
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://www.youtube.com/watch?v=IvJ8Abc6qos&ab_channel=TrevorParlee'
                    onClick={preventDefault}
                  >
                    Link to the video
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  1st blog post for emerging trends part B
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Finished on: 2/28/2021 Location: Calgary AB Type: school
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  This video is mostly just showing the work I've done with
                  React. Nothing too final but a look into what I've attempted.
                </Typography>
                <Typography className={classes.root}>
                  <Link
                    href='https://www.youtube.com/watch?v=_CuZTd2OkMo&ab_channel=TrevorParlee'
                    onClick={preventDefault}
                  >
                    Link to the tutorial
                  </Link>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Projects;
