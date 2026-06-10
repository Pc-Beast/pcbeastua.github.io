// Простая логика корзины
let cartCount = 0;

function addToCart() {
    cartCount++;
    // Обновляем цифру на кнопке корзины
    document.getElementById('cart-count').innerText = cartCount;
    
    // Эффект легкой анимации кнопки
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.transform = 'scale(1.05)';
    setTimeout(() => {
        cartBtn.style.transform = 'scale(1)';
    }, 150);
}

// Слушатель для кнопки корзины (просто уведомление для демонстрации)
document.getElementById('cartBtn').addEventListener('click', () => {
    alert(`В вашей корзине товаров: ${cartCount}. Переходим к оформлению?`);
});
