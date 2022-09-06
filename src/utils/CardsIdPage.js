import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import API from '../API/API'
import {Button, Card} from "react-bootstrap";

const CardsIdPage = () => {
  const router = useNavigate()
  const params = useParams()
  const [card, setCard] = useState({title: '', text: '', dates: '', time: '', id: 0})
  useEffect(() => {
    API.get('/cards.json').then((resp) => {
      if (resp)
      {
        console.log(Object.keys(resp.data)[0])
        API.get(`/cards/${Object.keys(resp.data)[0]}.json`).then((resp) => {
          const sortCards = resp.data.filter(c => c.id === params.id)
          setCard(...sortCards)
        })
      }
    }).catch((e) => {
      console.log(e)
    })
  }, [])
  return (
    <Card>
      <Card.Header>
        <Card.Text>Created on: {card.dates} {card.time}</Card.Text>
      </Card.Header>
      <Card.Body>
        <Card.Title>{card.title}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{__html:
          card.text}} />
        <div style={{display: 'flex'}}>
          <Button variant='primary' onClick={() => {
            router(`/add/${params.id}`)
          }}>Edit</Button>
          <Button variant='danger' style={{margin: '0 0 0 10px'}} onClick={() => {
            API.get('/cards.json').then((resp) => {
              if (resp) {
                API.get(`/cards/${Object.keys(resp.data)[0]}.json`).then((resp) => {
                  const newCards = [...resp.data]
                  const c = newCards.filter(c => c.id !== params.id)
                  API.delete('/cards.json').then(() => {
                    API.post('/cards.json', c).then(() => {
                      router(`/home`)
                    })
                  })
                })
              }
            })
          }}>Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardsIdPage;