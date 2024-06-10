function addToCart(product, price, id) {
  let cartItems = []

  const existingCartData = localStorage.getItem('cartItems')
  if(existingCartData) {
    cartItems = JSON.parse(existingCartData)
  }

  const existingProductId = cartItems.findIndex(item => item.id === id)

  const newProduct = {
    product,
    price,
    id,
    quantity: 1
  }

  if(existingProductId !== -1) {
    cartItems[existingProductId].quantity++
  } else {
    cartItems.push(newProduct)
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems))

  window.location.href = "cart.html";
}

//array = ['the', {quantity: '1'}, 'hfg', 'ytft']

//array[1].quantity++
//{quantity: '1'}