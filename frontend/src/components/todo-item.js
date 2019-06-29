import React from 'react'

export function TodoItem({ todo, handleDelete, handleChangeChecked }) {
  const handleChange = event => {
    event.preventDefault()
    handleChangeChecked({ ...todo, completed: event.currentTarget.checked })
  }

  return (
    <div>
      <div className="todo-item">
        <input type="checkbox" checked={todo.completed} onChange={handleChange} />
        <div className="todo-text">{todo.text}</div>
        <button onClick={() => handleDelete(todo.id)}>delete</button>
      </div>
    </div>
  )
}
