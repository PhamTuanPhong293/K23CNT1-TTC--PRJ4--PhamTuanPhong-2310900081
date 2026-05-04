// Dùng chung bộ mock data sản phẩm
let adminProducts = [
    { id: 101, name: "Nhẫn vàng 18K đính Ngọc trai", price: 5000000, image: "images/nhan-vang.jpg", category: "Nhẫn" },
    { id: 102, name: "Nhẫn bạc đính đá Kim cương nhân tạo", price: 1200000, image: "images/nhan-bac.jpg", category: "Nhẫn" },
    { id: 103, name: "Dây chuyền Bạch kim nguyên chất", price: 7000000, image: "images/day-chuyen.jpg", category: "Dây chuyền" }
];

const formatCurrencyAdmin = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// Hàm đổ dữ liệu ra bảng Admin
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
                    <!-- Nút bấm phong cách tối giản -->
                    <button class="btn btn-light btn-sm rounded-circle me-1 text-primary shadow-sm" style="width: 32px; height: 32px;" title="Chỉnh sửa">
                        <i class="fas fa-pen" style="font-size: 0.8rem;"></i>
                    </button>
                    <button class="btn btn-light btn-sm rounded-circle text-danger shadow-sm" style="width: 32px; height: 32px;" title="Xóa" onclick="deleteProduct(${index})">
                        <i class="fas fa-trash" style="font-size: 0.8rem;"></i>
                    </button>
                </td>
            </tr>
        `;
    });
};

const deleteProduct = (index) => {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này khỏi hệ thống?")) {
        adminProducts.splice(index, 1);
        loadAdminProducts();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadAdminProducts();
});