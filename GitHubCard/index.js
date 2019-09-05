/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

  
 // .catch(err => {
    // deal with the error in here
   // console.log("Error:", err);
 // });

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/
axios
  .get("https://api.github.com/users/Surfsol")
  .then(response => {
    // deal with the response data in here
    console.log(response);
    let e = response.data;
    let cardDiv1 = document.querySelector(".cards").appendChild(
        profileCreator(
          e.avatar_url,
          e.name,
          e.login,
          e.location,
          e.type,
          e.url,
          e.followers,
          e.following,
          e.bio
        )
      );
    }
  );

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = ['luishrd', 'BigKnell', 'cheshire137', 'pifafu', 'tetondan'];
followersArray.map(e =>{
  let address = "https://api.github.com/users/" 
  let newAdd = address.concat(`${e}`)
  console.log(newAdd)
  axios.get(newAdd)
  .then(response => {
    // deal with the response data in here
    console.log(response);
    let e = response.data;
    let cardDiv1 = document.querySelector(".cards").appendChild(
        profileCreator(
          e.avatar_url,
          e.name,
          e.login,
          e.location,
          e.type,
          e.url,
          e.followers,
          e.following,
          e.bio
        )
      );
    }
  );
})

/*
axios
  .get("https://api.github.com/users/Surfsol/followers")
  .then(response => {
    // deal with the response data in here
    console.log(response);
    let e = response.data;
    let cardDiv1 = document.querySelector(".cards").appendChild(
        profileCreator(
          e.avatar_url,
          e.name,
          e.login,
          e.location,
          e.type,
          e.url,
          e.followers,
          e.following,
          e.bio
        )
      );
    }
  );
*/

axios.get("https://api.github.com/users/Surfsol/following")
.then(response => {
  console.log(response.data);
  response.data.map(e => {
    console.log(e);
    console.log(e.login);
    let cardDiv1 = document.querySelector(".cards").appendChild(
        profileCreator(
          e.avatar_url,
          e.name,
          e.login,
          e.location,
          e.type,
          e.url,
          e.followers,
          e.following,
          e.bio
        )
      );
    }
  );
})


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function profileCreator(
  avatar_url,
  name,
  login,
  location,
  type,
  url,
  followers,
  following,
  bio
) {
  //create elements
  let cardDiv = document.createElement("div");
  let userPic = document.createElement("img");
  let cardInfo = document.createElement("div");
  let nameN = document.createElement("h3");
  let userName = document.createElement("p");
  let locationL = document.createElement("p");
  let profile = document.createElement("p");
  let profileAdd = document.createElement("a");
  let followersC = document.createElement("p");
  let followingC = document.createElement("p");
  let bioC = document.createElement("p");

  //add classes
  cardDiv.classList.add('.card');
  cardInfo.classList.add("card-info");
  nameN.classList.add("name");
  userName.classList.add("username");

  //append
  cardDiv.appendChild(userPic);
  cardDiv.appendChild(cardInfo);
  cardInfo.appendChild(nameN);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(locationL);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(profileAdd);
  cardInfo.appendChild(followersC);
  cardInfo.appendChild(followingC);
  cardInfo.appendChild(bioC);
  profile.appendChild(profileAdd);

  //set content

  userPic.src = avatar_url;
  nameN.textContent = name;
  userNametextContent = login;
  locationL.textContent = location;
  profile.textContent = type;
  profileAdd.textContent = url;
  followersC.textContent = followers;
  followingC.textContent = following;
  bioC.textContent = bio;

  return cardDiv;
}

/*
 List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

