// GET request using fetch()
fetch('http://localhost:3000/coins' )
// Converting received data to JSON
 .then((response) => response.json ())
 .then((json) => {

// variable to store html headers
  let li = `<tr>
  <th>ID</th>
  <th> Name  </th>
  <th>Symbol</th>
  </tr>`; 

  json.forEach((coin) => {
    li+=`<tr>
    <td>${coin.id}</td>
    <td> ${coin.Name }</td>
    <td>${coin.symbol}</td>
    <td> <div class="likes-section">
    <span class="likes"> 0 likes</span>
    <button class="like-button">♡</button>
    </div> </td>
    </tr>`; 
  
  })
// Setting innerHTML as tab variable
document.getElementById("coins").innerHTML = li;
 });

function coin (){

  const likeCounter=document.querySelector ('. likes')
  likeCounter.innerText= `${json.likes} likes`

  const likeButton =document.querySelector ('.like-button')
  likeButton.addEventListener ('click' , function (event){
    likeCounter.innerText =incrementLikes (json)
  })
}

function incrementLikes (coin) {
let likes =0
fetch (`http://localhost:3000/coins ${coin.id}`)
.then((response) => response.json ())
.then((json) => {
  likes=json.likes

})
let newLikes=likes +1

fetch (`http://localhost:3000/coins/1`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify( {
      "likes": newLikes
    })
  })
 
let likesText =`${newLikes} likes`
return likesText
}

