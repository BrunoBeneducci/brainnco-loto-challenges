import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import MegaSena from './pages/MegaSena';
// import Quina from './pages/Quina';
// import LotoFacil from './pages/LotoFacil';
// import LotoMania from './pages/LotoMania';
// import TimeMania from './pages/TimeMania';
// import DiaDeSorte from './pages/DiaDeSorte';
import LayoutBase from './pages/LayoutBase';
import Page404 from './pages/404';

import { SelectGameContextProvider } from './context/SelectGame'

function Routes() {
    return (
        <BrowserRouter>
            <SelectGameContextProvider>
                <Switch>
                    <Route exact path="/" component={LayoutBase} />
                    <Route path="/mega-sena" component={LayoutBase} />
                    <Route path="/quina" component={LayoutBase} />
                    <Route path="/lotofácil" component={LayoutBase} />
                    <Route path="/lotomania" component={LayoutBase} />
                    <Route path="/timemania" component={LayoutBase} />
                    <Route path="/dia-de-sorte" component={LayoutBase} />
                    <Route path='/404' component={Page404} />
                    <Redirect from='*' to='/404' />
                </Switch>
            </SelectGameContextProvider>
        </BrowserRouter>
    )
}

export default Routes;