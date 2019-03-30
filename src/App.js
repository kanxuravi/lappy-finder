import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SelectProcessor from "./selectprocessor";
import SelectUsage from "./selectusage";
import SelectPref from "./selectpreference";
import Btn from "./search";
import SelectLaptopBudget from "./lapbudget";
import firebase from './Firebase';
import Result from "./result";


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


function Dashboard(props) {
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
          	
          	
          	<br/>
          	<Grid container spacing={12}>
            <div>
          		<Grid item xs={2}></Grid>
            </div>
            
              <div>  
          		<Grid item xs={2}  className="marginup">
          			<SelectProcessor/>
          		</Grid>
              </div>

              <div>  
          		<Grid item xs={2}  className="marginup">
          			<SelectUsage/>
          		</Grid>
              </div>
          		
              <div>
          		<Grid item xs={2}  className="marginup">
          			<SelectPref/>
          		</Grid>
              </div>	

              <div>
          		<Grid item xs={2}  className="marginup">
          			<SelectLaptopBudget/>
          		</Grid>
              </div>
              
              <div>	
          		<Grid item xs={2}></Grid>
              </div>
          	</Grid>

          	<br/>
          	<br/>
          	<Btn className="srchbtn"/>
          	<br/>

          </Paper>
        </Grid>
       
       <Grid item xs={2}></Grid>
        
   		</Grid>
    </div>
  );
}


Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);