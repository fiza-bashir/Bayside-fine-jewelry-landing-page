var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5, // Yeh 5 Image Show Karega
    spaceBetween: 30, // Gap Image ke darmiyan
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1, // Mobile Pe 1 Image
      },
      576: {
        slidesPerView: 2, // Choti Screen Pe 2 Image
      },
      768: {
        slidesPerView: 3, // Tablet Pe 3 Image
      },
      992: {
        slidesPerView: 4, // Laptop Pe 4 Image
      },
      1200: {
        slidesPerView: 5, // Desktop Pe 5 Image
      }
    }
  });
  // model js start 
  setTimeout(function(){
    var myModal = new bootstrap.Modal(document.getElementById('myModal'), {
      keyboard: false
    });
    myModal.show(); // Modal Show Function
  }, 5000); // 5 second ke baad Modal Show hoga
  