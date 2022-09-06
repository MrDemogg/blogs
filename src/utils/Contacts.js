import React from 'react';
import {Card} from "react-bootstrap";

const Contacts = () => {
  return (
    <Card>
      <Card.Header>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Card.Title style={{textAlign: 'center'}}>Мои контакты</Card.Title>
          <Card.Title style={{textAlign: 'center'}}>My contacts</Card.Title>
        </div>
      </Card.Header>
      <Card.Body>
        <center>
          <Card.Text>I'm on the git: <a href='https://github.com/MrDemogg'>git</a></Card.Text>
          <Card.Text>Я на гит: <a href='https://github.com/MrDemogg'>git</a></Card.Text>
          <Card.Text>Mail: ElBebrus@yandex.ru</Card.Text>
          <Card.Text>ПочтаЖ ElBebrus@yandex.ru</Card.Text>
        </center>
      </Card.Body>
    </Card>
  );
};

export default Contacts;