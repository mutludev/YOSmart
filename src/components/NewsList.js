import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import universityParsingAlgorithm from './universityParsingAlgorithm'
export default function NewsList({universityData}) {
  let news = universityParsingAlgorithm(universityData)
  return(
    <ListGroup>
      {news.map((item,index)=> {
         return <ListGroup.Item key={index} variant={item.status} action>{item.title}</ListGroup.Item>
      })}
    </ListGroup>
  )
}