import React from 'react'
import Card from 'react-bootstrap/Card'
import UniversityList from './UniversityList'
export default function Universities () {
  return(
    <Card className="mt-2">
      <Card.Header>Universities</Card.Header>
      <Card.Body>
        <UniversityList/>
      </Card.Body>
    </Card>
  )
}