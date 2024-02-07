
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
  const dataList = document.getElementById("dataList");
  
  function deletePost(postKey) {
    // Delete post from Firebase
    console.log("Deleting post" + postKey)
    database.ref("users/101").child(postKey).remove();
  }

  firebase.database().ref('users/101').on('value', function(snapshot) {
    dataList.innerHTML = ""; // Clear previous data

    snapshot.forEach(function(childSnapshot) {
      // console.log(childSnapshot.key)

      const postKey = childSnapshot.key;
      var postData = childSnapshot.child('username').val();
      const listItem = document.createElement("li");

      // Create text content for the list item
      const titleLink = document.createElement("a");
      titleLink.href = `${postData}`; // Add your URL here
      titleLink.textContent = `${postData.substring(0, 100)}`;
      titleLink.target = "_blank"; // Open link in new tab

      listItem.appendChild(titleLink); // Append link to list item

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button"; // Add class for styling
      deleteButton.onclick = function() {
        deletePost(postKey); // Call deletePost function with postKey argument
      };

      // Append delete button to list item
      listItem.appendChild(deleteButton);

      // Append list item to data list
      dataList.insertBefore(listItem, dataList.firstChild);
    });
  });

  function writeUserData(userId, name) {
  firebase.database().ref('users/' + userId).push({
    username: name
  });
}