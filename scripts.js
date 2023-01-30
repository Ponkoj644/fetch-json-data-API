// All variables
const porductDiv = document.getElementById("all-product");

// 1st way to fetch json data //

//Fetch the data
fetch("products.json") //
  .then(function (response) {
    return response.json(); // convert the response into son format
  })

  // 'data' from json file, we use it for our work.
  .then(function (data) {
    console.log(data);
    // we create a for loop to view the data into HTML from json.
    for (i = 0; i < data.length; i++) {
      porductDiv.innerHTML += `
        <div class="col-lg-4">
                <div class="single-product">
                    <img src="${data[i].image}" alt="">
                    <h5>$<span id="product-price">${data[i].price}</span></h5>
                    <h3>${data[i].name}</h3>
                    <p>${data[i].text}</p>
                    <button>Add To Cart</button>
                </div>
            </div>      
      `;
    }
  });

//   .catch(function (error) {
//     console(error);
//   });

// 2nd way to fetch json data in short  //
// fetch("products.json")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
