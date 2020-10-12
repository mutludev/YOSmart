import React,{useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import News from './News'
import Universities from './Universities'
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

export default function Content () {
  const [universityData,setUniversityData] = useState(lib.queryAll("universities"))

  function addNewUniversity(data){
    lib.insertOrUpdate("universities", {universityName: data.universityName}, data);
    lib.commit()
    setUniversityData( [data,...universityData])
  }


  function deleteUniversity(uniName){
    lib.deleteRows("universities", {universityName: uniName});
    setUniversityData(lib.queryAll("universities"))
  }


  return(<Container fluid>
    <Row>
      <Col><News universityData={universityData}/></Col>
      <Col><Universities addNewUniversity={addNewUniversity} deleteUniversity={deleteUniversity} universityData={universityData}/></Col>
    </Row>
  </Container>)
}