import React, { Component } from 'react'
import LoadingBar from 'react-top-loading-bar';
export default class Loadingline extends Component {
constructor(props){
  super(props);
  this.state={
    progress:15
  }
}

// live cycle method

async componentDidMount(){
  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=accc2c958b7e4b1eb0b94d751e242357&page=1&pagesize=${this.props.pageSize}`
  this.setState({progress: 10});
  let data= await fetch(url);
  this.setState({progress: 50});
  await data.json()
  this.setState({progress: 100});
}
  render() {
    return (
      <div>
        <LoadingBar
        color='#f11946'
        height={4}
        progress={this.state.progress}
        // onLoaderFinished={() => setProgress(0)}
      />
      </div>
    )
  }
}
