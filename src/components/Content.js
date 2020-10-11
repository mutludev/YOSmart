import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import News from './News'
import Universities from './Universities'

export default function Content () {
  return(<Container fluid>
    <Row>
      <Col><News/></Col>
      <Col><Universities/></Col>
    </Row>
  </Container>)
}