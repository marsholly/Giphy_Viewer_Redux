import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGiphy, filterGiphy } from '../actions/GiphyActions';
import ViewGiphys from './ViewGiphys';
import {browserHistory} from 'react-router';

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
      filterGiphy(keyword) {
        dispatch(filterGiphy(keyword))
      },
    }
  }
)

export default class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      keyword: ''
    }
  }

  searchGiphy = () => {
    let {search} = this.state;
    this.props.searchGiphy(search);
  }

  filterGiphy = () => {
    let {keyword} = this.state
    browserHistory.push({pathname: '/filter', query:{rating: keyword}})
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <h2>Giphy Viewer App</h2>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="search"
                value={this.state.search}
                onChange={e=> this.setState({search: e.target.value})}
              />
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={this.searchGiphy}>Search</button>
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="filter By Rating"
                value={this.state.keyword}
                onChange={e=> this.setState({keyword: e.target.value})}
              />
              <span className="input-group-btn">
                <button className="btn btn-default" onClick={this.filterGiphy}>Search</button>
              </span>
            </div>
          </div>
        </div>
        <div className="row view">
          <ViewGiphys giphys={this.props.giphys}/>
        </div>
      </div>
    )
  }
};
