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
    <td >   ${coins.Name }</td>
    <td><img src= "${coins.image}" title="${coins.description}"></td> 
    <td>${coins.year_established}</td>
    <td>${coins.country}</td>
    <td><a href="${coins.url}" target="blank">${coins.url}</a></td>
    <td>${coins.trade_volume_24h_btc}</td>
    <td><button type="button" id="btn" > Like</button></td>
    </tr>`; 
  })

// Setting innerHTML as tab variab
  document.getElementById("exchanges").innerHTML =li;

  // adding an event listener to our button
    // Selecting our button by id
  const btn = document.getElementById('btn');


 // adding an event listener to our button
 // changing text after "click" event
// Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Like';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span style="background-color: lime">Liked</span>';
  } else {
    btn.textContent = initialText;
  }
});
});

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
  <th>LIKE</th>
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
      <td><button type="button" id="btn" >
      <span class="glyphicon glyphicon-thumbs-up"></span> Like
      </button></td>
      </tr>`; 
  })
// Setting innerHTML as tab variable
document.getElementById("trending").innerHTML =topCoin

// Selecting our button by id
 // adding an event listener to our button
 // changing text after "click" event
const btn = document.getElementById('btn');

// Toggle button text on click
btn.addEventListener('click', function handleClick() {
  const initialText = 'Like';

  if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    btn.innerHTML =
      '<span style="background-color: lime">Liked</span>';
  } else {
    btn.textContent = initialText;
  }
});
 })
}
// fetch the data from the server by calling the fetch function.
//    feed fetched data  into the system.
//  Utilize Chart JS library to form the chart.
getData();
async function getData() {
   const response = await fetch("http://localhost:3000/trending");
   const data = await response.json();
   console.log(data);
   length =data.length;
   console.log(length);
   labels = [];
   values = [];
   for (i = 0; i < length; i++) {
      labels.push(data[i].trade_volume_24h_btc);
      values.push(data[i].trade_volume_24h_btc_normalized);
   }
   new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
         labels: labels,
         datasets: [
            {
               label: "trade_volume",
               backgroundColor: ["red",
                  "lime",
                  "blueviolet",
                  "brown",
                  "yellow",
                  "black",
                  "gold"],
               data: values
            }
         ]
      },
      options: {
         legend: { display: false },
         title: {
            display: true,
            text: 'trade_volume_24h_'
         }
      }
   });
}