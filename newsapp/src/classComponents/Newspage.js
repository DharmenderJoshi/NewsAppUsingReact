import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class Newspage extends Component {
  articles=[];
  constructor(props){
    super(props);
    this.state={'articles':this.articles, 'url':this.url,page:1,Totalpage:1,loading:true,totalResults:0};
  }
  updateData= async()=>
  {
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&language=en&page=${this.state.page+1}&pageSize=${this.props.pagesize}&sortBy=publishedAt&apiKey=${this.props.apikey}`;
    let results=await fetch(url);
    let parsedResults=await results.json();
    this.setState({articles:this.state.articles.concat(parsedResults.articles),page:this.state.page+1,loading:false});
  }

  async componentDidMount()
  {
    this.setState({loading:true});
    let url=`https://newsapi.org/v2/everything?q=${this.props.category}&language=en&page=${this.state.page}&pageSize=${this.props.pagesize}&sortBy=publishedAt&apiKey=${this.props.apikey}`;
    let results=await fetch(url);
    let parsedResults=await results.json();
    this.setState(
      {
        articles:parsedResults.articles,
        Totalpage:Math.ceil(parsedResults.totalResults/this.props.pagesize),
        loading:false,
        totalResults:parsedResults.totalResults
      }
      );
  }
  render() {
    return(
      <>
        <div className="container my-5 newsPage">
        {(this.props.category==="General"?<h1 className='text-center'> Top News from - {this.props.category} category</h1>:<h1 className='text-center'> Top News from - World of {this.props.category} </h1>)}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.updateData}
          hasMore={this.state.articles.length!==100} // length is hardcoded as we are using NewsApi developer access
          loader={<Spinner />}
        >
        <div className="container row my-2">
            { this.state.articles.map((n)=> {
                return <div className="col-md-4 mt-2"  key={n.url} >
                   <Newsitem imageurl={n.urlToImage} description={n.description} title={n.title} url={n.url} publishedAt={n.publishedAt} author={n.author}/></div>
             })}
        </div>
        </InfiniteScroll>
        </div>
      </>
    )
  }
}

export default Newspage