import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'
import UniversityList from './UniversityList'
import Button from 'react-bootstrap/Button'
import UniversityModal from './UniversityModal'


export default function Universities ({addNewUniversity,deleteUniversity,universityData}) {
  const [show,setShow] = useState(false)
  const [modalData,setModalData] = useState({})
  const [universityIsNew,setUniversityIsNew] = useState(true)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  function addNew(){
    setModalData({})
    handleShow()
  }


  function addNewUniversityMain(data){
    setUniversityIsNew(true)
    addNewUniversity(data)
  }

  function openModalWithData(data){
    setUniversityIsNew(false)
    setModalData(data)
    handleShow()
  }


  return(
    <>
    <UniversityModal handleClose={handleClose} show={show} addNewUniversity={addNewUniversityMain} uniData={modalData} isNew={universityIsNew} deleteUniversity={deleteUniversity}/>
    <Card className="mt-2">
      <Card.Header>Universities <Button onClick={addNew}>Add New</Button></Card.Header>
      <Card.Body>
        <UniversityList universities={universityData} openModalWithData={openModalWithData}/>
      </Card.Body>
    </Card>
    </>
  )
}