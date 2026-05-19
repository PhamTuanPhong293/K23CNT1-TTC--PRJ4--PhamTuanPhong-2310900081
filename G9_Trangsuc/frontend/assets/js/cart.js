function loadCart() {
    const cart = getCart();
    const tbody = document.getElementById("cart-body");
    const totalEl = document.getElementById("cart-total");

    if (!tbody) return;

    if (cart.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="5" class="text-center py-5 text-muted">
                    <i class="fas fa-shopping-cart fa-3x mb-3 d-block text-gold"></i>
                    <h5>Giỏ hàng trống</h5>
                    <a href="products.html" class="text-gold text-decoration-none">
                        <i class="fas fa-arrow-left me-1"></i> Mua sắm ngay!
                    </a>
                </td>
            </tr>`;
        if (totalEl) totalEl.innerText = "0 ₫";
        return;
    }

    let html = "";
    let total = 0;

    cart.forEach((item, index) => {
        const thanhTien = item.price * item.quantityCart;
        total += thanhTien;

        const imgSrc = item.image
            ? (item.image.startsWith('http') ? item.image : `assets/img/${item.image}`)
            : 'https://via.placeholder.com/56';

        html += `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${imgSrc}" class="rounded me-3 cart-item-img"
                             onerror="this.src='https://via.placeholder.com/56'">
                        <div>
                            <span class="fw-semibold text-dark">${item.name}</span>
                            <div class="text-muted small">${item.material || item.categoryName || ''}</div>
                        </div>
                    </div>
                </td>
                <td class="text-gold fw-bold">${formatMoney(item.price)}</td>
                <td class="text-center">
                    <div class="input-group input-group-sm justify-content-center" style="width:120px; margin:0 auto;">
                        <button class="btn btn-outline-secondary" onclick="updateCartQty(${index}, -1)">−</button>
                        <input type="text" class="form-control text-center fw-bold" value="${item.quantityCart}" readonly>
                        <button class="btn btn-outline-secondary" onclick="updateCartQty(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="fw-bold">${formatMoney(thanhTien)}</td>
                <td>
                    <button class="btn btn-outline-danger btn-sm rounded-circle" onclick="removeCartItem(${index})" title="Xóa">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });

    tbody.innerHTML = html;
    if (totalEl) totalEl.innerText = formatMoney(total);
}

function updateCartQty(index, delta) {
    let cart = getCart();
    if (index < 0 || index >= cart.length) return;
    cart[index].quantityCart += delta;
    if (cart[index].quantityCart < 1) cart.splice(index, 1);
    saveCart(cart);
    if (typeof updateCartBadge === 'function') updateCartBadge();
    loadCart();
}

function removeCartItem(index) {
    if (!confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) return;
    let cart = getCart();
    cart.splice(index, 1);
    saveCart(cart);
    if (typeof updateCartBadge === 'function') updateCartBadge();
    loadCart();
}

loadCart();