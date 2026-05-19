function renderNavbar() {
    const user = JSON.parse(localStorage.getItem("user"));

    let authHtml = "";

    if (user) {
        const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=d4af37&color=fff&size=32&bold=true`;
        authHtml = `
            <a href="profile.html" class="text-dark text-decoration-none d-flex align-items-center me-2">
                <img src="${avatarUrl}" class="rounded-circle me-2" width="32" height="32" alt="Avatar">
                <span class="fw-medium" style="font-size:0.85rem;">${user.name}</span>
            </a>
            <button onclick="logout()" class="btn btn-outline-danger btn-sm rounded-pill px-3">
                <i class="fas fa-sign-out-alt me-1"></i>Đăng xuất
            </button>
        `;
    } else {
        authHtml = `
            <a href="login.html" class="btn btn-outline-dark rounded-pill px-4">Đăng nhập</a>
        `;
    }

    document.getElementById("navbar").innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top py-3">
            <div class="container">
                <a class="navbar-brand fw-bold text-uppercase fs-3" href="index.html">
                    G9 <span class="text-gold">Trang Sức</span>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fw-medium">
                        <li class="nav-item"><a class="nav-link px-3" href="index.html">Trang chủ</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="products.html">Sản phẩm</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="gold-price.html">Giá vàng</a></li>
                        <li class="nav-item"><a class="nav-link px-3" href="news.html">Tin tức</a></li>
                    </ul>
                    <div class="d-flex align-items-center gap-2">
                        <a href="wishlist.html" class="text-dark me-2 position-relative" title="Yêu thích">
                            <i class="fas fa-heart fa-lg"></i>
                        </a>
                        <a href="cart.html" class="text-dark me-3 position-relative" title="Giỏ hàng">
                            <i class="fas fa-shopping-cart fa-lg"></i>
                            <span id="cart-badge"
                                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                style="font-size: 0.65rem; display: none;">0</span>
                        </a>
                        ${authHtml}
                    </div>
                </div>
            </div>
        </nav>
    `;

    // Update cart badge
    updateCartBadge();
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((s, i) => s + (i.quantityCart || 1), 0);
    badge.innerText = total;
    badge.style.display = total > 0 ? 'inline-block' : 'none';
}

function logout() {
    if (confirm('Bạn muốn đăng xuất?')) {
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        window.location.href = "index.html";
    }
}

renderNavbar();