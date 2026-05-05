// ================= DỮ LIỆU MẪU =================
let adminProducts = [
    { id: 101, name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn" },
    { id: 102, name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn" },
    { id: 103, name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền" }
];

let adminOrders = [
    {
        id: 1, customer: "Bùi Đức Huy", phone: "0900000001", address: "Hà Nội", total: 5000000, status: "Chờ xác nhận",
        items: [{ name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, quantity: 1 }]
    },
    {
        id: 2, customer: "Nguyễn Ngọc Hiến", phone: "0900000002", address: "Hà Nội", total: 1200000, status: "Chờ xác nhận",
        items: [{ name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, quantity: 1 }]
    },
    {
        id: 3, customer: "Vũ Mai Chi", phone: "0900000003", address: "HCM", total: 7000000, status: "Đang giao",
        items: [{ name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, quantity: 1 }]
    },
    {
        id: 4, customer: "Phạm Tuấn Phong", phone: "0900000004", address: "Đà Nẵng", total: 5000000, status: "Hoàn thành",
        items: [{ name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, quantity: 1 }]
    }
];

// Hàm định dạng tiền
const formatCurrencyAdmin = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// ================= LOGIC CHUYỂN TAB =================
const switchTab = (tabName) => {
    document.getElementById('nav-products').classList.remove('active');
    document.getElementById('nav-orders').classList.remove('active');
    document.getElementById(`nav-${tabName}`).classList.add('active');

    if (tabName === 'products') {
        document.getElementById('section-products').classList.remove('d-none');
        document.getElementById('section-orders').classList.add('d-none');
        document.getElementById('page-title').innerText = "Quản lý Sản phẩm";
        document.getElementById('page-subtitle').innerText = "Kiểm soát kho hàng và cập nhật mẫu mã mới.";
        loadAdminProducts();
    } else if (tabName === 'orders') {
        document.getElementById('section-orders').classList.remove('d-none');
        document.getElementById('section-products').classList.add('d-none');
        document.getElementById('page-title').innerText = "Quản lý Đơn hàng";
        document.getElementById('page-subtitle').innerText = "Theo dõi và xử lý trạng thái giao hàng.";
        loadAdminOrders();
    }
};

// ================= RENDER SẢN PHẨM =================
const loadAdminProducts = () => {
    const tbody = document.getElementById('admin-product-list');
    if (!tbody) return;
    tbody.innerHTML = '';
    adminProducts.forEach((product, index) => {
        tbody.innerHTML += `
            <tr>
                <td class="ps-4 text-muted fw-medium" style="font-size: 0.9rem;">#${product.id}</td>
                <td>
                    <div class="d-flex align-items-center">
                        <img src="${product.image}" class="rounded-3 shadow-sm me-3" width="48" height="48" style="object-fit: cover;" onerror="this.src='https://via.placeholder.com/48'">
                        <span class="fw-semibold text-dark">${product.name}</span>
                    </div>
                </td>
                <td><span class="badge bg-light text-dark border px-2 py-1">${product.category}</span></td>
                <td class="text-gold fw-bold">${formatCurrencyAdmin(product.price)}</td>
                <td class="text-center">
                    <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width: 32px; height: 32px;"><i class="fas fa-pen" style="font-size: 0.8rem;"></i></button>
                    <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width: 32px; height: 32px;" onclick="deleteProduct(${index})"><i class="fas fa-trash" style="font-size: 0.8rem;"></i></button>
                </td>
            </tr>
        `;
    });
};

const deleteProduct = (index) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        adminProducts.splice(index, 1);
        loadAdminProducts();
    }
};

const handleAddProduct = (event) => {
    event.preventDefault();
    const name = document.getElementById('productName').value;
    const category = document.getElementById('productCategory').value;
    const price = parseFloat(document.getElementById('productPrice').value);
    const image = document.getElementById('productImage').value;

    const newId = adminProducts.length > 0 ? Math.max(...adminProducts.map(p => p.id)) + 1 : 1;
    adminProducts.push({ id: newId, name: name, category: category, price: price, image: image });

    const modalElement = document.getElementById('addProductModal');
    const modal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    modal.hide();

    document.getElementById('add-product-form').reset();
    loadAdminProducts();
    alert("Đã thêm sản phẩm thành công!");
};

// ================= RENDER ĐƠN HÀNG =================
const loadAdminOrders = () => {
    const tbody = document.getElementById('admin-order-list');
    if (!tbody) return;
    tbody.innerHTML = '';
    adminOrders.forEach((order, index) => {
        let bgClass = "bg-warning text-dark";
        if (order.status === "Đang giao") bgClass = "bg-primary text-white";
        if (order.status === "Hoàn thành") bgClass = "bg-success text-white";
        if (order.status === "Đã hủy") bgClass = "bg-danger text-white";

        tbody.innerHTML += `
            <tr>
                <td class="ps-4 text-muted fw-bold">#DH${order.id}</td>
                <td class="fw-semibold">${order.customer}</td>
                <td>
                    <div class="small">${order.phone}</div>
                    <div class="text-muted small">${order.address}</div>
                </td>
                <td class="text-danger fw-bold">${formatCurrencyAdmin(order.total)}</td>
                <td>
                    <select class="form-select form-select-sm status-select ${bgClass} border-0" onchange="updateOrderStatus(${index}, this.value)">
                        <option value="Chờ xác nhận" ${order.status === 'Chờ xác nhận' ? 'selected' : ''} class="bg-white text-dark">Chờ xác nhận</option>
                        <option value="Đang giao" ${order.status === 'Đang giao' ? 'selected' : ''} class="bg-white text-dark">Đang giao</option>
                        <option value="Hoàn thành" ${order.status === 'Hoàn thành' ? 'selected' : ''} class="bg-white text-dark">Hoàn thành</option>
                        <option value="Đã hủy" ${order.status === 'Đã hủy' ? 'selected' : ''} class="bg-white text-dark">Đã hủy</option>
                    </select>
                </td>
                <td class="text-center">
                    <!-- Nút xem chi tiết gắn hàm viewOrderDetails -->
                    <button class="btn btn-light btn-sm rounded shadow-sm text-secondary" onclick="viewOrderDetails(${index})">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    });
};

const updateOrderStatus = (index, newStatus) => {
    adminOrders[index].status = newStatus;
    loadAdminOrders();
};

// ================= XEM CHI TIẾT ĐƠN HÀNG =================
// Đổi thành function tiêu chuẩn để đảm bảo HTML gọi được dễ dàng
function viewOrderDetails(index) {
    const order = adminOrders[index];

    document.getElementById('detail-order-id').innerText = `#DH${order.id}`;
    document.getElementById('detail-customer').innerText = order.customer;
    document.getElementById('detail-phone').innerText = order.phone;
    document.getElementById('detail-address').innerText = order.address;
    document.getElementById('detail-total').innerText = formatCurrencyAdmin(order.total);

    const statusBadge = document.getElementById('detail-status');
    statusBadge.innerText = order.status;
    statusBadge.className = 'badge fs-6 mt-2 ';
    if (order.status === "Chờ xác nhận") statusBadge.classList.add('bg-warning', 'text-dark');
    if (order.status === "Đang giao") statusBadge.classList.add('bg-primary', 'text-white');
    if (order.status === "Hoàn thành") statusBadge.classList.add('bg-success', 'text-white');
    if (order.status === "Đã hủy") statusBadge.classList.add('bg-danger', 'text-white');

    const productList = document.getElementById('detail-product-list');
    productList.innerHTML = '';
    order.items.forEach(item => {
        productList.innerHTML += `
            <tr>
                <td class="fw-semibold text-dark">${item.name}</td>
                <td class="text-muted">${formatCurrencyAdmin(item.price)}</td>
                <td class="text-center">${item.quantity}</td>
                <td class="text-danger fw-bold text-end">${formatCurrencyAdmin(item.price * item.quantity)}</td>
            </tr>
        `;
    });

    const modalElement = document.getElementById('orderDetailModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Khởi chạy
document.addEventListener('DOMContentLoaded', () => {
    loadAdminProducts();
});