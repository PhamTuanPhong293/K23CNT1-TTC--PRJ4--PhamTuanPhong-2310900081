function loadWishlist() {
    const wishlist = getWishlist();
    const container = document.getElementById("wishlist-container");

    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-heart fa-3x text-muted mb-3 d-block"></i>
                <h5 class="text-muted">Chưa có sản phẩm yêu thích nào</h5>
                <a href="products.html" class="btn bg-gold rounded-pill px-4 mt-3">
                    <i class="fas fa-gem me-2"></i>Khám phá sản phẩm
                </a>
            </div>`;
        return;
    }

    let html = "";

    wishlist.forEach((item, index) => {
        const imgSrc = item.image
            ? (item.image.startsWith('http') ? item.image : `assets/img/${item.image}`)
            : 'https://via.placeholder.com/400x260?text=G9+Trang+Suc';

        html += `
            <div class="col-lg-3 col-md-4 col-sm-6 fade-in">
                <div class="card border-0 shadow-sm card-hover h-100">
                    <div class="img-wrapper">
                        <a href="product-detail.html?id=${item.id}">
                            <img src="${imgSrc}" class="card-img-top product-img" alt="${item.name}"
                                 style="height: 260px; object-fit: cover;"
                                 onerror="this.src='https://via.placeholder.com/400x260?text=G9+Trang+Suc'">
                        </a>
                    </div>
                    <div class="card-body px-3 pt-3 pb-2">
                        <a href="product-detail.html?id=${item.id}" class="text-decoration-none">
                            <h6 class="fw-semibold text-dark product-title-hover mb-2">${item.name}</h6>
                        </a>
                        <p class="text-gold fw-bold mb-0">${formatMoney(item.price)}</p>
                    </div>
                    <div class="card-footer bg-white border-0 px-3 pb-3 pt-0 d-flex gap-2">
                        <button class="btn bg-gold btn-sm flex-grow-1 rounded-pill" onclick='addToCartFromWishlist(${index})'>
                            <i class="fas fa-cart-plus me-1"></i> Giỏ hàng
                        </button>
                        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="removeWishlistItem(${index})" title="Xóa khỏi yêu thích">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function removeWishlistItem(index) {
    let wishlist = getWishlist();
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    loadWishlist();
}

function addToCartFromWishlist(index) {
    const wishlist = getWishlist();
    const product = wishlist[index];
    if (!product) return;

    let cart = getCart();
    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantityCart += 1;
    } else {
        product.quantityCart = 1;
        cart.push(product);
    }

    saveCart(cart);
    if (typeof updateCartBadge === 'function') updateCartBadge();

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: "success",
            title: "Đã thêm vào giỏ hàng!",
            text: product.name,
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    } else {
        alert("Đã thêm vào giỏ hàng!");
    }
}

loadWishlist();