
// $('.owl-carousel').owlCarousel({
//     autoplay:true,
//     autoplayTimeout: 6500,
//     autoplaySpeed: 1000,
//     loop: true,
//     nav: true,
//     responsive:{
//         0:{
//             items:1
//         },
//         1100:{
//             items:1
//         }
//     }

// })












//Burger-menu______________________________________________________________________________________________________________________//

let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  
  menuBtn.addEventListener('click', function(){
      menuBtn.classList.toggle('active');
      menu.classList.toggle('active');
  })