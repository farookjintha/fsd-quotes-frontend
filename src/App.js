import './App.css';
import AddQuote from './Components/AddQuote';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ListQuotes from './Components/ListQuotes';
import UpdateQuote from './Components/UpdateQuote';

import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<ListQuotes />}/>
          <Route path='/quotes/add' element={<AddQuote />}/>
          <Route path='/quotes/:quoteId/update' element={<UpdateQuote />}/>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
