import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App'
import PeopleList from './components/PeopleList';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route  path='/' component={App} />
            <Route  path='/peopleList' component={PeopleList}/>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
    
registerServiceWorker();
