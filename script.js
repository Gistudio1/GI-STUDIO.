function orderPackage(packageName) {
  localStorage.setItem("selectedPackage", packageName);
  window.location.href = "order.html";
}