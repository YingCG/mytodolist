import React from 'react'

function TodoItem (props) {
  return (
    <>
      <p>{props.todo.name}</p>
      <button onClick>Edit</button>
      <button onClick>X</button>
    </>
  )
}

export default TodoItem
