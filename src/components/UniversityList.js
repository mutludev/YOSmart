import React, {useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function UniversityList () {
  const [universities,setUniversity] = useState([])

  return (
    <ListGroup>
      {universities.map((item,index) => {
        return <ListGroup.Item key={index}>{item.data}</ListGroup.Item>
      })}
    </ListGroup>
  )
}