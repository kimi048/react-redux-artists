import React, { Component } from 'react';
import { connect } from 'react-redux';
import { artistsListAll,artistListSearch } from '../store/actions';
import { Link } from "react-router-dom";

class Home extends Component {

  componentDidMount() {
    this.props.dispatch(artistsListAll())
  }
  showAritistsAll = (data) => (
    data?
      data.map(item => (
        <Link to={`/artist/${item.id}`} key={item.id} className="artist_item">
          <div className='cover' style={{background:`url(/images/${item.cover})`}}>
            <div>
              {item.name}
            </div>
          </div>
        </Link>
      ))
      // 'hoge'
      : null
  )

  getKeywords = (event) => {
    let key = event.target.value;
    this.props.dispatch(artistListSearch(key))
  }

  render() {
    console.log(this.props)
    return (
      <>
        <div className='search_container'>
          <h2>search your aritis</h2>
          <input type="text" onChange={event=>this.getKeywords(event)}/>
        </div>
        <div className='artist_container'>
          {this.showAritistsAll(this.props.artists.artistList)}
        </div>
      </>
    )
  }
}
function mapStateToProps(state) {
  return {
    artists: state.artists
  }
}

export default connect(mapStateToProps)(Home);