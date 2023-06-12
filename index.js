let btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

let elemento = document.querySelectorAll('.noticias');

elemento.array.forEach((element) => {
    element.addEventListener('mouseenter', function() {
        const botao = element.querySelector('.buttonC');
        botao.style.display = 'block';
      });
    
      element.addEventListener('mouseleave', function() {
        const botao = element.querySelector('.buttonC');
        botao.style.display = 'none';
      });
});


let elemento2 = document.querySelectorAll('.noticias2');

elemento2.array.forEach((element2) => {
    element2.addEventListener('mouseenter', function() {
        const botao = element2.querySelector('.buttonC2');
        botao.style.display = 'block';
      });
    
      element2.addEventListener('mouseout', function() {
        const botao = element2.querySelector('.buttonC2');
        botao.style.display = 'none';
      });
});
