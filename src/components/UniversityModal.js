import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import UniversityForm from './UniversityForm'

export default function UniversityModal ({isNew=true,show,handleClose}) {



  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isNew ? "Add New University" : "Edit University"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UniversityForm/>
      </Modal.Body>
    </Modal>
  )
}