import React, { useContext } from 'react'
import Todo from '../components/Todo'
import { TodoContext } from '../context/todoContext'

const Todos = () => {
    const { todos, updateTodo } = useContext(TodoContext) as TodoContextType
  return (
    <>
        {todos.map((todo: Todo)=> (
            <Todo key={todo.id} updateTodo={updateTodo} todo={todo} />
        ))}
    </>
  )
}

export default Todos