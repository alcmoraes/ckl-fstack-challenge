import React from 'react';
import connectToStores from 'alt/utils/connectToStores';
import CKLChallengeStore from '../../stores/ckl-challenge';

import FeedsStore from '../../stores/feeds';
import FeedsActions from '../../actions/feeds';

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
                                <div key={i} className={i == 0 ? "col-lg-6 col-md-12 col-sm-12" : "col-lg-3 col-md-6 col-sm-6 col-xs-12"}>
                                    <div className={(i == 0 ? "promo" : "") + " content-wrapper"} >
                                        <div className={feed.category + " content-category"}>
                                            <span>{feed.category}</span>
                                        </div>
                                        <img src={feed.image} alt="" className="content-picture img-responsive" />
                                        <h4 className="content-title">{feed.title}</h4>
                                        <div className="author-cta">
                                            <img src={feed.author_avatar} className="author-avatar img-circle" />
                                            <span className="author-by">by {feed.author_name}</span>
                                        </div>
                                        <p className="excerpt">
                                            {feed.excerpt}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <hr className="main-topics-hr" />
                    <div className="row content-row">
                        {this.state.feeds.slice(3).map((feed, i) => {
                            return (
                                <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                                    <div className="content-wrapper">
                                        <div className={feed.category + " content-category"}>
                                            <span>{feed.category}</span>
                                        </div>
                                        <h4 className="content-title">{feed.title}</h4>
                                        <div className="author-cta">
                                            <img src={feed.author_avatar} className="author-avatar img-circle" />
                                            <span className="author-by">by {feed.author_name}</span>
                                        </div>
                                        <p className="excerpt">
                                            {feed.excerpt}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        )
    }

}

module.exports = CKLChallengeIndex;
