
let cart = [];


{
  let localValue = localStorage.getItem("cart");
  
  if(localValue){
    cart = JSON.parse(localValue);
  }
  else{
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  }


if (cart.length > 0) {
  // Get cart items from local storage

  // Render cart items
  renderProducts();
} else {
  // Cart is empty
  const emptyCartMessage = document.createElement("p");
  emptyCartMessage.textContent = "Your cart is empty";
  document.body.appendChild(emptyCartMessage);
}

renderNavBar();


function renderNavBar(){
  const nav = document.createElement("nav");
  nav.innerHTML = `
    <ul>
    <li><a href="index.html">Store</a></li>
    <li><a href="cart.html">Cart</a></li>
    </ul>
  `;

 document.body.insertAdjacentElement("afterbegin",nav);
}


function renderProducts() {
  // צרו פונקציה שמציגה את המוצרים על המסך-
  // השתמשו בפונקציה renderProduct
  console.log(cart);
  cart.forEach(prod=>{
    renderProduct(prod)
  });

}


function renderProduct(product) {
  // צרו פונקציה שמקבלת מוצר ומחזירה אלמנט שמייצג את המוצר על המסך
  const productsContainer = document.getElementById("cart-items");
  // const productsContainer = תפסו מהמסך את האלמנט המתאים שאליו תוסיפו את המוצרים
  const productElement = document.createElement("div");
  productElement.classList.add("product");
  productElement.innerHTML = `
      <img src='${product.image}' alt='${product.details}'/>
      <h3>${product.name}</h3>
      <p>Price: ${product.price}$</p>
    `;    

    productElement.appendChild(createRemoveCartButtonElement(product));

  productsContainer.appendChild(productElement);
}



function createRemoveCartButtonElement(product){
  const removeBtn = document.createElement("button");
  removeBtn.classList.add("add-to-cart");
  removeBtn.innerText = "הסר מהעגלה";
  removeBtn.addEventListener("click",()=>removeFromCart(product))

  return removeBtn;
}


function removeFromCart(product){
  let temp = cart.filter(prod=> prod.name !== product.name);
  console.log(temp);
  cart = temp;
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

// init();