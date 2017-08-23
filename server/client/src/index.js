import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Blog from './components/Blog';
import Movies from './components/Movies';

import {Router,Route, IndexRoute, browserHistory} from 'react-router';


function scrollToTop() {
    window.scrollTo(0, 0)
    if ('scrollRestoration' in browserHistory) {
        browserHistory.scrollRestoration = 'manual';
    }

}
ReactDOM.render(<Router onUpdate={scrollToTop} history={browserHistory}>
    <Route path="/" component={App} >  
        <IndexRoute component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/movies" component={Movies}/>
    </Route>  
</Router>, document.getElementById('root'));

registerServiceWorker();