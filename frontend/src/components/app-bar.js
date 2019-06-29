import React from 'react'

export function AppBar({ setTodos }) {
  const [text, setText] = React.useState('')

  const handleChange = event => {
    event.preventDefault()
    setText(event.currentTarget.value)
  }

  const handleCreate = event => {
    event.preventDefault()
    fetch('http://localhost:3001/api/v1/todos/create', {
      method: 'POST',
      body: JSON.stringify({ text }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => setTodos(json))
      .then(() => setText(''))
  }

  return (
    <header className="app-bar">
      <div>TODO</div>
      <div>
        <input type="text" placeholder="Create a new todo" value={text} onChange={handleChange} />
        <button onClick={handleCreate}>add</button>
      </div>
    </header>
  )
}
