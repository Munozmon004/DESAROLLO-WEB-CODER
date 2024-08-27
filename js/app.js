document.addEventListener('keyup', e => {
    if (e.target.matches('#buscador')) {
        document.querySelectorAll('.product-card, .product-card-2').forEach(articulos => {
            articulos.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? articulos.classList.remove('filtro')
            : articulos.classList.add('filtro');
        }
        )
    }
});




