fetch('product.json')
  .then(response => response.json())
  .then(products => {

    const container = document.getElementById('products');

    products.forEach(product => {

      container.innerHTML += `
        <div class="card">
          <img src="${product.image}" alt="">
          <h2>${product.name}</h2>
          <p>${product.description}</p>
          <div class="price">${product.price}</div>
        </div>
      `;

    });

  });
