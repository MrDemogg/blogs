import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import API from "../API/API";
import { EditorState } from 'draft-js';
import {Card, InputGroup, Form, Button} from "react-bootstrap";
import EditorContainer from "../components/Editor";
import { v4 } from 'uuid';
const Add = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [newTitle, setNewTitle] = useState('')
  const [text, setText] = useState('')
  const params = useParams()
  const router = useNavigate()

  useEffect(() => {
    API.get('/cards.json').then((resp) => {
      if (resp.data) {
        API.get(`/cards/${Object.keys(resp.data)[0]}.json`).then((resp) => {
          const oldCards = [...resp.data]
          const newCards = oldCards.filter(c => c.id === params.id)
          setText(newCards[0].text)
          setNewTitle(newCards[0].title)
          setEditorState(newCards[0].text)
        })
      }
    })
  }, [params])
  return (
    <Card>
      <Card.Header>
        <Card.Title>
          Add new post
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>Title</Card.Text>
        <InputGroup>
          <Form.Control value={newTitle} onChange={(e) => {setNewTitle(e.currentTarget.value); console.log(newTitle)}}  />
        </InputGroup>
        <Card.Text>Description</Card.Text>
        <EditorContainer setText={setText} editorState={editorState} setEditorState={setEditorState} />
        <Button variant='success' onClick={() => {
          API.get('/cards.json').then((resp) => {
            console.log(resp)
            let date = new Date().toLocaleDateString();
            let time = new Date()
            const newCard = {
              title: newTitle,
              text: text,
              dates: date,
              time: time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute: '2-digit'}),
              id: v4()
            }
            if (resp.data) {
              API.get(`/cards/${Object.keys(resp.data)[0]}.json`).then((resp) => {
                const oldCards = resp.data
                API.delete('/cards.json').then(() => {
                  const newCards = oldCards.filter(c => c.id !== params.id)
                  console.log(newCards)
                  newCards.push(newCard)
                  API.post('/cards.json', newCards).then(() => router('/home'))
                })
              })
            } else {
              API.post('/cards.json', [newCard]).then(() => router('/home'))
            }
          })
        }}>Save</Button>
      </Card.Body>
    </Card>
  );
};

export default Add;