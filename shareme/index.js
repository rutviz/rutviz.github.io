
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA1VW2IWIirEJZXkPXm_SyRSCOEWctTZOU",
    authDomain: "linkshare-513e7.firebaseapp.com",
    databaseURL: "https://linkshare-513e7.firebaseio.com",
    projectId: "linkshare-513e7",
    storageBucket: "linkshare-513e7.appspot.com",
    messagingSenderId: "1032510796591"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
  

  function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).push({
    username: name
  });
}