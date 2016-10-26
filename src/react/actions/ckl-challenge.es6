import Alt from '../components/alt';

/**
 * CKLChallenge\Actions
 *
 * Contains common actions for the app
 *
 * @author Alexandre Moraes | http://github.com/alcmoraes
 * @license MIT | http://opensource.org/licenses/MIT
 */
class CKLChallengeActions {
    /**
     * Activate the PreLoader (the progress circle)
     *
     * @param  {Boolean} active True/False to activate the Pre Loader
     */
    preLoader(active) {
        this.dispatch(active);
    }

}

module.exports = Alt.createActions(CKLChallengeActions);
