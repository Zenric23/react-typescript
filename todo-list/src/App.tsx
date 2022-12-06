import { useState } from 'react'
import reactLogo from './assets/react.svg'
import NewTodo from './components/NewTodo'
import Todos from './container/Todos'
import TodoProvider from './context/todoContext'


const App:React.FC = () => {
  return (
    <div className="App">
      <TodoProvider>
        <h1>My todos</h1>
        <NewTodo />
        <Todos />
      </TodoProvider>
    </div>
  )
}

export default App
