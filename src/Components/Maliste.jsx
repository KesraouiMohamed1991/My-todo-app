import TodoList from "./TodoList"
import TodoForm from "./TodoForm"


export default function Maliste() {
  return (
      <div className=" bg-black">
          <TodoForm/>
          <TodoList/>
    </div>
  )
}