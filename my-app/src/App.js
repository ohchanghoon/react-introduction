import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Counter from './pages/Counter';
import Home from './pages/Home';
import Input from './pages/Input';
import MultipleInput from './pages/MultipleInput';

function App() {
    return (
        <div className='App'>
            <nav>
                <Link to='/'>Home</Link> | <Link to='/about'>About</Link> |{' '}
                <Link to='/counter'>Counter</Link> |{' '}
                <Link to='/input'>Input</Link>
                <Link to='/multiple-input'>Multiple Input</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/input' element={<Input />} />
                <Route path='/multiple-input' element={<MultipleInput />} />
            </Routes>
        </div>
    );
}

export default App;
