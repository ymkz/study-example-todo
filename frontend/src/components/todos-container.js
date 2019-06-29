import React from 'react'
import { TodoItem } from './todo-item'

export function TodosContainer({ todos, setTodos }) {
  React.useEffect(() => {
    fetch('http://localhost:3001/api/v1/todos', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => setTodos(json))
  }, [setTodos])

  const handleDelete = id => {
    fetch('http://localhost:3001/api/v1/todos/delete', {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => setTodos(json))
  }

  const handleChangeChecked = todo => {
    fetch('http://localhost:3001/api/v1/todos/update', {
      method: 'PUT',
      body: JSON.stringify(todo),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => setTodos(json))
  }

  if (todos) {
    return (
      <div className="todos-container">
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleChangeChecked={handleChangeChecked}
          />
        ))}
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}
