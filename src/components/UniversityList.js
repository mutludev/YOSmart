import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function UniversityList ({universities,openModalWithData}) {

  return (
    <ListGroup>
      {universities.map((item) => {
        return <ListGroup.Item onClick={()=> openModalWithData(item)} key={item.ID} action>{item.universityName}</ListGroup.Item>
      })}
    </ListGroup>
  )
}