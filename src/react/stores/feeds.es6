import Alt from '../components/alt';
import FeedsActions from '../actions/feeds';

/**
* CKLChallenge\Feeds\Store
*
* @author Alexandre Moraes | http://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/

class FeedsStore {
    constructor() {

        this.feeds = [];

        this.bindListeners({
            handleFetchFeeds: FeedsActions.FETCH_FEEDS,
            handleSetFeeds: FeedsActions.SET_FEEDS
        });

    }

    handleSetFeeds(feeds) {
        this.feeds = feeds;
    }

    handleFetchFeeds() {
        this.feeds = [];
    }

}

module.exports = Alt.createStore(FeedsStore, 'FeedsStore');
