// "use strict";
//
// document.getElementById("github-login-button").addEventListener("click", evt => {
//     evt.preventDefault();
//     window.location.href = "/auth/github/login";
// });
//
// const express = require('express')
// const app = express()
//
// const axios = require('axios')
//
// const clientID = '<GITHUB_CLIENT_ID>'
// const clientSecret = '<GITHUB_CLIENT_SECRET>'
//
//
// app.get('/home', (req, res) => {
//
//     // The req.query object has the query params that were sent to this route.
//     const requestToken = req.query.code
//
//     axios({
//         method: 'post',
//         url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
//         // Set the content type header, so that we get the response in JSON
//         headers: {
//             accept: 'application/json'
//         }
//
//     }).then((response) => {
//
//         const accessToken = response.data.access_token
//         console.log(response.data)
//
//         // redirect the user to the home page, along with the access token
//         res.redirect(`/home.html?access_token=${accessToken}`)
//     })
// })

// app.use(express.static(__dirname + '/public'))
// app.listen(4000,()=>{
//     console.log("Server listening on port : 4000")
// })

$(document).ready(function(){

    //when redirected from github login page
    let searchParams = new URLSearchParams(window.location.search)
    let access_token = searchParams.get('code');
    if(access_token){
        localStorage.setItem('access_token', access_token);
        window.location.href = '../index.html';
    }

    //checking if access token exists
    let local_access_token = localStorage.getItem('access_token');
    if(local_access_token){
        window.location.href = '../index.html';
    }
})