function authenticate() {
  return gapi.auth2.getAuthInstance()
    .signIn({scope: "https://www.googleapis.com/auth/youtube.readonly"})
    .then(function() { console.log("Sign-in successful"); },
      function(err) { console.error("Error signing in", err); });
}
function loadClient() {
  gapi.client.setApiKey("AIzaSyBUr8UkYnUtzN7QAXEV5ng6duGEM0MaQow");
  return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
    .then(function() { console.log("GAPI client loaded for API"); },
      function(err) { console.error("Error loading GAPI client for API", err); });
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  return gapi.client.youtube.videos.list({
    "part": "snippet,statistics",
    "maxResults": 50,
    "myRating": "like",
    "pageToken": "CDIQAA"
  })
    .then(function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log("Response", response);
      },
      function(err) { console.error("Execute error", err); });
}
gapi.load("client:auth2", function() {
  gapi.auth2.init({client_id: "203430971588-vqgiahqmim9hshg4vvmasd7mvk4gi6lf.apps.googleusercontent.com"});
});