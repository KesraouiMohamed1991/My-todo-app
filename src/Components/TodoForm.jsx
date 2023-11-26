import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../../reducers/todo';
import { v4 as uuidv4 } from 'uuid';

function TodoForm() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      const todo = {
        id: uuidv4(),
        content: input,
      };

      dispatch(add(todo));
      setInput('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="py-4 bg-black flex flex-col items-center ">

      <h1 className='text-white font-bold px-4 py-8 text-lg'>My to-do-List 📝</h1>
      <form className="flex gap-11 py-2 px-1 rounded-xl lg:w-1/2 border-slate-700 border-2" onSubmit={handleSubmit}>
        <input
          className="px-8 text-start rounded-xl py-2  bg-black w-full   outline-none text-white "
          type="text"
          placeholder="Add your todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="bg-white border-2 cursor-pointer  active:bg-black active:text-white  rounded-xl text-black px-4 py-2" type="submit" disabled={!input.trim()}>
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;




