import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import UniversityForm from './UniversityForm'
import { Button } from 'react-bootstrap'

export default function UniversityModal ({isNew=true,show,handleClose}) {

  function saveChanges(){
    handleClose()
  }

  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          {isNew ? "Add New University" : "Edit University"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UniversityForm/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveChanges}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  )
}