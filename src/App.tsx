import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Search from './pages/Search/Search';
import Pokemon from './pages/Pokemon/Pokemon';
import Header from './sections/Header/Header';
import Footer from './sections/Footer/Footer';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route element={<Search />} path='/' />
                <Route element={<Pokemon />} path='/:id' />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
