import React from 'react';

/**
* Preloader Component
*
* @author Alexandre Moraes | https://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
class PreLoaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="dom-preloader" style={{display: this.props.active ? 'block' : 'none'}} layout="row" layoutSm="column" layoutAlign="space-around">
                <svg className="preloader-spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
                    <circle className="preloader-path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
                </svg>
            </div>
        )
    }

}

PreLoaderComponent.propTypes = {
    active: React.PropTypes.bool
};

module.exports = PreLoaderComponent;
