// news-module.js – quản lý tin tức + phân trang (mỗi trang 2 bài)
// --------------------------------------------------------------
// 1. DATA LAYER ------------------------------------------------
const NEWS = [
  {
    id: 1,
    date: "10/04/2025",
    source: "Yên Bái online",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title: "Điện mặt trời mái nhà góp phần bảo đảm an ninh năng lượng",
    content:
      " Trước diễn biến thời tiết cực đoan xuất hiện ngày càng nhiều, nhu cầu phụ tải tăng cao và nguồn cung ứng điện mới còn hạn chế… Do vậy, tỉnh Yên Bái tập trung tuyên truyền, khuyến khích người dân và doanh nghiệp lắp đặt, sử dụng điện mặt trời mái nhà không chỉ là giải pháp tiết kiệm chi phí điện năng mà còn là bước đi quan trọng hướng tới phát triển bền vững, bảo vệ môi trường và đảm bảo an ninh năng lượng.",
    image: "../images/tintuc/nl/nl1.jpg",
    featured: true,
    author: "Đức Toàn",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 2,
    date: "12/04/2025",
    source: "Tạp chí công thương điện tử",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title:
      "Quy hoạch điện VIII điều chỉnh: Định hình rõ nét cơ cấu nguồn điện, năng lượng tái tạo vẫn là điểm nhấn",
    content:
      "Tại Quy hoạch điện VIII điều chỉnh vừa được Thủ tướng Chính phủ phê duyệt tại Quyết định số 768/QĐ-TTg ngày 15/4/2025, nguồn điện từ năng lượng tái tạo tiếp tục được xác định phát triển tối đa, gia tăng tỷ trọng trong cơ cấu nguồn điện và điện năng sản xuất.",
    image: "../images/tintuc/nl/nl2.jpg",
    featured: false,
    author: "Thy Thảo",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 3,
    date: "11/04/2025",
    source: "Đầu tư chứng khoán",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title: "Chính phủ phê duyệt Điều chỉnh Quy hoạch Điện VIII: Đến năm 2050, tỷ lệ năng lượng tái tạo lên đến 74 - 75%",
    content:
      "(ĐTCK) Quy hoạch này được điều chỉnh nhằm đảm bảo mục tiêu tăng trưởng kinh tế năm 2025 trên 8% và phấn đấu đạt mức hai con số vào giai đoạn 2026 – 2030.",
    image: "../images/tintuc/nl/nl3.jpg",
    featured: false,
    author: "Minh Minh - Kiều Trang",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 4,
    date: "11/04/2025",
    source: "Đầu tư chứng khoán",
    categoryid: "khoangsan",
    categoryname: "Khoáng sản",
    title: "CTCP Cơ khí và Khoáng sản Hà Giang (HGM) vừa công bố báo cáo tài chính quý I/2025 với kết quả kinh doanh vượt xa kỳ vọng.",
    content:
      "Tổng doanh thu thuần trong ba tháng đầu năm đạt 154 tỷ đồng, gần gấp ba lần so với cùng kỳ năm trước. Điểm sáng lớn nhất đến từ việc xuất khẩu kim loại Antimon, khi doanh thu từ hoạt động này tăng mạnh tới gần 250%.",
    image: "../images/tintuc/ks/ks1.jpg",
    featured: false,
    author: "Mai Trang",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 5,
    date: "10/04/2025",
    source: "VnEconomy",
    categoryid: "khoangsan",
    categoryname: "Khoáng sản",
    title:
      "Về một số vấn đề trên thị trường than trong nước - dư luận và thực tế",
    content:
      "Thời gian gần đây, dư luận báo chí và xã hội quan tâm nhiều vấn đề về thị trường than trong nước trong việc đảm bảo cung ứng than cho nền kinh tế quốc dân trước áp lực nhu cầu sử dụng than ngày càng tăng cao. Đó là các vấn đề: cung ứng than cho các nhà máy nhiệt điện than, cạnh tranh, nhập khẩu than, tồn kho than và hiệu quả kinh tế của việc khai thác, nhập khẩu và cung ứng than. Để rộng đường dư luận, trong phạm vi bài này sẽ tìm hiểu và phản ánh thực tế của một số vấn đề nêu trên.",
    image: "../images/tintuc/ks/ks2.jpg",
    featured: false,
    author: "Nguyễn Thuấn",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 6,
    date: "12/04/2025",
    source: "Tạp chí Công Thương",
    categoryid: "khoangsan",
    categoryname: "Khoáng sản",
    title: "Khoáng sản Bình Dương (KSB): Dự chi hơn 4.200 tỷ đồng mở rộng KCN Đất Cuốc",
    content:
      "Công ty Cổ phần Khoáng sản và Xây dựng Bình Dương (Khoáng sản Bình Dương, mã cổ phiếu KSB) đã thông qua chủ trương thực hiện mở rộng Khu công nghiệp Đất Cuốc, tỉnh Bình Dương.",
    image: "../images/tintuc/ks/ks3.jpg",
    featured: false,
    author: "Duy Quang",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 7,
    date: "13/04/2025",
    source: "Vietstock",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Áp dụng công nghệ cao trong nuôi trồng thủy sản để tăng năng suất và chất lượng",
    content:
      "Nuôi trồng thủy sản công nghệ cao là một trong những hướng đi mới của ngành thủy sản Việt Nam, nhằm tăng năng suất, chất lượng và giá trị gia tăng cho sản phẩm. Nuôi trồng thủy sản công nghệ cao có nhiều ưu điểm như: giảm thiểu rủi ro do biến đổi khí hậu, tận dụng hiệu quả nguồn lực, tiết kiệm chi phí, nâng cao hiệu quả kinh tế và bảo vệ môi trường. ",
    image: "../images/tintuc/ts/ts1.jpg",
    featured: false,
    author: "Vietstock",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 8,
    date: "14/04/2025",
    source: "Báo Nhân Dân",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Ứng dụng công nghệ cao trong nuôi trồng thủy sản",
    content:
      "Nông nghiệp ứng dụng công nghệ cao, nhất là nuôi trồng thủy sản đang được nhiều địa phương tập trung thực hiện, tạo nên vòng nuôi tuần hoàn khép kín, góp phần nâng cao hiệu quả kinh tế, hạn chế ô nhiễm môi trường.",
    image: "../images/tintuc/ts/ts2.jpg",
    featured: false,
    author: "Minh Tuấn",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 9,
    date: "15/04/2025",
    source: "Báo điện tử chính phủ",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Hiệu quả kinh tế từ phát triển thủy sản theo hướng công nghệ cao",
    content:
      "Việc phát triển các mô hình thủy sản theo ứng dụng công nghệ cao, công nghệ vi sinh… đã nâng cao chất lượng cá thương phẩm cũng như môi trường nước, đồng thời mang lại hiệu quả kinh tế cao cho người chăn nuôi.",
    image: "../images/tintuc/ts/ts3.jpg",
    featured: false,
    author: "Thiện Tâm",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 11,
    date: "22/04/2025",
    source: "Tạp chí điện tử Mekong Asean",
    categoryid: "nongnghiep",
    categoryname: "Nông nghiệp",
    title: "TTC AgriS bắt tay Sungai Budi phát triển chuỗi giá trị nông nghiệp công nghệ cao ASEAN",
    content:
      "TTC AgriS (HoSE: SBT) và Tập đoàn Sungai Budi ký kết triển khai hợp tác chiến lược, phát triển mô hình nông nghiệp tuần hoàn công nghệ cao giữa Việt Nam và Indonesia.",
    image: "../images/tintuc/nn/nn1.jpg",
    featured: false,
    author: "Mộc Lam",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 12,
    date: "18/04/2025",
    source: "Thời báo ngân hàng",
    categoryid: "nongnghiep",
    categoryname: "Nông nghiệp",
    title: "TP. Hồ Chí Minh đẩy mạnh phát triển nông nghiệp công nghệ cao",
    content:"UBND TP. Hồ Chí Minh vừa triển khai kế hoạch phát triển cây giống con giống và đẩy mạnh phát triển nông nghiệp công nghệ cao năm 2025.",
    image: "../images/tintuc/nn/nn2.jpg",
    featured: false,
    author: "Ngọc Hậu",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 13,
    date: "19/04/2025",
    source: "VN Business",
    categoryid: "nongnghiep",
    categoryname: "Nông nghiệp",
    title: "Ở một vùng đất tại xứ Nghệ, nông dân ùn ùn vào HTX liên kết làm nông nghiệp công nghệ cao để giàu lên",
    content:
      "Thị xã Thái Hòa, nằm ở phía Tây Bắc tỉnh Nghệ An, không chỉ được biết đến là trung tâm kinh tế năng động mà còn là địa phương tiên phong trong việc chuyển đổi số, ứng dụng công nghệ cao vào sản xuất nông nghiệp, nâng cao giá trị sản phẩm và thu nhập cho người dân.​",
    image: "../images/tintuc/nn/nn3.jpg",
    featured: false,
    author: "Nam Phong",
    slug: "trienlamnongnghiepthongminh",
  },
];

