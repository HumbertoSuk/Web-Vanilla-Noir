// Detectar el tema del sistema
const preferido = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
const temaGuardado = localStorage.getItem("tema") || preferido;

document.documentElement.setAttribute("data-theme", temaGuardado);

document.getElementById("btn-tema").addEventListener("click", () => {
  const temaActual = document.documentElement.getAttribute("data-theme");
  const nuevoTema = temaActual === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nuevoTema);
  localStorage.setItem("tema", nuevoTema);
});
