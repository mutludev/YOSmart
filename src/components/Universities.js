import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import UniversityList from './UniversityList'
import Button from 'react-bootstrap/Button'
import UniversityModal from './UniversityModal'

export default function Universities () {
  const [show,setShow] = useState(false)

  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  return(
    <>
    <UniversityModal handleClose={handleClose} show={show}/>
    <Card className="mt-2">
      <Card.Header>Universities <Button onClick={handleShow}>Add New</Button></Card.Header>
      <Card.Body>
        <UniversityList/>
      </Card.Body>
    </Card>
    </>
  )
}