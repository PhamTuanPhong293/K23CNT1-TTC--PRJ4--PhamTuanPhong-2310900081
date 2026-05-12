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

let adminCustomers = [
    { id: 1, name: "Bùi Đức Huy", email: "huy@gmail.com", phone: "0900000001", date: "01/05/2026", status: "Hoạt động" },
    { id: 2, name: "Nguyễn Ngọc Hiến", email: "hien@gmail.com", phone: "0900000002", date: "02/05/2026", status: "Hoạt động" },
    { id: 3, name: "Vũ Mai Chi", email: "chi@gmail.com", phone: "0900000003", date: "05/05/2026", status: "Hoạt động" },
    { id: 4, name: "Phạm Tuấn Phong", email: "phong@gmail.com", phone: "0900000004", date: "10/05/2026", status: "Hoạt động" }
];
let adminAccounts = [
    { id: 1, username: "bdhuy", fullname: "Bùi Đức Huy", email: "huy@gmail.com", phone: "0900000001", role: "Admin", status: "Hoạt động", date: "01/01/2026" },
    { id: 2, username: "ptphong", fullname: "Phạm Tuấn Phong", email: "phong@gmail.com", phone: "0900000004", role: "Quản lý", status: "Hoạt động", date: "15/01/2026" },
    { id: 3, username: "nnhien", fullname: "Nguyễn Ngọc Hiến", email: "hien@gmail.com", phone: "0900000002", role: "Nhân viên", status: "Hoạt động", date: "20/02/2026" },
    { id: 4, username: "vmchi", fullname: "Vũ Mai Chi", email: "chi@gmail.com", phone: "0900000003", role: "Nhân viên", status: "Bị khóa", date: "01/03/2026" }
];

let myChart = null;

const formatCurrencyAdmin = (amount) => new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);

// ================= LOGIC CHUYỂN TAB =================
const switchTab = (tabName) => {
    ['products', 'orders', 'customers', 'stats', 'accounts'].forEach(tab => {
        document.getElementById(`nav-${tab}`).classList.remove('active');
        document.getElementById(`section-${tab}`).classList.add('d-none');
    });

    document.getElementById(`nav-${tabName}`).classList.add('active');
    document.getElementById(`section-${tabName}`).classList.remove('d-none');

    const titles = {
        products: ["Quản lý Sản phẩm", "Kiểm soát kho hàng và cập nhật mẫu mã mới."],
        orders: ["Quản lý Đơn hàng", "Theo dõi và xử lý trạng thái giao hàng."],
        customers: ["Quản lý Khách hàng", "Thông tin tài khoản và liên hệ của người dùng."],
        stats: ["Thống kê Doanh thu", "Báo cáo tổng quan tình hình kinh doanh."],
        accounts: ["Quản lý Tài khoản", "Quản lý tài khoản Admin, Quản lý và Nhân viên."]
    };
    document.getElementById('page-title').innerText = titles[tabName][0];
    document.getElementById('page-subtitle').innerText = titles[tabName][1];

    if (tabName === 'products') loadAdminProducts();
    if (tabName === 'orders') loadAdminOrders();
    if (tabName === 'customers') loadAdminCustomers();
    if (tabName === 'stats') loadAdminStats();
    if (tabName === 'accounts') loadAdminAccounts();
};

