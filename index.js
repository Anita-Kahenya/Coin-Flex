// GET request using fetch()
fetch('http://localhost:3000/exchanges' )
// Converting received data to JSON
 .then((response) => response.json ())
 .then((json) => {

// variable to store html headers
  let li = `<tr>
  <th> COIN NAME  </th>
  <th>SYMBOL</th>
  </tr>`; 

  json.forEach((exchange) => {
    li+=`<tr>
      <td> ${exchange.Name }</td>
    <td><img src= "${exchange.image}"></td>
    <td> <!-- Use an element to toggle between a like/dislike icon -->
    <i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>
    </div> </td>
    </tr>`; 
  
  })
// Setting innerHTML as tab variable
document.getElementById("exchanges").innerHTML = li;
 });

 function myFunction(x) {
  x.classList.toggle("fa-thumbs-down");

  
}

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
