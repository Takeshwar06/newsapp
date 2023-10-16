import React from 'react'

export default function NewsItem (props) {
  
    let {title,discription,urlToImage,author,date,url}=props;
    return (
<div className='my-3'>
    <div className="card ">
            <img src={urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className='card-text'><small className='text-danger'>By {!author?" Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={url} target="_blank" className="btn btn-sm btn-dark">Read more..</a>
         </div>
    </div>
</div>
    )
  }

