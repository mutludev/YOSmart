import React from 'react'
import Card from 'react-bootstrap/Card'
import NewsList from './NewsList'

export default function News({universityData}) {
  return(
    <Card className="mt-2">
      <Card.Header>News</Card.Header>
      <Card.Body>
        <NewsList universityData={universityData}/>
      </Card.Body>
    </Card>
  )
}