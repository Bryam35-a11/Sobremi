document.addEventListener("DOMContentLoaded", () => {
  const saludo = document.getElementById("saludo");
  const hora = new Date().getHours();
  let mensaje = "";

  if (hora < 12) {
    mensaje = "¡Buenos días!";
  } else if (hora < 18) {
    mensaje = "¡Buenas tardes!";
  } else {
    mensaje = "¡Buenas noches!";
  }

  if (saludo) saludo.textContent = mensaje;
});

function cambiarColorFondo() {
  const colores = ["#f0f8ff", "#ffe4e1", "#e6e6fa", "#fafad2", "#d3ffce"];
  document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}
