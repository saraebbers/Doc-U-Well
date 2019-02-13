import React from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';

const Display = (props) => {

return(
  <div>
    <p>This is the Display Add a Switch</p>
  </div>
  )
}

Display.propTypes = {
  type: PropTypes.string
}

export default Display;