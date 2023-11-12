gsap.registerPlugin(ScrollTrigger);

// const images = gsap.utils.toArray("img");

gsap.utils.toArray("section").forEach((section, index) => {
  const w = section.querySelector(".images");
  const [x, xEnd] = [w.scrollWidth * -1, 0];
  gsap.fromTo(
    w,
    { x },
    {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 1,
      },
    }
  );
});

var mudaTema = false;
function mudarTema(e) {
    var body = document.querySelector('body');
      var navbar = document.querySelector('.navbar');
      const input = document.getElementById('switch-round');
      console.log(e);
      if (e == '0') {
        body.classList.remove('on');
        navbar.classList.remove('on');
        input.value = '1'
      } else {
        body.classList.add('on');
        navbar.classList.add('on');
        input.value = '0'
      }
    
}

// imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);