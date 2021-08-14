
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header/Header';
  
import Home from './pages/Home/Home';
import DetailMovie from './pages/DetailMovie/DetailMovie';

const Routers = () => {
    return (
      <BrowserRouter>
        <div className="h-100">
          <Header />
          <Route path="/detail/:id" component={DetailMovie} />
          <Route exact path="/">
              <Home />
          </Route>
        </div>
      </BrowserRouter>
    );
  };
  export default Routers;
  