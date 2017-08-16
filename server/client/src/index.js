import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './About';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';

import {Router,Route, IndexRoute, browserHistory} from 'react-router';

ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App} >  
        <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
    </Route>  
</Router>, document.getElementById('root'));

registerServiceWorker();