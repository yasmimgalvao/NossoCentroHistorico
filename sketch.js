let tela = 1;
let contS = 0;
let cont = 0;
let rate = 60;
let posTextTestX;
let posTextTestY;
let posText1X;
let posText1Y;
let posTextFsX;
let posTextFsY;
let posText4X;
let posText4Y;

function iniciarValores(){
    posTextTestX = 330;
    posTextTestY = 200;

    posText1X = 320;
    posText1Y = 100;
  
    posTextFsX = 320;
    posTextFsY = 280;
  
    posText4X = 330;
    posText4Y = 20;
}
    

let gabarito = [
  {
    box1X: 55,
    box1Y: 334,
    box2X: 300,
    box2Y: 436,
  },
   {
    box1X: 55,
    box1Y: 243,
    box2X: 261,
    box2Y: 425,
  },
   {
    box1X: 50,
    box1Y: 255,
    box2X: 250,
    box2Y: 448,
  },
   {
    box1X: 50,
    box1Y: 247,
    box2X: 260,
    box2Y: 459,
  },
   {
    box1X: 70,
    box1Y: 282,
    box2X: 250,
    box2Y: 468,
  },
   {
    box1X: 30,
    box1Y: 220,
    box2X: 250,
    box2Y: 453,
  },
   {
    box1X: 30,
    box1Y: 247,
    box2X: 245,
    box2Y: 453,
  },
]


function preload() {
  img1 = loadImage('IgrejadoGalo2.jpg');
  img2 = loadImage('matriz3.png');
  img3 = loadImage('pçandre11.jpg');
  img4 = loadImage('insttgeo1.jpg');
  img5 = loadImage('colunacapitolina1.jpg');
  img6 = loadImage('palacio1.png');
  img7 = loadImage('pç7set.jpg');
  img8 = loadImage('tjrn1.jpg');
  img9 = loadImage('igrdoros.jpg');
  img10 = loadImage('pref.jpg');
  img11 = loadImage('assemblegs.jpg');
  img12 = loadImage('museucafé.jpg');
  img13 = loadImage('pçJM.jpg');
  img14 = loadImage('Ellips.png');
  img15 = loadImage('ysa.png');
  img16 = loadImage('win1.jpg');
  img17 = loadImage('becodalama1.jpg');
  img18 = loadImage('catedral1.jpg');
  
}


function setup() {
  createCanvas(500, 500); 
  iniciarValores();
  
}


