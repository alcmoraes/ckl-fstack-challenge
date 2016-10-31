import Alt from '../components/alt';

import CKLChallengeActions from './ckl-challenge';

/**
 * CKLChallenge\Feeds\Actions
 *
 * Contains common actions for the Feeds Store
 *
 * @author Alexandre Moraes | http://github.com/alcmoraes
 * @license MIT | http://opensource.org/licenses/MIT
 */
class FeedsActions {

    /**
     * Load Feeds via API
     */
    fetchFeeds(category) {
        return (dispatch) => {
            let xmlhttp, response;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = () => {
                if (xmlhttp.readyState == 4) {
                    CKLChallengeActions.preLoader(false);
                    response = JSON.parse(xmlhttp.responseText);
                    this.actions.setFeeds(xmlhttp.status === 200 ? response : []);
                }
            };
            xmlhttp.open('GET', '/api/feeds' + (category ? '/?category=' + category : ''), true);
            xmlhttp.setRequestHeader('Accept', 'application/json');
            xmlhttp.setRequestHeader('Content-type', 'application/json');
            xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            xmlhttp.send();
        }
    }

    /**
     * Update feeds state
     */
    setFeeds(feeds) {
        return feeds;
    }

}

module.exports = Alt.createActions(FeedsActions);
