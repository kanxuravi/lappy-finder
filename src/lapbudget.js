import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import firebase from './Firebase';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 145,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 1,
  },
});

class SelectLaptopBudget extends React.Component {
  state = {
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
            htmlFor="outlined-age-simple"
          >
           <span className="selfont">Budget</span>
          </InputLabel>
          <Select className="selfont"
            value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                labelWidth={this.state.labelWidth}
                name="age"
                id="outlined-age-simple"
              />
            }
          >
            <MenuItem className="selfont" value={10}>Below 35000</MenuItem>
            <MenuItem className="selfont" value={20}>Below 45000</MenuItem>
            <MenuItem className="selfont" value={30}>Below 55000</MenuItem>
            <MenuItem className="selfont" value={40}>Below 65000</MenuItem>
            <MenuItem className="selfont" value={50}>Below 75000</MenuItem>
            <MenuItem className="selfont" value={60}>Below 85000</MenuItem>
            <MenuItem className="selfont" value={70}>Below 95000</MenuItem>
            <MenuItem className="selfont" value={80}>Above 100000</MenuItem>
          </Select>
        </FormControl>
      </form>
    );
  }
}

SelectLaptopBudget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SelectLaptopBudget);