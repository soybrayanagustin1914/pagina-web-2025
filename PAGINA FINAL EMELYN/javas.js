function cambiarColorFondo() {
  const colores = ["#f02e2eff", "#ffccf0ff", "#CCE5FF", "#FFF0B3", "#fffcccff"];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}



window.onscroll = function() {mostrarBotonArriba()};

function mostrarBotonArriba() {
    const btn = document.getElementById("btnArriba");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}


document.getElementById("btnArriba").addEventListener("click", function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
