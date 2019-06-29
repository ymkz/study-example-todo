import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { AppBar } from './components/app-bar'
import { TodosContainer } from './components/todos-container'

function App() {
  const [todos, setTodos] = React.useState()

  return (
    <React.Fragment>
      <AppBar setTodos={setTodos} />
      <TodosContainer todos={todos} setTodos={setTodos} />
    </React.Fragment>
  )
}

render(<App />, document.querySelector('#root'))
