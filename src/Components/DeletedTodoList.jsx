import { useSelector } from 'react-redux';
import {clearDeletedTodos} from '../../reducers/deletedTodos'
import { useDispatch } from 'react-redux';
import {  NavLink } from 'react-router-dom';

function DeletedTodoList() {
  const deletedTodos = useSelector((state) => state.deletedTodo.deletedTodos);
  const dispatch = useDispatch();

  // delete all the deleted todos from local storage
    function deleteAll() {
      
  dispatch(clearDeletedTodos());

  }

  return (
    <div className='bg-black min-h-screen py-4'>
      <h1 className='text-white font-bold px-4 py-8 text-lg text-center'>
        Deleted To-dos{' '}
        <span className='' onClick={() => deleteAll()}> ☞ 🗑️ </span>
      </h1>

      <ul className="text-white flex flex-wrap gap-5 items-center justify-start">
        {deletedTodos.length>0?
          deletedTodos.map((deletedTodo) => (
            <li
              className='flex flex-col-reverse w-96 rounded-xl bg-black border-2 text-start outline-none text-white border-slate-700 items-start justify-start p-4 '
              key={deletedTodo.id} 
            >
              <span className={`max-w-3/4`}>
                {deletedTodo.content} 
              </span>
            </li>
          // eslint-disable-next-line react/no-unescaped-entities
          )):<p className=' p-8 text-lime-300'>No deleted Todos, Let's Create One  <NavLink  to="/">📝</NavLink> </p>}
              
           
      </ul>
    </div>
  );
}

export default DeletedTodoList;
