
let currentSlide = 0;
let currentSlide2 = 0;

function moveSlide(direction) {
  const slider = document.getElementById('slider2');
  const slides = document.querySelectorAll('.slide2');
  const totalSlides = slides.length;

  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1; // Volta para o último slide
  } else if (currentSlide >= totalSlides) {
    currentSlide = 0; // Vai para o primeiro slide
  }

  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}


function moveSlide2(direction) {
  const slider = document.getElementById('slider22');
  const slides = document.querySelectorAll('.slide22');
  const totalSlides = slides.length;

  currentSlide2 += direction;

  if (currentSlide2 < 0) {
    currentSlide2 = totalSlides - 1; // Volta para o último slide
  } else if (currentSlide2 >= totalSlides) {
    currentSlide2 = 0; // Vai para o primeiro slide
  }

  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-currentSlide2 * slideWidth}px)`;
}







    document.addEventListener('DOMContentLoaded', function () {
      gsap.registerPlugin(ScrollTrigger);
      
      gsap.utils.toArray('.bg').forEach((section, i) => {
        gsap.fromTo(section, 
          { backgroundPosition: `50% ${-innerHeight / 2}px` },
          {
            backgroundPosition: `50% ${innerHeight / 2}px`,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              scrub: true
            }
          }
        );
      });

      gsap.utils.toArray('.animacao').forEach((heading) => {
        gsap.fromTo(heading, { autoAlpha: 0 }, {
          duration: 2,
          autoAlpha: 1,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      });
    });


    const toggleSwitch = document.getElementById('checkbox');
  const themeLabel = document.getElementById('theme-label');


    const images = {
  light: {
    pt: [
      'var(--image-portuguese-light1)',
      'var(--image-portuguese-light2)',
      'var(--image-portuguese-light3)',
    ],
    en: [
      'var(--image-english-light1)',
      'var(--image-english-light2)',
      'var(--image-english-light3)',
    ],
  },
  dark: {
    pt: [
      'var(--image-portuguese-dark1)',
      'var(--image-portuguese-dark2)',
      'var(--image-portuguese-dark3)',
    ],
    en: [
      'var(--image-english-dark1)',
      'var(--image-english-dark2)',
      'var(--image-english-dark3)',
    ],
  },
};

let currentLanguage = 'pt'; // 'pt' ou 'en'
let currentTheme = 'light'; // 'light' ou 'dark'

function updateBackgroundImages() {
  const sections = document.querySelectorAll('section .bg');
  sections.forEach((section, index) => {
    section.style.backgroundImage = images[currentTheme][currentLanguage][index];
  });
}
function toggleLanguage() {
  const enElements = document.querySelectorAll('.en');
  const ptElements = document.querySelectorAll('.pt');

  enElements.forEach(el => el.style.display = el.style.display === 'block' ? 'none' : 'block');
  ptElements.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');

  currentLanguage = currentLanguage === 'en' ? 'pt' : 'en';
  updateBackgroundImages();

  const bandeiraen = document.querySelectorAll('.toggle-en');
  const bandeirapt = document.querySelectorAll('.toggle-pt');

  bandeiraen.forEach(el => el.style.display = el.style.display === 'block' ? 'none' : 'block');
  bandeirapt.forEach(el => el.style.display = el.style.display === 'none' ? 'block' : 'none');

  // Atualiza o texto do rótulo do tema
  if (currentLanguage === 'en') {
    themeLabel.textContent = toggleSwitch.checked ? 'Change to Light Theme' : 'Change to Dark Theme';
  } else {
    themeLabel.textContent = toggleSwitch.checked ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro';
  }
}


toggleSwitch.addEventListener('change', function() {
  currentTheme = this.checked ? 'dark' : 'light';
  updateBackgroundImages();
  document.body.classList.toggle('dark-theme');

  if (currentLanguage === 'en') {
    themeLabel.textContent = toggleSwitch.checked ? 'Change to Light Theme' : 'Change to Dark Theme';
  } else {
    themeLabel.textContent = toggleSwitch.checked ? 'Mudar para Tema Claro' : 'Mudar para Tema Escuro';
  }

});


function changeColor(color) {
  document.documentElement.style.setProperty('--itens-color', color);
  // Adicione mais propriedades de estilo conforme necessário
}

     // Lógica para exibir e ocultar o modal
     const modal = document.getElementById('settingsModal');
    const settingsIcon = document.getElementById('settingsIcon');
    const closeModal = document.querySelector('.close');

    // Exibir o modal ao clicar no ícone de configurações
    settingsIcon.onclick = function() {
      modal.style.display = 'block';
    }

    // Fechar o modal ao clicar no botão de fechar
    closeModal.onclick = function() {
      modal.style.display = 'none';
    }

    // Fechar o modal ao clicar fora da área do modal
    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }

 
  updateBackgroundImages();
