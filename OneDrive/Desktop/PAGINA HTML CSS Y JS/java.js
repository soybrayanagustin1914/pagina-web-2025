function actualizarReloj() {
  const ahora = new Date();
  let horas = String(ahora.getHours()).padStart(2, "0");
  let minutos = String(ahora.getMinutes()).padStart(2, "0");
  let segundos = String(ahora.getSeconds()).padStart(2, "0");

  document.getElementById("reloj").textContent = `${horas}:${minutos}:${segundos}`;
}

// Actualiza cada segundo
setInterval(actualizarReloj, 1000);

// Inicializar reloj al cargar
actualizarReloj();
