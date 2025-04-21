$(document).ready(function () {
  // Khi hover vào các li khác ngoài Trang chủ
  $(".navbar-collapse .navbar-nav-first li")
    .not("#menu-hover")
    .hover(
      function () {
        $("#menu-hover span").css("width", "0");
      },
      function () {
        // Khi không hover nữa, mở lại span của "Trang chủ"
        if (!$("#menu-hover").is(":hover")) {
          $("#menu-hover span").css("width", "100%"); // Hoặc "w-full" nếu dùng Tailwind
        }
      }
    );

  // Khi hover vào li "Trang chủ"
  $("#menu-hover").hover(function () {
    // Giữ span dưới "Trang chủ" ở trạng thái mở
    $(this).find("span").css("width", "100%");
  });
});