function draw() {
 //tela do menu
  
  if(tela == 1){
    background(61, 115, 151);
    textSize(30);
    text('O Nosso', 200, 55);
    text('Centro Histórico', 150, 87);
    textSize(11);
    text('Yasmim Galvão - 20180140758 / UFRN Natal', 260, 490);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    
  // menu com quatro opções de entrada
    
    if(mouseX > 20 && mouseX < 20+145 && mouseY > 140 && mouseY < 140+80){
      fill(color(10, 20, 60));
    }
    else{
      fill(color(61, 115, 151));
    }
    if (mouseIsPressed && mouseX > 20 && mouseX < 20+145 && mouseY > 140 && mouseY < 140+80){
      tela = 2;
    }
      rect(20, 140, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Jogar", 55, 185);
      cont = 0;
    
    
    if(mouseX > 230 && mouseX < 230+145 && mouseY > 140 && mouseY < 140+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
      rect(230, 140, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Instruções", 243, 185);
    if (mouseIsPressed && mouseX > 230 && mouseX < 230+145 && mouseY > 140 && mouseY < 140+80){
      tela = 16;
    }
  
    
    if(mouseX > 20 && mouseX < 20+145 && mouseY > 240 && mouseY < 240+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
    if (mouseIsPressed && mouseX > 20 && mouseX < 20+145 && mouseY > 240 && mouseY < 240+80){
      tela = 17;
    }
      rect(20, 240, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(25);
      text("Resumo", 45, 290);
  
    if(mouseX > 230 && mouseX < 230+145 && mouseY > 240 && mouseY < 240+80){
      fill(color(10, 20, 60)); 
    }
    else{
      fill(color(61, 115, 151));
    }
      rect(230, 240, 145, 80, 15);
      noStroke();
      fill(240);
      noStroke();
      textSize(20);
      text("Colaboradoras", 237, 290);
    if (mouseIsPressed && mouseX > 230 && mouseX < 230+145 && mouseY > 240 && mouseY < 240+80){
      tela = 18;
    }
    
  }
  //Tela do inicio do jogo (jogar)
  
  //Fase1
  else if (tela == 2){  
    background(61, 125, 141);
    ellipse(mouseX, mouseY, 15, 15);
    image(img1, 55, 170);
    image(img2, 300, 250);
    textSize(15);
    text('Igreja do Galo', 55, 347);
    text('Igreja Matriz', 300, 450); 
    textSize(30);
    fill(color (250));
    text('Fase 1', 200, 35);
    textSize(20);
    text('Memorize os locais da cidade e os seus nomes', 45, 65);
    
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 9){
      tela = 3;
    }
    }
  
  //Fase1- play
  else if (tela == 3){
    background(61, 125, 141);
    ellipse(mouseX, mouseY, 15, 15);
    image(img1, 55, 170);
    image(img2, 300, 250);
    textSize(30);
    fill(color (250));
    text('Fase 1', 200, 35);
    textSize(20);
    text('Coloque seus nomes na imagem correta', 75, 55);
    
    if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
      posTextTestX = mouseX - 70;
      posTextTestY = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
      posText1X = mouseX - 70;
      posText1Y = mouseY;
    }
  
  
    let seText1EstaDentro = posText1X > gabarito[0].box1X && posText1X < gabarito[0].box1X + 150 && posText1Y > gabarito[0].box1Y && posText1Y < gabarito[0].box1Y + 50;
    
    let seTextTestEstaDentro = posTextTestX > gabarito[0].box2X && posTextTestX < gabarito[0].box2X + 150 && posTextTestY > gabarito[0].box2Y && posTextTestY < gabarito[0].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[0].box2X && posText1X < gabarito[0].box2X + 150 && posText1Y > gabarito[0].box2Y && posText1Y < gabarito[0].box2Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[0].box1X && posTextTestX < gabarito[0].box1X + 150 && posTextTestY > gabarito[0].box1Y && posTextTestY < gabarito[0].box1Y + 50;
      
    
    rect(gabarito[0].box1X, gabarito[0].box1Y, 120, 30);
    rect(gabarito[0].box2X, gabarito[0].box2Y, 152, 30);
  
  if(seText1EstaDentro && seTextTestEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 4;
        }, 1500)
      
    } 
  else if(seText1EstaErrado && seTextTestEstaErrado){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
  
     
   textSize(16); 
    fill(color(10, 20, 60));
    text("Igreja Matriz", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Igreja do Galo", posText1X, posText1Y);
  }  
  
  
  //Fase2
  if (tela == 4){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img3, 55, 100);
    image(img4, 260, 250);
    textSize(15);
    text('Praça André de\n Albuquerque', 55, 258);
    text('Instituto Geográfico', 260, 440); 
    textSize(30);
    fill(color (250));
    text('Fase 2', 200, 35);
    
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 9){
      tela = 5;
    }
    
  }
  
  //Fase2- play
  else if(tela == 5){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img3, 55, 100);
    image(img4, 260, 250);
    textSize(30);
    fill(color (250));
    text('Fase 2', 200, 35);
    
  if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
    posTextTestX = mouseX - 70;
    posTextTestY = mouseY;
    }
    
  if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
    posText1X = mouseX - 70;
    posText1Y = mouseY;
    }
  
  
    let seText1EstaDentro = posText1X > gabarito[1].box1X && posText1X < gabarito[1].box1X + 150 && posText1Y > gabarito[1].box1Y && posText1Y < gabarito[1].box1Y + 50;
    
    let seTextTestEstaDentro = posTextTestX > gabarito[1].box2X && posTextTestX < gabarito[1].box2X + 150 && posTextTestY > gabarito[1].box2Y && posTextTestY < gabarito[1].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[1].box2X && posText1X < gabarito[1].box2X + 150 && posText1Y > gabarito[1].box2Y && posText1Y < gabarito[1].box2Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[1].box1X && posTextTestX < gabarito[1].box1X + 150 && posTextTestY > gabarito[1].box1Y && posTextTestY < gabarito[1].box1Y + 50;
      
    
    rect(gabarito[1].box1X, gabarito[1].box1Y, 159, 45);
    rect(gabarito[1].box2X, gabarito[1].box2Y, 205, 45);
  
  if(seText1EstaDentro && seTextTestEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 6;
        }, 1500)
      
    } 
  else if(seText1EstaErrado && seTextTestEstaErrado){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
  
     
   textSize(16); 
    fill(color(10, 20, 60));
    text("Instituto Geográfico", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Praça André de\n Albuquerque", posText1X, posText1Y);
  }
  
  //Fase3
   else if (tela == 6){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img5, 50, 120);
    image(img6, 250, 280);
    textSize(15);
    text('Coluna Capitolina', 50, 270);
    text('Palácio Potengi', 250, 465); 
    textSize(30);
    fill(color (250));
    text('Fase 3', 200, 35);
    
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 9){
      tela = 7;
    }
    
  }
  
  //Fase3- play
   else if (tela == 7){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img5, 50, 120);
    image(img6, 250, 280);
    textSize(30);
    fill(color (250));
    text('Fase 3', 200, 35);
     
      if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
    posTextTestX = mouseX - 70;
    posTextTestY = mouseY;
    }
    
  if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
    posText1X = mouseX - 70;
    posText1Y = mouseY;
    }
  
  
    let seText1EstaDentro = posText1X > gabarito[2].box2X && posText1X < gabarito[2].box2X + 150 && posText1Y > gabarito[2].box2Y && posText1Y < gabarito[2].box2Y + 50;
    
    let seTextTestEstaDentro = posTextTestX > gabarito[2].box1X && posTextTestX < gabarito[2].box1X + 150 && posTextTestY > gabarito[2].box1Y && posTextTestY < gabarito[2].box1Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[2].box1X && posText1X < gabarito[2].box1X + 150 && posText1Y > gabarito[2].box1Y && posText1Y < gabarito[2].box1Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[2].box2X && posTextTestX < gabarito[2].box2X + 150 && posTextTestY > gabarito[2].box2Y && posTextTestY < gabarito[2].box2Y + 50;
      
    
    rect(gabarito[2].box1X, gabarito[2].box1Y, 205, 20);
    rect(gabarito[2].box2X, gabarito[2].box2Y, 210, 20);
  
  if(seText1EstaDentro && seTextTestEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 8;
        }, 1500)
      
    } 
  else if(seText1EstaErrado && seTextTestEstaErrado){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
  
     
   textSize(16); 
    fill(color(10, 20, 60));
    text("Coluna Capitolina", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Palácio Potengi", posText1X, posText1Y);
   }
  
  //Fase4 pt1
  else if (tela == 8){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img7, 50, 90);
    image(img8, 250, 280);
    textSize(15);
    text('Praça 7 de Set.', 50, 260);
    text('Tribunal de \n Justiça', 250, 463); 
    textSize(30);
    fill(color (250));
    text('Fase 4', 200, 35);
    
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 9){
      tela = 9;    
    }
    
  }
  
  //Fase4 pt2
  else if (tela == 9){
    
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img9, 70, 80);
    image(img10, 250, 280);
    textSize(15);
    text('Igreja do Rosário', 70, 295);
    text('Prefeitura', 250, 470); 
    textSize(30);
    fill(color (250));
    text('Fase 4', 200, 35);
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 19){
      tela = 10;
    }
    
    
  }
  
  //Fase4.1- play
  else if (tela == 10){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img7, 50, 90);
    image(img8, 260, 290);
    textSize(30);
    fill(color (250));
    text('Fase 4', 200, 35);
    
    if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
      posTextTestX = mouseX - 70;
      posTextTestY = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
      posText1X = mouseX - 70;
      posText1Y = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText4X && mouseX < posText4X + 130) && (mouseY > posText4Y - 30 && mouseY < posText4Y + 50)){
      posText4X = mouseX - 70;
      posText4Y = mouseY;
    }
    
    
    if (mouseIsPressed && (mouseX > posTextFsX && mouseX < posTextFsX + 130) && (mouseY > posTextFsY - 30 && mouseY < posTextFsY + 50)){
      posTextFsX = mouseX - 70;
      posTextFsY = mouseY;
    }
  
  
    let seText1EstaDentro = posText1X > gabarito[3].box1X && posText1X < gabarito[3].box1X + 150 && posText1Y > gabarito[3].box1Y && posText1Y < gabarito[3].box1Y + 50;
    
    let seTextTestEstaDentro = posTextTestX > gabarito[3].box2X && posTextTestX < gabarito[3].box2X + 150 && posTextTestY > gabarito[3].box2Y && posTextTestY < gabarito[3].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[3].box2X && posText1X < gabarito[3].box2X + 150 && posText1Y > gabarito[3].box2Y && posText1Y < gabarito[3].box2Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[3].box1X && posTextTestX < gabarito[3].box1X + 150 && posTextTestY > gabarito[3].box1Y && posTextTestY < gabarito[3].box1Y + 50;
    
    let seText4EstaDentro = (posText4X > gabarito[3].box2X && posText4X < gabarito[3].box2X + 150 && posText4Y > gabarito[3].box2Y && posText4Y < gabarito[3].box2Y + 50) || (posText4X > gabarito[3].box1X && posText4X < gabarito[3].box1X + 150 && posText4Y > gabarito[3].box1Y && posText4Y < gabarito[3].box1Y + 50)
    
    let seTextFsEstaDentro = (posTextFsX > gabarito[3].box2X && posTextFsX < gabarito[3].box2X + 150 && posTextFsY > gabarito[3].box2Y && posTextFsY < gabarito[3].box2Y + 50) || (posTextFsX > gabarito[3].box1X && posTextFsX < gabarito[3].box1X + 150 && posTextFsY > gabarito[3].box1Y && posTextFsY < gabarito[3].box1Y + 50)
      
    
    rect(gabarito[3].box1X, gabarito[3].box1Y, 205, 40);
    rect(gabarito[3].box2X, gabarito[3].box2Y, 223, 40);
    
  if(seText1EstaDentro && seTextTestEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 11;
        }, 1500)
    } 
  else if((seText1EstaErrado && seTextTestEstaErrado) || (seText4EstaDentro && seTextFsEstaDentro) || ((seText4EstaDentro || seTextFsEstaDentro) && (seText1EstaErrado || seText1EstaDentro || seTextTestEstaErrado || seTextTestEstaDentro))){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
    
     
    textSize(16); 
    fill(color(10, 20, 60));
    text("Tribunal de \n Justiça", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Praça 7 de Set.", posText1X, posText1Y);
    
    textSize(16);
    text("Prefeitura", posText4X, posText4Y);
    
    textSize(16);
    text("Igreja do Rosário", posTextFsX, posTextFsY);
    
  }
  
  //Fase4.2 - play
  else if (tela == 11){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img9, 70, 80);
    image(img10, 250, 293);
    textSize(30);
    fill(color (250));
    text('Fase 4', 200, 35);
    
     if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
    posTextTestX = mouseX - 70;
    posTextTestY = mouseY;
    }
    
  if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
    posText1X = mouseX - 70;
    posText1Y = mouseY;
    }
  if (mouseIsPressed && (mouseX > posText4X && mouseX < posText4X + 130) && (mouseY > posText4Y - 30 && mouseY < posText4Y + 50)){
      posText4X = mouseX - 70;
      posText4Y = mouseY;
    }
    
    
  if (mouseIsPressed && (mouseX > posTextFsX && mouseX < posTextFsX + 130) && (mouseY > posTextFsY - 30 && mouseY < posTextFsY + 50)){
      posTextFsX = mouseX - 70;
      posTextFsY = mouseY;
    }
  
  
    
    let seText1EstaDentro = posText1X > gabarito[4].box1X && posText1X < gabarito[4].box1X + 150 && posText1Y > gabarito[4].box1Y && posText1Y < gabarito[4].box1Y + 50;
    
    let seTextFsEstaDentro = posTextFsX > gabarito[4].box2X && posTextFsX < gabarito[4].box2X + 150 && posTextFsY > gabarito[4].box2Y && posTextFsY < gabarito[4].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[4].box2X && posText1X < gabarito[4].box2X + 150 && posText1Y > gabarito[4].box2Y && posText1Y < gabarito[4].box2Y + 50;
    
    let seTextFsEstaErrado = posTextFsX > gabarito[4].box1X && posTextFsX < gabarito[4].box1X + 150 && posTextFsY > gabarito[4].box1Y && posTextFsY < gabarito[4].box1Y + 50; 
    
    let seText4EstaDentro = (posText4X > gabarito[4].box2X && posText4X < gabarito[4].box2X + 150 && posText4Y > gabarito[4].box2Y && posText4Y < gabarito[4].box2Y + 50) || (posText4X > gabarito[4].box1X && posText4X < gabarito[4].box1X + 150 && posText4Y > gabarito[4].box1Y && posText4Y < gabarito[4].box1Y + 50)
    
    let seTextTestEstaDentro = (posTextTestX > gabarito[4].box2X && posTextTestX < gabarito[4].box2X + 150 && posTextTestY > gabarito[4].box2Y && posTextTestY < gabarito[4].box2Y + 50) || (posTextTestX > gabarito[4].box1X && posTextTestX < gabarito[4].box1X + 150 && posTextTestY > gabarito[4].box1Y && posTextTestY < gabarito[4].box1Y + 50)
      
   
    
    rect(gabarito[4].box1X, gabarito[4].box1Y, 150, 30);
    rect(gabarito[4].box2X, gabarito[4].box2Y, 232, 30);
  
   if(seText1EstaDentro && seTextFsEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 12;
        }, 1500)
    } 
  else if((seText1EstaErrado && seTextFsEstaErrado) || (seText4EstaDentro && seTextTestEstaDentro) || ((seText4EstaDentro || seTextTestEstaDentro) && (seText1EstaErrado || seText1EstaDentro || seTextFsEstaErrado || seTextFsEstaDentro))){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
    
       
    textSize(16); 
    fill(color(10, 20, 60));
    text("Tribunal de \n Justiça", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Igreja do Rosário", posText1X, posText1Y);
    
    textSize(16);
    text("Praça 7 de Set.", posText4X, posText4Y);
    
    textSize(16);
    text("Prefeitura", posTextFsX, posTextFsY);
    
  }
  
  
  //Fase5 pt1
    if (tela == 12){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img11, 30, 80);
    image(img12, 280, 200);
    image(img13, 30, 300);
    textSize(15);
    text('Assembléia Legislativa', 30, 232);
    text('Museu Café Filho', 280, 390);
    text('Praça Padre João Maria', 30, 465);
    textSize(30);
    fill(color (250));
    text('Fase 5', 200, 35);
    
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
    if (contS > 9){
      tela = 13;
    }
    }
  
  //Fase5.1 - play
    else if (tela == 13){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    image(img11, 30, 80);
    //image(img12, 280, 285);
    image(img13, 250, 300);
    textSize(30);
    fill(color (250));
    text('Fase 5', 200, 35);
    
    if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
      posTextTestX = mouseX - 70;
      posTextTestY = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
      posText1X = mouseX - 70;
      posText1Y = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText4X && mouseX < posText4X + 130) && (mouseY > posText4Y - 30 && mouseY < posText4Y + 50)){
      posText4X = mouseX - 70;
      posText4Y = mouseY;
    }
    
    
    if (mouseIsPressed && (mouseX > posTextFsX && mouseX < posTextFsX + 130) && (mouseY > posTextFsY - 30 && mouseY < posTextFsY + 50)){
      posTextFsX = mouseX - 70;
      posTextFsY = mouseY;
    }
    
    let seText1EstaDentro = posText1X > gabarito[5].box1X && posText1X < gabarito[5].box1X + 150 && posText1Y > gabarito[5].box1Y && posText1Y < gabarito[5].box1Y + 50;
    
    let seTextTestEstaDentro = posTextTestX > gabarito[5].box2X && posTextTestX < gabarito[5].box2X + 150 && posTextTestY > gabarito[5].box2Y && posTextTestY < gabarito[5].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[5].box2X && posText1X < gabarito[5].box2X + 150 && posText1Y > gabarito[5].box2Y && posText1Y < gabarito[5].box2Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[5].box1X && posTextTestX < gabarito[5].box1X + 150 && posTextTestY > gabarito[5].box1Y && posTextTestY < gabarito[5].box1Y + 50;
    
    let seText4EstaDentro = (posText4X > gabarito[5].box2X && posText4X < gabarito[5].box2X + 150 && posText4Y > gabarito[5].box2Y && posText4Y < gabarito[5].box2Y + 50) || (posText4X > gabarito[5].box1X && posText4X < gabarito[5].box1X + 150 && posText4Y > gabarito[5].box1Y && posText4Y < gabarito[5].box1Y + 50)
    
    let seTextFsEstaDentro = (posTextFsX > gabarito[5].box2X && posTextFsX < gabarito[5].box2X + 150 && posTextFsY > gabarito[5].box2Y && posTextFsY < gabarito[5].box2Y + 50) || (posTextFsX > gabarito[5].box1X && posTextFsX < gabarito[5].box1X + 150 && posTextFsY > gabarito[5].box1Y && posTextFsY < gabarito[5].box1Y + 50)
      
    
    rect(gabarito[5].box1X, gabarito[5].box1Y, 205, 35);
    rect(gabarito[5].box2X, gabarito[5].box2Y, 205, 35);
    
  if(seText1EstaDentro && seTextTestEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 14;
        }, 1500)
    } 
  else if((seText1EstaErrado && seTextTestEstaErrado) || (seText4EstaDentro && seTextFsEstaDentro) || ((seText4EstaDentro || seTextFsEstaDentro) && (seText1EstaErrado || seText1EstaDentro || seTextTestEstaErrado || seTextTestEstaDentro))){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
         
    textSize(16); 
    fill(color(10, 20, 60));
    text("Praça Padre João Maria", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Assembléia Legislativa", posText1X, posText1Y);
    
    textSize(16);
    text("Museu Café Filho", posText4X, posText4Y);
    
    textSize(16);
    text("Museu Câmara Cascudo", posTextFsX, posTextFsY);
      
  }
  
  //Fase5 pt2
    if(tela == 14){
      background(61, 125, 141);
      fill(color(10, 20, 60));
      ellipse(mouseX, mouseY, 15, 15);
      image(img12, 30, 70);
      image(img17, 245, 120);
      image(img18, 30, 310);
      textSize(15);
      text('Museu Café Filho', 30, 260);
      text('Beco da Lama', 245, 295);
      text('Catedral', 30, 485);
      textSize(30);
      fill(color (250));
      text('Fase Final', 190, 35);
      
        cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
      if (contS > 9){
      tela = 15;
      }
    }
  
  //Fase5.2 - play
    if(tela == 15){
      background(61, 125, 141);
      fill(color(10, 20, 60));
      ellipse(mouseX, mouseY, 15, 15);
      image(img12, 30, 70);
      image(img17, 245, 290);
      //image(img18, 30, 310);
      textSize(30);
      fill(color (250));
      text('Fase Final', 185, 35);
      
       if (mouseIsPressed && (mouseX > posTextTestX && mouseX < posTextTestX + 130) && (mouseY > posTextTestY - 30 && mouseY < posTextTestY + 20)){
      posTextTestX = mouseX - 70;
      posTextTestY = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText1X && mouseX < posText1X + 130) && (mouseY > posText1Y - 30 && mouseY < posText1Y + 50)){
      posText1X = mouseX - 70;
      posText1Y = mouseY;
    }
    
    if (mouseIsPressed && (mouseX > posText4X && mouseX < posText4X + 130) && (mouseY > posText4Y - 30 && mouseY < posText4Y + 50)){
      posText4X = mouseX - 70;
      posText4Y = mouseY;
    }
    
    
    if (mouseIsPressed && (mouseX > posTextFsX && mouseX < posTextFsX + 130) && (mouseY > posTextFsY - 30 && mouseY < posTextFsY + 50)){
      posTextFsX = mouseX - 70;
      posTextFsY = mouseY;
    }
    
    let seText4EstaDentro = posText4X > gabarito[6].box1X && posText4X < gabarito[6].box1X + 150 && posText4Y > gabarito[6].box1Y && posText4Y < gabarito[6].box1Y + 50;
    
    let seTextFsEstaDentro = posTextFsX > gabarito[6].box2X && posTextFsX < gabarito[6].box2X + 150 && posTextFsY > gabarito[6].box2Y && posTextFsY < gabarito[6].box2Y + 50;

    
    let seText1EstaErrado = posText1X > gabarito[6].box2X && posText1X < gabarito[6].box2X + 150 && posText1Y > gabarito[6].box2Y && posText1Y < gabarito[6].box2Y + 50;
    
    let seTextTestEstaErrado = posTextTestX > gabarito[6].box1X && posTextTestX < gabarito[6].box1X + 150 && posTextTestY > gabarito[6].box1Y && posTextTestY < gabarito[6].box1Y + 50;
    
    let seText1EstaDentro = (posText1X > gabarito[6].box2X && posText1X < gabarito[6].box2X + 150 && posText1Y > gabarito[6].box2Y && posText1Y < gabarito[6].box2Y + 50) || (posText1X > gabarito[6].box1X && posText1X < gabarito[6].box1X + 150 && posText1Y > gabarito[6].box1Y && posText1Y < gabarito[6].box1Y + 50)
    
    let seTextTestEstaDentro = (posTextTestX > gabarito[6].box2X && posTextTestX < gabarito[6].box2X + 150 && posTextTestY > gabarito[6].box2Y && posTextTestY < gabarito[6].box2Y + 50) || (posTextTestX > gabarito[6].box1X && posTextTestX < gabarito[6].box1X + 150 && posTextTestY > gabarito[6].box1Y && posTextTestY < gabarito[6].box1Y + 50)
    
    rect(gabarito[6].box1X, gabarito[6].box1Y, 180, 35);
    rect(gabarito[6].box2X, gabarito[6].box2Y, 240, 35);
      
       if((seText1EstaErrado && seTextTestEstaErrado) || (seText4EstaDentro && seTextFsEstaDentro) || ((seText4EstaDentro || seTextFsEstaDentro) && (seText1EstaErrado || seText1EstaDentro || seTextTestEstaErrado || seTextTestEstaDentro))){ 
        setTimeout(function(){
          tela = 20;
        }, 1500)
  }
    
           
    textSize(16); 
    fill(color(10, 20, 60));
    text("Cadedral", posTextTestX, posTextTestY);
    
    textSize(16); 
    text("Palácio Potengi", posText1X, posText1Y);
    
    textSize(16);
    text("Museu Café Filho", posText4X, posText4Y);
    
    textSize(16);
    text("Beco da Lama", posTextFsX, posTextFsY);
     
      
    cont = cont + 1;
    textSize(18);
    contS = parseInt(cont / rate);
    fill(color(10, 20, 60));
    text (contS, 477, 25);
      if (contS > 25){
        tela = 20;
                  
      }  
      if(seText4EstaDentro && seTextFsEstaDentro){
        cont = 0;
        setTimeout(function(){
          iniciarValores();
          tela = 22;
        }, 1500)
    } 
     
    }
  
  // Tela de instrução
  
    if (tela == 16){
    background(61, 135, 151);
    ellipse(mouseX, mouseY, 15, 15);
    textSize(25);
    fill(color(250));
    text('Instruções:', 50, 90);  
    textSize(20);  
    fill(color(10, 20, 60));  
    noStroke();
     let s = 'Para jogar é necessário usar o mouse e ter atenção. Você terá que memorizar os pontos turísticos da cidade que vai aparecer de acordo com a fase. Depois, com o mouse, associe a imagem ao nome. A cada fase o desafio aumenta! \nBoa sorte e bom jogo :D';
    text(s, 140, 105, 260, 260);
  }
  
  // Tela de resumo (quantas fases terá, do que se trata o jogo)
  
  else if (tela == 17){
    background(61, 145, 161);
    ellipse(mouseX, mouseY, 15, 15);
    textSize(25);
    fill(color(250));
    text('Resumo:', 50, 90);
    textSize(20);
    fill(color(10, 20, 60));
    noStroke();
    let s = 'Este jogo trata das habilidades: (EF03HI04)(EF03HI05)(EF03HI09)\n\nÉ um jogo da memória bastante divertido, elaborado em 5 fases. Nele é possível conhecer mais sobre os pontos turísticos da cidade de Natal/RN!';
    text(s, 140, 105, 260, 260);
   
  }
  //Tela de colaboradores
  
  else if (tela == 18){
    background(61, 155, 171);
    ellipse(mouseX, mouseY, 15, 15);
    //ellipse(120, 200, 90, 90);
    //ellipse(280, 160, 90, 90);
    textSize(20);
    text('Neyre Kely', 83, 355);
    text('Yasmim Galvão', 300, 355);
    image(img14, 30, 130);
    image(img15, 270, 130);
    
  }
  
  else if(tela == 20){
    background(61, 125, 141);
    fill(color(10, 20, 60));
    ellipse(mouseX, mouseY, 15, 15);
    textSize(40);
    fill(color (250));
    text('GAME OVER :( ', 125, 250);
  }
  
  else if(tela == 22){
    background(61, 155, 171);
    fill(color(10, 20, 60));
    textSize(30);
    fill(color (250));
    image(img16, 2, 83);
    fill(color(10, 20, 60));
    text('PARABÉNS!!!!!', 155, 50);
    textSize(15);
    text('You Win', 222, 420);
    ellipse(mouseX, mouseY, 15, 15);
    
  }
  
  if (tela !== 1){
    fill(color(10, 20, 60));
    rect(10, 10, 50, 20, 15);
    noStroke();
    fill(240);
    noStroke();
    textSize(11);
    text('Voltar', 20, 25);
    fill(10, 20, 60);
    if (mouseIsPressed && mouseX > 10 && mouseX < 10+50 && mouseY > 10 && mouseY < 10+20){
      iniciarValores();
      tela = 1;
    }
  }
}
