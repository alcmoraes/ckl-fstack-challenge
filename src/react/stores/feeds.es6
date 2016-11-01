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
        this.persistentFeeds = [];

        this.bindListeners({
            handleFetchFeeds: FeedsActions.FETCH_FEEDS,
            handleSetFeeds: FeedsActions.SET_FEEDS
        });

    }

    handleFetchFeeds() {
        this.feeds = [];
    }

    /**
     * Set the given feeds
     * 
     * @param {Object} feeds Containing two properties:
     *                       'data' and 'persistent'.
     *                       In case persistent is true
     *                       it sets a 'persistentFeeds'
     *                       object containing the current
     *                       feeds.
     */
    handleSetFeeds(feeds) {
        if(feeds.persistent) this.persistentFeeds = feeds.data;
        this.feeds = feeds.data;
    }

}

module.exports = Alt.createStore(FeedsStore, 'FeedsStore');
