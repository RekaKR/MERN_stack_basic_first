import React, { useState } from 'react'

const InputDataBase = ({ setTitle, setDescription, title, description, submit }) => {

  return (
    <>
      <div>
        <p>title</p>
        <input type="text" onChange={e => setTitle(e.target.value)} />
      </div>

      <div>
        <p>description</p>
        <input type="text" onChange={e => setDescription(e.target.value)} />
      </div>

      <button disabled={!(title && description)} onClick={() => submit()}>Submit</button>
    </>
  )
}

export default InputDataBase
