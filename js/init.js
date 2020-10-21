

(function($){
  $(function(){

    /**
     * 1. server setup locally
     * 2. check if user is logged in
     * 3. if not logged in redirect to login.html
     * 4. if logged in its fine in index.html
     */


    /**
     * 1. redirect to github login page
     * 2. fetch the access token from github
     * 3. store the access token in browser's localstorage
     * 4. use access token check in index.html
     *
     */



    // $('.sidenav').sidenav();
    // $('.parallax').parallax();


  }); // end of document ready
})(jQuery); // end of jQuery name space

function exit() {
  localStorage.clear();
  window.location.href = './a3-persistence/login.html';
}

$(document).ready(function () {
  if(!access_token){
    window.location.href = './a3-persistence/login.html';
  }
})
