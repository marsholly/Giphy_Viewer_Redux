import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGiphy } from '../actions/GiphyActions';
import ViewGiphys from './ViewGiphys';

@connect(
  state => {
    return {
      giphys: state.giphys,
    }
  },
  dispatch => {
    return {
      searchGiphy(search) {
        dispatch(searchGiphy(search))
      },
    }
  }
)

export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }

  searchGiphy = () => {
    let {search} = this.state;
    this.props.searchGiphy(search);
  }

  render() {
    // let {giphys} = this.props
    return (
      <div className="container">
        <div className="text-center">
          <h2>Giphy Viewer App</h2>
        </div>
        <div className="col-xs-4">
          <input
            type="text"
            className="form-control"
            placeholder="search"
            value={this.state.search}
            onChange={e=> this.setState({search: e.target.value})}
          />
        </div>
        <button className="btn btn-default" onClick={this.searchGiphy}>Search</button>
        <div className="row">
          <ViewGiphys giphys={this.props.giphys}/>
        </div>
      </div>
    )
  }
};
