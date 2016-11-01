import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import CKLChallengeStore from '../../stores/ckl-challenge';

import FeedsStore from '../../stores/feeds';
import FeedsActions from '../../actions/feeds';

import Content from '../../components/content';

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

        this.state = {
            feeds: []
        }

        this.onChange = (state) => { this.setState(state) }

        FeedsActions.fetchFeeds();
    }

    /**
     * Stores used by this component
     */
    static getStores() {
        return [CKLChallengeStore, FeedsStore];
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
     * When component mount. Start listen to App Store
     */
    componentDidMount() {
        CKLChallengeStore.listen(this.onChange);
        FeedsStore.listen(this.onChange);
    }

    /**
     * When component unmount. Stop listen to App Store
     */
    componentWillUnmount() {
        CKLChallengeStore.unlisten(this.onChange);
        FeedsStore.unlisten(this.onChange);
    }

    /**
     * Component Render
     */
    render() {

        return (
            (!this.state.feeds.length) ? (
                <div className="ckl-challenge-app-wrapper">
                    <h3 className="text-center">
                        Nothing found :(
                    </h3>
                </div>
            ) : (
                <div className="ckl-challenge-app-wrapper">
                    <div className="row content-row">
                        {this.state.feeds.slice(0, 3).map((feed, i) => {
                            return(
                                <Content key={i} featured={true} promo={i == 0 ? true : false} feed={feed} />
                            )
                        })}
                    </div>
                    <hr className="main-topics-hr" />
                    <div className="row content-row">
                        {this.state.feeds.slice(3).map((feed, i) => {
                            return (
                                <Content key={i} feed={feed} />
                            )
                        })}
                    </div>
                </div>
            )
        )
    }

}

module.exports = CKLChallengeIndex;
