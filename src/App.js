import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <Routes>
                    <Route path='https://shivasenareddy.github.io/test49.1/' element={<Home />}></Route>
                    <Route path='https://shivasenareddy.github.io/test49.1/about' element={<About />}></Route>
                    <Route path='https://shivasenareddy.github.io/test49.1/contact' element={<Contact />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
