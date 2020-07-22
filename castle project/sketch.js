const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1400,20);

    box1 = new Box(150,450,70,70);
    boxa = new Box(150,500,70,70);
    boxb = new Box(150,550,70,70);
    log1 = new Log(268,300,300, PI/2);
    boxc = new Box(380,450,70,70);
    boxd = new Box(380,500,70,70);
    boxe = new Box(380,550,70,70);

    box2 = new Box(500,550,70,70);
    box3 = new Box(500,500,70,70);
    box4 = new Box(500,450,70,70);
    log3 =  new Log(615,300,300, PI/2);
    box5 = new Box(730,550,70,70);
    boxf = new Box(730,500,70,70);
    boxg = new Box(730,450,70,70);

    boxh = new Box(850,550,70,70);
    boxi = new Box(850,500,70,70);
    boxj = new Box(850,450,70,70);
    log4 =  new Log(960,300,300, PI/2);
    boxk = new Box(1080,550,70,70);
    boxl = new Box(1080,500,70,70);
    boxm = new Box(1080,450,70,70);

    boxn = new Box(150,200,70,70);
    boxo = new Box(150,300,70,70);
    boxp = new Box(150,250,70,70);
    log2 =  new Log(360,10,500, PI/2);
    log5 =  new Log(865,10,500, PI/2);
    boxq = new Box(1080,200,70,70);
    boxr = new Box(1080,150,70,70);
    boxs = new Box(1080,250,70,70);
    boxt = new Box(615,200,70,70);
    boxu = new Box(615,150,70,70);
    boxv = new Box(615,250,70,70);
    boxw = new Box(615,-20,70,70);
    
    pig3 = new Pig(250, 450);
    pig1 = new Pig(950, 450);
    pig2 = new Pig(615,-50);
    pig4 = new Pig(380, 200);
    pig5 = new Pig(850,200);


}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    boxa.display();
    boxb.display();
    boxc.display();
    boxd.display();
    boxe.display();
    boxf.display();
    boxg.display();
    boxh.display();
    boxi.display();
    boxj.display();
    boxk.display();
    boxl.display();
    boxm.display();
    boxn.display();
    boxo.display();
    boxp.display();
    boxq.display();
    boxr.display();
    boxs.display();
    boxt.display();
    boxu.display();
    boxv.display();
    boxw.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    pig4.display();
    pig5.display();
    log1.display();
    log2.display();
    log5.display();
    log3.display();
    log4.display();

}


