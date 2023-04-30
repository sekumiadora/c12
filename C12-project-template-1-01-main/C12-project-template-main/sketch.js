var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  path.loadImage("C12-project-template-main/imaji/path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
 boy.loadAnimation("C12-project-template-main/imaji/Runner-1.png","C12-project-template-main/imaji/Runner-2.png");
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite(200,200,200,200);
//adicione uma imagem para a pista
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.

path.scale=1.2;

//crie um sprite de menino
boy=createSprite(200,100,40,40);
//adicione uma animação de corrida para ele
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
//defina visibilidade como falsa para o limite à esquerda
leftBoundary.visibility=false
//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
rightBoundary.visibility=false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // mover o menino com as setas usando keyDown
  if(keydown("rightarrow")){
  boy.velocityY = -5;
  }
  if(keydown("leftarrow")){
  boy.velocityY = 5;
  }
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
