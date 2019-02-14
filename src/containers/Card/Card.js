import React, { Component } from 'react';
import '../../index.scss';
import PropTypes from 'prop-types';

class Card extends Component {

  render() {
    const { name } = this.props 



    return (
      <div>{name}</div>
    )

  }
}

Card.propTypes = {
  name: PropTypes.string
}

export default Card;