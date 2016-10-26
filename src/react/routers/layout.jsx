import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PreLoader from '../assets/pre-loader';
import CKLChallengeStore from '../stores/ckl-challenge';

/**
* CKLChallenge\Routers\Layout component
*
* This component encapsulate all other routes.
*
* @author Alexandre Moraes | http://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
@connectToStores
class AppLayout extends React.Component {

    /**
     * Class constructor
     */
    constructor(props) {
        super(props);
         this.onChange = this.onChange.bind(this);
         this.state = CKLChallengeStore.getState();
    }

    /**
     * Stores used by this component
     */
    static getStores() {
        return [CKLChallengeStore]
    }

    /**
     * Used by Alt Flux to get properties from store
     */
    static getPropsFromStores() {
        return {
            ...CKLChallengeStore.getState()
        }
    }

    /**
     * When component mount. Start listen to Stores
     */
    componentDidMount() {
        CKLChallengeStore.listen(this.onChange);
    }

    /**
     * When component unmount. Stop listen to Stores
     */
    componentWillUnmount() {
        CKLChallengeStore.unlisten(this.onChange);
    }

    /**
     * Triggers when store changes.
     * Automatically set state
     */
    onChange(state) {
        this.setState(state);
    }

    /**
     * Component Render
     */
    render() {

        return (
            <div className="wrapper">
                <PreLoader active={this.state.preLoader} />
                <div className="apps">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = AppLayout;