// ================= RENDER SẢN PHẨM =================
const loadAdminProducts = () => {
    const tbody = document.getElementById('admin-product-list');
    if (!tbody) return;
    tbody.innerHTML = adminProducts.map((p, i) => `
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
    const newName = prompt("Sửa tên sản phẩm:", p.name);
    if (newName === null) return;
    const newPrice = prompt("Sửa giá bán (VNĐ):", p.price);
    if (newPrice === null) return;
    p.name = newName;
    p.price = parseFloat(newPrice) || p.price;
    loadAdminProducts();
    alert("Đã cập nhật sản phẩm!");
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
    tbody.innerHTML = adminOrders.map((order, i) => {
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

// ================= RENDER KHÁCH HÀNG =================
const loadAdminCustomers = () => {
    const tbody = document.getElementById('admin-customer-list');
    if (!tbody) return;
    tbody.innerHTML = adminCustomers.map((cus, i) => {
        const statusBadge = cus.status === 'Hoạt động'
            ? '<span class="badge bg-success">Hoạt động</span>'
            : '<span class="badge bg-danger">Bị khóa</span>';
        return `<tr>
            <td class="ps-4">
                <div class="d-flex align-items-center">
                    <img src="https://ui-avatars.com/api/?name=${encodeURIComponent(cus.name)}&background=f0f0f0&color=333" class="rounded-circle me-3" width="40">
                    <span class="fw-semibold text-dark">${cus.name}</span>
                </div>
            </td>
            <td class="text-muted">${cus.email}</td>
            <td>${cus.phone}</td>
            <td class="text-muted small">${cus.date}</td>
            <td>${statusBadge}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded text-danger shadow-sm" title="${cus.status === 'Hoạt động' ? 'Khóa' : 'Mở khóa'} tài khoản" onclick="toggleCustomerStatus(${i})">
                    <i class="fas fa-${cus.status === 'Hoạt động' ? 'lock' : 'unlock'}"></i>
                </button>
            </td>
        </tr>`;
    }).join('');
};

const toggleCustomerStatus = (index) => {
    const cus = adminCustomers[index];
    const action = cus.status === 'Hoạt động' ? 'khóa' : 'mở khóa';
    if (confirm(`Bạn có chắc muốn ${action} tài khoản "${cus.name}"?`)) {
        cus.status = cus.status === 'Hoạt động' ? 'Bị khóa' : 'Hoạt động';
        loadAdminCustomers();
    }
};

// ================= RENDER THỐNG KÊ =================
const loadAdminStats = () => {
    const totalRevenue = adminOrders.filter(o => o.status === 'Hoàn thành').reduce((sum, o) => sum + o.total, 0);
    document.getElementById('stat-revenue').innerText = formatCurrencyAdmin(totalRevenue);
    document.getElementById('stat-orders').innerText = adminOrders.length;
    document.getElementById('stat-customers').innerText = adminCustomers.length;
    document.getElementById('stat-products').innerText = adminProducts.length;

    const ctx = document.getElementById('revenueChart')?.getContext('2d');
    if (!ctx) return;
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
};
// ================= QUẢN LÝ TÀI KHOẢN =================
const loadAdminAccounts = () => {
    const tbody = document.getElementById('admin-account-list');
    if (!tbody) return;
    tbody.innerHTML = adminAccounts.map((acc, i) => {
        const roleBadge = {
            'Admin': '<span class="badge bg-danger px-2 py-1">Admin</span>',
            'Quản lý': '<span class="badge bg-primary px-2 py-1">Quản lý</span>',
            'Nhân viên': '<span class="badge bg-info text-dark px-2 py-1">Nhân viên</span>'
        };
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
            <td>${roleBadge[acc.role] || acc.role}</td>
            <td>${statusBadge}</td>
            <td class="text-muted small">${acc.date}</td>
            <td class="text-center">
                <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width:32px;height:32px;" onclick="editAccountRole(${i})" title="Đổi vai trò"><i class="fas fa-user-cog" style="font-size:0.8rem;"></i></button>
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

    adminAccounts.push({ id: newId, username, fullname, email, phone, role, status: 'Hoạt động', date });

    const modalEl = document.getElementById('addAccountModal');
    const modal = bootstrap.Modal.getInstance(modalEl) || new bootstrap.Modal(modalEl);
    modal.hide();
    document.getElementById('add-account-form').reset();
    loadAdminAccounts();
    alert(`Đã tạo tài khoản "${username}" thành công!`);
};

const editAccountRole = (index) => {
    const acc = adminAccounts[index];
    const roles = ['Admin', 'Quản lý', 'Nhân viên'];
    const currentIdx = roles.indexOf(acc.role);
    const newRole = prompt(`Đổi vai trò cho "${acc.fullname}"\n\nChọn: Admin, Quản lý, Nhân viên`, acc.role);
    if (newRole === null) return;
    if (!roles.includes(newRole)) {
        alert('Vai trò không hợp lệ! Vui lòng chọn: Admin, Quản lý hoặc Nhân viên.');
        return;
    }
    acc.role = newRole;
    loadAdminAccounts();
    alert(`Đã cập nhật vai trò của "${acc.fullname}" thành ${newRole}.`);
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

    loadAdminProducts();
});