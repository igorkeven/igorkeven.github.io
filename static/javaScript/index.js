  
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


        // codigo para fazer aparecer o conteudo do ver mais...


        document.getElementById('vermais1').addEventListener('click', function(){
            document.getElementById('descricao1').style.display = 'block';
            document.getElementById('vermais1').style.display = 'none';
            document.getElementById('vermenos1').style.display = 'block';
            document.getElementById('video1').style.width = '30%';
            document.getElementById('video1').style.height = '10%';
            
            var elements = document.getElementsByClassName('red');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'column';
            }
        })



        document.getElementById('vermais2').addEventListener('click', function(){
            document.getElementById('descricao2').style.display = 'block';
            document.getElementById('vermais2').style.display = 'none';
            document.getElementById('vermenos2').style.display = 'block';
            document.getElementById('video2').style.width = '40%';
            document.getElementById('video2').style.height = '20%';
            
            var elements = document.getElementsByClassName('blue');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'column';
            }
        })

// area para mostrar a descrição do video do  primeiro app --------------
        const divApp1 = document.getElementById('divApp1');
        const divApp2 = document.getElementById('divApp2');
        const divApp3 = document.getElementById('divApp3');
        const divApp4 = document.getElementById('divApp4');
        const video3 = document.getElementsByClassName('music')[0];
        const video4 = document.getElementsByClassName('cliente')[0];
        const video5 = document.getElementsByClassName('gerencia')[0];
        const video6 = document.getElementsByClassName('ludo')[0];
        const allVideosApp = document.querySelectorAll('.appvideo')
        const buttonSomMusic = document.getElementById('som');
        const buttonMute = document.getElementById('mute-btn');

        buttonSomMusic.addEventListener('click', function() {
          video3.muted = false;
          buttonSomMusic.style.display = 'none';
          buttonMute.style.display = 'inline-block';
        });
        
        buttonMute.addEventListener('click', function() {
          video3.muted = true;
          buttonSomMusic.style.display = 'inline-block';
          buttonMute.style.display = 'none';
        });


        document.getElementById('vermais3').addEventListener('click', function(){
            document.getElementById('descricao3').style.display = 'block';
            document.getElementById('vermais3').style.display = 'none';
            document.getElementById('vermenos3').style.display = 'block';
            buttonSomMusic.style.display = 'inline-block';
            buttonMute.style.display = 'none';
            divApp1.style.width = '100%';
            divApp1.style.height = '70%';
            video3.style.minHeight = '100%';
           



            divApp1.style.display = 'flex';
            divApp2.style.display = 'none';
            divApp3.style.display = 'none';
            divApp4.style.display = 'none';
            
            var elements = document.getElementsByClassName('divApp');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })


//--------------------------------------------------------------------------
// area para mostrar a descrição do video do  segundo app --------------

        document.getElementById('vermais4').addEventListener('click', function(){
            document.getElementById('descricao4').style.display = 'block';
            document.getElementById('vermais4').style.display = 'none';
            document.getElementById('vermenos4').style.display = 'block';
            

            divApp2.style.width = '100%';
            divApp2.style.height = '70%';
            video4.style.minHeight = '100%';
           



            divApp2.style.display = 'flex';
            divApp1.style.display = 'none';
            divApp3.style.display = 'none';
            divApp4.style.display = 'none';




            var elements = document.getElementsByClassName('divApp');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })
//--------------------------------------------------------------------------
// area para mostrar a descrição do video do  terceiro app --------------

        document.getElementById('vermais5').addEventListener('click', function(){
            document.getElementById('descricao5').style.display = 'block';
            document.getElementById('vermais5').style.display = 'none';
            document.getElementById('vermenos5').style.display = 'block';
            divApp3.style.width = '100%';
            divApp3.style.height = '70%';
            video5.style.minHeight = '100%';
           



            divApp3.style.display = 'flex';
            divApp1.style.display = 'none';
            divApp2.style.display = 'none';
            divApp4.style.display = 'none';




            var elements = document.getElementsByClassName('divApp');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })
