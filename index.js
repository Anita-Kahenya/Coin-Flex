// GET request using fetch()
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

  json.forEach((exchange) => {
    li+=`<tr>
      <td> ${exchange.Name }</td>
      <td><img src= "${exchange.image}"></td>
      <td>${exchange.year_established}</td>
    <td>${exchange.country}</td>
      <td>${exchange.trust_score_rank}</td>
      <td><a href="${exchange.url}" target="blank">${exchange.url}></a></td>
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
//  .then((json) => {
// let trend = `<tr>
// <th> COIN NAME  </th>
// <th>SYMBOL</th>
// <th>Year</th>
// <th>Country</th>
// <th>Coin Rank</th>
// </tr>`; 

// json.forEach((exchange) => {
//   trend+=`<tr>
//     <td> ${exchange.Name }</td>
//     <td><img src= "${exchange.image}"></td>
//     <td>${exchange.year_established}</td>
//   <td>${exchange.country}</td>
//     <td>${exchange.trust_score_rank}</td>
//   <td> <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i></td>
//  </tr>`; 
// })
// // Setting innerHTML as tab variable
// document.getElementById("exchanges").innerHTML =trend.slice(1,9);
//  })

// function exchange (){

//   const likeCounter=document.querySelector ('. likes')
//   likeCounter.innerText= `${json.likes} likes`

//   const likeButton =document.querySelector ('.like-button')
//   likeButton.addEventListener ('click' , function (event){
//     likeCounter.innerText =incrementLikes (json)
//   })
// }

// function incrementLikes (exchange) {
// let likes =0
// fetch (`http://localhost:3000/exchanges ${exchange.id}`)
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
