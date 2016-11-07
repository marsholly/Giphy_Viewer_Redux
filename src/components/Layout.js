import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Layout extends Component {
  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li><Link to="/">Search</Link></li>
          
        </ol>
        {this.props.children}
      </div>
    )
  }
};
