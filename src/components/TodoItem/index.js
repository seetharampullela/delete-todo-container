// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodoId} = props
  const {id, title} = todosDetails

  const onDeleteTodo = () => {
    deleteTodoId(id)
  }

  return (
    <li className="list-container">
      <p>{title}</p>
      <button type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
