import React, { useState } from 'react'

function App() {
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
      .then(res => {
        setRes(true)
        console.log(res)
      })
      .catch(err => setRes(false))
  }

  return (
    <div className="app">
      <div>
        <p>title</p>
        <input type="text" onChange={e => setTitle(e.target.value)} />
      </div>

      <div>
        <p>description</p>
        <input type="text" onChange={e => setDescription(e.target.value)} />
      </div>

      <button disabled={!(title && description)} onClick={() => submit()}>Submit</button>
    </div>
  );
}

export default App;
