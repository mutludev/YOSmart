import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function NewsList() {
  const [news,updateNews] = useState([]);

  return(
    <ListGroup>
      {news.map((item,index)=> {
         return <ListGroup.Item key={index} variant={item.status}>{item.data}</ListGroup.Item>
      })}
    </ListGroup>
  )
}