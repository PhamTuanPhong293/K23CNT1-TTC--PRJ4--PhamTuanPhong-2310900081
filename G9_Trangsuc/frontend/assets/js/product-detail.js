const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

let currentProduct = null;

async function loadProductDetail() {
    try {
        const response = await fetch(`${API_BASE_URL}/bdh/products/${productId}`);
        const product = await response.json();

        currentProduct = product;

        const imgSrc = product.image
            ? (product.image.startsWith('http') ? product.image : `assets/img/${product.image}`)
            : 'https://via.placeholder.com/600x600?text=G9+Trang+Suc';

        document.getElementById("product-image").src = imgSrc;
        document.getElementById("product-name").innerText = product.name;
        document.getElementById("product-price").innerText = formatMoney(product.price);
        document.getElementById("product-material").innerText = "Chất liệu: " + (product.material || "Đang cập nhật");
        document.getElementById("product-description").innerText = product.description || "Sản phẩm được chế tác tinh xảo bởi các nghệ nhân hàng đầu G9 Trang Sức.";
        document.getElementById("bread-name").innerText = product.name;
        document.title = product.name + ' - G9 Trang Sức';
    } catch (err) {
        console.error("Error loading product:", err);
    }
}

function addProductToCart() {
    if (!currentProduct) return;

    let cart = getCart();

    const existing = cart.find(item => item.id === currentProduct.id);

    if (existing) {
        existing.quantityCart += 1;
    } else {
        currentProduct.quantityCart = 1;
        cart.push(currentProduct);
    }

    saveCart(cart);
    if (typeof updateCartBadge === 'function') updateCartBadge();

    Swal.fire({
        icon: "success",
        title: "Đã thêm vào giỏ hàng!",
        text: currentProduct.name,
        timer: 1500,
        showConfirmButton: false
    });
}

async function loadReviews() {
    try {
        const response = await fetch(`${API_BASE_URL}/bdh/reviews/product/${productId}`);
        const reviews = await response.json();

        let html = "";

        if (!reviews || reviews.length === 0) {
            html = '<p class="text-muted">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>';
        } else {
            reviews.forEach(item => {
                const stars = '★'.repeat(item.stars) + '☆'.repeat(5 - item.stars);
                const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.user || 'User')}&background=d4af37&color=fff&size=36`;
                html += `
                    <div class="bg-white p-3 rounded-3 shadow-sm mb-3 border border-light">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <div class="d-flex align-items-center">
                                <img src="${avatarUrl}" class="rounded-circle me-2" width="36">
                                <div>
                                    <span class="fw-semibold text-dark" style="font-size:0.95rem;">${item.user || 'Khách hàng'}</span>
                                    <div class="star-rating">${stars}</div>
                                </div>
                            </div>
                            <small class="text-muted">${item.createdAt || ''}</small>
                        </div>
                        <p class="mb-0 text-muted small">${item.content}</p>
                    </div>
                `;
            });
        }

        document.getElementById("review-list").innerHTML = html;
    } catch (err) {
        document.getElementById("review-list").innerHTML = '<p class="text-muted">Chưa có đánh giá nào.</p>';
    }
}

async function createReview() {
    const user = getUser();

    if (!user) {
        Swal.fire({
            icon: "warning",
            title: "Vui lòng đăng nhập để đánh giá"
        });
        setTimeout(() => { window.location.href = "login.html"; }, 1500);
        return;
    }

    const data = {
        productId: Number(productId),
        userId: user.id,
        stars: Number(document.getElementById("review-stars").value),
        content: document.getElementById("review-content").value
    };

    if (!data.content.trim()) {
        Swal.fire({ icon: "warning", title: "Vui lòng nhập nội dung đánh giá" });
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/bdh/reviews/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        Swal.fire({
            icon: "success",
            title: "Cảm ơn bạn đã đánh giá!",
            timer: 1500,
            showConfirmButton: false
        });

        document.getElementById("review-content").value = "";
        loadReviews();
    } catch (err) {
        Swal.fire({ icon: "error", title: "Có lỗi xảy ra khi gửi đánh giá" });
    }
}

document.getElementById("btn-cart").addEventListener("click", addProductToCart);

loadProductDetail();
loadReviews();