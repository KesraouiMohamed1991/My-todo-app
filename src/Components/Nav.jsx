import {  NavLink, Link } from 'react-router-dom';
export default function Nav() {
    return (
        <nav className="w-full   p-4  flex items-center justify-center">
            
            <div className='w-1/3 mt-4'><Link to='/'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="yellowgreen" className="w-12 h-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg></Link>

</div>



            <ul className="flex flex-col lg:flex-row justify-between cursor-pointer">
                <li className="list-none font-bold active:underline hover:text-lime-400 text-white px-10">  <NavLink to="/">To-dos</NavLink></li>
                <li className="list-none active:underline hover:text-lime-400 font-bold text-white px-10"> <NavLink to="/DeletedTodoList">Deleted to-dos</NavLink></li>
            </ul>
      </nav>
  )
}