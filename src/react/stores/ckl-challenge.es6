import Alt from '../components/alt';
import CKLChallengeActions from '../actions/ckl-challenge';

/**
* CKLChallenge\Store
*
* @author Alexandre Moraes | http://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/

class CKLChallengeStore {
    constructor() {

        this.preLoader = true;

        this.bindListeners({
            onPreLoader: CKLChallengeActions.PRE_LOADER
        });

    }

    onPreLoader(show) {
        this.preLoader = show;
    }

}

module.exports = Alt.createStore(CKLChallengeStore, 'CKLChallengeStore');
