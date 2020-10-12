import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal'
import UniversityForm from './UniversityForm'
import { Button } from 'react-bootstrap'

export default function UniversityModal ({isNew=true,show,handleClose}) {

  function getFormData(){
    let universityName = document.getElementById("universityName").value
    let selectUniversityType = document.getElementById("selectUniversityType").value
    let selectCity = document.getElementById("selectCity").value
    let universityExamDate = document.getElementById("universityExamDate").value
    let universityApplyStartDate = document.getElementById("universityApplyStartDate").value
    let universityApplyEndDate = document.getElementById("universityApplyEndDate").value
    let universityResultsDate = document.getElementById("universityResultsDate").value
    let universitSelectStartDate = document.getElementById("universitSelectStartDate").value
    let universitySelectEndDate = document.getElementById("universitySelectEndDate").value
    let notes = document.getElementById("notes").value
    return {
      universityName,
      selectUniversityType,
      selectCity,
      universityExamDate,
      universityApplyStartDate,
      universityApplyEndDate,
      universityResultsDate,
      universitSelectStartDate,
      universitySelectEndDate,
      notes
    }
  }
  function saveChanges(){
    console.table(getFormData())
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