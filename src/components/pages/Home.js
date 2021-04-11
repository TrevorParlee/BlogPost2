import { Grid } from '@material-ui/core';
import React from 'react';
import image from '../../images/img-4.jpg';
import imageO from '../../images/ouch.jpg';
import imageB from '../../images/bruise.jpg';
import imageS from '../../images/sait.jpg';
import imageC from '../../images/cribbing.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';
import Footer from '../Footer';

const useStyles = makeStyles({
  root: {
    width: '90%',

    margin: 20,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    margin: 12,
  },
  media: {
    height: 500,
    width: '100%',
  },
});

function Home() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <img src={image} alt='My set up at home' width='100%' />
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <h1 className='aboutTitle'>About me</h1>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imageC}
              title='Digestion Disorders'
            />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                What I did before SAIT
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                Prior to going back to school, I worked in the construction
                industry for over a decade in progressively senior positions. In
                2017, I founded my own business and ran it as owner/operator.
                During this time, I successfully negotiated and secured
                contracts with home builders, hired and ran a team of up to
                eight employees, and managed the operations of complex projects.
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imageO}
              title='Digestion Disorders'
            />
            <CardMedia
              className={classes.media}
              image={imageB}
              title='Digestion Disorders'
            />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                How I got here! (Torn calf muscle 😭)
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                I ended up injuring myself during a recreational softball game.
                My line of work required me to be physically present and active
                on the job site, so this injury left me unable to work for
                several months. This brought to face the reality of something I
                already knew in the back of my mind; my career carried too many
                risks and may not be sustainable.
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={imageS}
              title='Digestion Disorders'
            />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                No looking back now
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                I realized that there is never a good time to make a career
                change, so if I was going to do it, it would be now or never. I
                have no regrets about my first career as I learned a lot and
                developed some great relationships and skills. I am excited to
                transfer those skills, as well as the new skills I’ve learned at
                SAIT, over to a new career in Software Development. I have
                always had a natural interest in technology. I’ve been the
                “go-to” guy for anything tech-related with my friends and
                family. Now that I am coming close to finishing the program, I
                have learned so much more. The best part about software
                development is that we are always learning and using the newest
                trends.
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Footer />
    </>
  );
}

export default Home;
