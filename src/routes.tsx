import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MegaSena from './pages/MegaSena';
import Quina from './pages/Quina';
import LotoFacil from './pages/LotoFacil';
import LotoMania from './pages/LotoMania';
import TimeMania from './pages/TimeMania';
import DiaDeSorte from './pages/DiaDeSorte';
import Page404 from './pages/404';

import { SelectGameContextProvider } from './context/SelectGame'

function Routes() {
    return (
        <BrowserRouter>
            <SelectGameContextProvider>
                <Switch>
                    <Route exact path="/" component={MegaSena}/>
                    <Route path="/mega-sena" component={MegaSena}/>
                    <Route path="/quina" component={Quina}/>
                    <Route path="/lotofácil" component={LotoFacil}/>
                    <Route path="/lotomania" component={LotoMania}/>
                    <Route path="/timemania" component={TimeMania}/>
                    <Route path="/dia-de-sorte" component={DiaDeSorte}/>

                    <Route path='/404' component={Page404} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </SelectGameContextProvider>
        </BrowserRouter>
    )
}

export default Routes;