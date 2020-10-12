import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cities from './cities'
export default function UniversityForm ({data={}}) {
  return(
    <Form>
      <Form.Group controlId="universityName">
        <Form.Label>University Name</Form.Label>
        <Form.Control placeholder="Enter University Name" defaultValue={data.universityName}/>
      </Form.Group>

      <Row>
        <Col>
        <Form.Group controlId="selectUniversityType">
          <Form.Label>Select University Type</Form.Label>
          <Form.Control as="select" defaultValue={data.selectUniversityType}>
          <option>Goverment</option>
          <option>Private</option>
          </Form.Control>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="selectCity">
          <Form.Label>Select City</Form.Label>
          <Form.Control as="select" defaultValue={data.selectCity}>
          {cities.map(item => {
            return <option>{item}</option>
          })}
          </Form.Control>
        </Form.Group>
        </Col>
      </Row>



      <Form.Group controlId="universityExamDate">
        <Form.Label>Exam Date</Form.Label>
        <Form.Control type="date" defaultValue={data.universityExamDate}/>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="universityApplyStartDate">
          <Form.Label>Apply Start Date</Form.Label>
          <Form.Control type="date" defaultValue={data.universityApplyStartDate}/>
      </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="universityApplyEndDate">
          <Form.Label>Apply End Date</Form.Label>
          <Form.Control type="date" defaultValue={data.universityApplyEndDate}/>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="universityResultsDate">
        <Form.Label>Exam Results Date</Form.Label>
        <Form.Control type="date" defaultValue={data.universityResultsDate}/>
      </Form.Group>

      <Row>
        <Col>
          <Form.Group controlId="universitSelectStartDate">
          <Form.Label>Selection Start Date</Form.Label>
          <Form.Control type="date" defaultValue={data.universitSelectStartDate}/>
      </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="universitySelectEndDate">
          <Form.Label>Selection End Date</Form.Label>
          <Form.Control type="date" defaultValue={data.universitySelectEndDate}/>
          </Form.Group>
        </Col>
      </Row>

      <Form.Group controlId="selectionResultsDate">
        <Form.Label>Selection Results Date</Form.Label>
        <Form.Control type="date" defaultValue={data.selectionResultsDate}/>
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.Label>Notes</Form.Label>
        <Form.Control as="textarea" rows="3" defaultValue={data.notes}/>
      </Form.Group>
    </Form>
    )
}