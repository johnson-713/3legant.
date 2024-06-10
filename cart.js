const cartItemsStr = localStorage.getItem('cartItems');

console.log(cartItemsStr)

if (cartItemsStr) {
  const cartItems = JSON.parse(cartItemsStr);

  console.log(cartItems)
  
  const productContainer = document.querySelector('.product');
  const totalPriceElement = document.querySelector('.total-price');

  let cartTotal = 0;

  cartItems.forEach((i) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item'); // <div class="product-item"></div>

    productElement.innerHTML = `
      <p>${i.product}</p>
      <p>Quantity: ${i.quantity}</p>
      <p>Price: $${i.price}</p>
      <p>Total: $${(i.price * i.quantity)}</p>
    `;

    productContainer.appendChild(productElement);

    cartTotal += i.price * i.quantity;
  });

  // Update total price
  totalPriceElement.textContent = `$${cartTotal.toFixed(2)}`;
} else {
  // Handle the case when there are no items in the cart
  productContainer.textContent = 'Your cart is currently empty.';
}


function checkout() {
    localStorage.removeItem('cartItems')
    alert('Purchased Successfuly!')
    window.location.href = 'homepage.html';
}
