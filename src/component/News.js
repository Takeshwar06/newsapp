import React, { useEffect,useState } from 'react'
import Spin from '../Spin';
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'

export default function News(props) {
const[articles,setArticles]=useState([])
const[loading,setLoading]=useState(true)
const[page,setPage]=useState(1)
const[totalResult,setTotalResult]=useState(0)
// document.title=`${this.FirstLaterCapitalized(props.category)} - T-News`;
  const FirstLaterCapitalized=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
  }
  // articles=[{"source":{"id":"bbc-sport","name":"BBC Sport"},"author":"BBC Sport","title":"Shane Warne memorial - watch & follow updates","description":"Watch live coverage and follow text updates and tributes from the state memorial for Australian cricket legend Shane Warne at the Melbourne Cricket Ground.","url":"http://www.bbc.co.uk/sport/live/cricket/60916236","urlToImage":"https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png","publishedAt":"2022-03-30T08:22:26.498888Z","content":"Former England bowler and BBC cricket presenter Isa Guha, who became a colleague of Warne's in the commentary box: \"It has been a strange few weeks - a lot of shock and then we did our own tribute at… [+396 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com","description":"Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg","publishedAt":"2020-04-27T11:41:47Z","content":"Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"},{"source":{"id":"espn-cric-info","name":"ESPN Cric Info"},"author":null,"title":"What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com","description":"Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com","url":"http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again","urlToImage":"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg","publishedAt":"2020-03-30T15:26:05Z","content":"Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"}]

  // live cycle method
const updateNews=async()=>{
  props.setProgress(10);
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pagesize=${props.pageSize}`
  props.setProgress(30);
  setLoading(true);
  let data= await fetch(url);
  props.setProgress(50);
  let parsedData= await data.json()
  console.log(parsedData);
  props.setProgress(100);
  setArticles(parsedData.articles)
  setTotalResult(parsedData.totalResult)
  setLoading(false)
  
}
useEffect(()=>{
    updateNews();
},[])

//   const handleNextClick= async()=>{
//      setPage(page+1);
//      updateNews();
//   }


//  const handlePrevClick= async()=>{
//     setPage(page -1);
//     updateNews();
//   }
 const fetchMoreData = async() => {
    
    setPage(page+1);
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pagesize=${props.pageSize}`
    let data= await fetch(url);
    let parsedData= await data.json()
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResult(parsedData.totalResult);
    setLoading(false);
  };
 
  
    // console.log("render")
    return (
    
           <>
   <h1 className='text-center'style={{margin: '90px'}}>T-NEWs-Top Headline <span className="badge bg-secondary">{FirstLaterCapitalized(props.category)}</span></h1>
{loading && <Spin/>}

<InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResult}
          loader={<Spin/>}
        >
       <div className="container">
      <div className="row">
    {articles.map((element)=>{  // this line
      return <div className="col-md-3" key={element.url}>
        
        <NewsItem  author={element.author} date={element.publishedAt} title={element.title?element.title.slice(0,25)+'...':''} discription={element.description?element.description.slice(0,60)+'...':''} urlToImage={element.urlToImage?element.urlToImage:'https://images.noticiasautomotivas.com.br/img/f/byd-han-1-1.jpg'} url={element.url}/>

       </div>
    })}
      </div>
      </div>

      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
      <button disabled={this.state.page<=1} type="button" className="btn btn-sm btn-dark" onClick={this.handlePrevClick}>&larr; prev</button>
      <button disabled={this.state.page+1>Math.ceil(this.state.totalResult/props.pageSize)} type="button" className="btn btn-sm btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>  */}
  
      </>

    )
  }


News.defaultProps ={
  country: 'in',
  pageSize: 8,
  category: 'general'
}

// News.PropTypes={
//   country: PropTypes.string,
//   pageSize: PropTypes.number,
//   category: PropTypes.string,
// }