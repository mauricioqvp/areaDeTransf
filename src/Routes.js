import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Home from './Pages/Home';
import Teste from './Pages/Teste/Teste';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/teste" exact element={<Teste />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;