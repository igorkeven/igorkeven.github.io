

  document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar as imagens a partir do JSON
function loadImagesFromJSON() {
    fetch('../caminhoImagens.json')
      .then((response) => response.json())
      .then((data) => {
        const imageUrls = data.imagens;
  
        const swiperWrapper = document.querySelector('.swiper-wrapper');
        imageUrls.forEach((imageUrl) => {
          const slide = document.createElement('div');
          slide.classList.add('swiper-slide');
          slide.style.background = `linear-gradient(to top, #0f2027, #203a4300, #2c536400), url(${imageUrl}) no-repeat 50% 50% / cover`;
          const divh2 = document.createElement('div');
          const h2 = document.createElement('h2');
          h2.textContent = 'Festa do dia das crianças';
          
          
          
          divh2.appendChild(h2);
          
          slide.appendChild(divh2);
          swiperWrapper.appendChild(slide);
         

        });
      })
      .catch((error) => {
        console.error('Erro ao carregar imagens do JSON:', error);
      });
  }
  
  // Chame a função para carregar as imagens
  loadImagesFromJSON();
  
  
  




var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    speed: 600,
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 150,
      modifier: window.innerWidth < 580 ? 1 : 5,
      slideShadows: true,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });


  window.addEventListener("resize", function () {
    swiper.params.coverflowEffect.modifier = window.innerWidth < 580 ? 1 : 5;
    swiper.update();
  });

});