import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailView } from '../actions/GiphyActions';

@connect(
  state => {
    return {
      giphys: state.giphys,
    }
  },
  dispatch => {
    return {
      detailView(id) {
        dispatch(detailView(id))
      },
    }
  }
)
export default class filterGiphy extends Component {

  detailView = (id) => {
    this.props.detailView(id);
    browserHistory.push('/detailView');
  }

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
              <img src={fixed_width.url} onClick={() => this.detailView(id)}/>
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
