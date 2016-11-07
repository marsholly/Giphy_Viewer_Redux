import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  state => {
    return {
      giphys: state.giphys,
    }
  }
)
export default class DetailPage extends Component {

  render() {
    let { giphys } = this.props;
    let giphyBlock;
    if (giphys) {
        let {id, slug, rating, source, images} = giphys[0];
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
      } else {
        giphyBlock = <div></div>;
      }
      return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            {giphyBlock}
          </div>
        </div>
      </div>
    )
  }
};