// --------------------------------------------------------------
// 2. STATE LAYER ----------------------------------------------
const state = {
  featuredIndex: NEWS.findIndex((n) => n.featured) || 0,
  rotationTimer: null,
  rotationInterval: 5000,
  category: "tatca", // id button lọc
  search: "",
  sort: "desc", // asc|desc
  pageSize: 4,
  currentPage: 1,
};

// --------------------------------------------------------------
// 3. VIEW LAYER ------------------------------------------------
const View = {
  /* Helpers */
  parseDate(str) {
    const [d, m, y] = str.split("/").map(Number);
    return new Date(y, m - 1, d);
  },

  /* Featured block */
  featured(news) {
    return `<div class="featuredNewsBig col-lg-6 wow fadeIn" data-wow-duration="2s">
      <div class="left-image"><a href="/${news.slug}"><img src="${news.image}" alt="${news.title}"/></a>
        <div class="info"><div class="inner-content"><ul>
          <li><i class="fa fa-calendar"></i> ${news.date}</li>
          <li><i class="fa fa-users"></i> ${news.source}</li>
          <li><i class="fa fa-folder"></i> ${news.categoryname}</li></ul>
          <a href="/${news.slug}"><h4>${news.title}</h4></a>
          <p class="mb-4 text-justify line-clamp-4">${news.content}</p></div></div></div></div>`;
  },

  listTop(list) {
    const items = list
      .map(
        (n) => `<li class="flex flex-col lg:flex-row h-[unset] lg:h-[17rem]">
          <div class="left-content w-[60%]"><span><i class="fa fa-calendar"></i> ${n.date}</span>
            <a href="/${n.slug}"><h4 class="text-justify">${n.title}</h4></a>
            <p class="text-justify truncate">${n.content}</p></div>
          <div class="right-image"><a href="#"><img src="${n.image}" alt="${n.title}"/></a></div></li>`
      )
      .join("");
    return `<div class="col-lg-6"><div class="right-list"><ul>${items}</ul></div></div>`;
  },

  listBottom(list) {
    if (!list.length)
      return `<p class="text-center text-gray-500">Không có bài viết phù hợp.</p>`;
    return list
      .map(
        (n) => `
          <a href="/${n.slug}" class="block mb-12">
          <div class="flex flex-col md:flex-row space-x-8 wow fadeIn" data-wow-duration="2s">
          <img src="${n.image}" alt="${n.title}" class="w-full md:w-[34%] h-[30rem] md:h-[17rem] rounded-[2rem] object-cover flex-shrink-0 mb-8 md:mb-0"/>
          <div><div><h3 class="text-gray-900 font-semibold text-base leading-tight mb-8 hover:text-[#1e6c39] transition duration-500">${n.title}</h3>
            <p class="text-gray-700 leading-relaxed text-justify line-clamp-3">${n.content}</p></div>
            <div class="text-gray-600 mt-3 flex space-x-2"><span>${n.author}</span><span>•</span><span>${n.date}</span></div></div></div>
          </a>
          `
      )
      .join("");
  },

  pagination(total, current) {
    const totalPages = Math.ceil(total / state.pageSize);
    if (totalPages <= 1) return "";
    let pages = "";
    for (let i = 1; i <= totalPages; i++) {
      const active =
        i === current
          ? "active bg-[#364a3d] text-white"
          : "hover:bg-[#364a3d] hover:text-white";
      pages += `<button data-page="${i}" class="page-btn w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-gray-300 ${active} transition duration-500">${i}</button>`;
    }
    return `
      <button data-prev class="w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-gray-300 text-gray-800 hover:bg-[#364a3d] hover:text-white transition duration-500"><i class="fi fi-rr-angle-left"></i></button>
      ${pages}
      <button data-next class="w-[4rem] h-[4rem] flex justify-center items-center rounded-full border border-gray-300 text-gray-800 hover:bg-[#364a3d] hover:text-white transition duration-500"><i class="fi fi-rr-angle-right"></i></button>`;
  },
};

