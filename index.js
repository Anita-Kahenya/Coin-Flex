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