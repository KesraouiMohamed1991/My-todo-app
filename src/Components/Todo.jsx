

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, check } from '../../reducers/todo';
import { useState, useEffect } from 'react';
import {addToDeletedTodos}from '../../reducers/deletedTodos'

// eslint-disable-next-line react/prop-types
export default function Todo({ id, content }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.value.find((t) => t.id === id));
  const [selected, setSelected] = useState(todo ? (todo.checked ? 'completed' : 'not-completed') : 'not-completed');

  useEffect(() => {
    if (todo) {
      setSelected(todo.checked ? 'completed' : 'not-completed');
    }
  }, [todo]);

 function handleSelectChange(e) {
  const value = e.target.value;
  if (value === 'delete') {
    // Dispatch the addToDeletedTodos action from deletedTodoSlice
    dispatch(deleteTodo(id));

    dispatch(addToDeletedTodos({ id, content }));
  } else {
    dispatch(check(id, value === 'completed'));
    setSelected(value);
  }
}

  return (
    <li
      className={`flex flex-col-reverse w-72 items-start rounded-xl bg-black border-2 text-start outline-none text-white border-slate-700  justify-start p-4 ${selected === 'completed' ? 'bg-lime-300  border-0 text-gray-950' : 'bg-black'}`}
      key={id}
    >
      <span className={`max-w-3/4 mt-4 text-sm sm:text-lg ${selected === 'completed' ? 'line-through' : ''}`}>{content}</span>
      <div className=' '>
        <select
          className={`bg-black ${selected === 'completed' ? 'bg-lime-300 border-0  text-gray-950 font-bold' : 'bg-black'} text-white px-4 py-1 rounded-md`}
          value={selected}
          onChange={handleSelectChange}
              >
                  
          <option value="not-completed">Not Completed</option>
          <option value="completed">Completed</option>
          <option value="delete">Delete</option>
        </select>
      </div>
    </li>
  );
}
