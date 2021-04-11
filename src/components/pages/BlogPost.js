import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Autorenew } from '@material-ui/icons';
import image from '../../images/blogTop.png';
import image1 from '../../images/home1.png';
import image2 from '../../images/homeCode.png';
import image3 from '../../images/aboutMePage.png';
import image4 from '../../images/aboutCode.png';
import image5 from '../../images/appCode.png';
import image6 from '../../images/faqPage.png';
import image7 from '../../images/faqCode.png';
import image8 from '../../images/navBarCode.png';
import image9 from '../../images/navBarCodeBottom.png';
import image10 from '../../images/reviewCode.png';
import image11 from '../../images/reviewCodeBottom.png';
import image12 from '../../images/treatmentPage.png';
import image13 from '../../images/treatmentCode.png';
import image14 from '../../images/useState1.png';
import image15 from '../../images/useState2.png';
import image16 from '../../images/useState3.png';
import Footer from '../Footer';

const useStyles = makeStyles({
  root: {
    width: '80%',

    margin: 20,
  },

  title: {
    fontSize: 20,
  },
  pos: {
    margin: 12,
  },
  media: {
    width: '100%',
  },
});

function BlogPost() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <img src={image} alt='My set up at home' width='100%' />
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <h1 className='aboutTitle'>Blog Post 2</h1>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <img src={image} alt='app.js code' width='100%' />
          <CardActionArea>
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                App.js Code
              </Typography>
              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                The first image I have here is showing what the App.js code
                looks like. Using the react-router-dom package which contains
                the BrowserRouter, Router, Switch, and Route methods we can
                easily navigate through the virtual DOM that React uses. You get
                this package by using the terminal and typing in the command
                “npm install react-router-dom”. Starting from the NavBar
                component, the links on the nav bar will tell the virtual DOM
                what page you want to view.{' '}
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                {`<Switch>`}
                <br></br>
                {`<Route path=’/’ exact component={Home}>`}
                <br></br>
                {`</Switch>`}
                <br></br>
                <br></br>
                This code here will navigate you to the Home screen with the URL
                ending in ‘/’. With the page that I am using for the demo the
                nav bar is always visible and makes very easy to switch from
                page to page.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image1} alt='app.js code' width='100%' />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                Home.js Page
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                Looking at the Home page you may not know what components the
                page is made up of. From top to bottom there is a NavBar which
                is what is controlling what page you see. Then there is the
                HomeImage component that holds the image with the quote over top
                of it. You then have the MichHome component that has the short
                version of who Michelle Greenhough is. Then you have the Reviews
                component that I would like to replace with actual reviews using
                the API from google. Following the reviews, you see the
                TreatmentsHome component which gives a short overview of the
                different treatments someone may be interested in. Finally, like
                all the other pages you have the Footer component. When you can
                break up your webpage into smaller components it makes coding
                much easier. You can re-use smaller components on multiple
                websites with just small tweaks here and there.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image2} alt='app.js code' width='100%' />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                Home.js Code
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >{`When you build each component separately in your home page all you need to do is import the component and then call it using the JSX tag <componentName>. Not all the pages ended up this clean for me, but this is something I would like to get better at. One thing I need to do is start separating every page in a folder and the have all the related components in that folder to keep my code organized. `}</Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image8} alt='app.js code' width='100%' />
            <img src={image9} alt='app.js code' width='100%' />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                NavBar.js Code
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                The NavBar page works using the nav Links to toggle between
                pages. Now remember that with React you are not actual switching
                pages because it is using a virtual DOM. This can make the
                loading process much quicker. My pages on my last blog post
                loaded slowly because the file size of the pictures were so
                large. As you can also see I have code commented out because I
                am not sure what content will be added to those pages. The more
                you look at the code for these pages the more you can understand
                how simple React is to use.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image3} alt='app.js code' width='100%' />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                About.js Page
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                For me the first thing I look at when I open a website now is
                what components they might have created when designing their
                website. Now that I have experience with React that is always my
                first thought. I am not done designing this website and now that
                I am looking at it I know I can do more when it comes to
                presentation.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image4} alt='app.js code' width='100%' />

            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                About.js Code
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                I find it easiest to use grids throughout my page so you may
                notice a common theme. I used a mix of css and material-ui for
                the styling. To use material-ui you must use the npm command
                “npm install material-ui/core” and if you want to use the
                material-ui icons you must use the command “npm install
                material-ui/icons”. I do like using material-ui but sometimes
                its nice to go back to classic css to get the styles you are
                looking for.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image10} alt='app.js code' width='100%' />
            <br></br>
            <img src={image11} alt='app.js code' width='100%' />

            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                review.js Code
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                With the review component I just hard coded some testimonials
                with the thought that later I will get the API from her company
                google review account and get the actual google reviews with a
                scroll button.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image6} alt='FAQ.js page' width='100%' />
            <img src={image7} alt='FAQ.js code' width='100%' />
            <img src={image12} alt='Treatment.js page' width='100%' />
            <img src={image13} alt='Treatment.js page' width='100%' />

            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                All the other code I have for this project
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              >
                {' '}
                For me React has made designing a webpage so easy with the
                reusable code and the component based design. One thing I didn’t
                really use in this webpage was React useStates. With me still
                having to talk with the client about the needs of her website
                there wasn’t much need for functionality at this point. To be
                honest the concept is also extremely easy.{' '}
              </Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid container direction='row' alignItems='flex-start' justify='center'>
        <Card className={classes.root}>
          <CardActionArea>
            <img src={image14} alt='useState1 code' width='100%' />
            <img src={image15} alt='useState2 code' width='60%' />
            <img src={image16} alt='useState3 code' width='60%' />
            <CardContent>
              <Typography
                className={classes.title}
                style={{ margin: 20, fontSize: '20px' }}
                gutterBottom
              >
                NavBar.js Code
              </Typography>

              <Typography
                variant='body2'
                component='p'
                style={{ margin: 20, fontSize: '20px' }}
                className='cardText'
              ></Typography>
              <br></br>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Footer />
    </>
  );
}

export default BlogPost;
