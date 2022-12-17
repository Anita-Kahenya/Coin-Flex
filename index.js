// document.addEventListener(domcon// GET request using fetch()
fetch('http://localhost:3000/exchanges' )
// Converting received data to JSON
 .then((response) => response.json ())
 .then((json) => {

// variable to store html headers
  let li = `<tr>
  <th> COIN NAME  </th>
  <th>SYMBOL</th>
  <th>Year</th>
  <th>Country</th>
  <th>Coin Rank</th>
  <th>url</th>
  </tr>`; 

  json.forEach((coins) => {
    li+=`<tr>
      <td > ${coins.Name }</td>
      <td><img src= "${coins.image}"></td>
      <td>${coins.year_established}</td>
    <td>${coins.country}</td>
      <td>${coins.trust_score_rank}</td>
      <td><a href="${coins.url}" target="self">${coins.url}</a></td>
    <td> <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></td>
   </tr>`; 
  })
// Setting innerHTML as tab variable
document.getElementById("exchanges").innerHTML = li;
 });

 function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");
 
}

// fetch('http://localhost:3000/exchanges' )
// // Converting received data to JSON
//  .then((response) => response.json ())
//  .then((data) => {

// // variable to store html headers
//   let topCoin =`<tr>
//   <th> COIN NAME  </th>
//   <th>SYMBOL</th>
//   <th>RANK</th>
//   <th>url</th>
// </tr>`

//  if (`&{coin.trust_score}` ===1){

//   data.forEach((coin) => {
//     topCoin+=`<tr>
//       <td > ${coin.Name }        <ul>
//       <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//     </ul></td>
//       <td><img src= "${coin.image}"></td>
//       <td>${coin.trust_score_rank}</td>
 
//     <td> <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></td>
//    </tr>`; 
//   })
// // Setting innerHTML as tab variable
// document.getElementById("trending").innerHTML =topCoin;
// }

//  });

//  function myFunction(x) {
//   x.classList.toggle("fa-thumbs-down");
//  }

// function coins (){

//   const likeCounter=document.querySelector ('. likes')
//   likeCounter.innerText= `${json.likes} likes`

//   const likeButton =document.querySelector ('.like-button')
//   likeButton.addEventListener ('click' , function (event){
//     likeCounter.innerText =incrementLikes (json)
//   })
// }

// function incrementLikes (coins) {
// let likes =0
// fetch (`http://localhost:3000/exchanges ${coins.id}`)
// .then((response) => response.json ())
// .then((json) => {
//   likes=json.likes

// })
// let newLikes=likes +1

// fetch (`http://localhost:3000/exchanges/1`,{
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify( {
//       "likes": newLikes
//     })
//   })
 
// let likesText =`${newLikes} likes`
// return likesText
// }
