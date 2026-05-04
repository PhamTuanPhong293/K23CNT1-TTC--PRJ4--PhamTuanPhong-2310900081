// Dữ liệu giả (Mock Data)
const mockProducts = [
    { id: 1, name: "Nhẫn vàng 18K", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn" },
    { id: 2, name: "Nhẫn bạc đính đá kim cương", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn" },
    { id: 3, name: "Dây chuyền bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền" }
];

// 1. Khởi tạo giỏ hàng: Lấy từ LocalStorage, nếu chưa có thì là mảng rỗng
let cart = JSON.parse(localStorage.getItem('g9_cart')) || [];

// Hàm format tiền VNĐ
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// ================= LOGIC GIỎ HÀNG =================

// Hàm lưu giỏ hàng vào bộ nhớ và cập nhật icon số lượng
const saveCart = () => {
    localStorage.setItem('g9_cart', JSON.stringify(cart));
    updateCartBadge();
};

// Cập nhật số lượng đỏ trên icon giỏ hàng
const updateCartBadge = () => {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.innerText = totalItems;
    }
};

// Thêm vào giỏ
const addToCart = (productId) => {
    const product = mockProducts.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
};

// Tăng/giảm số lượng trong trang Giỏ hàng
const updateQuantity = (index, change) => {
    if (cart[index].quantity + change > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1); // Xóa nếu giảm về 0
    }
    saveCart();
    renderCartPage(); // Load lại bảng
};

// Xóa hẳn 1 sản phẩm khỏi giỏ
const removeItem = (index) => {
    cart.splice(index, 1);
    saveCart();
    renderCartPage(); // Load lại bảng
};

// ================= RENDER GIAO DIỆN =================

// Render Trang Chủ (index.html)
const renderProducts = () => {
    const productList = document.getElementById('product-list');
    if (!productList) return; // Nếu ko ở trang chủ thì bỏ qua

    productList.innerHTML = '';
    mockProducts.forEach(product => {
        const productCard = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 card-hover bg-white shadow-sm">
                    <div class="img-wrapper">
                        <img src="${product.image}" class="card-img-top product-img" style="height: 320px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x320?text=Loi+Anh'">
                    </div>
                    <div class="card-body d-flex flex-column text-center p-4">
                        <span class="text-uppercase text-muted fw-semibold mb-2" style="font-size: 0.75rem; letter-spacing: 2px;">${product.category}</span>
                        <h5 class="card-title fw-bold text-dark mb-3">${product.name}</h5>
                        <p class="card-text text-gold fw-bold fs-5 mb-4">${formatCurrency(product.price)}</p>
                        <button onclick="addToCart(${product.id})" class="btn bg-gold mt-auto w-100 py-2 rounded-pill shadow-sm">
                            <i class="fas fa-shopping-bag me-2"></i> Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
};

// Render Trang Giỏ Hàng (cart.html)
const renderCartPage = () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    if (!cartItemsContainer) return; // Nếu ko ở trang giỏ hàng thì bỏ qua

    cartItemsContainer.innerHTML = '';
    let totalAmount = 0;

    // Nếu giỏ hàng trống
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `<tr><td colspan="5" class="text-center py-5 text-muted fs-5">Giỏ hàng của bạn đang trống!</td></tr>`;
        cartTotalElement.innerText = formatCurrency(0);
        return;
    }

    // Nếu có hàng thì in ra bảng
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        cartItemsContainer.innerHTML += `
            <tr>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${item.image}" alt="${item.name}" style="width: 70px; height: 70px; object-fit: cover;" class="rounded me-3 border" onerror="this.src='https://via.placeholder.com/70'">
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
                    <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="removeItem(${index})">
                        <i class="fas fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
    cartTotalElement.innerText = formatCurrency(totalAmount);
};
// Render Trang Thanh Toán (checkout.html)
const renderCheckoutPage = () => {
    const checkoutSummary = document.getElementById('checkout-summary');
    const checkoutTotal = document.getElementById('checkout-total');
    const checkoutItemCount = document.getElementById('checkout-item-count');

    if (!checkoutSummary) return; // Nếu ko ở trang checkout thì bỏ qua

    // Nếu giỏ hàng trống mà cố tình vào trang này thì đá về trang chủ
    if (cart.length === 0) {
        alert("Giỏ hàng của bạn đang trống! Vui lòng chọn sản phẩm trước khi thanh toán.");
        window.location.href = "index.html";
        return;
    }

    checkoutSummary.innerHTML = '';
    let totalAmount = 0;
    let totalItems = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        totalAmount += itemTotal;
        totalItems += item.quantity;

        checkoutSummary.innerHTML += `
            <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 class="my-0">${item.name}</h6>
                    <small class="text-muted">Số lượng: x${item.quantity}</small>
                </div>
                <span class="text-muted">${formatCurrency(itemTotal)}</span>
            </li>
        `;
    });

    checkoutItemCount.innerText = totalItems;
    checkoutTotal.innerText = formatCurrency(totalAmount);
};

// Hàm xử lý Đặt hàng thành công
const placeOrder = (event) => {
    // Ngăn chặn form tự động load lại trang
    event.preventDefault();

    // Trong thực tế, ở đây sẽ dùng fetch() để gửi data Form và mảng 'cart' lên Backend Spring/Python.
    // Vì đang giả lập Frontend, mình sẽ hiển thị thông báo thành công.

    alert("🎉 Chúc mừng! Bạn đã đặt hàng thành công. G9 Trang Sức sẽ sớm liên hệ để giao hàng.");

    // Xóa giỏ hàng
    cart = [];
    saveCart();

    // Chuyển hướng về trang chủ
    window.location.href = "index.html";
};
// ================= KHỞI CHẠY =================
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    renderProducts();    // Trang chủ
    renderCartPage();    // Trang giỏ hàng
    renderCheckoutPage();// Trang thanh toán
});