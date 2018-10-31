import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/projects';

export default (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/projects/' component={Projects}/>
        </Switch>
);