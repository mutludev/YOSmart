import React, {useEffect, useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function UniversityList ({universities,openModalWithData}) {

  return (
    <ListGroup>
      {universities.map((item,index) => {
        return <ListGroup.Item onClick={()=> openModalWithData(item)} key={index} action>{item.universityName}</ListGroup.Item>
      })}
    </ListGroup>
  )
}