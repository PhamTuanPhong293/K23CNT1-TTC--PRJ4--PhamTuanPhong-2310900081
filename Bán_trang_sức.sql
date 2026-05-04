IF DB_ID('G9_TrangSucDB') IS NOT NULL
BEGIN
    ALTER DATABASE G9_TrangSucDB SET SINGLE_USER WITH ROLLBACK IMMEDIATE;
    DROP DATABASE G9_TrangSucDB;
END
GO

CREATE DATABASE G9_TrangSucDB;
GO

USE G9_TrangSucDB;
GO

CREATE TABLE G9_VaiTro (
    G9_MaVaiTro INT IDENTITY PRIMARY KEY,
    G9_TenVaiTro NVARCHAR(50) UNIQUE NOT NULL
);

CREATE TABLE G9_NguoiDung (
    G9_MaNguoiDung INT IDENTITY PRIMARY KEY,
    G9_HoTen NVARCHAR(150),
    G9_TenDangNhap VARCHAR(50) UNIQUE,
    G9_MatKhau VARCHAR(255),
    G9_Email VARCHAR(100),
    G9_SoDienThoai VARCHAR(15),
    G9_MaVaiTro INT,
    FOREIGN KEY (G9_MaVaiTro) REFERENCES G9_VaiTro(G9_MaVaiTro)
);

CREATE TABLE G9_DanhMuc (
    G9_MaDanhMuc INT IDENTITY PRIMARY KEY,
    G9_TenDanhMuc NVARCHAR(100),
    G9_MaDanhMucCha INT NULL,
    FOREIGN KEY (G9_MaDanhMucCha) REFERENCES G9_DanhMuc(G9_MaDanhMuc)
);

CREATE TABLE G9_SanPham (
    G9_MaSanPham INT IDENTITY PRIMARY KEY,
    G9_TenSanPham NVARCHAR(200),
    G9_MaDanhMuc INT,
    G9_Gia DECIMAL(18,2),
    FOREIGN KEY (G9_MaDanhMuc) REFERENCES G9_DanhMuc(G9_MaDanhMuc)
);

CREATE TABLE G9_GioHang (
    G9_MaGioHang INT IDENTITY PRIMARY KEY,
    G9_MaNguoiDung INT,
    FOREIGN KEY (G9_MaNguoiDung) REFERENCES G9_NguoiDung(G9_MaNguoiDung)
);

CREATE TABLE G9_DonHang (
    G9_MaDonHang INT IDENTITY PRIMARY KEY,
    G9_MaNguoiDung INT,
    G9_TenNguoiNhan NVARCHAR(150),
    G9_SDTNhan VARCHAR(15),
    G9_DiaChiGiao NVARCHAR(255),
    G9_TongTien DECIMAL(18,2),
    FOREIGN KEY (G9_MaNguoiDung) REFERENCES G9_NguoiDung(G9_MaNguoiDung)
);

CREATE TABLE G9_ChiTietDonHang (
    G9_MaChiTiet INT IDENTITY PRIMARY KEY,
    G9_MaDonHang INT,
    G9_MaSanPham INT,
    G9_SoLuong INT,
    G9_DonGia DECIMAL(18,2),
    FOREIGN KEY (G9_MaDonHang) REFERENCES G9_DonHang(G9_MaDonHang),
    FOREIGN KEY (G9_MaSanPham) REFERENCES G9_SanPham(G9_MaSanPham)
);

CREATE TABLE G9_ThanhToan (
    G9_MaThanhToan INT IDENTITY PRIMARY KEY,
    G9_MaDonHang INT,
    G9_PhuongThuc NVARCHAR(50),
    G9_SoTien DECIMAL(18,2),
    G9_TrangThai NVARCHAR(50),
    FOREIGN KEY (G9_MaDonHang) REFERENCES G9_DonHang(G9_MaDonHang)
);


INSERT INTO G9_VaiTro (G9_TenVaiTro)
VALUES (N'Admin'), (N'Khách hàng');

INSERT INTO G9_NguoiDung
(G9_HoTen, G9_TenDangNhap, G9_MatKhau, G9_Email, G9_SoDienThoai, G9_MaVaiTro)
VALUES
(N'Bùi Đức Huy', 'bdhuy', '123456', 'huy@gmail.com', '0900000001', 1),
(N'Nguyễn Ngọc Hiến', 'nnhien', '123456', 'hien@gmail.com', '0900000002', 2),
(N'Vũ Mai Chi', 'vmchi', '123456', 'chi@gmail.com', '0900000003', 2),
(N'Phạm Tuấn Phong', 'ptphong', '123456', 'phong@gmail.com', '0900000004', 2);


INSERT INTO G9_DanhMuc (G9_TenDanhMuc)
VALUES (N'Trang sức');

INSERT INTO G9_DanhMuc (G9_TenDanhMuc, G9_MaDanhMucCha)
VALUES 
(N'Nhẫn', 1),
(N'Dây chuyền', 1);


INSERT INTO G9_SanPham (G9_TenSanPham, G9_MaDanhMuc, G9_Gia)
VALUES
(N'Nhẫn vàng', 2, 5000000),
(N'Nhẫn bạc', 2, 1200000),
(N'Dây chuyền vàng', 3, 7000000);


INSERT INTO G9_GioHang (G9_MaNguoiDung)
VALUES (1), (2), (3), (4);


INSERT INTO G9_DonHang
(G9_MaNguoiDung, G9_TenNguoiNhan, G9_SDTNhan, G9_DiaChiGiao, G9_TongTien)
VALUES
(1, N'Bùi Đức Huy', '0900000001', N'Hà Nội', 5000000),
(2, N'Nguyễn Ngọc Hiến', '0900000002', N'Hà Nội', 1200000),
(3, N'Vũ Mai Chi', '0900000003', N'HCM', 7000000),
(4, N'Phạm Tuấn Phong', '0900000004', N'Đà Nẵng', 5000000);

INSERT INTO G9_ChiTietDonHang
(G9_MaDonHang, G9_MaSanPham, G9_SoLuong, G9_DonGia)
VALUES
(1, 1, 1, 5000000),
(2, 2, 1, 1200000),
(3, 3, 1, 7000000),
(4, 1, 1, 5000000);

INSERT INTO G9_ThanhToan
(G9_MaDonHang, G9_PhuongThuc, G9_SoTien, G9_TrangThai)
VALUES
(1, N'COD', 5000000, N'Chưa thanh toán'),
(2, N'COD', 1200000, N'Chưa thanh toán'),
(3, N'VNPay', 7000000, N'Đã thanh toán'),
(4, N'Momo', 5000000, N'Đã thanh toán');