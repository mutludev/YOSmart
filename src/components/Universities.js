import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import UniversityList from './UniversityList'
import Button from 'react-bootstrap/Button'
import UniversityModal from './UniversityModal'
import localStorageDB from 'localstoragedb'
let lib = new localStorageDB("lib", localStorage);

if(lib.isNew()){
  lib.createTable("universities", ["universityName",
    "selectUniversityType",
    "selectCity",
    "universityExamDate",
    "universityApplyStartDate",
    "universityApplyEndDate",
    "universityResultsDate",
    "universitSelectStartDate",
    "universitySelectEndDate",
    "notes"]);
    lib.commit()
}

export default function Universities () {
  const [universityData,setUniversityData] = useState(lib.queryAll("universities"))
  const [show,setShow] = useState(false)
  const [modalData,setModalData] = useState({})
  const [universityIsNew,setUniversityIsNew] = useState(true)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  function addNew(){
    setModalData({})
    handleShow()
  }


  function addNewUniversity(data){
    setUniversityIsNew(true)
    lib.insert("universities",data)
    lib.commit()
    setUniversityData( [data,...universityData])
  }

  function openModalWithData(data){
    setUniversityIsNew(false)
    setModalData(data)
    handleShow()
  }

  function deleteUniversity(uniName){
    lib.deleteRows("universities", {universityName: uniName});
    setUniversityData(lib.queryAll("universities"))
  }

  return(
    <>
    <UniversityModal handleClose={handleClose} show={show} addNewUniversity={addNewUniversity} uniData={modalData} isNew={universityIsNew} deleteUniversity={deleteUniversity}/>
    <Card className="mt-2">
      <Card.Header>Universities <Button onClick={addNew}>Add New</Button></Card.Header>
      <Card.Body>
        <UniversityList universities={universityData} openModalWithData={openModalWithData}/>
      </Card.Body>
    </Card>
    </>
  )
}