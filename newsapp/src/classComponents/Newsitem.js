import React, { Component } from 'react'
export class Newsitem extends Component {
  constructor(props)
    {
      super(props);
    }
  render() {
    const {imageurl,title,url,description,publishedAt,author}=this.props;
    return (
      <>
            <div className="card" >
                <img className="card-img-top" src={imageurl?imageurl:"https://tse1.mm.bing.net/th?id=OIP.GnqZiwU7k5f_kRYkw8FNNwHaF3&pid=Api&P=0"} alt="Image Not Available" height="149px" width="250px"  />
                <div className="card-body">
                    <h5 className="card-title">{title} ...</h5>
                    <p className="card-text"> {description} ...</p>
                    <a href={url} target='_blank' className="btn btn-primary">Read news</a>
                    <p className="card-text"><small className="text-muted">By {author} Published at {new Date(publishedAt).toGMTString()}</small></p>
                </div>
            </div>
      </>
    )
  }
}

export default Newsitem