
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

  const nombreFinal = "4u, " + nombre;
  const conteoFinal = "fuiste el amor de " + (Math.floor(Math.pow(Math.random(), 2.5) * 50) + 1) + " personas";
  document.getElementById("outputText").innerText = nombreFinal;
  document.getElementById("loveCount").innerText = conteoFinal;
  document.getElementById("captureText").innerText = nombreFinal;
  document.getElementById("captureLove").innerText = conteoFinal;

  const frase = frasesAleatorias[Math.floor(Math.random() * frasesAleatorias.length)];
  document.getElementById("fraseTexto").innerText = frase;
}

function descargarImagen() {
  const area = document.getElementById("captureArea");
  area.classList.remove("invisible");

  setTimeout(() => {
    html2canvas(area, { width: 1080, height: 1920, scale: 1 }).then(canvas => {
      const enlace = document.createElement("a");
      enlace.download = "4uley.png";
      enlace.href = canvas.toDataURL();
      enlace.click();
      area.classList.add("invisible");
    });
  }, 100); // Espera mínima para render correcto
}
