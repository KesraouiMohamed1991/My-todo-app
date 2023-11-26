// App.jsx

import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import DeletedTodoList from './components/DeletedTodoList'; // Adjust the path accordingly
import Maliste from './Components/Maliste';
import Nav from './Components/Nav';

const App = () => {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Maliste />} />
        <Route path="/DeletedTodoList" element={<DeletedTodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

