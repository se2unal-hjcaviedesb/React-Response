import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App'
import PeopleList from './components/PeopleList';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/peopleList' component={PeopleList}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
    
registerServiceWorker();
