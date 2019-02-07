import React, { Component } from 'react';

class City extends Component {
  render() {
    return (
      <h3>{this.props.city.name}</h3>
    );
  }
}

export default City;
