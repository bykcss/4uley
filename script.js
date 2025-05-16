
const nombresValidos = [
  "Valeria", "Camila", "Sofía", "Fernanda", "Andrea", "Natalia", "Lucía", "Ana",
  "María", "Daniela", "Paula", "Gabriela", "David", "Diego", "Andrés", "Mateo",
  "Emilio", "Tomás", "Leo", "Juan", "Matías", "Nicolás", "Bruno", "Emma", "Renata",
  "Jimena", "Romina", "Martina", "Elena", "Ángel", "Lautaro", "Santiago", "Thiago",
  "Gael", "Dylan", "Angie", "Joaquín", "Roger", "Denise", "Alexandra", "Victor",
  "Julián", "Roy", "Daniel", "Naomi", "Tania", "Rossina", "Damaris", "Kamila", "Verónica"
];

const scrollBar = document.getElementById("scroll-bar");
scrollBar.innerHTML = "<span>" + nombresValidos.map(n => "4u, " + n).join(" | ") + "</span>";

function siguiente() {
  const input = document.getElementById("nameInput");
  const nombre = input.value.trim();
  const nombreLimpio = nombre.toLowerCase().replace(/\s+/g, "");

  const nombresInvalidos = ["babyastro", "astro", "aztro", "ivana", "ibana"];
  if (nombresInvalidos.includes(nombreLimpio)) {
    document.getElementById("error").innerText = "Nombre no válido";
    return;
  }

  if (nombre === "") {
    document.getElementById("error").innerText = "Por favor ingresa un nombre";
    return;
  }

  document.getElementById("error").innerText = "";
  document.getElementById("input-screen").classList.add("hidden");
  document.getElementById("output-screen").classList.remove("hidden");

  document.getElementById("outputText").innerText = "4u, " + nombre;

  let num = Math.floor(Math.pow(Math.random(), 2.5) * 50) + 1;
  document.getElementById("loveCount").innerText = "fuiste el amor de " + num + " personas";
}
