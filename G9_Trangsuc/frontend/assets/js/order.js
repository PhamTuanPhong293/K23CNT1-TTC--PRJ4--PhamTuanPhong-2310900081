async function loadMyOrders() {
    const user = getUser();

    if (!user) {
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/bdh/orders/user/${user.id}`);
        const orders = await response.json();

        const orderList = document.getElementById("order-list");
        if (!orderList) return;

        if (!orders || orders.length === 0) {
            orderList.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center py-5 text-muted">
                        <i class="fas fa-box-open fa-3x mb-3 d-block text-gold"></i>
                        <h5>Chưa có đơn hàng nào</h5>
                        <a href="products.html" class="text-gold text-decoration-none">
                            <i class="fas fa-gem me-1"></i> Mua sắm ngay!
                        </a>
                    </td>
                </tr>`;
            return;
        }

        let html = "";

        orders.forEach(order => {
            const statusClass =
                order.status === 'Đã giao' ? 'bg-success' :
                order.status === 'Đang giao' ? 'bg-primary' :
                order.status === 'Đã hủy' ? 'bg-danger' : 'bg-warning text-dark';

            html += `
                <tr>
                    <td class="fw-semibold text-gold">#${order.id}</td>
                    <td>${order.createdAt || ''}</td>
                    <td class="fw-bold">${formatMoney(order.total)}</td>
                    <td>
                        <span class="badge ${statusClass} rounded-pill px-3 py-2">${order.status}</span>
                    </td>
                    <td class="text-center">
                        <a href="order-detail.html?id=${order.id}" class="btn btn-outline-dark btn-sm rounded-pill px-3">
                            <i class="fas fa-eye me-1"></i>Xem
                        </a>
                    </td>
                </tr>
            `;
        });

        orderList.innerHTML = html;
    } catch (err) {
        const orderList = document.getElementById("order-list");
        if (orderList) {
            orderList.innerHTML = `
                <tr>
                    <td colspan="5" class="text-center py-4 text-muted">Không thể tải đơn hàng</td>
                </tr>`;
        }
    }
}

loadMyOrders();