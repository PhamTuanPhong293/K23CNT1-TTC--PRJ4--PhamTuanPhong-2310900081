// Render order summary on load
function loadCheckoutSummary() {
    const cart = getCart();
    const summaryEl = document.getElementById("checkout-summary");
    const totalEl = document.getElementById("checkout-total");
    const countEl = document.getElementById("checkout-item-count");

    if (!summaryEl) return;

    if (cart.length === 0) {
        summaryEl.innerHTML = '<p class="text-center text-muted py-3">Giỏ hàng trống</p>';
        if (totalEl) totalEl.innerText = "0 ₫";
        if (countEl) countEl.innerText = "0";
        return;
    }

    let total = 0;
    let html = '<ul class="list-group">';

    cart.forEach(item => {
        const sub = item.price * item.quantityCart;
        total += sub;
        html += `
            <li class="list-group-item d-flex justify-content-between lh-sm py-3 border-0">
                <div>
                    <h6 class="my-0 fw-semibold">${item.name}</h6>
                    <small class="text-muted">SL: ${item.quantityCart}</small>
                </div>
                <span class="text-gold fw-bold">${formatMoney(sub)}</span>
            </li>
        `;
    });

    html += '</ul>';
    summaryEl.innerHTML = html;
    if (totalEl) totalEl.innerText = formatMoney(total);
    if (countEl) countEl.innerText = cart.reduce((s, i) => s + i.quantityCart, 0);
}

async function checkout() {
    const user = getUser();

    if (!user) {
        Swal.fire({
            icon: "warning",
            title: "Vui lòng đăng nhập trước khi đặt hàng"
        });
        return;
    }

    const cartLocal = getCart();

    if (cartLocal.length === 0) {
        Swal.fire({
            icon: "warning",
            title: "Giỏ hàng đang trống"
        });
        return;
    }

    const receiver = document.getElementById("receiver").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!receiver || !phone || !address) {
        Swal.fire({
            icon: "warning",
            title: "Vui lòng điền đầy đủ thông tin giao hàng"
        });
        return;
    }

    const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "COD";

    const total = cartLocal.reduce(
        (sum, item) => sum + item.price * item.quantityCart,
        0
    );

    try {
        const response = await fetch(`${API_BASE_URL}/bdh/orders/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: user.id,
                receiver: receiver,
                phone: phone,
                address: address,
                paymentMethod: paymentMethod,
                total: total,
                cart: cartLocal.map(item => ({
                    id: item.id,
                    price: item.price,
                    quantity: item.quantityCart
                }))
            })
        });

        const data = await response.json();

        if (data.success) {
            saveCart([]);

            Swal.fire({
                icon: "success",
                title: "🎉 Đặt hàng thành công!",
                text: "Cảm ơn bạn đã mua sắm tại G9 Trang Sức. Chúng tôi sẽ liên hệ xác nhận sớm nhất.",
                confirmButtonColor: '#d4af37'
            });

            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            Swal.fire({
                icon: "error",
                title: data.message || "Có lỗi xảy ra"
            });
        }
    } catch (err) {
        Swal.fire({
            icon: "error",
            title: "Có lỗi xảy ra khi đặt hàng"
        });
    }
}

loadCheckoutSummary();