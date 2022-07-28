import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import CopyTeste from './Pages/CopyTeste';

import Home from './Pages/Home';
import InputData from './Pages/InputData';
import Teste from './Pages/Teste/Teste';

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/teste" exact element={<Teste />} />
                <Route path="/inputdata" exact element={<InputData />} />
                <Route path="/copyteste" exact element={<CopyTeste />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;