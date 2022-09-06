import React from 'react';
import {Card} from "react-bootstrap";

const About = () => {
  return (
    <Card>
      <Card.Header>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Card.Title style={{textAlign: 'center'}}>Информация о сайте</Card.Title>
          <Card.Title style={{textAlign: 'center'}}>Info about this site</Card.Title>
        </div>
      </Card.Header>
      <Card.Body>
        <center>
          <Card.Text>This site was created for my homework for school, but I posted it publicly on the git, because I thought you could share this homework with other people, to facilitate their tasks. For example, you can get the editor from here (and I searched and messed around with these text editors a lot) or the entire site.</Card.Text>
          <Card.Text>Этот сайт создан для моей домашке по учебе, но я выложил её в открытый доступ на гит, потому-что подумал, что можно поделится этой домашкой с другими людьми, для облегчения своих задач. Например вы можете взять от сюда редактор (а я искал и возился с этими текстовыми редакторами очень много) или весь сайт целиком.</Card.Text>
        </center>
      </Card.Body>
    </Card>
  );
};

export default About;