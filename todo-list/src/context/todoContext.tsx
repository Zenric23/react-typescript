import React, { createContext, useState } from "react";

export const TodoContext = createContext<TodoContextType | null>(null)

interface Props {
    children: React.ReactNode
}

const TodoProvider: React.FC<Props> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: 1,
            title: 'post 1',
            desc: 'this is desccription',
            status: false
        },
        {
            id: 2,
            title: 'post 2',
            desc: 'this is desccription',
            status: false
        },
    ])

    const saveTodo = (todo: Todo): void => {
        const newTodo: Todo = {
            id: Math.random(),
            title: 'post 1',
            desc: 'this is desccription',
            status: false
        }
        setTodos(prev=> [...prev, todo])
    }

    const updateTodo = (id: number): void => {
        todos.filter((todo: Todo) => {
            if (todo.id === id) {
                todo.status = true
                setTodos([...todos])
            }
        })
    }

    return (
        <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoProvider