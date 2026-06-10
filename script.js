const products = [
  { name: "MSI GTX 1650 SUPER GAMING 4GB", price: 1500 },
  { name: "MSI RX 570 GAMING 4GB", price: 1900 },
  { name: "MSI GTX 970 GAMING 4GB", price: 2000 },
  { name: "ASUS ROG STRIX RX 570 4GB", price: 2000 },
  { name: "Sapphire Nitro+ RX 580 4GB", price: 2600 },
  { name: "MSI GTX 1050 Ti AERO ITX 4GB", price: 3200 },
  { name: "ASUS CERBERUS GTX 1050 Ti 4GB", price: 3200 },
  { name: "EVGA GTX 1060 SC ACX 2.0 3GB", price: 3200 },
  { name: "Palit GTX 1060 Dual 6GB", price: 5000 },
  { name: "Palit GTX 1660 SUPER StormX 6GB", price: 5800 },
  { name: "MSI RX 5600 XT GAMING X 6GB", price: 6200 },
  { name: "Sapphire Pulse RX 5700 XT 8GB", price: 7000 },
  { name: "Inno3D RTX 3060 Twin X2 LHR 12GB", price: 11900 },
  { name: "ASUS Phoenix RTX 3060 V2 12GB", price: 12000 },
  { name: "Gigabyte RTX 3060 Windforce OC 12GB", price: 12000 },
  { name: "ASRock RX 6700 XT Challenger Pro 12GB", price: 12000 },
  { name: "Palit RTX 3060 Ti Dual OC V1 LHR 8GB", price: 12700 },
  { name: "Gigabyte RTX 3060 Ti Gaming OC 8GB", price: 13000 },
  { name: "Gigabyte RTX 3070 Gaming OC 8GB", price: 13700 },
  { name: "Gigabyte RTX 4060 Gaming OC 8GB", price: 14300 },
  { name: "ASUS Dual RTX 4060 EVO OC 8GB", price: 14400 },
  { name: "Palit RTX 3070 Ti GameRock 8GB", price: 15000 }
];

const container = document.getElementById("products");

container.innerHTML = products.map(product => `
  <div class="product">
    <h2>${product.name}</h2>
    <p>${product.price.toLocaleString()} грн</p>
  </div>
`).join("");
