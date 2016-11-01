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

    request(url, callback) {
        let xmlhttp, response;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState == 4) {
                CKLChallengeActions.preLoader(false);
                callback(JSON.parse(xmlhttp.status === 200 ? xmlhttp.responseText : []));
            }
        };
        xmlhttp.open('GET', url, true);
        xmlhttp.setRequestHeader('Accept', 'application/json');
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xmlhttp.send();
    }

    /**
     * Load Feeds via API
     */
    fetchFeeds(category) {
        return (dispatch) => {
            this.actions.request('/api/feeds' + (category ? '/?category=' + category : ''), (data) => {
                this.actions.setFeeds(data, (!category ? true : false));
            });
        }
    }

    /**
     * Update feeds state
     */
    setFeeds(feeds, persistent) {
        return {data: feeds, persistent: persistent};
    }

}

module.exports = Alt.createActions(FeedsActions);
