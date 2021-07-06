import React, { useState, useEffect } from 'react'

const AsyncAwaitThen = () => {
  const [data, setData] = useState('')
  const [res, setRes] = useState('')


  //FETCH /W .THEN RESPONSE
  useEffect(() => {
    fetch('link')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setData(null))
  }, [])


  //FETCH /W ASYNC-AWAIT
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('link')
      const data = await response.json()
      setData(data)
    }

    fetchData();
  }, [])


  //POST /W .THEN RESPONSE
  const submitThen = () => {
    fetch('link', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'something',
        phoneNumber: 'something',
        website: 'something'
      })
    }).then(res => res.json())
      .then(data => setRes(true))
      .catch(err => setRes(false))
  }


  //POST /W ASYNC-AWAIT
  const submitAsyncAwait = async () => {
    const res = await fetch('http://localhost:3001/accommodation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'something',
        phoneNumber: 'something',
        website: 'something'
      })
    })

    const data = await res.json()
    setRes(true)
  }


  return (
    <div>

    </div>
  )
}

export default AsyncAwaitThen
