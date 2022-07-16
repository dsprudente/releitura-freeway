//variáveis das imagens utilizadas no jogo
let imagemEstrada;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;
let imagemAtor1;

//carregamento das imagens no programa
function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarro4 = loadImage("imagens/carro-3.png");
  imagemCarro5 = loadImage("imagens/carro-2.png");
  imagemCarro6 = loadImage("imagens/carro-1.png");
  imagemAtor1 = loadImage("imagens/ator-1.png");
  imagemCarros = [imagemCarro1,imagemCarro2,imagemCarro3,imagemCarro4,imagemCarro5,imagemCarro6];
}