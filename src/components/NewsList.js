import React, {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function NewsList() {
  const [news,updateNews] = useState([{data:"Yıldız Teknik Sınava 2 gün kaldı",status:"danger"},{data:"Boğaziçi Üniversitesi Başvuruların açılmasına 5 gün kaldı",status:"info"}]);

  return(
    <ListGroup>
      {news.map((item,index)=> {
         return <ListGroup.Item key={index} variant={item.status} action>{item.data}</ListGroup.Item>
      })}
    </ListGroup>
  )
}