import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';

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