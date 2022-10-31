import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllTodos from './features/todo/AllTodos'
import EditTodo from './features/todo/EditTodo';

import './App.css'

import Layout from './pages/Layout';


function App() {
  

    return (
      <BrowserRouter>
      <Layout />
      <Routes>
              
        <Route index element={<AllTodos />} />
        <Route path='home' element={<AllTodos />} />
        
        <Route path=':id' element={<EditTodo />} />
              
      </Routes>
      </BrowserRouter>
    )
}

export default App
