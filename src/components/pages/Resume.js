import React from 'react';
import { Grid, ListItem, ListItemIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from '../../images/DSCF0149-smallersize.jpg';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Footer from '../Footer';

function Resume() {
  const html_url = 'https://my.indeed.com/p/trevorp-rhps4su';
  const html_url2 = 'https://www.linkedin.com/in/trevorparlee';
  return (
    <>
      <Grid container direction='row' alignItems='center' justify='center'>
        <Card style={{ width: '80%' }}>
          <CardContent>
            <div className='all-center'>
              <img
                src={image}
                className='round-img'
                alt='user avatar'
                style={{ width: '300px' }}
              />
              <h1>Trevor Parlee</h1>
              <p>
                <strong>Location: </strong>
                Calgary, AB
              </p>
              <a href={html_url} className='btn btn-dark my-1'>
                Visit Indeed Resume
              </a>
              <a href={html_url2} className='btn btn-success my-1'>
                Visit LinkedIn Profile
              </a>
            </div>
          </CardContent>
        </Card>
        <Card style={{ width: '80%', margin: '15px' }}>
          <CardContent>
            <Typography
              style={{ margin: 20, fontSize: '30px', background: 'light-blue' }}
              gutterBottom
            >
              <strong>Education</strong>
            </Typography>

            <Typography
              variant='body2'
              component='p'
              style={{ margin: 20, fontSize: '25px' }}
            >
              <strong>
                Southern Alberta Institute of Technology, Calgary Alberta
              </strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              <strong>Jan 2020 – May 2021</strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              <strong>
                Diploma - Information Technologies, Software Development{' '}
              </strong>{' '}
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Heavily focused on java object-oriented programming
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>Web Application Programming</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>Business Dynamics</ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Involved in developing a data mobilizer for Trainsrail
                  Innovation Group for our final Capstone Project.{' '}
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Back-end was hosted on AWS(Elastic Beanstalk).
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Front-end developed in React and hosted on Netlify.
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
        <Card style={{ width: '80%', margin: '15px' }}>
          <CardContent>
            <Typography
              style={{ margin: 20, fontSize: '30px', background: 'light-blue' }}
              gutterBottom
            >
              <strong>Experience</strong>
            </Typography>

            <Typography
              variant='body2'
              component='p'
              style={{ margin: 20, fontSize: '25px' }}
            >
              <strong>Parlee Concrete Foundations Inc.</strong>
            </Typography>
            <Typography
              variant='body2'
              component='p'
              style={{ margin: 20, fontSize: '25px' }}
            >
              <strong>Owner/Operator</strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              <strong>AUG 2017 – JUNE 2019</strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              In 2017, I founded my own business and ran it as owner/operator.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  During this time, I successfully negotiated and secured
                  contracts with home builders.
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Quoted jobs properly while considering time, materials, and
                  labor
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Hired and ran a team of up to eight employees.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Managed the operations of complex projects.
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Communicated with clients from start to finish of any project
                  to assess all changing requirements or restrictions
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Ordered the specified type of concrete for each project.
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Addressed concerns of the client to ensure their expectations
                  were always met.
                </ListItemText>
              </ListItem>
              <ListItem style={{ marginLeft: '30px' }}>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText>
                  o Navigated the completion of a project and the arrival of
                  concrete. Concrete companies are very busy so you must be
                  finished a job for when they arrive.
                </ListItemText>
              </ListItem>
            </List>

            <Typography
              variant='body2'
              component='p'
              style={{ margin: 20, fontSize: '25px' }}
            >
              <strong>JL Funk Construction</strong>
            </Typography>
            <Typography
              variant='body2'
              component='p'
              style={{ margin: 20, fontSize: '25px' }}
            >
              <strong>Foreman</strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              <strong>AUG 2017 – JUNE 2019</strong>
            </Typography>
            <Typography style={{ margin: 20 }}>
              Used my strong leadership skills and my attention to detail to
              produce complicated and custom foundations.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Managed crews with as many as 10 employees.
                </ListItemText>
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Trusted to meet and deliver engineered expectations.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Met one-on-one with builders to discuss any changes or
                  requirements.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ArrowRightIcon />
                </ListItemIcon>
                <ListItemText>
                  Consulted on projects that tested the company's capabilities.
                </ListItemText>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </>
  );
}

export default Resume;
