const mockProducts = [
    {
        id: 1,
        name: "Nhẫn vàng 18K",
        price: 5000000,
        image: "images/nhan-vang.jpg",
        category: "Nhẫn"
    },
    {
        id: 2,
        name: "Nhẫn bạc đính đá kim cương",
        price: 1200000,
        image: "images/nhan-bac.jpg",
        category: "Nhẫn"
    },
    {
        id: 3,
        name: "Dây chuyền bạch kim nguyên chất",
        price: 7000000,
        image: "images/day-chuyen.jpg",
        category: "Dây chuyền"
    }
];

const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
};

const renderProducts = () => {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    mockProducts.forEach(product => {
        const productCard = `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-0 card-hover bg-white shadow-sm">
                    <div class="img-wrapper">
                        <!-- Thêm class product-img để tạo hiệu ứng zoom -->
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.name}" style="height: 320px; object-fit: cover;">
                    </div>
                    <!-- Căn giữa nội dung, thêm khoảng padding -->
                    <div class="card-body d-flex flex-column text-center p-4">
                        <span class="text-uppercase text-muted fw-semibold mb-2" style="font-size: 0.75rem; letter-spacing: 2px;">${product.category}</span>
                        <h5 class="card-title fw-bold text-dark mb-3">${product.name}</h5>
                        <!-- Sử dụng text-gold cho giá tiền -->
                        <p class="card-text text-gold fw-bold fs-5 mb-4">${formatCurrency(product.price)}</p>
                        <!-- Nút bấm bo tròn -->
                        <button class="btn bg-gold mt-auto w-100 py-2 rounded-pill shadow-sm">
                            <i class="fas fa-shopping-bag me-2"></i> Thêm vào giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});