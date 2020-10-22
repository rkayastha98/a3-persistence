
function exit() {
  localStorage.clear();
  window.location.href = '../a3-persistence/login.html';
}

$(document).ready(function () {
  let access_token = localStorage.getItem('access_token');
  if(!access_token){
    window.location.href = '../a3-persistence/login.html';
  }
})
