import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import firebase from './Firebase';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});




function Result(props) {
	const { classes } = props;

  return (
    <div className={classes.root}>
     	
       <Grid container spacing={12}>
        	<Grid item xs={1}></Grid>
        	<Grid item xs={10}>
          		<Paper className="{classes.paper}, headpaper">
          			<h1>LAPPY-FINDER</h1>
          		</Paper>
        	</Grid>

        	<Grid item xs={1}></Grid>
       </Grid>
       <br/>

       <Grid container spacing={12}> 
       <Grid item xs={2}></Grid>
       <Grid item xs={8}>
          <Paper className="{classes.paper}, headpaper, middle">
          	
          	
          	

          </Paper>
        </Grid>
       
       <Grid item xs={2}></Grid>
        
   		</Grid>
    </div>
  );
}


Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);