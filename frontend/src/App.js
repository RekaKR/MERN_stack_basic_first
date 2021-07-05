import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ShowDataBase from './components/ShowDataBase'
import InputDataBase from './components/InputDataBase'

function App() {
  const [data, setData] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [res, setRes] = useState(false)

  const submit = () => {
    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        description: description
      })
    }).then(res => res.json())
      .then(res => setRes(true))
      .catch(err => setRes(false))
  }

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => setData(null))
  }, [])

  return (
    <div className="app">
      {!res
        ? <InputDataBase setTitle={setTitle} setDescription={setDescription} title={title} description={description} submit={submit} />
        : data && data.map(res => <ShowDataBase key={uuidv4()} res={res} />)
      }
    </div>
  );
}

export default App;
