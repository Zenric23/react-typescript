import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/todoContext'

const NewTodo:React.FC = () => {
  const { saveTodo } = useContext(TodoContext) as TodoContextType
  const [formData, setFormData] = useState<Todo | {}>()

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value
    })
  }

  const handleSaveTodo = (e: React.FormEvent<HTMLFormElement>, formData: Todo | any) => {
    e.preventDefault()
    saveTodo(formData)
  }

  return (
    <form className="Form" onSubmit={(e) => handleSaveTodo(e, formData)}>
      <div>
        <div>
          <label htmlFor="name">Title</label>
          <input onChange={handleForm} type="text" id="title" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="desc" />
        </div>
      </div>
      <button disabled={formData === undefined ? true : false}>Add Todo</button>
    </form>
  )
}

export default NewTodo