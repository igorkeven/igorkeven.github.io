  
        window.onload = function() {
            gsap.registerPlugin(ScrollTrigger);
            var sections = Array.from(document.querySelectorAll(".panel"));
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: ".container",
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: "+=" + document.getElementById('container').offsetWidth,
                },
            });
        };

      
document.getElementById('login_btn').addEventListener('click', function() {
            document.getElementById('footer-section').scrollIntoView({behavior: "smooth"});
        });
document.getElementById('login_btn2').addEventListener('click', function() {
            document.getElementById('footer-section').scrollIntoView({behavior: "smooth"});
            toggleMenu();
        });
        document.getElementById('home').addEventListener('click', function() {
            document.getElementById('banner').scrollIntoView({behavior: "smooth"});
            toggleMenu();
        });




        // para aparecer o nome na barra de cima

        window.addEventListener('scroll', function() {
            var nomenav = document.getElementById('nomenav');
            if (window.pageYOffset > window.innerHeight / 2) { // Altere este valor conforme necessário
                
                nomenav.style.display = 'block';
            } else {
                nomenav.style.display = 'none';
            }
        });


        // configuração para o menu hamburger

        const toggleMenu = () => document.body.classList.toggle("open");



        // esquema para aparecer e sumir os icones quando passar o mouse por cima do botão contato

        document.getElementById('contact-button').addEventListener('mouseover', function () {
            document.getElementById('social-icons').style.display = 'block';
            if (nomenav.style.display === 'block') {
                nomenav.style.display = 'none';
            }
            
        })

        document.getElementById('navNormal').addEventListener('mouseleave', function () {
            document.getElementById('social-icons').style.display = 'none';
            
        })

        
        // esquema para mudar as paginas do meno para celular

        document.getElementById('btnContCel').addEventListener('click', function () {
            document.getElementById('pag2').style.display = 'block';
            document.getElementById('pag1').style.display = 'none';
        })

        document.getElementById('btnVoltar').addEventListener('click', function () {
            document.getElementById('pag2').style.display = 'none';
            document.getElementById('pag1').style.display = 'flex';
        })
