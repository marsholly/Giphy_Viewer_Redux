import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { searchGiphy } from '../actions/GiphyActions';


export default class ViewGiphys extends Component {
  constructor() {
    super();
  }

  render() {
    let { giphys } = this.props;
    let giphyBlock;
    if (giphys) {
      giphyBlock = giphys.map(giphy => {
        let {id, slug, rating, source, images} = giphy;
        let {fixed_width} = images;
        return (
          <div className="col-sm-6 col-md-4" key={id}>
            <div className="thumbnail card">
              <img src={fixed_width.url} />
              <div className="caption">
                <p>slug: {slug}</p>
                <p>rating: {rating}</p>
                <a href={source}>Source</a>
              </div>
            </div>
          </div>
        )
      })
      } else {
        giphyBlock = <div></div>;
      }
      return (
      <div className="container">
        <div className="row">
          {giphyBlock}
        </div>
      </div>
    )
  }
};
