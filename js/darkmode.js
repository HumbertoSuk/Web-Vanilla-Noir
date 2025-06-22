const boton = document.getElementById("btn-tema");

function actualizarIcono() {
  const tema = document.documentElement.getAttribute("data-theme");
  boton.textContent = tema === "dark" ? "☀️" : "🌙";
}

actualizarIcono(); // al cargar la página

boton.addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme");
  const nuevoTema = temaActual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nuevoTema);
  localStorage.setItem("tema", nuevoTema);
  actualizarIcono(); // cambiar icono después del click
});
