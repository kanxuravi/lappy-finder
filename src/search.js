import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import firebase from './Firebase';

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function Btn(props) {
  const { classes } = props;
  return (
    <div>
      <Fab variant="extended" aria-label="Search" className="{classes.fab}, btncolor">
        <b>Search</b>
      </Fab>
    </div>
  );
}

Btn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Btn);