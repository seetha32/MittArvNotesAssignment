//import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage';
import NoteDetail from './pages/NoteDetail';

import './App.css';

const App = () => {
  return (
  /*  <BrowserRouter>
      <Routes>
        <Route path="/" exact component={HomePage} />
        <Route path="/note/:id" component={NoteDetail} />
      </Routes>
    </BrowserRouter>
    */
   <div>
    <HomePage />
    <NoteDetail />
   </div>
  );
}

export default App;


