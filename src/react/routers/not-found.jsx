import React from 'react';

/**
* Simple Not Found Page
*
* @author Alexandre Moraes | http://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
const NotFoundComponent = React.createClass({

    render() {
        return (
            <div className="app-screen" style={{textAlign: 'center'}}>
                <h2>Not found!</h2>
            </div>
        )
    }

});

module.exports = NotFoundComponent;