// --------------------------------------------------------------
// 4. CONTROLLER LAYER (Featured) -------------------------------
const Rotator = (function ($) {
  let $el;
  function render() {
    const featured = NEWS[state.featuredIndex];
    const others = NEWS.filter((_, idx) => idx !== state.featuredIndex).slice(
      0,
      3
    );
    $el.html(View.featured(featured) + View.listTop(others));
  }
  function next() {
    state.featuredIndex = (state.featuredIndex + 1) % NEWS.length;
    render();
  }
  return {
    init(sel) {
      $el = $(sel);
      render();
      $el.on("mouseenter", ".featuredNewsBig", () =>
        clearInterval(state.rotationTimer)
      );
      $el.on(
        "mouseleave",
        ".featuredNewsBig",
        () => (state.rotationTimer = setInterval(next, state.rotationInterval))
      );
      state.rotationTimer = setInterval(next, state.rotationInterval);
    },
  };
})(jQuery);

// --------------------------------------------------------------
// 5. CONTROLLER LAYER (List + Pagination) ----------------------
const ListManager = (function ($) {
  const $list = $("#ListNews");
  const $search = $("#search-news");
  const $sort = $("#sortnewslist");
  const $buttons = $(".loctintuc button");
  const $paging = $("#PaginationNews");

  function filterData() {
    return NEWS.filter((n) => {
      const catCheck =
        state.category === "tatca" || n.categoryid === state.category;
      const keyword = state.search.toLowerCase();
      const searchCheck =
        !keyword ||
        n.title.toLowerCase().includes(keyword) ||
        n.content.toLowerCase().includes(keyword);
      return catCheck && searchCheck;
    });
  }

  function sortData(list) {
    return list.sort((a, b) => {
      const d1 = View.parseDate(a.date);
      const d2 = View.parseDate(b.date);
      return state.sort === "desc" ? d2 - d1 : d1 - d2;
    });
  }

  function paginate(list) {
    const start = (state.currentPage - 1) * state.pageSize;
    return list.slice(start, start + state.pageSize);
  }

  function render() {
    const filtered = sortData(filterData());
    const paged = paginate(filtered);
    $list.html(View.listBottom(paged));
    $paging.html(View.pagination(filtered.length, state.currentPage));
  }

  function bindEvents() {
    $buttons.on("click", function () {
      state.category = this.id === "tatca" ? "tatca" : this.id;
      state.currentPage = 1; // reset page
      $buttons.removeClass("active bg-[#364a3d] text-white");
      $(this).addClass("active bg-[#364a3d] text-white");
      render();
    });

    $search.on("input", function () {
      state.search = this.value.trim();
      state.currentPage = 1;
      render();
    });

    $sort.on("change", function () {
      state.sort = this.value;
      render();
    });

    // pagination
    $paging.on("click", "button", function () {
      if ($(this).is("[data-prev]")) {
        if (state.currentPage > 1) state.currentPage--;
      } else if ($(this).is("[data-next]")) {
        const totalPages = Math.ceil(filterData().length / state.pageSize);
        if (state.currentPage < totalPages) state.currentPage++;
      } else if ($(this).hasClass("page-btn")) {
        state.currentPage = Number($(this).data("page"));
      }
      render();
    });
  }

  return {
    init() {
      bindEvents();
      render();
    },
  };
})(jQuery);

// --------------------------------------------------------------
// 6. BOOTSTRAP -------------------------------------------------
$(document).ready(function () {
  Rotator.init("#FeaturedNews");
  ListManager.init();
});
