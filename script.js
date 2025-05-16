(function(){
const nombresValidos = ["Valeria","Camila","Sofía","Fernanda","Andrea","Natalia","Lucía","Ana","María","Daniela","Paula","Gabriela","David","Diego","Andrés","Mateo","Emilio","Tomás","Leo","Juan","Matías","Nicolás","Bruno","Emma","Renata","Jimena","Romina","Martina","Elena","Ángel","Lautaro","Santiago","Thiago","Gael","Dylan","Angie","Joaquín","Roger","Denise","Alexandra","Victor","Julián","Roy","Daniel","Naomi","Tania","Rossina","Damaris","Kamila","Verónica"];
document.getElementById("scroll-bar").innerHTML = "<span>" + nombresValidos.map(n => "4u, " + n).join(" | ") + "</span>";
function validarNombre(nombre) {
  const inval = ["babyastro", "astro", "aztro", "ivana", "ibana"];
  if (inval.includes(nombre.toLowerCase().replace(/\s+/g, ""))) {
    document.getElementById("error").innerText = "Nombre no válido"; return false;
  }
  if (!nombre.trim()) {
    document.getElementById("error").innerText = "Por favor ingresa un nombre"; return false;
  }
  document.getElementById("error").innerText = ""; return true;
}
window.siguiente1 = () => {
  const nombre = document.getElementById("nameInput1").value.trim();
  if (!validarNombre(nombre)) return;
  document.getElementById("input-screen").classList.add("hidden");
  document.getElementById("output-screen-1").classList.remove("hidden");
  const num = Math.floor(Math.pow(Math.random(), 2.5) * 50) + 1;
  const text = `también fue el amor de ${num} ${num === 1 ? "persona" : "personas"}`;
  const textImg = `fue el amor de ${num} ${num === 1 ? "persona" : "personas"}`;
  document.getElementById("outputText1").innerText = "4u, " + nombre;
  document.getElementById("loveCount1").innerText = text;
  document.getElementById("captureText1").innerText = "4u, " + nombre;
  document.getElementById("captureLove1").innerText = textImg;
};
window.siguiente2 = () => {
  const nombre = document.getElementById("nameInput2").value.trim();
  if (!validarNombre(nombre)) return;
  document.getElementById("input-screen").classList.add("hidden");
  document.getElementById("output-screen-2").classList.remove("hidden");
  const num = Math.floor(Math.pow(Math.random(), 2.5) * 50) + 1;
  const text = `Fuiste el amor de ${num} ${num === 1 ? "persona" : "personas"}`;
  document.getElementById("outputText2").innerText = "4u, " + nombre;
  document.getElementById("loveCount2").innerText = text;
  document.getElementById("captureText2").innerText = "4u, " + nombre;
  document.getElementById("captureLove2").innerText = text;
  const frase = frasesAleatorias[Math.floor(Math.random() * frasesAleatorias.length)];
  document.getElementById("fraseTexto2").innerText = frase;
};
window.descargarImagen1 = () => {
  const area = document.getElementById("captureArea1");
  area.classList.remove("invisible");
  setTimeout(() => {
    html2canvas(area, {width:1080,height:1920,scale:1}).then(canvas => {
      const a = document.createElement("a");
      a.download = "4uley.png"; a.href = canvas.toDataURL(); a.click();
      area.classList.add("invisible");
    });
  }, 100);
};
window.descargarImagen2 = () => {
  const area = document.getElementById("captureArea2");
  area.classList.remove("invisible");
  setTimeout(() => {
    html2canvas(area, {width:1080,height:1920,scale:1}).then(canvas => {
      const a = document.createElement("a");
      a.download = "4uley.png"; a.href = canvas.toDataURL(); a.click();
      area.classList.add("invisible");
    });
  }, 100);
};
})();