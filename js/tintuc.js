// news-module.js – quản lý tin tức + phân trang (mỗi trang 2 bài)
// --------------------------------------------------------------
// 1. DATA LAYER -------------------------------------------------
const NEWS = [
  {
    id: 1,
    date: "13/04/2025",
    source: "Báo tuổi trẻ",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title: "Việt Nam quyết tâm thực hiện cam kết Net Zero vào 2050",
    content:
      "Việt Nam đã triển khai nhiều hành động và sáng kiến cụ thể để thực hiện cam kết đạt mức phát thải ròng bằng 0 vào năm 2050, như đã được Thủ tướng Phạm Minh Chính công bố tại COP26.",
    image: "../images/tintuc/thongbao.jpg",
    featured: true,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 2,
    date: "12/04/2025",
    source: "Báo Nông nghiệp",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title:
      "Nông nghiệp công nghệ cao – Động lực mới cho nông sản Việt Nam vươn xa",
    content:
      "Việt Nam có hơn 1.000 mô hình nông nghiệp công nghệ cao ... Việt Nam có hơn 1.000 mô hình nông nghiệp công nghệ cao ...Việt Nam có hơn 1.000 mô hình nông nghiệp công nghệ cao ...",
    image: "../images/tintuc/kechuyen.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 3,
    date: "11/04/2025",
    source: "Kinh tế & Dự báo",
    categoryid: "khoangsan",
    categoryname: "Khoáng sản",
    title: "Đẩy mạnh phát triển tài chính xanh ở Việt Nam",
    content:
      "Tài chính xanh là kênh huy động nguồn vốn dài hạn ...Tài chính xanh là kênh huy động nguồn vốn dài hạn ...Tài chính xanh là kênh huy động nguồn vốn dài hạn ...",
    image: "../images/tintuc/loisax.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 4,
    date: "11/04/2025",
    source: "Báo Năng lượng",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Năng lượng tái tạo – Hướng đi bền vững cho tương lai Việt Nam",
    content:
      "Việt Nam đặt mục tiêu đạt 6.000 MW điện gió vào năm 2030 ...Việt Nam đặt mục tiêu đạt 6.000 MW điện gió vào năm 2030 ...Việt Nam đặt mục tiêu đạt 6.000 MW điện gió vào năm 2030 ...",
    image: "../images/tintuc/vanhoa.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 5,
    date: "10/04/2025",
    source: "Báo Khoáng sản",
    categoryid: "khoangsan",
    categoryname: "Khoáng sản",
    title:
      "Về một số vấn đề trên thị trường than trong nước - dư luận và thực tế",
    content:
      "Thời gian gần đây, dư luận báo chí và xã hội quan tâm nhiều vấn đề về thị trường than trong nước trong việc đảm bảo cung ứng than cho nền kinh tế quốc dân trước áp lực nhu cầu sử dụng than ngày càng tăng cao. Đó là các vấn đề: cung ứng than cho các nhà máy nhiệt điện than, cạnh tranh, nhập khẩu than, tồn kho than và hiệu quả kinh tế của việc khai thác, nhập khẩu và cung ứng than. Để rộng đường dư luận, trong phạm vi bài này sẽ tìm hiểu và phản ánh thực tế của một số vấn đề nêu trên.",
    image: "../images/tintuc/vanhoa.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 6,
    date: "12/04/2025",
    source: "Báo thủy sản",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Những mô hình nuôi thủy sản ứng dụng công nghệ cao theo hướng tuần hoàn khép kín",
    content:
      "Nông nghiệp ứng dụng công nghệ cao, nhất là nuôi trồng thủy sản - một trong những lĩnh vực đang được tỉnh tập trung thực hiện trong phát triển kinh tế - xã hội địa phương. Từ đó, ngày càng có nhiều doanh nghiệp, hộ nuôi trồng thủy sản chú trọng ứng dụng những thành tựu khoa học - công nghệ tiên tiến vào sản xuất, tạo nên vòng nuôi tuần hoàn khép kín, vừa nâng cao hiệu quả kinh tế vừa hạn chế ô nhiễm môi trường.",
    image: "../images/tintuc/vanhoa.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 7,
    date: "13/04/2025",
    source: "Báo Năng lượng2",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Ứng dụng công nghệ cao trong nuôi trồng thủy sản",
    content:
      "Theo thống kê, ngành chế biến thủy sản của nước ta hiện có gần 600 cơ sở chế biến quy mô công nghiệp với tổng công suất thiết kế gần 2,8 triệu tấn sản phẩm/năm, chiếm 8-11% tổng giá trị kim ngạch cả nước. Trình độ công nghệ chế biến và bảo đảm vệ sinh an toàn thực phẩm thủy sản Việt Nam được nâng cao. Tỷ trọng sản phẩm sơ chế chiếm 51%; sản phẩm làm sẵn chiếm 36%; sản phẩm ăn liền chiếm 13%. Các trang thiết bị máy móc hiện đại, giúp nâng cao năng suất, bảo đảm chất lượng. ",
    image: "../images/tintuc/chitiet/ts2.webp",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 8,
    date: "14/04/2025",
    source: "Báo thủy sản",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Bứt phá năng suất với công nghệ nuôi trồng thủy sản tiên tiến",
    content:
      "Công nghệ nuôi trồng thủy sản đang đóng một vai trò quan trọng trong việc định hình ngành thủy sản hiện đại. Sự kết hợp giữa khoa học và công nghệ tiên tiến đã tạo ra những phương pháp nuôi trồng mới, giúp tăng cường năng suất và chất lượng sản phẩm thủy sản. Các hệ thống nuôi tuần hoàn khép kín, ví dụ, giúp giảm thiểu ô nhiễm môi trường và tăng hiệu quả kinh tế.",
    image: "../images/tintuc/chitiet/thuysan4.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 9,
    date: "15/04/2025",
    source: "Báo Năng lượng",
    categoryid: "nangluong",
    categoryname: "Năng lượng",
    title: "Điện gió, điện mặt trời được phê duyệt công suất mở rộng ra sao?",
    content:
      "Phó thủ tướng Bùi Thanh Sơn vừa ký quyết định số 768 ngày 15-4 của Thủ tướng Chính phủ phê duyệt điều chỉnh Quy hoạch phát triển điện lực quốc gia kỳ 2021 - 2030, tầm nhìn đến năm 2050 (Quy hoạch điện VIII).",
    image: "../images/tintuc/chitiet/nl1.webp",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 10,
    date: "16/04/2025",
    source: "Báo Năng lượng2",
    categoryid: "noibo",
    categoryname: "Năng lượng",
    title: "Các ông lớn FDI sắp lắp điện mặt trời ở nhà xưởng, sản lượng điện tái tạo sẽ tăng",
    content:
      "Các doanh nghiệp FDI lớn như Samsung, các nhà máy trong Khu công nghiệp Đông Nam tiếp tục lắp đặt hệ thống trên mái nhà xưởng, sản lượng điện mặt trời ở TP.HCM sẽ tăng.",
    image: "../images/tintuc/chitiet/nl2.webp",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 11,
    date: "17/04/2025",
    source: "Báo Năng lượng2",
    categoryid: "khoangsan",
    categoryname: "Năng lượng",
    title: "Những mô hình nuôi thủy sản ứng dụng công nghệ cao theo hướng tuần hoàn khép kín",
    content:
      "Nông nghiệp ứng dụng công nghệ cao, nhất là nuôi trồng thủy sản - một trong những lĩnh vực đang được tỉnh tập trung thực hiện trong phát triển kinh tế - xã hội địa phương. Từ đó, ngày càng có nhiều doanh nghiệp, hộ nuôi trồng thủy sản chú trọng ứng dụng những thành tựu khoa học - công nghệ tiên tiến vào sản xuất, tạo nên vòng nuôi tuần hoàn khép kín, vừa nâng cao hiệu quả kinh tế vừa hạn chế ô nhiễm môi trường.",
    image: "../images/tintuc/chitiet/thuysan4.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 12,
    date: "18/04/2025",
    source: "Báo Năng lượng2",
    categoryid: "thuysan",
    categoryname: "Thủy sản",
    title: "Những mô hình nuôi thủy sản ứng dụng công nghệ cao theo hướng tuần hoàn khép kín",
    content:
      "Nông nghiệp ứng dụng công nghệ cao, nhất là nuôi trồng thủy sản - một trong những lĩnh vực đang được tỉnh tập trung thực hiện trong phát triển kinh tế - xã hội địa phương. Từ đó, ngày càng có nhiều doanh nghiệp, hộ nuôi trồng thủy sản chú trọng ứng dụng những thành tựu khoa học - công nghệ tiên tiến vào sản xuất, tạo nên vòng nuôi tuần hoàn khép kín, vừa nâng cao hiệu quả kinh tế vừa hạn chế ô nhiễm môi trường.",
    image: "../images/tintuc/chitiet/thuysan4.jpg",
    featured: false,
    author: "Agronexus Team",
    slug: "trienlamnongnghiepthongminh",
  },
  {
    id: 13,
    date: "19/04/2025",
    source: "Báo Năng lượng2",
    categoryid: "nongnghiep",
    categoryname: "Thủy sản",
    title: "Những mô hình nuôi thủy sản ứng dụng công nghệ cao theo hướng tuần hoàn khép kín",
    content:
      "Nông nghiệp ứng dụng công nghệ cao, nhất là nuôi trồng thủy sản - một trong những lĩnh vực đang được tỉnh tập trung thực hiện trong phát triển kinh tế - xã hội địa phương. Từ đó, ngày càng có nhiều doanh nghiệp, hộ nuôi trồng thủy sản chú trọng ứng dụng những thành tựu khoa học - công nghệ tiên tiến vào sản xuất, tạo nên vòng nuôi tuần hoàn khép kín, vừa nâng cao hiệu quả kinh tế vừa hạn chế ô nhiễm môi trường.",
    image: "../images/tintuc/chitiet/thuysan4.jpg",
    featured: false,
    author: "Agronexus Team",
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
