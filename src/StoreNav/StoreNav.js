import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './StoreNav.css';


const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function StoreNav(props) {
  return (
    <div id="header">
      <Link to="/"><Button variant="contained" size="small" color="primary">store</Button></Link>    
      <span className="spacer"></span>
      <Button variant="outlined" size="small" color="primary" className='snipcart-checkout snipcart-summary'>
        <i className="material-icons">shopping_cart</i>
        cart (<span className="snipcart-total-items"></span>)
      </Button>
    </div>
  );
}

StoreNav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StoreNav);