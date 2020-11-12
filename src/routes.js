import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/home" component={Home}/>
        </BrowserRouter>
    )
}

export default Routes;