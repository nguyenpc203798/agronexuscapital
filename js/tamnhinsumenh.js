const contentTamNhin = `
  <p class="mx-auto text-white text-justify">
    Với khát vọng tiên phong cùng chiến lược đầu tư phát triển bền vững, Agronexus Capital định hướng trở thành 
    Tập đoàn Đầu tư Tài chính Xanh hàng đầu khu vực và đưa thương hiệu nông sản Việt Nam vươn tầm quốc tế.
  </p>
`;
const contentSuMenh = `
  <ul class="list-disc list-inside text-white text-justify mb-3">
    <li><strong>Cách mạng hóa ngành nông nghiệp Việt Nam</strong> thông qua đầu tư vào mô hình kinh doanh đột phá, ứng dụng công nghệ cao từ vùng trồng đến chế biến sâu.</li>
    <li><strong>Chống lãng phí tài nguyên, tăng hiệu suất sử dụng đất</strong> dựa trên các giải pháp đầu tư công nghệ cao.</li>
    <li><strong>Tạo dựng nền tảng hỗ trợ các doanh nghiệp tối ưu hóa chi phí</strong> bằng cách đầu tư phát triển hệ thống logistics và kho bãi thông minh.</li>
    <li><strong>Xây dựng các thương hiệu thuộc hệ sinh thái Agronexus đạt tầm vóc quốc tế</strong> để cộng hưởng vào định hướng chiến lược của Đảng và Nhà nước, nâng tầm thương hiệu quốc gia.</li>
    <li><strong>Góp phần hiện thực hóa chủ trương mục tiêu Net Zero 2050 của Việt Nam</strong> qua chiến lược đầu tư xanh và phát triển trung hòa carbon.</li>
  </ul>
`;
const tabContent = document.getElementById("tab-content");
const btnTamNhin = document.getElementById("btnTamNhin");
const btnSuMenh = document.getElementById("btnSuMenh");
function setTabContent(content, activeButton, inactiveButton) {
  tabContent.innerHTML = content;
  activeButton.classList.add("active");
  inactiveButton.classList.remove("active");
}
btnTamNhin.addEventListener("click", function () {
  setTabContent(contentTamNhin, btnTamNhin, btnSuMenh);
});
btnSuMenh.addEventListener("click", function () {
  setTabContent(contentSuMenh, btnSuMenh, btnTamNhin);
});
