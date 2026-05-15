// ================= DỮ LIỆU SẢN PHẨM =================
const products = [
    { id: 1, name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn", desc: "Nhẫn vàng 18K sang trọng, đính ngọc trai tự nhiên biển Nam. Thiết kế tinh tế, phù hợp cho những dịp đặc biệt." },
    { id: 2, name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn", desc: "Nhẫn bạc 925 cao cấp, đính đá Kim cương nhân tạo lấp lánh. Phong cách hiện đại, trẻ trung." },
    { id: 3, name: "Nhẫn Hồng Ngọc Ruby cao cấp", price: 8500000, image: "images/nhan-hong-ngoc.jpg", category: "Nhẫn", desc: "Nhẫn đính Hồng Ngọc Ruby thiên nhiên, chế tác thủ công bởi nghệ nhân hàng đầu Việt Nam." },
    { id: 4, name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền", desc: "Dây chuyền Bạch kim Platinum 950 nguyên chất, mắt xích mềm mại. Sang trọng và bền bỉ theo thời gian." },
    { id: 5, name: "Dây chuyền Vàng Ý 14K mắt xích", price: 9500000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop", category: "Dây chuyền", desc: "Dây chuyền Vàng Ý 14K nhập khẩu chính hãng, thiết kế mắt xích tinh xảo. Phù hợp phối cùng mặt dây." },
    { id: 6, name: "Bông tai Ngọc trai Akoya", price: 3200000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop", category: "Bông tai", desc: "Bông tai Ngọc trai Akoya Nhật Bản, ánh xà cừ hồng nhẹ. Tôn vinh nét đẹp dịu dàng, nữ tính." },
    { id: 7, name: "Bông tai Kim cương Halo", price: 15000000, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=400&h=400&fit=crop", category: "Bông tai", desc: "Bông tai Kim cương thiết kế Halo cổ điển, viền đá tấm lấp lánh. Đẳng cấp vượt thời gian." },
    { id: 8, name: "Nhẫn cưới đôi Vàng trắng 18K", price: 12000000, image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop", category: "Nhẫn", desc: "Cặp nhẫn cưới Vàng trắng 18K, khắc tên miễn phí. Biểu tượng hoàn hảo cho tình yêu đôi lứa." },
    { id: 9, name: "Dây chuyền Bạc đính Sapphire", price: 4500000, image: "https://images.unsplash.com/photo-1515562141589-67f0d569b6c5?w=400&h=400&fit=crop", category: "Dây chuyền", desc: "Dây chuyền Bạc 925 mạ vàng, mặt đá Sapphire xanh biển. Thanh lịch và cuốn hút." },
    { id: 10, name: "Bông tai Vàng hồng đính CZ", price: 2800000, image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop", category: "Bông tai", desc: "Bông tai Vàng hồng 14K đính đá CZ, thiết kế dạng giọt nước. Nhẹ nhàng, thanh tao." },
    { id: 11, name: "Nhẫn Emerald thiên nhiên Colombia", price: 18000000, image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&h=400&fit=crop", category: "Nhẫn", desc: "Nhẫn Vàng 18K đính Emerald Colombia thiên nhiên, viền Kim cương tấm. Quý hiếm và đẳng cấp." },
    { id: 12, name: "Dây chuyền Choker Ngọc trai", price: 6800000, image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop", category: "Dây chuyền", desc: "Dây chuyền Choker ngọc trai nước ngọt, phong cách cổ điển Châu Âu. Thời thượng và quý phái." }
];

// ================= TIỆN ÍCH CHUNG =================
const formatCurrency = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

const getCart = () => JSON.parse(localStorage.getItem('g9_cart') || '[]');
const saveCart = (cart) => localStorage.setItem('g9_cart', JSON.stringify(cart));

const updateCartBadge = () => {
    const badge = document.getElementById('cart-badge');
    if (!badge) return;
    const total = getCart().reduce((s, i) => s + i.quantity, 0);
    badge.innerText = total;
    badge.style.display = total > 0 ? 'inline-block' : 'none';
};

const addToCart = (productId, quantity = 1) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    let cart = getCart();
    const idx = cart.findIndex(i => i.id === productId);
    if (idx > -1) {
        cart[idx].quantity += quantity;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, image: product.image, category: product.category, quantity });
    }
    saveCart(cart);
    updateCartBadge();
    alert(`Đã thêm "${product.name}" vào giỏ hàng!`);
};

// ================= TRANG CHỦ (index.html) =================
let currentCategory = 'All';

const renderProducts = (list) => {
    const container = document.getElementById('product-list');
    if (!container) return;
    if (list.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5"><i class="fas fa-search fa-3x text-muted mb-3"></i><h5 class="text-muted">Không tìm thấy sản phẩm nào</h5></div>';
        return;
    }
    container.innerHTML = list.map(p => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm card-hover h-100">
                <div class="img-wrapper">
                    <a href="detail.html?id=${p.id}">
                        <img src="${p.image}" class="card-img-top product-img" alt="${p.name}" style="height: 260px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/400x260?text=G9+Trang+Suc'">
                    </a>
                </div>
                <div class="card-body px-3 pt-3 pb-2">
                    <span class="badge bg-light text-muted border mb-2" style="font-size: 0.7rem;">${p.category}</span>
                    <a href="detail.html?id=${p.id}" class="text-decoration-none">
                        <h6 class="fw-semibold text-dark product-title-hover mb-2" style="min-height: 40px;">${p.name}</h6>
                    </a>
                    <p class="text-gold fw-bold fs-6 mb-0">${formatCurrency(p.price)}</p>
                </div>
                <div class="card-footer bg-white border-0 px-3 pb-3 pt-0">
                    <button class="btn bg-gold btn-sm w-100 rounded-pill" onclick="addToCart(${p.id})">
                        <i class="fas fa-cart-plus me-1"></i> Thêm giỏ hàng
                    </button>
                </div>
            </div>
        </div>
    `).join('');
};

let currentPriceMin = 0;
let currentPriceMax = Infinity;

// Hàm áp dụng tất cả bộ lọc (danh mục + giá + từ khóa)
const applyFilters = () => {
    const keyword = (document.getElementById('searchInput')?.value || '').toLowerCase();
    let list = currentCategory === 'All' ? [...products] : products.filter(p => p.category === currentCategory);
    list = list.filter(p => p.price >= currentPriceMin && p.price <= currentPriceMax);
    if (keyword) list = list.filter(p => p.name.toLowerCase().includes(keyword));
    renderProducts(list);
};

const filterCategory = (category) => {
    currentCategory = category;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        const isActive = btn.textContent.trim() === (category === 'All' ? 'Tất cả' : category);
        btn.classList.toggle('btn-dark', isActive);
        btn.classList.toggle('btn-outline-dark', !isActive);
    });
    applyFilters();
};

const filterPrice = (min, max) => {
    currentPriceMin = min;
    currentPriceMax = max;
    // Cập nhật nút active
    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-outline-dark');
    });
    event.target.closest('.price-btn').classList.remove('btn-outline-dark');
    event.target.closest('.price-btn').classList.add('btn-dark');
    // Xóa input tùy chỉnh
    const minEl = document.getElementById('priceMin');
    const maxEl = document.getElementById('priceMax');
    if (minEl) minEl.value = '';
    if (maxEl) maxEl.value = '';
    applyFilters();
};

const filterCustomPrice = () => {
    const minVal = parseFloat(document.getElementById('priceMin')?.value) || 0;
    const maxVal = parseFloat(document.getElementById('priceMax')?.value) || Infinity;
    if (minVal > maxVal && maxVal !== Infinity) {
        alert('Giá tối thiểu không được lớn hơn giá tối đa!');
        return;
    }
    currentPriceMin = minVal;
    currentPriceMax = maxVal;
    // Bỏ active tất cả nút giá preset
    document.querySelectorAll('.price-btn').forEach(btn => {
        btn.classList.remove('btn-dark');
        btn.classList.add('btn-outline-dark');
    });
    applyFilters();
};

const searchProducts = () => {
    applyFilters();
};

// ================= TRANG CHI TIẾT (detail.html) =================
let currentProduct = null;
let detailQty = 1;

// Đánh giá mẫu
const defaultReviews = [
    { name: "Nguyễn Thị Mai", rating: 5, comment: "Sản phẩm rất đẹp, đóng gói cẩn thận. Giao hàng nhanh!", date: "05/05/2026" },
    { name: "Trần Văn Đức", rating: 4, comment: "Chất lượng tốt, đúng như mô tả. Sẽ mua thêm lần sau.", date: "03/05/2026" },
    { name: "Lê Hoàng Yến", rating: 5, comment: "Tuyệt vời! Đeo rất sang trọng, bạn bè ai cũng khen.", date: "01/05/2026" }
];
let allReviews = JSON.parse(localStorage.getItem('g9_reviews') || '{}');

const loadProductDetail = () => {
    const id = parseInt(new URLSearchParams(window.location.search).get('id'));
    currentProduct = products.find(p => p.id === id);
    if (!currentProduct) {
        document.querySelector('main').innerHTML = '<div class="text-center py-5"><i class="fas fa-exclamation-triangle fa-3x text-warning mb-3"></i><h4>Không tìm thấy sản phẩm</h4><a href="index.html" class="btn bg-gold rounded-pill mt-3 px-4">Quay lại trang chủ</a></div>';
        return;
    }
    document.title = currentProduct.name + ' - G9 Trang Sức';
    document.getElementById('detail-img').src = currentProduct.image;
    document.getElementById('detail-name').innerText = currentProduct.name;
    document.getElementById('detail-price').innerText = formatCurrency(currentProduct.price);
    document.getElementById('detail-category').innerText = currentProduct.category;
    document.getElementById('bread-category').innerText = currentProduct.category;
    document.getElementById('bread-name').innerText = currentProduct.name;

    const descEl = document.querySelector('main .text-muted.lh-lg');
    if (descEl && currentProduct.desc) descEl.innerText = currentProduct.desc;

    document.getElementById('btn-add-detail').onclick = () => addToCart(currentProduct.id, detailQty);

    if (!allReviews[id]) allReviews[id] = [...defaultReviews];
    renderReviews();

    document.getElementById('review-form')?.addEventListener('submit', submitReview);
};

const changeDetailQty = (delta) => {
    detailQty = Math.max(1, detailQty + delta);
    document.getElementById('detail-qty').value = detailQty;
};

const renderReviews = () => {
    const container = document.getElementById('review-list');
    if (!container || !currentProduct) return;
    const reviews = allReviews[currentProduct.id] || [];
    if (reviews.length === 0) {
        container.innerHTML = '<p class="text-muted">Chưa có đánh giá nào. Hãy là người đầu tiên!</p>';
        return;
    }
    container.innerHTML = reviews.map(r => {
        const stars = '★'.repeat(r.rating) + '☆'.repeat(5 - r.rating);
        return `<div class="bg-white p-3 rounded-3 shadow-sm mb-3 border border-light">
            <div class="d-flex justify-content-between align-items-center mb-2">
                <div class="d-flex align-items-center">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=d4af37&color=fff&size=36" class="rounded-circle me-2" width="36">
                    <div><span class="fw-semibold text-dark" style="font-size:0.95rem;">${r.name}</span><div class="star-rating">${stars}</div></div>
                </div>
                <small class="text-muted">${r.date}</small>
            </div>
            <p class="mb-0 text-muted small">${r.comment}</p>
        </div>`;
    }).join('');
};

const submitReview = (e) => {
    e.preventDefault();
    if (!currentProduct) return;
    const name = document.getElementById('review-name').value;
    const rating = parseInt(document.getElementById('review-rating').value);
    const comment = document.getElementById('review-comment').value;
    const d = new Date();
    const date = `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
    if (!allReviews[currentProduct.id]) allReviews[currentProduct.id] = [];
    allReviews[currentProduct.id].unshift({ name, rating, comment, date });
    localStorage.setItem('g9_reviews', JSON.stringify(allReviews));
    renderReviews();
    document.getElementById('review-form').reset();
    alert('Cảm ơn bạn đã đánh giá!');
};

// ================= TRANG GIỎ HÀNG (cart.html) =================
const loadCart = () => {
    const tbody = document.getElementById('cart-items');
    const totalEl = document.getElementById('cart-total');
    if (!tbody) return;
    const cart = getCart();

    if (cart.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center py-5 text-muted"><i class="fas fa-shopping-cart fa-3x mb-3 d-block"></i>Giỏ hàng trống. <a href="index.html" class="text-gold">Mua sắm ngay!</a></td></tr>';
        if (totalEl) totalEl.innerText = '0 ₫';
        return;
    }

    let grandTotal = 0;
    tbody.innerHTML = cart.map((item, idx) => {
        const subtotal = item.price * item.quantity;
        grandTotal += subtotal;
        return `<tr>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${item.image}" class="rounded me-3" width="56" height="56" style="object-fit:cover;" onerror="this.src='https://via.placeholder.com/56'">
                    <div>
                        <span class="fw-semibold text-dark">${item.name}</span>
                        <div class="text-muted small">${item.category}</div>
                    </div>
                </div>
            </td>
            <td class="text-gold fw-bold">${formatCurrency(item.price)}</td>
            <td class="text-center">
                <div class="input-group input-group-sm justify-content-center" style="width:120px; margin:0 auto;">
                    <button class="btn btn-outline-secondary" onclick="updateCartQty(${item.id}, -1)">−</button>
                    <input type="text" class="form-control text-center fw-bold" value="${item.quantity}" readonly>
                    <button class="btn btn-outline-secondary" onclick="updateCartQty(${item.id}, 1)">+</button>
                </div>
            </td>
            <td class="fw-bold">${formatCurrency(subtotal)}</td>
            <td><button class="btn btn-outline-danger btn-sm rounded-circle" onclick="removeFromCart(${item.id})" title="Xóa"><i class="fas fa-trash"></i></button></td>
        </tr>`;
    }).join('');

    if (totalEl) totalEl.innerText = formatCurrency(grandTotal);
};

const updateCartQty = (id, delta) => {
    let cart = getCart();
    const idx = cart.findIndex(i => i.id === id);
    if (idx === -1) return;
    cart[idx].quantity += delta;
    if (cart[idx].quantity < 1) cart.splice(idx, 1);
    saveCart(cart);
    updateCartBadge();
    loadCart();
};

const removeFromCart = (id) => {
    if (!confirm('Bạn muốn xóa sản phẩm này khỏi giỏ hàng?')) return;
    let cart = getCart().filter(i => i.id !== id);
    saveCart(cart);
    updateCartBadge();
    loadCart();
};

// ================= TRANG THANH TOÁN (checkout.html) =================
const loadCheckout = () => {
    const summary = document.getElementById('checkout-summary');
    const totalEl = document.getElementById('checkout-total');
    const countEl = document.getElementById('checkout-item-count');
    if (!summary) return;

    const cart = getCart();
    if (cart.length === 0) {
        summary.innerHTML = '<li class="list-group-item text-center text-muted py-4">Giỏ hàng trống</li>';
        if (totalEl) totalEl.innerText = '0 ₫';
        if (countEl) countEl.innerText = '0';
        return;
    }

    let total = 0;
    summary.innerHTML = cart.map(item => {
        const sub = item.price * item.quantity;
        total += sub;
        return `<li class="list-group-item d-flex justify-content-between lh-sm py-3">
            <div>
                <h6 class="my-0 fw-semibold">${item.name}</h6>
                <small class="text-muted">SL: ${item.quantity}</small>
            </div>
            <span class="text-gold fw-bold">${formatCurrency(sub)}</span>
        </li>`;
    }).join('');

    if (totalEl) totalEl.innerText = formatCurrency(total);
    if (countEl) countEl.innerText = cart.reduce((s, i) => s + i.quantity, 0);
};

const placeOrder = (e) => {
    e.preventDefault();
    const cart = getCart();
    if (cart.length === 0) { alert('Giỏ hàng trống!'); return; }
    alert('🎉 Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại G9 Trang Sức.\nChúng tôi sẽ liên hệ xác nhận đơn hàng sớm nhất.');
    localStorage.removeItem('g9_cart');
    window.location.href = 'index.html';
};

// ================= QUẢN LÝ ĐĂNG NHẬP / ĐĂNG XUẤT =================
const getCurrentUser = () => JSON.parse(localStorage.getItem('g9_currentUser'));

const updateAuthArea = () => {
    const authArea = document.getElementById('auth-area');
    if (!authArea) return;

    const user = getCurrentUser();
    if (user) {
        authArea.innerHTML = `
            <div class="d-flex align-items-center">
                <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(user.fullname)}&background=d4af37&color=fff&size=32&bold=true"
                     class="rounded-circle me-2" width="32" height="32" alt="Avatar">
                <span class="fw-medium text-dark me-3" style="font-size:0.85rem;">${user.fullname}</span>
                <a href="#" class="btn btn-outline-danger btn-sm rounded-pill px-3" onclick="logout(); return false;">
                    <i class="fas fa-sign-out-alt me-1"></i>Đăng xuất
                </a>
            </div>
        `;
    } else {
        authArea.innerHTML = '<a href="login.html" class="btn btn-outline-dark rounded-pill px-4">Đăng nhập</a>';
    }
};

const logout = () => {
    if (confirm('Bạn muốn đăng xuất?')) {
        localStorage.removeItem('g9_currentUser');
        alert('Đã đăng xuất thành công!');
        window.location.href = 'index.html';
    }
};

// ================= ĐỒNG HỒ ĐẾM NGƯỢC KHUYẾN MÃI =================
const startPromoCountdown = () => {
    // Ngày kết thúc khuyến mãi: cuối tháng 5/2026
    const endDate = new Date('2026-05-31T23:59:59');

    const updateCountdown = () => {
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
            document.getElementById('promo-days-1').innerText = '00';
            document.getElementById('promo-hours-1').innerText = '00';
            document.getElementById('promo-mins-1').innerText = '00';
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        const daysEl = document.getElementById('promo-days-1');
        const hoursEl = document.getElementById('promo-hours-1');
        const minsEl = document.getElementById('promo-mins-1');
        if (daysEl) daysEl.innerText = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.innerText = String(hours).padStart(2, '0');
        if (minsEl) minsEl.innerText = String(mins).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 60000); // Cập nhật mỗi phút
};

// ================= KHỞI CHẠY =================
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateAuthArea();

    const path = window.location.pathname;

    // Trang chủ
    if (path.endsWith('index.html') || path.endsWith('/')) {
        const urlCat = new URLSearchParams(window.location.search).get('category');
        if (urlCat) { filterCategory(urlCat); } else { renderProducts(products); }
        startPromoCountdown();
    }

    // Trang chi tiết
    if (path.endsWith('detail.html')) { loadProductDetail(); }

    // Trang giỏ hàng
    if (path.endsWith('cart.html')) { loadCart(); }

    // Trang thanh toán
    if (path.endsWith('checkout.html')) { loadCheckout(); }
});