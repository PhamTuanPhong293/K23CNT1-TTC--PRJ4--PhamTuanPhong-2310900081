async function loadNews() {
    try {
        const response = await fetch(`${API_BASE_URL}/bdh/news/`);
        const news = await response.json();

        let html = "";

        if (!news || news.length === 0) {
            html = '<div class="col-12 text-center py-4"><p class="text-muted">Chưa có tin tức nào</p></div>';
        } else {
            news.forEach(item => {
                const imgSrc = item.image
                    ? (item.image.startsWith('http') ? item.image : `assets/img/${item.image}`)
                    : 'https://images.unsplash.com/photo-1515562141589-67f0d569b6c5?w=600&h=350&fit=crop';

                const badgeColor = item.category === 'Xu hướng' ? 'bg-gold' :
                                   item.category === 'Mẹo hay' ? 'bg-dark' :
                                   item.category === 'Bộ sưu tập' ? 'bg-success' : 'bg-info';

                html += `
                    <div class="col-lg-4 col-md-6 fade-in">
                        <div class="card border-0 shadow-sm card-hover h-100 rounded-4 overflow-hidden news-card">
                            <div class="img-wrapper">
                                <img src="${imgSrc}" class="card-img-top product-img" alt="${item.title}"
                                     style="height: 220px; object-fit: cover;"
                                     onerror="this.src='https://images.unsplash.com/photo-1515562141589-67f0d569b6c5?w=600&h=350&fit=crop'">
                            </div>
                            <div class="card-body p-4">
                                <div class="d-flex justify-content-between align-items-center mb-2">
                                    <span class="badge ${badgeColor} rounded-pill px-3">${item.category || 'Tin tức'}</span>
                                    <small class="text-muted">
                                        <i class="far fa-calendar me-1"></i>${item.createdAt || ''}
                                    </small>
                                </div>
                                <h5 class="fw-bold mt-2 product-title-hover">${item.title}</h5>
                                <p class="text-muted small">${item.shortDescription || ''}</p>
                                <a href="news-detail.html?id=${item.id}" class="text-gold text-decoration-none fw-medium small">
                                    Đọc thêm <i class="fas fa-arrow-right ms-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
            });
        }

        const newsList = document.getElementById("news-list");
        if (newsList) newsList.innerHTML = html;
    } catch (err) {
        const newsList = document.getElementById("news-list");
        if (newsList) newsList.innerHTML = '<div class="col-12 text-center py-4"><p class="text-muted">Không thể tải tin tức</p></div>';
    }
}

loadNews();