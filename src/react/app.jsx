import ReactDOM from 'react-dom';
import React from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';

// Tap Event for React
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppLayout from './routers/layout';
import CKLChallengeIndex from './routers/ckl-challenge/index';
import NotFound from './routers/not-found';

// Here we inject the 'onTouchTap' event on React Components
injectTapEventPlugin();

/**
 * CKLChallenge\App
 */
if(document.getElementById('ckl-challenge-app')) {

    ReactDOM.render((
        <Router history={browserHistory}>
            <Route path="/" component={AppLayout}>
                <IndexRoute component={CKLChallengeIndex} />
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    ), document.getElementById('ckl-challenge-app')); 

}
