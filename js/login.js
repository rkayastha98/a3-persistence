"use strict";

document.getElementById("github-login-button").addEventListener("click", evt => {
    evt.preventDefault();
    window.location.href = "/auth/github/login";
});