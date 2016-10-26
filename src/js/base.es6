"use strict";

/**
* CKLChallenge Base JS
*
* @author Alexandre Moraes | https://github.com/alcmoraes
* @license MIT | http://opensource.org/licenses/MIT
*/
class CKLChallengeJS {
    
    /**
     * A dummy method :)
     */
    dummy() {
        console.log("Hello World");
    }

}

$(document).ready(()=>{
    
    let CKL;
    CKL = new CKLChallengeJS();
    CKL.dummy();

});
