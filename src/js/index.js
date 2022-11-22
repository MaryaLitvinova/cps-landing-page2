import '../scss/style.scss';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

const modalMenu = document.getElementById("modal_menu");
const openMenu = document.getElementById("modal_menu__open");
const closeMenu = document.getElementsByClassName("modal_menu__close")[0];
openMenu.onclick = function() {
  modalMenu.style.display = "block";
  document.body.style.overflow = 'hidden';
}
closeMenu.onclick = function() {
  modalMenu.style.display = "none";
  document.body.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == modalMenu) {
    modalMenu.style.display = "none";
  }
}

let curDown = false,
  curYPos = 0,
  curXPos = 0;

function ready() {
  const block = document.querySelector(".carousel");
  block.addEventListener("mousemove", (e) => {
    if (curDown) {
      block.scrollTo(
        block.scrollLeft + (curXPos - e.pageX),
        block.scrollTop + (curYPos - e.pageY)
      );
    }
  });
  document.querySelectorAll(".menu-list").forEach((node) => {
    node.addEventListener("mousedown", (e) => {
      curDown = true;
      curYPos = e.pageY;
      curXPos = e.pageX;
    });
    node.addEventListener("mouseup", (e) => {
      curDown = false;
    });
  });
}

ready();

/*
$(function(){
  var curDown = false,
      curYPos = 0,
      curXPos = 0;
  $(".block").mousemove(function(m){
    if(curDown === true){
     $(".block").scrollTop($(".block").scrollTop() + (curYPos - m.pageY)); 
     $(".block").scrollLeft($(".block").scrollLeft() + (curXPos - m.pageX));
    }
  });
  
  $(".block_width_item").mousedown(function(m){
    curDown = true;
    curYPos = m.pageY;
    curXPos = m.pageX;
  });
  
  $(".block_width_item").mouseup(function(){
    curDown = false;
  });
})
*/
const modalCall = document.getElementById("modal_call");
const openCall = document.getElementById("modal_call__open");
const closeCall = document.getElementsByClassName("modal_call__close")[0];
openCall.onclick = function() {
  modalCall.style.display = "block";
  document.body.style.overflow = 'hidden';
}
closeCall.onclick = function() {
  modalCall.style.display = "none";
  document.body.style.overflow = 'visible';
}
window.onclick = function(event) {
  if (event.target == modalCall) {
    modalCall.style.display = "none";
  }
}

var init = false;
  function swiperCard() {
    if (window.innerWidth <= 768) {
      if (!init) {
        init = true;
        swiper = new Swiper('.swiper', {
          modules: [Navigation, Pagination],
          loop: false,
          spaceBetween: 16,
          slideClass: 'swiper-slide',
          pagination: {
            el: '.swiper-pagination',
            tupe: 'bullets',
            clickable: true
          },
          slidesPerView: 'auto'
          });
      }
    } else if (init) {
      swiper.destroy();
      init = false;
    }
  }
  swiperCard();
  window.addEventListener("resize", swiperCard);




