// ================= DỮ LIỆU GIẢ (CÓ THÊM ĐÁNH GIÁ) =================
const mockProducts = [
    {
        id: 1, name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn",
        reviews: [
            { name: "Nguyễn Ngọc Hiến", rating: 5, comment: "Nhẫn rất sáng, thiết kế tinh xảo. Vợ mình rất thích!", date: "01/05/2026" },
            { name: "Mai Chi", rating: 4, comment: "Giao hàng nhanh, đóng gói cẩn thận sang trọng. Hơi rộng một chút xíu.", date: "28/04/2026" }
        ]
    },
    {
        id: 2, name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn",
        reviews: [
            { name: "Trần Anh Tú", rating: 5, comment: "Giá hợp lý mà nhìn sang không kém gì kim cương thật. 10 điểm!", date: "03/05/2026" }
        ]
    },
    {
        id: 3, name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền",
        reviews: [] // Chưa có đánh giá
    }
];

// Khởi tạo giỏ hàng
let cart = JSON.parse(localStorage.getItem('g9_cart')) || [];

// Format tiền tệ
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// ================= LOGIC GIỎ HÀNG CHUNG =================
const saveCart = () => {
    localStorage.setItem('g9_cart', JSON.stringify(cart));
    updateCartBadge();
};

const updateCartBadge = () => {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
    }
};

const addToCart = (productId) => {
    const product = mockProducts.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) existingItem.quantity += 1;
    else cart.push({ ...product, quantity: 1 });

    saveCart();
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
};

// ================= RENDER TRANG CHỦ =================
const renderProducts = () => {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    productList.innerHTML = '';
    mockProducts.forEach(product => {
        const productCard = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 card-hover bg-white shadow-sm">
                    <a href="detail.html?id=${product.id}" class="img-wrapper text-decoration-none">
                        <img src="${product.image}" class="card-img-top product-img" style="height: 320px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x320?text=Loi+Anh'">
                    </a>
                    <div class="card-body d-flex flex-column text-center p-4">
                        <span class="text-uppercase text-muted fw-semibold mb-2" style="font-size: 0.75rem; letter-spacing: 2px;">${product.category}</span>
                        <a href="detail.html?id=${product.id}" class="text-decoration-none">
                            <h5 class="card-title fw-bold text-dark mb-3">${product.name}</h5>
                        </a>
                        <p class="card-text text-gold fw-bold fs-5 mb-4">${formatCurrency(product.price)}</p>
                        <button onclick="addToCart(${product.id})" class="btn bg-gold mt-auto w-100 py-2 rounded-pill shadow-sm">
                            <i class="fas fa-shopping-bag me-2"></i> Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
};

// ================= RENDER TRANG GIỎ HÀNG =================
const updateQuantity = (index, change) => {
    if (cart[index].quantity + change > 0) cart[index].quantity += change;
    else cart.splice(index, 1);
    saveCart(); renderCartPage();
};

const removeItem = (index) => {
    cart.splice(index, 1);
    saveCart(); renderCartPage();
};

const renderCartPage = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    let totalAmount = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<tr><td colspan="5" class="text-center py-5 text-muted fs-5">Giỏ hàng của bạn đang trống!</td></tr>`;
        cartTotalElement.innerText = formatCurrency(0);
        return;
    }

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        cartItemsContainer.innerHTML += `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" style="width: 70px; height: 70px; object-fit: cover;" class="rounded me-3 border" onerror="this.src='https://via.placeholder.com/70'">
                        <span class="fw-semibold">${item.name}</span>
                    </div>
                </td>
                <td class="text-muted">${formatCurrency(item.price)}</td>
                <td>
                    <div class="input-group input-group-sm mx-auto" style="width: 110px;">
                        <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, -1)">-</button>
                        <input type="text" class="form-control text-center fw-bold" value="${item.quantity}" readonly>
                        <button class="btn btn-outline-secondary" onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </td>
                <td class="text-danger fw-bold">${formatCurrency(itemTotal)}</td>
                <td>
                    <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="removeItem(${index})"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
    cartTotalElement.innerText = formatCurrency(totalAmount);
};

