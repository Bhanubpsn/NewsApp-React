import React, { Component } from 'react'
import PropTypes from 'prop-types'
export class NewsItem extends Component {

  static propTypes = {
    category : PropTypes.string,
  }

  constructor(){
    super();
    this.state = {
      badge : 'danger',
    }; 
  }

  badgeStyle=(cat)=>{
    if(cat === 'general' || cat === 'health'){
      this.setState({badge : 'danger'});
    }
    else if(cat === 'technology'){
      this.setState({badge : 'primary'});
    }
    else if(cat === 'science' || cat === 'sports'){
      this.setState({badge : 'success'});
    }
    else if(cat === 'business'){
      this.setState({badge : 'warning'});
    }
    else{
      this.setState({badge : 'danger'});
    }
  }

  componentDidMount() {
    this.badgeStyle(this.props.category);
  }

  render() {
    let {category,title, description, imageUrl, newsUrl, author, date, source} = this.props;

    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
        <span className={`position-absolute top-0 translate-middle badge rounded-pill text-bg-${this.state.badge}`} style={{left: "90%", zIndex: 1}}>{source}</span>
          <img src={!imageUrl?"https://t3.ftcdn.net/jpg/03/27/55/60/240_F_327556002_99c7QmZmwocLwF7ywQ68ChZaBry1DbtD.jpg":imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read More...</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem