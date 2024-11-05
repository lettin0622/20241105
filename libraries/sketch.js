function setup() { //設定初始內容，只會執行一次
  createCanvas(windowWidth , windowHeight); //產生一個畫布
  background("#FAC8CD") //設定背景顏色
}

function draw() { //畫圖，每秒畫60次
  background("#FAC8CD") //設定背景顏色
  rectMode(CENTER) //設定方形的座標點在方形的中間
  noFill() //以下所畫的物件不要充滿顏色
  stroke("#B84A62") //線條的顏色
  strokeWeight(3) //線條的粗細
  ellipse(25,25,50) //在座標(x:25,y:25)畫一個直徑為50的圓
  
  //======第一組=======
  ellipse(25,25,50) //在座標(x:25,y:25)畫一個直徑50的圓
  rect(25,25,50) //畫方形，在座標(x:25,y:25)畫一個直徑為50的方形
  ellipse(50,50,25) //畫小圓，直徑為25

  //======第二組=======與第一組往右移50距離
  ellipse(75,25,50) //在座標(x:125,y:25)畫一個直徑50的圓
  rect(75,25,50) //畫方形，在座標(x:125,y:25)畫一個直徑為50的方形
  ellipse(100,50,25) //畫小圓，直徑為25

  //======第三組=======與第二組往右移50距離
  ellipse(125,25,50) //在座標(x:125,y:25)畫一個直徑50的圓
  rect(125,25,50) //畫方形，在座標(x:125,y:25)畫一個直徑為50的方形
  ellipse(150,50,25) //畫小圓，直徑為25

  //======第四組=======與第三組往右移50距離
  ellipse(175,25,50) //在座標(x:175,y:25)畫一個直徑50的圓
  rect(175,25,50) //畫方形，在座標(x:175,y:25)畫一個直徑為50的方形
  ellipse(200,50,25) //畫小圓，直徑為25
}

let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的NotoSansTC-VariableFont_wght.ttf字型
    font = loadFont("fonts/NotoSansTC-VariableFont_wght.ttf") 
}
//===================================================



function setup() { //設定環境
  createCanvas(windowWidth, windowHeight); //設定畫布的寬高
  angleMode(DEGREES) //設定三角函數的角度用0~360
  background("#FFC6D9") //背景顏色
  //================================================
  points = font.textToPoints("TKUET", -300, 80, 200, {
    sampleFactor:0.05
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小，值越小代表點數越少
  //================================================
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //在(points[i].x,point[i].y)座標上，顯示一個文字(數字)
    fill("#A8F9FF") //畫圓的充滿顏色
    //noStroke
    ellipse(points[i].x+sin(angle),points[i].y,10)
    stroke("#5296A5") //線條的顏色
    strokeWeight(3) //線條的粗細
    line(points[i].x,points[i].y,points[i+1].x,points[i+1].y) //畫線，兩個點構成一條線
    //畫線，兩個點第一個點(points[i].x,point[i].y)，第二個點(points[i+1].x,points[i+1].y)
 } 
 //===========================================
 angle = angle+10
}

function draw() { //畫圖，每秒會進入執行程式60次

  background("#EFEFF0");
  //textsize(30)
  //text(mouseX+":"+mouseY,width/2,height/2)

  translate(mouseX,mouseY) //把原本原點(0,0)在左上角，改為到畫布中心點(width/2-300,height/2-120)
  rotate(frameCount%360) //依照frameCount除以360求餘數
  for (let i=0; i<points.length-1; i++) { 
    //text(str(i),points[i].x,points[i].y) //在(points[i].x,point[i].y)座標上，顯示一個文字(數字)
    //fill("#A8F9FF") //畫圓的充滿顏色
    //noStroke
    //strokeWeight(1)
    //ellipse(points[i].x,points[i].y+r*sin(angle+i*10),10)
    stroke("#5296A5") //線條的顏色
    strokeWeight(3) //線條的粗細
    line(points[i].x+r*sin(angle+i*10),points[i].y+r*sin(angle+i*10),points[i+1].x+r*sin(angle+i*10),points[i+1].y+r*sin(angle+i*10)) //畫線，兩個點構成一條線
    //畫線，兩個點第一個點(points[i].x,point[i].y)，第二個點(points[i+1].x,points[i+1].y)
 } 
 //===========================================
 angle = angle+10

}