// ================= RENDER TRANG THANH TOÁN =================
const renderCheckoutPage = () => {
    const checkoutSummary = document.getElementById('checkout-summary');
    if (!checkoutSummary) return;

    if (cart.length === 0) {
        alert("Giỏ hàng trống!");
        window.location.href = "index.html"; return;
    }

    checkoutSummary.innerHTML = '';
    let totalAmount = 0; let totalItems = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal; totalItems += item.quantity;
        checkoutSummary.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div><h6 class="my-0">${item.name}</h6><small class="text-muted">x${item.quantity}</small></div>
                <span class="text-muted">${formatCurrency(itemTotal)}</span>
            </li>
        `;
    });
    document.getElementById('checkout-item-count').innerText = totalItems;
    document.getElementById('checkout-total').innerText = formatCurrency(totalAmount);
};

const placeOrder = (event) => {
    event.preventDefault();
    alert("🎉 Đặt hàng thành công!");
    cart = []; saveCart();
    window.location.href = "index.html";
};

// ================= LOGIC TRANG CHI TIẾT SẢN PHẨM =================
let detailCurrentQty = 1;
const changeDetailQty = (change) => {
    const qtyInput = document.getElementById('detail-qty');
    if (detailCurrentQty + change > 0) {
        detailCurrentQty += change;
        qtyInput.value = detailCurrentQty;
    }
};

// Hàm đổ danh sách Review ra màn hình
const renderReviews = (product) => {
    const reviewList = document.getElementById('review-list');
    if (!reviewList) return;

    reviewList.innerHTML = '';

    if (!product.reviews || product.reviews.length === 0) {
        reviewList.innerHTML = `
            <div class="text-center py-5 bg-light rounded-4 border border-dashed">
                <i class="fas fa-comment-slash fs-1 text-muted opacity-50 mb-3"></i>
                <h6 class="text-muted">Chưa có đánh giá nào.</h6>
                <p class="small text-muted mb-0">Hãy là người đầu tiên đánh giá sản phẩm này!</p>
            </div>
        `;
        return;
    }

    product.reviews.forEach(rev => {
        const stars = '★'.repeat(rev.rating);
        const emptyStars = '☆'.repeat(5 - rev.rating);
        reviewList.innerHTML += `
            <div class="d-flex mb-4 border-bottom pb-4">
                <img src="https://ui-avatars.com/api/?name=${rev.name}&background=d4af37&color=fff&bold=true" class="rounded-circle me-3 shadow-sm" width="50" height="50">
                <div class="flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center mb-1">
                        <h6 class="fw-bold mb-0">${rev.name}</h6>
                        <span class="small text-muted fw-normal">${rev.date}</span>
                    </div>
                    <div class="mb-2">
                        <span class="star-rating">${stars}</span><span class="star-empty">${emptyStars}</span>
                    </div>
                    <p class="mb-0 text-dark" style="font-size: 0.95rem; line-height: 1.6;">${rev.comment}</p>
                </div>
            </div>
        `;
    });
};

const renderDetailPage = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const detailName = document.getElementById('detail-name');
    if (!detailName) return;

    const product = mockProducts.find(p => p.id === productId);

    if (product) {
        document.getElementById('detail-img').src = product.image;
        document.getElementById('detail-name').innerText = product.name;
        document.getElementById('detail-category').innerText = product.category;
        document.getElementById('detail-price').innerText = formatCurrency(product.price);
        document.getElementById('bread-name').innerText = product.name;
        document.getElementById('bread-category').innerText = product.category;

        // Render Reviews
        renderReviews(product);

        // Xử lý Form Thêm Đánh Giá Mới
        const reviewForm = document.getElementById('review-form');
        if (reviewForm) {
            reviewForm.onsubmit = (e) => {
                e.preventDefault();
                const name = document.getElementById('review-name').value;
                const rating = parseInt(document.getElementById('review-rating').value);
                const comment = document.getElementById('review-comment').value;

                // Lấy ngày hôm nay
                const today = new Date();
                const dateStr = today.toLocaleDateString('vi-VN');

                // Đẩy bình luận mới lên đầu danh sách
                product.reviews.unshift({ name, rating, comment, date: dateStr });

                // Tải lại danh sách bình luận
                renderReviews(product);

                // Xóa trắng form sau khi gửi
                reviewForm.reset();
                alert("Cảm ơn bạn đã gửi đánh giá! Bình luận của bạn đã được ghi nhận.");
            };
        }

        // Cài đặt nút Thêm vào giỏ
        document.getElementById('btn-add-detail').onclick = () => {
            const existingItem = cart.find(item => item.id === product.id);
            if (existingItem) existingItem.quantity += detailCurrentQty;
            else cart.push({ ...product, quantity: detailCurrentQty });

            saveCart();
            alert(`Đã thêm ${detailCurrentQty} "${product.name}" vào giỏ hàng!`);

            detailCurrentQty = 1;
            document.getElementById('detail-qty').value = 1;
        };
    } else {
        document.querySelector('main').innerHTML = '<h2 class="text-center py-5">Không tìm thấy sản phẩm!</h2>';
    }
};

// ================= KHỞI CHẠY =================
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderProducts();
    renderCartPage();
    renderCheckoutPage();
    renderDetailPage();
});