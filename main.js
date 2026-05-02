// Dữ liệu giả (Mock Data) chuẩn theo DB G9_SanPham mà nhóm đã chốt
const mockProducts = [
    {
        id: 1,
        name: "Nhẫn vàng 18K",
        price: 5000000,
        image: "images/nhan-vang.jpg", // Đổi thành đường dẫn ảnh lưu trên máy
        category: "Nhẫn"
    },
    {
        id: 2,
        name: "Nhẫn bạc đính đá kim cương",
        price: 1200000,
        image: "images/nhan-bac.jpg", // Đổi thành đường dẫn ảnh lưu trên máy
        category: "Nhẫn"
    },
    {
        id: 3,
        name: "Dây chuyền bạch kim nguyên chất",
        price: 7000000,
        image: "images/day-chuyen.jpg", // Đổi thành đường dẫn ảnh lưu trên máy
        category: "Dây chuyền"
    }
];

// Hàm định dạng tiền tệ sang VNĐ (ví dụ: 5.000.000 ₫)
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

// Hàm render sản phẩm ra giao diện HTML
const renderProducts = () => {
    // Tìm phần tử có id="product-list" bên file index.html
    const productList = document.getElementById('product-list');

    // Xóa dòng chữ "Đang tải sản phẩm..." đi
    productList.innerHTML = '';

    // Vòng lặp để tạo HTML cho từng sản phẩm trong mảng mockProducts
    mockProducts.forEach(product => {
        const productCard = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <img src="${product.image}" class="card-img-top rounded" alt="${product.name}" style="height: 250px; object-fit: cover;">
                    <div class="card-body d-flex flex-column mt-2">
                        <span class="badge bg-light text-dark border w-25 mb-2">${product.category}</span>
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text text-danger fw-bold fs-5 mb-4">${formatCurrency(product.price)}</p>
                        <button class="btn btn-dark mt-auto w-100 py-2">
                            <i class="fas fa-cart-plus me-2"></i> Thêm vào giỏ
                        </button>
                    </div>
                </div>
            </div>
        `;
        // Đẩy khối HTML vừa tạo vào danh sách
        productList.innerHTML += productCard;
    });
};

// Đảm bảo giao diện HTML tải xong hết mới bắt đầu chạy hàm render
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});