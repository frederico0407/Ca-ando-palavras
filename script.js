import { PALAVRAS_RUINS } from "./palavrasRuins.js";

const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#entrada-de-texto').value;
  const campoResultado = document.querySelector('#resultado-palavrachave');
  const palavrasChave = processaTexto(texto);
  campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto(texto) {
  let palavras = texto.split(/[^a-zA-ZÀ-ÿ]+/);
  palavras = palavras.map(p => p.toLowerCase());
  palavras = tiraPalavrasRuins(palavras);
  const frequencias = contaFrequencias(palavras);
  const ordenadas = Object.keys(frequencias).sort((p1, p2) => frequencias[p2] - frequencias[p1]);
  return ordenadas.slice(0, 10);
}
