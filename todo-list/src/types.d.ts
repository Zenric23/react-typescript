
interface Todo {
    id: number
    title: string 
    desc: string
    status: boolean
}

type TodoContextType = {
    todos: Todo[]
    saveTodo: (todo: Todo) => void
    updateTodo: (id: number) => void
}