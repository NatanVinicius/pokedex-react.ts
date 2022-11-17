import { Route, Routes } from 'react-router-dom';

//pages
import { Home } from '../pages/Home';
import { AboutPokemon } from '../pages/AboutPokemon';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/AboutPokemon/:id' element={<AboutPokemon />} />
        </Routes>
    );
};