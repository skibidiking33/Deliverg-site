function calculatePrice() {
  var price = parseFloat(document.getElementById("price").value);
  var totalPrice = price + 5;
  document.getElementById("result").textContent = "Total price: $" + totalPrice.toFixed(2);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered!');
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });
}
