import React from 'react'

const ShowDataBase = ({ res }) => {
  return (
    <>
      <p>title: {res.title}</p>
      <p>description: {res.description}</p>
    </>
  )
}

export default ShowDataBase
