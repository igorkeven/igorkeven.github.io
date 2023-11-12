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
      
      if (e == '0') {
        body.style.background = "#77797e";
        navbar.style.background = "#3b3d43";
        navbar.style.color = "#f9f9f9";
        input.value = '1'
      } else {
        body.style.background = ' #ccccd4';
        navbar.style.background = "#ccccd4";
        navbar.style.color = "black";
        input.value = '0'
      }
    
}

// imagesLoaded(images).on("progress", updateProgress).on("always", showDemo);