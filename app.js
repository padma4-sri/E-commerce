
const fetchData = () => {
  fetch("./app.json")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      htmlData(data);
    })
    .catch(err => {
      let nm = err.name;
      let msg = err.message;
      alert(`CATCH:${nm} ${msg}`);

    })
};
const clickCart = (name, price, id) => {

  const cart = {
    name: name,
    price: price,
    quantity: 1,
    id: id
  };
  var carts = [];

  if (JSON.parse(localStorage.getItem('carts')) == undefined || JSON.parse(localStorage.getItem('carts')) == null) {
    carts = [];
  }
  else {
    carts = JSON.parse(localStorage.getItem('carts'))
  }

  var add = true;
  carts.map(value => {
    if (value.id == cart.id) {
      add = false;
      value.quantity += 1;
    }
  })
  if (add) {
    carts.push(cart)
  }
  console.log(carts);

  localStorage.setItem('carts', JSON.stringify(carts))

};



const htmlData = (data) => {
  let main = document.getElementById('allMembers');
  let element = document.createElement('div');
  element.classList.add("row");

  main.appendChild(element);
  const personData = data.person.map(a => {
    let div = document.createElement('div');
    div.classList.add("col-md-4");
    div.innerHTML = `<div class="box-1 ">
        <div>
          <nav class="navbar navbar-expand navbar-light bg-white">
            <div class="container-md">
              <button type="button" class="btn btn-light">New</button>
              <span class="icon">
                <i class="fa fa-bars" aria-hidden="true"></i>
                <i class="fa fa-heart-o " aria-hidden="true"></i>
              </span>

            </div>
          </nav>
        </div>
        <img src="sofa.jpg" class="product">

        <div class="para">
          <p> ${a.name}</p>
        </div>
        <nav class="navbar navbar-expand navbar-light bg-white">
          <div class="container-md">
            <div>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star" aria-hidden="true"></i>
            <i class="fa fa-star-half-o" aria-hidden="true"></i>
            <i class="fa fa-star-o" aria-hidden="true"></i>

          </div>
          <div class="d-flex flex-row">
          <div class="border border-1 a">
            <p class="rating"> ${a.rating}</p>
          </div>
          <div class="border border-1">
            
            <i class="fa fa-shopping-cart" onclick= "clickCart('${a.name}','${a.rating}','${a.id}')" aria-hidden="true"></i>

          </div>
        </div>

          </div>
        </nav>
      </div>`;
    element.append(div);
    return div;
  });



}

fetchData();

