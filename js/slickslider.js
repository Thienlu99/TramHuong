$(document).ready(function () {
  //   slick slider
  $(".slider--slick--banner").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
  $(".slider--slick--intro").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
  $(".slider--danhmuc").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          // arrows: false, 
        },
      },
    ],
  });
  // slider--box right
  $(".slider--boxright").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-caret-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-caret-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
  // slider--product
  $(".slider--product").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-caret-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-caret-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          // arrows: false, 
        },
      },
    ],
  });
  // 
  $(".slider--new--large").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
  // slider ngang post
  $(".slider--post--col").slick({
    vertical: false, // Thêm thuộc tính vertical để hiển thị hàng dọc
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
  // reviews
  $(".slider--reviews--col").slick({
    vertical: false, // Thêm thuộc tính vertical để hiển thị hàng dọc
    dots: true,
    infinite: true,
    draggable: false, //kéo hình ảnh đi được hay không?
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
   
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });

  // page danh mục
  $(".slider--pagedanhmuc").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
          // arrows: false, 
        },
      },
    ],
  });
  // page category post
  $(".slider--post--category").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,

    prevArrow:
      "<button id='prevButton' type='button' class='slick-prev pull-left'><i class='fa-solid fa-angle-left'></i></button>",
    nextArrow:
      "<button id='nextButton' type='button' class='slick-next pull-right'><i class='fa-solid fa-angle-right'></i></button>",
    // variableWidth: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          // arrows: false, 
        },
      },
    ],
  });
});
