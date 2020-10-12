import React, {useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function UniversityList () {
  const [universities,setUniversity] = useState([{data:"Boğaziçi Üniversitesi"},{data:"Yıldız Teknik"}])

  return (
    <ListGroup>
      {universities.map((item,index) => {
        return <ListGroup.Item key={index}>{item.data}</ListGroup.Item>
      })}
    </ListGroup>
  )
}