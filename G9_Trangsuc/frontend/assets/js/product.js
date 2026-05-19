async function loadProducts() {
    const response = await fetch(`${API_BASE_URL}/bdh/products/`);
    const products = await response.json();

    renderProducts(products);
}

function renderProducts(products) {
    const productList = document.getElementById("product-list");
    if (!productList) return;

    if (!products || products.length === 0) {
        productList.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h5 class="text-muted">Không tìm thấy sản phẩm nào</h5>
            </div>`;
        return;
    }

    let html = "";

    products.forEach(product => {
        const imgSrc = product.image
            ? (product.image.startsWith('http') ? product.image : `assets/img/${product.image}`)
            : 'https://via.placeholder.com/400x260?text=G9+Trang+Suc';

        html += `
            <div class="col-lg-3 col-md-4 col-sm-6 fade-in">
                <div class="card border-0 shadow-sm card-hover h-100">
                    <div class="img-wrapper">
                        <a href="product-detail.html?id=${product.id}">
                            <img src="${imgSrc}" class="card-img-top product-img" alt="${product.name}"
                                 style="height: 260px; object-fit: cover;"
                                 onerror="this.src='https://via.placeholder.com/400x260?text=G9+Trang+Suc'">
                        </a>
                    </div>
                    <div class="card-body px-3 pt-3 pb-2">
                        <span class="badge bg-light text-muted border mb-2" style="font-size: 0.7rem;">
                            ${product.categoryName || product.material || 'Trang sức'}
                        </span>
                        <a href="product-detail.html?id=${product.id}" class="text-decoration-none">
                            <h6 class="fw-semibold text-dark product-title-hover mb-2" style="min-height: 40px;">
                                ${product.name}
                            </h6>
                        </a>
                        <p class="text-gold fw-bold fs-6 mb-0">${formatMoney(product.price)}</p>
                    </div>
                    <div class="card-footer bg-white border-0 px-3 pb-3 pt-0 d-flex gap-2">
                        <button class="btn bg-gold btn-sm flex-grow-1 rounded-pill" onclick='addToCart(${JSON.stringify(product).replace(/'/g, "\\'")})'>
                            <i class="fas fa-cart-plus me-1"></i> Giỏ hàng
                        </button>
                        <button class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick='addWishlist(${JSON.stringify(product).replace(/'/g, "\\'")})' title="Yêu thích">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });

    productList.innerHTML = html;
}

async function searchProduct() {
    const keyword = document.getElementById("keyword").value;

    if (keyword.trim() === "") {
        loadProducts();
        return;
    }

    const response = await fetch(`${API_BASE_URL}/bdh/products/search/${keyword}`);
    const products = await response.json();

    renderProducts(products);
}

function addToCart(product) {
    let cart = getCart();

    const existing = cart.find(item => item.id === product.id);

    if (existing) {
        existing.quantityCart += 1;
    } else {
        product.quantityCart = 1;
        cart.push(product);
    }

    saveCart(cart);

    // Update badge
    if (typeof updateCartBadge === 'function') updateCartBadge();

    // Show notification
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
        alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
    }
}

function addWishlist(product) {
    let wishlist = getWishlist();

    const existed = wishlist.find(item => item.id === product.id);

    if (existed) {
        if (typeof Swal !== 'undefined') {
            Swal.fire({ icon: "info", title: "Sản phẩm đã có trong yêu thích", timer: 1500, showConfirmButton: false });
        } else {
            alert("Sản phẩm đã có trong yêu thích");
        }
        return;
    }

    wishlist.push(product);
    saveWishlist(wishlist);

    if (typeof Swal !== 'undefined') {
        Swal.fire({
            icon: "success",
            title: "Đã thêm vào yêu thích!",
            timer: 1500,
            showConfirmButton: false,
            toast: true,
            position: 'top-end'
        });
    } else {
        alert("Đã thêm vào yêu thích");
    }
}

// Load products on page load
loadProducts();

// Pagination
let currentPage = 1;
const pageSize = 8;
let allProducts = [];

function paginateProducts(page) {
    currentPage = page;
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const products = allProducts.slice(start, end);
    renderProducts(products);
    renderPagination();
}

function renderPagination() {
    const paginationEl = document.getElementById("pagination");
    if (!paginationEl) return;

    const totalPages = Math.ceil(allProducts.length / pageSize);
    if (totalPages <= 1) { paginationEl.innerHTML = ''; return; }

    let html = '<nav><ul class="pagination justify-content-center">';

    for (let i = 1; i <= totalPages; i++) {
        html += `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <button onclick="paginateProducts(${i})" class="page-link"
                        style="${i === currentPage ? 'background-color: #d4af37; border-color: #d4af37;' : ''}">
                    ${i}
                </button>
            </li>
        `;
    }

    html += '</ul></nav>';
    paginationEl.innerHTML = html;
}