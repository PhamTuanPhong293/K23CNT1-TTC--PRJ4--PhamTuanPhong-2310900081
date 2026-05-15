// ================= DỮ LIỆU MẪU =================
let adminProducts = [
    { id: 101, name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn" },
    { id: 102, name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn" },
    { id: 103, name: "Nhẫn Hồng Ngọc Ruby cao cấp", price: 8500000, image: "images/nhan-hong-ngoc.jpg", category: "Nhẫn" },
    { id: 104, name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền" },
    { id: 105, name: "Dây chuyền Vàng Ý 14K mắt xích", price: 9500000, image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=80&h=80&fit=crop", category: "Dây chuyền" },
    { id: 106, name: "Bông tai Ngọc trai Akoya", price: 3200000, image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=80&h=80&fit=crop", category: "Bông tai" },
    { id: 107, name: "Bông tai Kim cương Halo", price: 15000000, image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=80&h=80&fit=crop", category: "Bông tai" }
];

let adminOrders = [
    {
        id: 1, customer: "Bùi Đức Huy", email: "huy@gmail.com", phone: "0900000001",
        address: "123 Phố Huế, Hai Bà Trưng, Hà Nội", total: 5000000,
        status: "Chờ xác nhận", payment: "COD", date: "10/05/2026 14:30",
        note: "Giao trong giờ hành chính",
        items: [{ name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, quantity: 1 }]
    },
    {
        id: 2, customer: "Nguyễn Ngọc Hiến", email: "hien@gmail.com", phone: "0900000002",
        address: "45 Trần Duy Hưng, Cầu Giấy, Hà Nội", total: 2400000,
        status: "Chờ xác nhận", payment: "VNPay", date: "10/05/2026 16:45",
        note: "",
        items: [
            { name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, quantity: 2 }
        ]
    },
    {
        id: 3, customer: "Vũ Mai Chi", email: "chi@gmail.com", phone: "0900000003",
        address: "789 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh", total: 10200000,
        status: "Đang giao", payment: "VNPay", date: "08/05/2026 09:15",
        note: "Gói quà tặng, kèm thiệp chúc mừng",
        items: [
            { name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, quantity: 1 },
            { name: "Bông tai Ngọc trai Akoya", price: 3200000, quantity: 1 }
        ]
    },
    {
        id: 4, customer: "Phạm Tuấn Phong", email: "phong@gmail.com", phone: "0900000004",
        address: "56 Bạch Đằng, Hải Châu, Đà Nẵng", total: 5000000,
        status: "Hoàn thành", payment: "Momo", date: "05/05/2026 10:00",
        note: "Khách VIP - giảm 5%",
        items: [{ name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, quantity: 1 }]
    }
];

let adminAccounts = [
    { id: 1, username: "bdhuy", fullname: "Bùi Đức Huy", email: "huy@gmail.com", phone: "0900000001", password: "admin", role: "Admin", status: "Hoạt động", date: "01/01/2026" },
    { id: 2, username: "ptphong", fullname: "Phạm Tuấn Phong", email: "phong@gmail.com", phone: "0900000004", password: "123", role: "Quản lý", status: "Hoạt động", date: "15/01/2026" },
    { id: 3, username: "nnhien", fullname: "Nguyễn Ngọc Hiến", email: "hien@gmail.com", phone: "0900000002", password: "123", role: "Nhân viên", status: "Hoạt động", date: "20/02/2026" },
    { id: 4, username: "vmchi", fullname: "Vũ Mai Chi", email: "chi@gmail.com", phone: "0900000003", password: "123", role: "Nhân viên", status: "Bị khóa", date: "01/03/2026" }
];

let adminPromos = [
    { id: 1, code: 'WEDDING20', name: 'Giảm 20% Nhẫn cưới', discount: 20, start: '01/05/2026', end: '31/05/2026', desc: 'Ưu đãi cho các cặp đôi đặt nhẫn cưới trong tháng 5', status: 'Hoạt động' },
    { id: 2, code: 'SUMMER15', name: 'Hè rực rỡ - Giảm 15%', discount: 15, start: '01/06/2026', end: '30/06/2026', desc: 'Giảm giá toàn bộ sản phẩm mùa hè', status: 'Sắp diễn ra' },
    { id: 3, code: 'VIP30', name: 'Khách VIP giảm 30%', discount: 30, start: '01/01/2026', end: '31/03/2026', desc: 'Dành riêng cho khách hàng hạng Kim cương', status: 'Hết hạn' }
];

let adminNews = [
    { id: 1, title: 'Top 5 xu hướng trang sức nổi bật mùa Hè 2026', category: 'Xu hướng', image: 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c5?w=80&h=80&fit=crop', date: '10/05/2026', summary: 'Khám phá những mẫu trang sức đang làm mưa làm gió...', status: 'Đã đăng' },
    { id: 2, title: 'Cách bảo quản trang sức vàng luôn sáng bóng', category: 'Mẹo hay', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=80&h=80&fit=crop', date: '08/05/2026', summary: 'Những bí quyết đơn giản giúp trang sức của bạn luôn như mới...', status: 'Đã đăng' },
    { id: 3, title: 'Ra mắt BST "Tinh Hoa" - Đá quý thiên nhiên', category: 'Bộ sưu tập', image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=80&h=80&fit=crop', date: '05/05/2026', summary: 'G9 Trang Sức hân hạnh giới thiệu bộ sưu tập mới nhất...', status: 'Nháp' }
];

let adminCategories = [
    { id: 1, name: 'Nhẫn', desc: 'Các loại nhẫn đính hôn, nhẫn cưới, nhẫn thời trang', count: 15 },
    { id: 2, name: 'Dây chuyền', desc: 'Dây chuyền vàng, bạc, bạch kim đính đá quý', count: 8 },
    { id: 3, name: 'Bông tai', desc: 'Khuyên tai nữ phong cách đa dạng', count: 12 }
];

let myChart = null;

const formatCurrencyAdmin = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

// ================= LOGIC CHUYỂN TAB =================
const switchTab = (tabName) => {
    ['dashboard', 'products', 'orders', 'accounts', 'promotions', 'news', 'categories'].forEach(tab => {
        document.getElementById(`nav-${tab}`).classList.remove('active');
        document.getElementById(`section-${tab}`).classList.add('d-none');
    });

    document.getElementById(`nav-${tabName}`).classList.add('active');
    document.getElementById(`section-${tabName}`).classList.remove('d-none');

    const titles = {
        dashboard: ["Tổng quan Hệ thống", "Báo cáo nhanh các chỉ số hoạt động chính."],
        products: ["Quản lý Sản phẩm", "Kiểm soát kho hàng và cập nhật mẫu mã mới."],
        orders: ["Quản lý Đơn hàng", "Theo dõi và xử lý trạng thái giao hàng."],
        accounts: ["Quản lý Tài khoản", "Quản lý tài khoản Admin, Quản lý và Nhân viên."],
        promotions: ["Quản lý Khuyến mãi", "Tạo và quản lý các chương trình ưu đãi."],
        news: ["Quản lý Tin tức", "Quản lý bài viết và xu hướng trang sức."],
        categories: ["Quản lý Danh mục", "Thêm và chỉnh sửa các danh mục sản phẩm."]
    };
    document.getElementById('page-title').innerText = titles[tabName][0];
    document.getElementById('page-subtitle').innerText = titles[tabName][1];

    if (tabName === 'dashboard') loadAdminDashboard();
    if (tabName === 'products') loadAdminProducts();
    if (tabName === 'orders') loadAdminOrders();
    if (tabName === 'accounts') loadAdminAccounts();
    if (tabName === 'promotions') loadAdminPromos();
    if (tabName === 'news') loadAdminNews();
    if (tabName === 'categories') loadAdminCategories();
};

// ================= TRANG CHỦ (DASHBOARD) =================
const loadAdminDashboard = () => {
    // Tính tổng doanh thu
    const totalRevenue = adminOrders
        .filter(o => o.status !== 'Đã hủy')
        .reduce((sum, o) => sum + o.total, 0);
    document.getElementById('dash-revenue').innerText = formatCurrencyAdmin(totalRevenue);

    // Tính tổng đơn hàng
    document.getElementById('dash-orders').innerText = adminOrders.length;

    // Tính tổng tài khoản
    document.getElementById('dash-accounts').innerText = adminAccounts.length;

    // Tính tổng sản phẩm
    document.getElementById('dash-products').innerText = adminProducts.length;

    // Render đơn hàng gần đây (lấy 5 đơn mới nhất)
    const recentOrders = [...adminOrders].reverse().slice(0, 5);
    const tbody = document.getElementById('dash-recent-orders');
    if (tbody) {
        tbody.innerHTML = recentOrders.map(o => {
            const statusClass = {
                'Đã giao': 'bg-success',
                'Đang giao': 'bg-primary',
                'Chờ xử lý': 'bg-warning text-dark',
                'Đã hủy': 'bg-danger'
            };
            return `<tr>
                <td class="ps-4 fw-medium text-muted">#${o.id}</td>
                <td class="fw-semibold text-dark">${o.customer}</td>
                <td class="text-muted small">${o.date}</td>
                <td class="text-gold fw-bold">${formatCurrencyAdmin(o.total)}</td>
                <td><span class="badge ${statusClass[o.status] || 'bg-secondary'} rounded-pill px-2 py-1">${o.status}</span></td>
            </tr>`;
        }).join('');
    }

    // Biểu đồ doanh thu
    const ctx = document.getElementById('revenueChart')?.getContext('2d');
    if (ctx) {
        if (myChart) myChart.destroy();
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Tháng 12', 'Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5'],
                datasets: [{
                    label: 'Doanh thu (VNĐ)',
                    data: [15000000, 22000000, 18000000, 30000000, 25000000, totalRevenue],
                    backgroundColor: 'rgba(212, 175, 55, 0.8)',
                    borderColor: '#d4af37',
                    borderWidth: 1,
                    borderRadius: 5
                }]
            },
            options: {
                responsive: true,
                plugins: { legend: { display: true, position: 'top' } },
                scales: { y: { beginAtZero: true, ticks: { callback: v => (v / 1000000) + 'tr' } } }
            }
        });
    }
};

// ================= RENDER SẢN PHẨM =================
const loadAdminProducts = () => {
    const tbody = document.getElementById('admin-product-list');
    if (!tbody) return;

    let filtered = adminProducts.map((p, i) => ({ p, i }));
    const keyword = document.getElementById('search-product')?.value.toLowerCase() || '';
    const category = document.getElementById('filter-product-category')?.value || '';

    if (keyword) filtered = filtered.filter(x => x.p.name.toLowerCase().includes(keyword) || x.p.id.toString().includes(keyword));
    if (category) filtered = filtered.filter(x => x.p.category === category);

    tbody.innerHTML = filtered.map(({ p, i }) => `
        <tr>
            <td class="ps-4 text-muted fw-medium" style="font-size:0.9rem;">#${p.id}</td>
            <td>
                <div class="d-flex align-items-center">
                    <img src="${p.image}" class="rounded-3 shadow-sm me-3" width="48" height="48" style="object-fit:cover;" onerror="this.src='https://via.placeholder.com/48'">
                    <span class="fw-semibold text-dark">${p.name}</span>
                </div>
            </td>
            <td><span class="badge bg-light text-dark border px-2 py-1">${p.category}</span></td>
            <td class="text-gold fw-bold">${formatCurrencyAdmin(p.price)}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editProduct(${i})"><i class="fas fa-pen" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width:32px;height:32px;" onclick="deleteProduct(${i})"><i class="fas fa-trash" style="font-size:0.8rem;"></i></button>
            </td>
        </tr>
    `).join('');
};

const deleteProduct = (index) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        adminProducts.splice(index, 1);
        loadAdminProducts();
    }
};

const editProduct = (index) => {
    const p = adminProducts[index];
    document.getElementById('editProductIndex').value = index;
    document.getElementById('editProductId').innerText = `#${p.id}`;
    document.getElementById('editProductName').value = p.name;
    document.getElementById('editProductCategory').value = p.category;
    document.getElementById('editProductPrice').value = p.price;
    document.getElementById('editProductImage').value = p.image;

    // Hiển thị ảnh xem trước
    const preview = document.getElementById('editProductPreview');
    preview.src = p.image;
    preview.style.display = 'block';

    // Cập nhật ảnh khi thay đổi URL
    document.getElementById('editProductImage').oninput = function () {
        preview.src = this.value;
        preview.style.display = this.value ? 'block' : 'none';
    };

    new bootstrap.Modal(document.getElementById('editProductModal')).show();
};

const handleEditProduct = (event) => {
    event.preventDefault();
    const index = parseInt(document.getElementById('editProductIndex').value);
    const p = adminProducts[index];

    p.name = document.getElementById('editProductName').value;
    p.category = document.getElementById('editProductCategory').value;
    p.price = parseFloat(document.getElementById('editProductPrice').value);
    p.image = document.getElementById('editProductImage').value;

    const modalEl = document.getElementById('editProductModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();

    loadAdminProducts();
    alert("Đã cập nhật sản phẩm thành công!");
};

const handleAddProduct = (event) => {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;
    const newId = adminProducts.length > 0 ? Math.max(...adminProducts.map(p => p.id)) + 1 : 1;
    adminProducts.push({ id: newId, name, category, price, image });

    const modalEl = document.getElementById('addProductModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
    document.getElementById('add-product-form').reset();
    loadAdminProducts();
    alert("Đã thêm sản phẩm thành công!");
};

// ================= RENDER ĐƠN HÀNG =================
const loadAdminOrders = () => {
    const tbody = document.getElementById('admin-order-list');
    if (!tbody) return;

    let filtered = adminOrders.map((order, i) => ({ order, i }));
    const keyword = document.getElementById('search-order')?.value.toLowerCase() || '';
    const status = document.getElementById('filter-order-status')?.value || '';

    if (keyword) filtered = filtered.filter(x => x.order.customer.toLowerCase().includes(keyword) || x.order.id.toString().includes(keyword) || (x.order.phone && x.order.phone.includes(keyword)));
    if (status) filtered = filtered.filter(x => x.order.status === status);

    tbody.innerHTML = filtered.map(({ order, i }) => {
        let bgClass = "bg-warning text-dark";
        if (order.status === "Đang giao") bgClass = "bg-primary text-white";
        if (order.status === "Hoàn thành") bgClass = "bg-success text-white";
        if (order.status === "Đã hủy") bgClass = "bg-danger text-white";
        return `<tr>
            <td class="ps-4 text-muted fw-bold">#DH${order.id}</td>
            <td class="fw-semibold">${order.customer}</td>
            <td><div class="small">${order.phone}</div><div class="text-muted small">${order.address}</div></td>
            <td class="text-danger fw-bold">${formatCurrencyAdmin(order.total)}</td>
            <td>
                <select class="form-select form-select-sm status-select ${bgClass} border-0" onchange="updateOrderStatus(${i}, this.value)">
                    <option value="Chờ xác nhận" ${order.status === 'Chờ xác nhận' ? 'selected' : ''} class="bg-white text-dark">Chờ xác nhận</option>
                    <option value="Đang giao" ${order.status === 'Đang giao' ? 'selected' : ''} class="bg-white text-dark">Đang giao</option>
                    <option value="Hoàn thành" ${order.status === 'Hoàn thành' ? 'selected' : ''} class="bg-white text-dark">Hoàn thành</option>
                    <option value="Đã hủy" ${order.status === 'Đã hủy' ? 'selected' : ''} class="bg-white text-dark">Đã hủy</option>
                </select>
            </td>
            <td class="text-center"><button class="btn btn-light btn-sm rounded shadow-sm text-secondary" onclick="viewOrderDetails(${i})"><i class="fas fa-eye"></i></button></td>
        </tr>`;
    }).join('');
};

const updateOrderStatus = (index, newStatus) => {
    adminOrders[index].status = newStatus;
    loadAdminOrders();
};

function viewOrderDetails(index) {
    const order = adminOrders[index];

    // Thông tin đơn hàng
    document.getElementById('detail-order-id').innerText = `#DH${order.id}`;
    document.getElementById('detail-date').innerText = order.date || '—';

    // Thông tin khách hàng
    document.getElementById('detail-customer').innerText = order.customer;
    document.getElementById('detail-email').innerText = order.email || '—';
    document.getElementById('detail-phone').innerText = order.phone;
    document.getElementById('detail-address').innerText = order.address;

    // Thanh toán & ghi chú
    document.getElementById('detail-payment').innerText = order.payment || 'COD';
    document.getElementById('detail-note').innerText = order.note || 'Không có';

    // Tổng tiền
    document.getElementById('detail-total').innerText = formatCurrencyAdmin(order.total);

    // Trạng thái
    const statusBadge = document.getElementById('detail-status');
    statusBadge.innerText = order.status;
    statusBadge.className = 'badge fs-6 mt-2 ';
    const statusMap = {
        'Chờ xác nhận': ['bg-warning', 'text-dark'],
        'Đang giao': ['bg-primary', 'text-white'],
        'Hoàn thành': ['bg-success', 'text-white'],
        'Đã hủy': ['bg-danger', 'text-white']
    };
    if (statusMap[order.status]) statusBadge.classList.add(...statusMap[order.status]);

    // Icon thanh toán
    const paymentIcon = document.getElementById('detail-payment-icon');
    if (paymentIcon) {
        const icons = { 'COD': 'fa-money-bill-wave', 'VNPay': 'fa-credit-card', 'Momo': 'fa-wallet', 'PayPal': 'fa-cc-paypal' };
        paymentIcon.className = `fas ${icons[order.payment] || 'fa-money-bill-wave'} text-gold me-2`;
    }

    // Danh sách sản phẩm
    const productList = document.getElementById('detail-product-list');
    productList.innerHTML = order.items.map((item, idx) => `
        <tr>
            <td class="text-center text-muted">${idx + 1}</td>
            <td class="fw-semibold text-dark">${item.name}</td>
            <td class="text-muted">${formatCurrencyAdmin(item.price)}</td>
            <td class="text-center">${item.quantity}</td>
            <td class="text-danger fw-bold text-end">${formatCurrencyAdmin(item.price * item.quantity)}</td>
        </tr>
    `).join('');

    // Timeline trạng thái
    const timeline = document.getElementById('detail-timeline');
    if (timeline) {
        const steps = ['Chờ xác nhận', 'Đang giao', 'Hoàn thành'];
        const currentStep = steps.indexOf(order.status);
        const isCancelled = order.status === 'Đã hủy';

        timeline.innerHTML = steps.map((step, i) => {
            let dotClass = 'bg-secondary';
            let lineClass = 'bg-secondary';
            let textClass = 'text-muted';
            if (isCancelled) {
                dotClass = 'bg-danger';
                textClass = 'text-danger';
            } else if (i <= currentStep) {
                dotClass = 'bg-success';
                lineClass = 'bg-success';
                textClass = i === currentStep ? 'text-success fw-bold' : 'text-dark';
            }
            return `<div class="d-flex align-items-center ${i < steps.length - 1 ? 'flex-grow-1' : ''}">
                <div class="text-center">
                    <div class="rounded-circle d-flex align-items-center justify-content-center mx-auto ${dotClass}" style="width:28px;height:28px;">
                        <i class="fas ${i <= currentStep && !isCancelled ? 'fa-check' : (isCancelled ? 'fa-times' : 'fa-circle')} text-white" style="font-size:0.65rem;"></i>
                    </div>
                    <small class="d-block mt-1 ${textClass}" style="font-size:0.7rem;">${isCancelled && i === 0 ? 'Đã hủy' : step}</small>
                </div>
                ${i < steps.length - 1 ? `<div class="flex-grow-1 mx-2" style="height:3px;border-radius:2px;" class="${i < currentStep && !isCancelled ? 'bg-success' : 'bg-secondary bg-opacity-25'}"><div style="height:3px;border-radius:2px;" class="${i < currentStep && !isCancelled ? 'bg-success' : 'bg-secondary bg-opacity-25'}"></div></div>` : ''}
            </div>`;
        }).join('');
    }

    new bootstrap.Modal(document.getElementById('orderDetailModal')).show();
}

// ================= QUẢN LÝ TÀI KHOẢN =================
const loadAdminAccounts = () => {
    const tbody = document.getElementById('admin-account-list');
    if (!tbody) return;

    let filtered = adminAccounts.map((acc, i) => ({ acc, i }));
    const keyword = document.getElementById('search-account')?.value.toLowerCase() || '';
    const role = document.getElementById('filter-account-role')?.value || '';

    if (keyword) filtered = filtered.filter(x => x.acc.username.toLowerCase().includes(keyword) || x.acc.fullname.toLowerCase().includes(keyword));
    if (role) filtered = filtered.filter(x => x.acc.role === role);

    tbody.innerHTML = filtered.map(({ acc, i }) => {
        const roleColors = {
            'Admin': 'bg-danger text-white',
            'Quản lý': 'bg-primary text-white',
            'Nhân viên': 'bg-info text-dark'
        };
        const roleClass = roleColors[acc.role] || 'bg-secondary text-white';
        const statusBadge = acc.status === 'Hoạt động'
            ? '<span class="badge bg-success">Hoạt động</span>'
            : '<span class="badge bg-secondary">Bị khóa</span>';
        return `<tr>
            <td class="ps-4">
                <div class="d-flex align-items-center">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(acc.fullname)}&background=d4af37&color=fff&bold=true" class="rounded-circle me-3" width="40">
                    <div>
                        <span class="fw-semibold text-dark">${acc.username}</span>
                    </div>
                </div>
            </td>
            <td>${acc.fullname}</td>
            <td class="text-muted">${acc.email}</td>
            <td><span class="font-monospace text-muted bg-light px-2 py-1 rounded border">${acc.password || '******'}</span></td>
            <td>
                <select class="form-select form-select-sm border-0 ${roleClass}" style="width: 105px; border-radius: 20px; font-size: 0.8rem; padding-top: 0.25rem; padding-bottom: 0.25rem;" onchange="editAccountRole(${i}, this.value)">
                    <option value="Admin" ${acc.role === 'Admin' ? 'selected' : ''} class="bg-white text-dark">Admin</option>
                    <option value="Quản lý" ${acc.role === 'Quản lý' ? 'selected' : ''} class="bg-white text-dark">Quản lý</option>
                    <option value="Nhân viên" ${acc.role === 'Nhân viên' ? 'selected' : ''} class="bg-white text-dark">Nhân viên</option>
                </select>
            </td>
            <td>${statusBadge}</td>
            <td class="text-muted small">${acc.date}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editAccount(${i})" title="Sửa"><i class="fas fa-pen" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle me-1 shadow-sm ${acc.status === 'Hoạt động' ? 'text-warning' : 'text-success'}" style="width:32px;height:32px;" onclick="toggleAccountStatus(${i})" title="${acc.status === 'Hoạt động' ? 'Khóa' : 'Mở khóa'}"><i class="fas fa-${acc.status === 'Hoạt động' ? 'lock' : 'unlock'}" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width:32px;height:32px;" onclick="deleteAccount(${i})" title="Xóa"><i class="fas fa-trash" style="font-size:0.8rem;"></i></button>
            </td>
        </tr>`;
    }).join('');
};

const handleAddAccount = (event) => {
    event.preventDefault();
    const username = document.getElementById('accUsername').value;
    const fullname = document.getElementById('accFullname').value;
    const email = document.getElementById('accEmail').value;
    const phone = document.getElementById('accPhone').value;
    const role = document.getElementById('accRole').value;
    const password = document.getElementById('accPassword').value;

    // Kiểm tra tên đăng nhập trùng
    if (adminAccounts.some(a => a.username === username)) {
        alert('Tên đăng nhập đã tồn tại! Vui lòng chọn tên khác.');
        return;
    }

    const d = new Date();
    const date = `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
    const newId = adminAccounts.length > 0 ? Math.max(...adminAccounts.map(a => a.id)) + 1 : 1;

    adminAccounts.push({ id: newId, username, fullname, email, phone, password, role, status: 'Hoạt động', date });

    const modalEl = document.getElementById('addAccountModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
    document.getElementById('add-account-form').reset();
    loadAdminAccounts();
    alert(`Đã tạo tài khoản "${username}" thành công!`);
};

const editAccountRole = (index, newRole) => {
    const acc = adminAccounts[index];
    acc.role = newRole;
    loadAdminAccounts();
};

const editAccount = (index) => {
    const acc = adminAccounts[index];
    document.getElementById('editAccIndex').value = index;
    document.getElementById('editAccFullname').value = acc.fullname;
    document.getElementById('editAccEmail').value = acc.email;
    document.getElementById('editAccPhone').value = acc.phone || '';
    document.getElementById('editAccPassword').value = acc.password || '';
    new bootstrap.Modal(document.getElementById('editAccountModal')).show();
};

const handleEditAccount = (event) => {
    event.preventDefault();
    const index = document.getElementById('editAccIndex').value;
    const acc = adminAccounts[index];
    
    acc.fullname = document.getElementById('editAccFullname').value;
    acc.email = document.getElementById('editAccEmail').value;
    acc.phone = document.getElementById('editAccPhone').value;
    const pwd = document.getElementById('editAccPassword').value;
    if (pwd) acc.password = pwd;
    
    bootstrap.Modal.getInstance(document.getElementById('editAccountModal'))?.hide();
    loadAdminAccounts();
};

const toggleAccountStatus = (index) => {
    const acc = adminAccounts[index];
    const action = acc.status === 'Hoạt động' ? 'khóa' : 'mở khóa';
    if (confirm(`Bạn muốn ${action} tài khoản "${acc.fullname}"?`)) {
        acc.status = acc.status === 'Hoạt động' ? 'Bị khóa' : 'Hoạt động';
        loadAdminAccounts();
    }
};

const deleteAccount = (index) => {
    const acc = adminAccounts[index];
    if (acc.role === 'Admin' && adminAccounts.filter(a => a.role === 'Admin').length <= 1) {
        alert('Không thể xóa tài khoản Admin cuối cùng!');
        return;
    }
    if (confirm(`Bạn có chắc muốn xóa tài khoản "${acc.fullname}"?`)) {
        adminAccounts.splice(index, 1);
        loadAdminAccounts();
    }
};

// ================= QUẢN LÝ KHUYẾN MÃI =================
const loadAdminPromos = () => {
    const tbody = document.getElementById('admin-promo-list');
    if (!tbody) return;
    tbody.innerHTML = adminPromos.map((p, i) => {
        const statusBadge = {
            'Hoạt động': '<span class="badge bg-success px-2 py-1">Hoạt động</span>',
            'Sắp diễn ra': '<span class="badge bg-info text-dark px-2 py-1">Sắp diễn ra</span>',
            'Hết hạn': '<span class="badge bg-secondary px-2 py-1">Hết hạn</span>'
        };
        return `<tr>
            <td class="ps-4">
                <span class="badge bg-dark px-2 py-1 rounded-pill">${p.code}</span>
            </td>
            <td>
                <div class="fw-semibold text-dark">${p.name}</div>
                <small class="text-muted">${p.desc || ''}</small>
            </td>
            <td><span class="text-danger fw-bold fs-6">-${p.discount}%</span></td>
            <td class="small text-muted">${p.start} → ${p.end}</td>
            <td>${statusBadge[p.status] || p.status}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editPromo(${i})" title="Sửa"><i class="fas fa-pen" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle me-1 text-warning shadow-sm" style="width:32px;height:32px;" onclick="togglePromoStatus(${i})" title="Đổi trạng thái"><i class="fas fa-sync-alt" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width:32px;height:32px;" onclick="deletePromo(${i})" title="Xóa"><i class="fas fa-trash" style="font-size:0.8rem;"></i></button>
            </td>
        </tr>`;
    }).join('');
};

const handleAddPromo = (event) => {
    event.preventDefault();
    const code = document.getElementById('promoCode').value.toUpperCase();
    const name = document.getElementById('promoName').value;
    const discount = parseInt(document.getElementById('promoDiscount').value);
    const startRaw = document.getElementById('promoStart').value;
    const endRaw = document.getElementById('promoEnd').value;
    const desc = document.getElementById('promoDesc').value;

    if (adminPromos.some(p => p.code === code)) {
        alert('Mã khuyến mãi đã tồn tại!');
        return;
    }

    const formatDate = (d) => d.split('-').reverse().join('/');
    const newId = adminPromos.length > 0 ? Math.max(...adminPromos.map(p => p.id)) + 1 : 1;
    adminPromos.push({ id: newId, code, name, discount, start: formatDate(startRaw), end: formatDate(endRaw), desc, status: 'Hoạt động' });

    const modalEl = document.getElementById('addPromoModal');
    bootstrap.Modal.getInstance(modalEl)?.hide();
    document.getElementById('add-promo-form').reset();
    loadAdminPromos();
    alert(`Đã tạo khuyến mãi "${code}" thành công!`);
};

const togglePromoStatus = (index) => {
    const p = adminPromos[index];
    const statuses = ['Hoạt động', 'Sắp diễn ra', 'Hết hạn'];
    const next = statuses[(statuses.indexOf(p.status) + 1) % statuses.length];
    p.status = next;
    loadAdminPromos();
};

const editPromo = (index) => {
    const p = adminPromos[index];
    document.getElementById('editPromoIndex').value = index;
    document.getElementById('editPromoName').value = p.name;
    document.getElementById('editPromoDiscount').value = p.discount;
    document.getElementById('editPromoStatus').value = p.status;
    document.getElementById('editPromoDesc').value = p.desc || '';
    new bootstrap.Modal(document.getElementById('editPromoModal')).show();
};

const handleEditPromo = (event) => {
    event.preventDefault();
    const index = document.getElementById('editPromoIndex').value;
    const p = adminPromos[index];
    p.name = document.getElementById('editPromoName').value;
    p.discount = parseInt(document.getElementById('editPromoDiscount').value);
    p.status = document.getElementById('editPromoStatus').value;
    p.desc = document.getElementById('editPromoDesc').value;
    bootstrap.Modal.getInstance(document.getElementById('editPromoModal'))?.hide();
    loadAdminPromos();
};

const deletePromo = (index) => {
    if (confirm(`Xóa khuyến mãi "${adminPromos[index].code}"?`)) {
        adminPromos.splice(index, 1);
        loadAdminPromos();
    }
};

// ================= QUẢN LÝ TIN TỨC =================
const loadAdminNews = () => {
    const tbody = document.getElementById('admin-news-list');
    if (!tbody) return;
    tbody.innerHTML = adminNews.map((n, i) => {
        const statusBadge = n.status === 'Đã đăng'
            ? '<span class="badge bg-success px-2 py-1">Đã đăng</span>'
            : '<span class="badge bg-warning text-dark px-2 py-1">Nháp</span>';
        const catBadge = {
            'Xu hướng': 'bg-gold',
            'Mẹo hay': 'bg-dark',
            'Bộ sưu tập': 'bg-success',
            'Sự kiện': 'bg-primary'
        };
        return `<tr>
            <td class="ps-4">
                <img src="${n.image || 'https://via.placeholder.com/48'}" class="rounded-3 shadow-sm" width="48" height="48" style="object-fit:cover;" onerror="this.src='https://via.placeholder.com/48'">
            </td>
            <td>
                <div class="fw-semibold text-dark">${n.title}</div>
                <small class="text-muted">${(n.summary || '').substring(0, 60)}...</small>
            </td>
            <td><span class="badge ${catBadge[n.category] || 'bg-secondary'} rounded-pill px-2">${n.category}</span></td>
            <td class="text-muted small">${n.date}</td>
            <td>${statusBadge}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editNews(${i})" title="Sửa"><i class="fas fa-pen" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle me-1 shadow-sm ${n.status === 'Đã đăng' ? 'text-warning' : 'text-success'}" style="width:32px;height:32px;" onclick="toggleNewsStatus(${i})" title="${n.status === 'Đã đăng' ? 'Chuyển Nháp' : 'Đăng bài'}"><i class="fas fa-${n.status === 'Đã đăng' ? 'eye-slash' : 'eye'}" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width:32px;height:32px;" onclick="deleteNews(${i})" title="Xóa"><i class="fas fa-trash" style="font-size:0.8rem;"></i></button>
            </td>
        </tr>`;
    }).join('');
};

const handleAddNews = (event) => {
    event.preventDefault();
    const title = document.getElementById('newsTitle').value;
    const category = document.getElementById('newsCategory').value;
    const image = document.getElementById('newsImage').value;
    const summary = document.getElementById('newsSummary').value;

    const d = new Date();
    const date = `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;
    const newId = adminNews.length > 0 ? Math.max(...adminNews.map(n => n.id)) + 1 : 1;

    adminNews.push({ id: newId, title, category, image: image || 'https://via.placeholder.com/80', date, summary, status: 'Nháp' });

    const modalEl = document.getElementById('addNewsModal');
    bootstrap.Modal.getInstance(modalEl)?.hide();
    document.getElementById('add-news-form').reset();
    loadAdminNews();
    alert(`Đã thêm bài viết "${title}" (Nháp). Bấm nút 👁 để đăng.`);
};

const toggleNewsStatus = (index) => {
    const n = adminNews[index];
    n.status = n.status === 'Đã đăng' ? 'Nháp' : 'Đã đăng';
    loadAdminNews();
};

const editNews = (index) => {
    const n = adminNews[index];
    document.getElementById('editNewsIndex').value = index;
    document.getElementById('editNewsTitle').value = n.title;
    document.getElementById('editNewsCategory').value = n.category;
    document.getElementById('editNewsImage').value = n.image || '';
    document.getElementById('editNewsSummary').value = n.summary || '';
    new bootstrap.Modal(document.getElementById('editNewsModal')).show();
};

const handleEditNews = (event) => {
    event.preventDefault();
    const index = document.getElementById('editNewsIndex').value;
    const n = adminNews[index];
    n.title = document.getElementById('editNewsTitle').value;
    n.category = document.getElementById('editNewsCategory').value;
    n.image = document.getElementById('editNewsImage').value || 'https://via.placeholder.com/80';
    n.summary = document.getElementById('editNewsSummary').value;
    bootstrap.Modal.getInstance(document.getElementById('editNewsModal'))?.hide();
    loadAdminNews();
};

const deleteNews = (index) => {
    if (confirm(`Xóa bài viết "${adminNews[index].title}"?`)) {
        adminNews.splice(index, 1);
        loadAdminNews();
    }
};

// ================= QUẢN LÝ DANH MỤC =================
const loadAdminCategories = () => {
    const tbody = document.getElementById('admin-category-list');
    if (!tbody) return;
    tbody.innerHTML = adminCategories.map((c, i) => {
        return `<tr>
            <td class="ps-4 fw-medium text-muted">#${c.id}</td>
            <td class="fw-semibold text-dark">${c.name}</td>
            <td class="text-muted small">${c.desc || ''}</td>
            <td><span class="badge bg-light text-dark border px-2 py-1">${c.count} sản phẩm</span></td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editCategory(${i})" title="Sửa"><i class="fas fa-pen" style="font-size:0.8rem;"></i></button>
                <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width:32px;height:32px;" onclick="deleteCategory(${i})" title="Xóa"><i class="fas fa-trash" style="font-size:0.8rem;"></i></button>
            </td>
        </tr>`;
    }).join('');
};

const handleAddCategory = (event) => {
    event.preventDefault();
    const name = document.getElementById('categoryName').value;
    const desc = document.getElementById('categoryDesc').value;

    if (adminCategories.some(c => c.name.toLowerCase() === name.toLowerCase())) {
        alert('Tên danh mục đã tồn tại!');
        return;
    }

    const newId = adminCategories.length > 0 ? Math.max(...adminCategories.map(c => c.id)) + 1 : 1;
    adminCategories.push({ id: newId, name, desc, count: 0 });

    const modalEl = document.getElementById('addCategoryModal');
    bootstrap.Modal.getInstance(modalEl)?.hide();
    document.getElementById('add-category-form').reset();
    loadAdminCategories();
    alert(`Đã thêm danh mục "${name}" thành công!`);
};

const deleteCategory = (index) => {
    if (adminCategories[index].count > 0) {
        alert('Không thể xóa danh mục đang có sản phẩm!');
        return;
    }
    if (confirm(`Xóa danh mục "${adminCategories[index].name}"?`)) {
        adminCategories.splice(index, 1);
        loadAdminCategories();
    }
};

const editCategory = (index) => {
    const c = adminCategories[index];
    document.getElementById('editCategoryIndex').value = index;
    document.getElementById('editCategoryName').value = c.name;
    document.getElementById('editCategoryDesc').value = c.desc || '';
    new bootstrap.Modal(document.getElementById('editCategoryModal')).show();
};

const handleEditCategory = (event) => {
    event.preventDefault();
    const index = document.getElementById('editCategoryIndex').value;
    const c = adminCategories[index];
    c.name = document.getElementById('editCategoryName').value;
    c.desc = document.getElementById('editCategoryDesc').value;
    bootstrap.Modal.getInstance(document.getElementById('editCategoryModal'))?.hide();
    loadAdminCategories();
};

// ================= IN ĐƠN HÀNG =================
const printOrderDetail = () => {
    const modalBody = document.querySelector('#orderDetailModal .modal-body');
    if (!modalBody) return;

    const printWindow = window.open('', '_blank', 'width=800,height=600');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <title>In đơn hàng ${document.getElementById('detail-order-id').innerText}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
            <style>
                body { font-family: 'Segoe UI', sans-serif; padding: 30px; color: #333; }
                .text-gold { color: #d4af37; }
                @media print { .no-print { display: none; } }
            </style>
        </head>
        <body>
            <div class="text-center mb-4">
                <h3 class="fw-bold">G9 <span class="text-gold">Trang Sức</span></h3>
                <p class="text-muted mb-0">Hóa đơn chi tiết đơn hàng</p>
            </div>
            <hr>
            ${modalBody.innerHTML}
            <div class="text-center mt-4 no-print">
                <button class="btn btn-dark rounded-pill px-4" onclick="window.print()">
                    <i class="fas fa-print me-1"></i> In ngay
                </button>
            </div>
        </body>
        </html>
    `);
    printWindow.document.close();
};

// ================= ĐĂNG XUẤT ADMIN =================
const adminLogout = () => {
    if (confirm('Bạn muốn đăng xuất khỏi trang quản trị?')) {
        localStorage.removeItem('g9_currentUser');
        alert('Đã đăng xuất thành công!');
        window.location.href = 'login.html';
    }
};

// ================= KHỞI CHẠY =================
document.addEventListener('DOMContentLoaded', () => {
    // Kiểm tra quyền truy cập Admin
    const currentUser = JSON.parse(localStorage.getItem('g9_currentUser'));
    if (!currentUser || currentUser.role !== 'Admin') {
        alert('Bạn không có quyền truy cập trang quản trị! Vui lòng đăng nhập với tài khoản Admin.');
        window.location.href = 'login.html';
        return;
    }

    // Hiển thị tên admin trên header
    const adminNameEl = document.querySelector('.fw-medium.text-dark');
    if (adminNameEl) {
        adminNameEl.innerText = `${currentUser.fullname} (Admin)`;
    }
    const adminAvatar = document.querySelector('.rounded-circle[alt="Avatar"]');
    if (adminAvatar) {
        adminAvatar.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(currentUser.fullname)}&background=d4af37&color=fff&bold=true`;
    }

    switchTab('dashboard');
});