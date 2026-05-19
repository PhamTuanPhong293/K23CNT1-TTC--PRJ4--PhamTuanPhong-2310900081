function renderFooter() {
    const footerEl = document.getElementById("footer");
    if (!footerEl) return;

    footerEl.innerHTML = `
        <footer class="bg-dark text-white pt-5 pb-3 mt-auto border-top" style="border-color: #d4af37 !important;">
            <div class="container">
                <div class="row g-4">
                    <div class="col-md-4">
                        <h4 class="footer-brand fw-bold mb-3">G9 Trang Sức</h4>
                        <p class="text-secondary fw-light">Mang đến sự hoàn mỹ trong từng đường nét. Website bán trang sức, vàng bạc, đá quý cao cấp uy tín.</p>
                        <div class="d-flex gap-3 mt-3">
                            <a href="#" class="text-secondary"><i class="fab fa-facebook-f fa-lg"></i></a>
                            <a href="#" class="text-secondary"><i class="fab fa-instagram fa-lg"></i></a>
                            <a href="#" class="text-secondary"><i class="fab fa-tiktok fa-lg"></i></a>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <h5 class="mb-3">Liên hệ</h5>
                        <p class="text-secondary mb-2"><i class="fas fa-envelope text-gold me-2"></i>G9trangsuc@gmail.com</p>
                        <p class="text-secondary mb-2"><i class="fas fa-phone text-gold me-2"></i>0988 888 888</p>
                        <p class="text-secondary mb-0"><i class="fas fa-map-marker-alt text-gold me-2"></i>Hà Nội, Việt Nam</p>
                    </div>
                    <div class="col-md-4">
                        <h5 class="mb-3">Liên kết nhanh</h5>
                        <ul class="list-unstyled">
                            <li class="mb-2"><a href="index.html" class="text-secondary text-decoration-none">Trang chủ</a></li>
                            <li class="mb-2"><a href="products.html" class="text-secondary text-decoration-none">Sản phẩm</a></li>
                            <li class="mb-2"><a href="gold-price.html" class="text-secondary text-decoration-none">Giá vàng</a></li>
                            <li class="mb-2"><a href="news.html" class="text-secondary text-decoration-none">Tin tức</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="border-secondary my-4">
                <div class="text-center">
                    <p class="mb-0 text-secondary" style="font-size: 0.85rem;">&copy; 2026 G9_TrangSucDB. Thiết kế bởi Phạm Tuấn Phong.</p>
                </div>
            </div>
        </footer>
    `;
}

renderFooter();