//--------------------------------------------------------------------------
// area para mostrar a descrição do video do  quarto app --------------

        document.getElementById('vermais6').addEventListener('click', function(){
            document.getElementById('descricao6').style.display = 'block';
            document.getElementById('vermais6').style.display = 'none';
            document.getElementById('vermenos6').style.display = 'block';
            divApp4.style.width = '100%';
            divApp4.style.height = '70%';
            video6.style.minHeight = '100%';
           



            divApp4.style.display = 'flex';
            divApp1.style.display = 'none';
            divApp2.style.display = 'none';
            divApp3.style.display = 'none';




            var elements = document.getElementsByClassName('divApp');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })
        // ----------------area para o ver menos
        
        document.getElementById('vermenos1').addEventListener('click', function(){
            document.getElementById('descricao1').style.display = 'none';
            document.getElementById('vermais1').style.display = 'block';
            document.getElementById('vermenos1').style.display = 'none';
            document.getElementById('video1').style.width = '100%';
            document.getElementById('video1').style.height = '80%';
            
            var elements = document.getElementsByClassName('red');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })
        
        document.getElementById('vermenos2').addEventListener('click', function(){
            document.getElementById('descricao2').style.display = 'none';
            document.getElementById('vermais2').style.display = 'block';
            document.getElementById('vermenos2').style.display = 'none';
            document.getElementById('video2').style.width = '100%';
            document.getElementById('video2').style.height = '80%';
            
            var elements = document.getElementsByClassName('blue');
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'row';
            }
        })



        document.getElementById('vermenos3').addEventListener('click', function(){
            document.getElementById('descricao3').style.display = 'none';
            document.getElementById('vermais3').style.display = 'block';
            document.getElementById('vermenos3').style.display = 'none';

            video3.muted = true;
          buttonSomMusic.style.display = 'none';
          buttonMute.style.display = 'none';

          divApp1.style.width = '25%';
          divApp1.style.height = '80%';
          video3.style.minHeight = '70%';
      
          divApp1.style.display = 'block';
          divApp2.style.display = 'block';
          divApp3.style.display = 'block';
          divApp4.style.display = 'block';







            var elements = divApp1;
            for (var i = 0; i < elements.length; i++) {
                elements[i].style.flexDirection = 'colum';
            }
        })




        document.getElementById('vermenos4').addEventListener('click', function(){
            document.getElementById('descricao4').style.display = 'none';
            document.getElementById('vermais4').style.display = 'block';
            document.getElementById('vermenos4').style.display = 'none';
            divApp2.style.width = '25%';
            divApp2.style.height = '80%';
            video4.style.minHeight = '70%';
        
            divApp1.style.display = 'block';
            divApp2.style.display = 'block';
            divApp3.style.display = 'block';
            divApp4.style.display = 'block';
  
              var elements = divApp2;
              for (var i = 0; i < elements.length; i++) {
                  elements[i].style.flexDirection = 'colum';
              }
          })
          document.getElementById('vermenos5').addEventListener('click', function(){
            document.getElementById('descricao5').style.display = 'none';
            document.getElementById('vermais5').style.display = 'block';
            document.getElementById('vermenos5').style.display = 'none';
            divApp3.style.width = '25%';
            divApp3.style.height = '80%';
            video5.style.minHeight = '70%';
        
            divApp1.style.display = 'block';
            divApp2.style.display = 'block';
            divApp3.style.display = 'block';
            divApp4.style.display = 'block';
  
              var elements = divApp3;
              for (var i = 0; i < elements.length; i++) {
                  elements[i].style.flexDirection = 'colum';
              }
          })
        document.getElementById('vermenos6').addEventListener('click', function(){
            document.getElementById('descricao6').style.display = 'none';
            document.getElementById('vermais6').style.display = 'block';
            document.getElementById('vermenos6').style.display = 'none';
            divApp4.style.width = '25%';
            divApp4.style.height = '80%';
            video6.style.minHeight = '70%';
        
            divApp1.style.display = 'block';
            divApp2.style.display = 'block';
            divApp3.style.display = 'block';
            divApp4.style.display = 'block';
  
              var elements = divApp4;
              for (var i = 0; i < elements.length; i++) {
                  elements[i].style.flexDirection = 'colum';
              }
          })
