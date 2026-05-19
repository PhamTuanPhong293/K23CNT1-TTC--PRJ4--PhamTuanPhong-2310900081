async function loadGoldPrices() {
    try {
        const response = await fetch(`${API_BASE_URL}/bdh/gold/latest`);
        const prices = await response.json();

        let html = "";

        if (!prices || prices.length === 0) {
            html = '<div class="col-12 text-center py-4"><p class="text-muted">Chưa có dữ liệu giá vàng</p></div>';
        } else {
            prices.forEach(item => {
                html += `
                    <div class="col-md-4 mb-4 fade-in">
                        <div class="card border-0 shadow-sm rounded-4 h-100" style="border-left: 4px solid #d4af37 !important;">
                            <div class="card-body p-4">
                                <div class="d-flex align-items-center mb-3">
                                    <div class="bg-warning bg-opacity-10 text-warning rounded-circle d-flex align-items-center justify-content-center me-3"
                                         style="width: 45px; height: 45px;">
                                        <i class="fas fa-coins fs-5"></i>
                                    </div>
                                    <h5 class="fw-bold text-dark mb-0">${item.type}</h5>
                                </div>
                                <div class="row g-2">
                                    <div class="col-6">
                                        <small class="text-muted text-uppercase" style="font-size:0.7rem; letter-spacing:1px;">Giá mua</small>
                                        <div class="fw-bold text-success">${formatMoney(item.buyPrice)}</div>
                                    </div>
                                    <div class="col-6">
                                        <small class="text-muted text-uppercase" style="font-size:0.7rem; letter-spacing:1px;">Giá bán</small>
                                        <div class="fw-bold text-danger">${formatMoney(item.sellPrice)}</div>
                                    </div>
                                </div>
                                <hr class="my-3">
                                <small class="text-muted">
                                    <i class="fas fa-clock me-1"></i>Cập nhật: ${item.updatedAt || 'Hôm nay'}
                                </small>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        const goldList = document.getElementById("gold-list");
        if (goldList) goldList.innerHTML = html;
    } catch (err) {
        const goldList = document.getElementById("gold-list");
        if (goldList) goldList.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Không thể tải dữ liệu giá vàng</p></div>';
    }
}

loadGoldPrices();