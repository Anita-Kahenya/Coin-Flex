document.addEventListener("DOMContentLoaded", () => {
  fetchData();
})
function fetchData(){
fetch('http://localhost:3000/exchanges' )
// Converting received data to JSON
 .then((response) => response.json ())
 .then((json) => {

// variable to store html headers
  let li = `<tr>
  <th scope="col">Coin Rank</th>
  <th scope="col"> COIN NAME  </th>
  <th scope="col">SYMBOL</th>
  <th scope="col">Year</th>
  <th scope="col">Country</th>
  <th scope="col">url</th>
  <th scope="col">trade_volume_24h_btc</th>
  </tr>`; 

  json.forEach((coins) => {
    li+=`<tr>
    <td>${coins.trust_score_rank}</td>
    <td >   ${coins.Name }
    <p><button type="button" class="btn">
    <span class="glyphicon glyphicon-thumbs-up"></span> Like
    </button></p></td>
    <td><img src= "${coins.image}" title="${coins.description}"></td>
    <td>${coins.year_established}</td>
    <td>${coins.country}</td>
    <td><a href="${coins.url}" target="blank">${coins.url}</a></td>
    <td>${coins.trade_volume_24h_btc}</td>
    </tr>`; 
  })
// Setting innerHTML as tab variable
document.getElementById("exchanges").innerHTML = li;
 })
}


fetch("http://localhost:3000/trending")
// Converting received data to JSON
 .then((resource) => resource.json ())
 .then((data) => {
 // variable to store html headers
  let topCoin=
  `<tr>
  <th scope="col"> COIN NAME  </th>
  <th scope="col">SYMBOL</th>
  <th scope="col">Country</th>
  <th scope="col">url</th>
  <th scope="col">trade_volume_24h_btc</th>
  <th scope="col">trade_volume_24h_btc_normalized</th>
  </tr>`

  data.forEach((myCoin) => {
    topCoin += 
   `<tr>
      <td > ${myCoin.Name } </td>
      <td><img src= "${myCoin.image}"title="${myCoin.description}"></td> 
      <td>${myCoin.country}</td>
      <td><a href="${myCoin.url}" target="blank">${myCoin.url}</a></td>
      <td>${myCoin.trade_volume_24h_btc}</td>
      <td>${myCoin.trade_volume_24h_btc_normalized}</td>
      </tr>`; 
  })
// Setting innerHTML as tab variable
document.getElementById("trending").innerHTML =topCoin
 })

