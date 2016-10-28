import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import PreLoader from '../assets/pre-loader';

import CKLChallengeStore from '../stores/ckl-challenge';
import CKLChallengeActions from '../actions/ckl-challenge';

import CKLNavBar from '../assets/navbar.jsx';

import FeedsStore from '../stores/feeds';
import FeedsActions from '../actions/feeds';

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
         this.setCategory = this.setCategory.bind(this);

         this.state = {
             ...CKLChallengeStore.getState(),
             ...FeedsStore.getState()
        };
    }

    static contextTypes = {
        router: React.PropTypes.object.isRequired
    }

    /**
     * Stores used by this component
     */
    static getStores() {
        return [CKLChallengeStore, FeedsStore]
    }

    /**
     * Used by Alt Flux to get properties from store
     */
    static getPropsFromStores() {
        return {
            ...CKLChallengeStore.getState(),
            ...FeedsStore.getState()
        }
    }

    /**
     * When component mount. Start listen to Stores
     */
    componentDidMount() {
        CKLChallengeStore.listen(this.onChange);
        FeedsStore.listen(this.onChange);
    }

    /**
     * When component unmount. Stop listen to Stores
     */
    componentWillUnmount() {
        CKLChallengeStore.unlisten(this.onChange);
        FeedsStore.unlisten(this.onChange);
    }

    /**
     * Triggers when store changes.
     * Automatically set state
     */
    onChange(state) {
        this.setState(state);
    }

    setCategory(category) {
        this.context.router.push(category);
        FeedsActions.fetchFeeds(category);
    }

    /**
     * Component Render
     */
    render() {

        return (
            <div className="app-wrapper">
                <PreLoader active={this.state.preLoader} />
                <CKLNavBar onMenuClick={this.setCategory} />
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

module.exports = AppLayout;
