import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect(
  state => {
    return {
      giphys: state.giphys,
    }
  }
)
export default class filterGiphy extends Component {

  render() {
    let { giphys } = this.props;
    let keyword = this.props.location.query.rating;
    let giphyBlock;
    if (giphys) {
      let filterGiphy = giphys.filter(filterGiphy => {
        return filterGiphy.rating === keyword;
      });
      giphyBlock = filterGiphy.map(giphy => {
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
