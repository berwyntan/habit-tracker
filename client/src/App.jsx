import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllTodos from './features/todo/AllTodos'
import EditTodo from './features/todo/EditTodo';

import './App.css'
import AllLists from './features/todo/AllLists';
import Layout from './pages/Layout';
import List from './features/todo/List';

function App() {
  

    return (
      <BrowserRouter>
      <Layout />
      <Routes>
              
        <Route index element={<AllTodos />} />
        <Route path='home' element={<AllTodos />} />
        
        <Route path=':id' element={<EditTodo />} />
      
        <Route path='lists' element={<AllLists />}>
          <Route path=':list' element={<List />} />
        </Route> 

        

        
      
      </Routes>
      </BrowserRouter>
    )
}

export default App
