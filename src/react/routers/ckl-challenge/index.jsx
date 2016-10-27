import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import CKLChallengeStore from '../../stores/ckl-challenge';

/**
* CKLChallenge\Routers\Index
*
* @author Alexandre Moraes | http://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
@connectToStores
class CKLChallengeIndex extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);
        this.onChange = (state) => { this.setSate(state) }
    }

    /**
     * Stores used by this component
     */
    static getStores() {
        return [CKLChallengeStore];
    }

    /**
     * Used by Alt Flux to get properties from store
     */
    static getPropsFromStores() {
        return CKLChallengeStore.getState();
    }

    /**
     * When component mount. Start listen to App Store
     */
    componentDidMount() {
        CKLChallengeStore.listen(this.onChange);
    }

    /**
     * When component unmount. Stop listen to App Store
     */
    componentWillUnmount() {
        CKLChallengeStore.unlisten(this.onChange);
    }

    /**
     * Component Render
     */
    render() {

        return (
            <div className="app-index">
                <div className="row">
                    <div className="col-lg-12">
                        
                    </div>
                </div>
            </div>
        )
    }

}

module.exports = CKLChallengeIndex;
