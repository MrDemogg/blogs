import React from 'react';
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const Cards = ({cards}) => {
  const router = useNavigate()
  console.log(router)
  return (
    <div style={{position: 'relative', top: '50px'}}>
      {cards.map((card) => {
        return (
          <Card key={`${card.dates}${card.time}${card.title}${card.id}`}>
            <Card.Header>
              <Card.Text>Created at: {card.dates} {card.time}</Card.Text>
            </Card.Header>
            <Card.Body>
              <Card.Title>{card.title}</Card.Title>
              <Button onClick={() => router(`/contacts/${card.id}`)}>Read more >></Button>
            </Card.Body>
          </Card>
        )
      })}
    </div>
  );
};

export default Cards;