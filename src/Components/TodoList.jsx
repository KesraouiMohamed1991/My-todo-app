// TodoList.jsx
import { useSelector } from 'react-redux';
 import Todo from './Todo';

export default function TodoList() {
  const todos = useSelector((state) => state.todo.value);
  console.log(todos);
    
  return (
    <ul className="bg-black flex flex-wrap  gap-4 items-start justify-center">
      {todos ? todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} content={todo.content} />
      )) : null}
      </ul>
  );
}
