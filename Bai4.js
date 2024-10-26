
// Định nghĩa lớp Product
class Product {
    // Khởi tạo constructor
    constructor(maKhachHang, tenKhachHang, soDienThoai, diaChi, email) {
        this.maKhachHang = maKhachHang;
        this.tenKhachHang = tenKhachHang;
        this.soDienThoai = soDienThoai;
        this.diaChi = diaChi;
        this.email = email;
    }
}

// Tạo mảng lưu trữ các khách hàng
let productsCard = [];

// Hiển thị khách hàng
function display(productsCard) {
    let result = "<table border='1' >";
    result += "<tr><th>Mã khách hàng</th><th>Tên khách hàng</th><th>Số điện thoại</th><th>Địa chỉ</th><th>Email</th></tr>";
    for (let i = 0; i < productsCard.length; i++) {
        result += "<tr>";
        result += `<td>${productsCard[i].maKhachHang}</td>`;
        result += `<td>${productsCard[i].tenKhachHang}</td>`;
        result += `<td>${productsCard[i].soDienThoai}</td>`;
        result += `<td>${productsCard[i].diaChi}</td>`;
        result += `<td>${productsCard[i].email}</td>`;
        result += "</tr>";
    }
    result += "</table>";
    document.getElementById("result").innerHTML = result;
}

// Thêm khách hàng vào mảng
document.getElementById("add").addEventListener("click", function () {
    // Lấy dữ liệu từ các ô nhập vào
    let maKhachHang = document.getElementById("maKhachHang").value;
    let tenKhachHang = document.getElementById("tenKhachHang").value;
    let soDienThoai = document.getElementById("soDienThoai").value;
    let diaChi = document.getElementById("diaChi").value;
    let email = document.getElementById("email").value;

    // Kiểm tra dữ liệu đầu vào
    if (maKhachHang && tenKhachHang && soDienThoai && diaChi && email) {
        let newProduct = new Product(maKhachHang, tenKhachHang, soDienThoai, diaChi, email);
        productsCard.push(newProduct);

        // Hiển thị lại danh sách khách hàng
        display(productsCard);

        // Thông báo cho người dùng
        alert("Thêm khách hàng thành công");
        // Xóa các ô nhập liệu sau khi thêm khách hàng
        document.getElementById("maKhachHang").value = "";
        document.getElementById("tenKhachHang").value = "";
        document.getElementById("soDienThoai").value = "";
        document.getElementById("diaChi").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Vui lòng nhập đủ thông tin khách hàng");
    }
});
// Hiển thị khách hàng ban đầu (nếu có)
display(productsCard);
