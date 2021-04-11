import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Footer.css';
import Grid from '@material-ui/core/Grid';

function Footer() {
  return (
    <div className='footer-container'>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='center'
        width='100%'
      >
        <div className='footerInfo'>
          <p>Trevor Parlee</p>
        </div>
      </Grid>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='center'
        width='100%'
      >
        <div className='footerInfo'>
          <p>I hope you like my website.</p>
        </div>
      </Grid>
      <Grid
        containter
        direction='row'
        alignItems='flex-start'
        justify='space-evenly'
        width='100%'
      ></Grid>
      <br></br>

      <div>
        <small className='website-rights'>
          2021 Trevor Parlee NEEDS A JOB!
        </small>
      </div>
    </div>
  );
}

export default Footer;
